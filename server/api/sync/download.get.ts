
export default defineEventHandler(async (event) => {
    try {
        // Get all employees with their manning list status
        const employees = await prisma.employee.findMany({
            where: { isActive: true },
            include: {
                manningList: {
                    where: { isActive: true }
                }
            }
        })

        // Get manning list
        const manningList = await prisma.manningList.findMany({
            where: { isActive: true },
            select: {
                employeeId: true,
                isActive: true
            }
        })

        return {
            success: true,
            employees: employees.map(emp => ({
                id: emp.id,
                employeeId: emp.employeeId,
                fullName: emp.fullName,
                photoUrl: emp.photoUrl,
                position: emp.position,
                building: emp.building,
                roomNumber: emp.roomNumber,
                isActive: emp.isActive,
                isInManningList: emp.manningList.length > 0
            })),
            manningList
        }
    } catch (error: any) {
        console.error('Sync download error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to download data'
        })
    }
})
