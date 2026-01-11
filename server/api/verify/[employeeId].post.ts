
export default defineEventHandler(async (event) => {
    try {
        const employeeId = getRouterParam(event, 'employeeId')
        const body = await readBody(event)
        const { verifiedBy } = body

        if (!employeeId) {
            throw createError({
                statusCode: 400,
                message: 'Employee ID is required'
            })
        }

        // Find employee
        const employee = await prisma.employee.findUnique({
            where: { employeeId },
            include: {
                manningList: {
                    where: { isActive: true }
                }
            }
        })

        if (!employee) {
            // Log unauthorized access attempt
            await prisma.verificationLog.create({
                data: {
                    employeeId,
                    verifiedBy: verifiedBy || 'unknown',
                    status: 'unauthorized',
                    synced: true
                }
            })

            return {
                success: false,
                status: 'unauthorized',
                message: 'Employee not found',
                employee: null
            }
        }

        // Check if employee is in manning list
        const isAuthorized = employee.isActive && employee.manningList.length > 0

        // Create verification log
        await prisma.verificationLog.create({
            data: {
                employeeId,
                verifiedBy: verifiedBy || 'scanner',
                status: isAuthorized ? 'authorized' : 'unauthorized',
                synced: true
            }
        })

        return {
            success: true,
            status: isAuthorized ? 'authorized' : 'unauthorized',
            employee: {
                id: employee.id,
                employeeId: employee.employeeId,
                fullName: employee.fullName,
                photoUrl: employee.photoUrl,
                position: employee.position,
                building: employee.building,
                roomNumber: employee.roomNumber,
                isActive: employee.isActive,
                isInManningList: employee.manningList.length > 0
            }
        }
    } catch (error: any) {
        console.error('Verification error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Verification failed'
        })
    }
})
