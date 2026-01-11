import { jwtVerify, SignJWT } from 'jose'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { refreshToken } = body

        if (!refreshToken) {
            throw createError({
                statusCode: 400,
                message: 'Refresh token is required'
            })
        }

        const config = useRuntimeConfig()
        const jwtSecret = new TextEncoder().encode(config.jwtSecret)
        const jwtRefreshSecret = new TextEncoder().encode(config.jwtRefreshSecret)

        // Verify refresh token
        const { payload } = await jwtVerify(refreshToken, jwtRefreshSecret)

        // Generate new access token
        const accessToken = await new SignJWT({
            userId: payload.userId,
            username: payload.username,
            role: payload.role
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('8h')
            .setIssuedAt()
            .sign(jwtSecret)

        return {
            success: true,
            accessToken
        }
    } catch (error: any) {
        console.error('Token refresh error:', error)
        throw createError({
            statusCode: 401,
            message: 'Invalid or expired refresh token'
        })
    }
})
