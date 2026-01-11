
export default defineEventHandler(async (event) => {
    try {
        const method = getMethod(event)
        const employeeId = getRouterParam(event, 'employeeId')

        if (!employeeId) {
            throw createError({
                statusCode: 400,
                message: 'Employee ID is required'
            })
        }

        // POST - Add employee to manning list
        if (method === 'POST') {
            const username = event.context.user?.username || 'admin'

            // Check if employee exists
            const employee = await prisma.employee.findUnique({
                where: { employeeId }
            })

            if (!employee) {
                throw createError({
                    statusCode: 404,
                    message: 'Employee not found'
                })
            }

            // Check if already in manning list
            const existing = await prisma.manningList.findUnique({
                where: { employeeId }
            })

            if (existing) {
                // Reactivate if inactive
                if (!existing.isActive) {
                    const updated = await prisma.manningList.update({
                        where: { employeeId },
                        data: {
                            isActive: true,
                            addedBy: username,
                            addedDate: new Date()
                        }
                    })
                    return { success: true, manningList: updated }
                }

                throw createError({
                    statusCode: 400,
                    message: 'Employee already in manning list'
                })
            }

            // Add to manning list
            const manningEntry = await prisma.manningList.create({
                data: {
                    employeeId,
                    addedBy: username,
                    isActive: true
                },
                include: {
                    employee: true
                }
            })

            return {
                success: true,
                manningList: manningEntry
            }
        }

        // DELETE - Remove employee from manning list
        if (method === 'DELETE') {
            await prisma.manningList.update({
                where: { employeeId },
                data: { isActive: false }
            })

            return {
                success: true,
                message: 'Employee removed from manning list'
            }
        }

        throw createError({
            statusCode: 405,
            message: 'Method not allowed'
        })
    } catch (error: any) {
        console.error('Manning list API error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to process request'
        })
    }
})
