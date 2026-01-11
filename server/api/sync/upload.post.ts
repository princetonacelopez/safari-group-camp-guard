
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { logs } = body

        if (!logs || !Array.isArray(logs)) {
            throw createError({
                statusCode: 400,
                message: 'Invalid logs data'
            })
        }

        // Insert all logs into database
        const results = await Promise.all(
            logs.map(log =>
                prisma.verificationLog.create({
                    data: {
                        employeeId: log.employeeId,
                        scanTimestamp: new Date(log.scanTimestamp),
                        verifiedBy: log.verifiedBy,
                        status: log.status,
                        synced: true
                    }
                })
            )
        )

        return {
            success: true,
            uploaded: results.length,
            message: `${results.length} logs uploaded successfully`
        }
    } catch (error: any) {
        console.error('Sync upload error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to upload logs'
        })
    }
})
