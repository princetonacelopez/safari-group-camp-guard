
export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')
        const method = getMethod(event)

        if (!id) {
            throw createError({
                statusCode: 400,
                message: 'Employee ID is required'
            })
        }

        // GET - Get single employee
        if (method === 'GET') {
            const employee = await prisma.employee.findUnique({
                where: { id: parseInt(id) },
                include: {
                    manningList: {
                        where: { isActive: true }
                    }
                }
            })

            if (!employee) {
                throw createError({
                    statusCode: 404,
                    message: 'Employee not found'
                })
            }

            return {
                success: true,
                employee: {
                    ...employee,
                    isInManningList: employee.manningList.length > 0
                }
            }
        }

        // PUT - Update employee
        if (method === 'PUT') {
            const body = await readBody(event)

            const employee = await prisma.employee.update({
                where: { id: parseInt(id) },
                data: {
                    fullName: body.fullName,
                    photoUrl: body.photoUrl,
                    position: body.position,
                    building: body.building,
                    roomNumber: body.roomNumber,
                    isActive: body.isActive
                }
            })

            return {
                success: true,
                employee
            }
        }

        // DELETE - Delete employee
        if (method === 'DELETE') {
            await prisma.employee.delete({
                where: { id: parseInt(id) }
            })

            return {
                success: true,
                message: 'Employee deleted successfully'
            }
        }

        throw createError({
            statusCode: 405,
            message: 'Method not allowed'
        })
    } catch (error: any) {
        console.error('Employee API error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to process request'
        })
    }
})
