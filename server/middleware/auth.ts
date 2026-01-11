import { jwtVerify } from 'jose'

export default defineEventHandler(async (event) => {
    const url = getRequestURL(event)

    // Skip auth for login, refresh, and verify endpoints
    if (
        url.pathname === '/api/auth/login' ||
        url.pathname === '/api/auth/refresh' ||
        url.pathname.startsWith('/api/verify/')
    ) {
        return
    }

    // Check if route requires authentication
    const protectedRoutes = [
        '/api/employees',
        '/api/manning-list',
        '/api/verification-logs',
        '/api/sync',
        '/api/auth/logout'
    ]

    const isProtected = protectedRoutes.some(route => url.pathname.startsWith(route))

    if (!isProtected) {
        return
    }

    try {
        const authHeader = getHeader(event, 'authorization')

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw createError({
                statusCode: 401,
                message: 'Missing or invalid authorization header'
            })
        }

        const token = authHeader.substring(7)
        const config = useRuntimeConfig()
        const jwtSecret = new TextEncoder().encode(config.jwtSecret)

        const { payload } = await jwtVerify(token, jwtSecret)

        // Attach user info to event context
        event.context.user = {
            userId: payload.userId,
            username: payload.username,
            role: payload.role
        }
    } catch (error: any) {
        console.error('Auth middleware error:', error)
        throw createError({
            statusCode: 401,
            message: 'Invalid or expired token'
        })
    }
})
