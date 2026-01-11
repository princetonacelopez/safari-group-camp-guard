import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
    if (!event.context.user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        })
    }

    const { limit = '100' } = getQuery(event)
    const take = parseInt(limit as string) || 100

    const logs = await prisma.verificationLog.findMany({
        take,
        orderBy: {
            scanTimestamp: 'desc'
        },
        include: {
            employee: true
        }
    })

    return logs
})
