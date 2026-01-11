import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    // Check authentication
    if (!event.context.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    const body = await readBody(event)
    const { items } = body

    if (!Array.isArray(items) || items.length === 0) {
        return { success: false, message: 'No items to import', imported: 0, failed: 0 }
    }

    // Filter out duplicates in input
    const uniqueIds = [...new Set(items.map((i: any) => i.employeeId?.toString().trim()).filter(Boolean))] as string[]

    if (uniqueIds.length === 0) {
        return { success: false, message: 'No valid employee IDs found', imported: 0, failed: 0 }
    }

    // Find which employees exist in the database
    const existingEmployees = await prisma.employee.findMany({
        where: {
            employeeId: {
                in: uniqueIds
            }
        },
        select: {
            employeeId: true
        }
    })

    const existingIds = new Set(existingEmployees.map(e => e.employeeId))

    // Separate valid and invalid
    const validIds = uniqueIds.filter(id => existingIds.has(id))
    const invalidIds = uniqueIds.filter(id => !existingIds.has(id))

    if (validIds.length === 0) {
        return {
            success: false,
            message: 'None of the provided Employee IDs exist in the system.',
            imported: 0,
            failed: invalidIds.length,
            errors: invalidIds
        }
    }

    // Perform transaction: Clear list and Add new
    // Note: We might want to keep history? But 'ManningList' table structure usually implies current active list.
    // The schema has 'addedDate'. 
    // Let's decided to NOT clear everything, but to Upsert or Add.
    // But typically "Import" implies "This is the list".
    // Let's clear the old list (or mark inactive) and add new ones.
    // Implementation: Delete all current entries and insert new ones.

    try {
        const result = await prisma.$transaction([
            // Optional: Clear existing list? 
            // For now, let's just delete everything to ensure clean state for the new list.
            prisma.manningList.deleteMany({}),

            // Insert new
            prisma.manningList.createMany({
                data: validIds.map(id => ({
                    employeeId: id,
                    addedBy: event.context.user.username || 'admin',
                    isActive: true
                }))
            })
        ])

        return {
            success: true,
            message: `Successfully imported ${validIds.length} employees.`,
            imported: validIds.length,
            failed: invalidIds.length,
            errors: invalidIds
        }
    } catch (error: any) {
        console.error('Import error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to import manning list'
        })
    }
})
