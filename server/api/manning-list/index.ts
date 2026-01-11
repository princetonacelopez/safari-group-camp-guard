
export default defineEventHandler(async (event) => {
    try {
        const method = getMethod(event)

        // GET - List all manning list entries
        if (method === 'GET') {
            const manningList = await prisma.manningList.findMany({
                where: { isActive: true },
                include: {
                    employee: true
                },
                orderBy: { addedDate: 'desc' }
            })

            return {
                success: true,
                manningList
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
