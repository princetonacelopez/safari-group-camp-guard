import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    // Check authentication
    if (!event.context.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    const list = await prisma.manningList.findMany({
        where: { isActive: true },
        include: {
            employee: true
        },
        orderBy: {
            // Sort by employee name if possible, or added date
            addedDate: 'desc'
        }
    })

    return list
})
