import { SignJWT } from 'jose'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { username, password } = body

        if (!username || !password) {
            throw createError({
                statusCode: 400,
                message: 'Username and password are required'
            })
        }

        // Find admin user
        const admin = await prisma.adminUser.findUnique({
            where: { username }
        })

        if (!admin || !admin.isActive) {
            throw createError({
                statusCode: 401,
                message: 'Invalid credentials'
            })
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, admin.passwordHash)

        if (!isValidPassword) {
            throw createError({
                statusCode: 401,
                message: 'Invalid credentials'
            })
        }

        // Get JWT secrets from runtime config
        const config = useRuntimeConfig()
        const jwtSecret = new TextEncoder().encode(config.jwtSecret)
        const jwtRefreshSecret = new TextEncoder().encode(config.jwtRefreshSecret)

        // Generate access token (8 hours)
        const accessToken = await new SignJWT({
            userId: admin.id,
            username: admin.username,
            role: admin.role
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('8h')
            .setIssuedAt()
            .sign(jwtSecret)

        // Generate refresh token (7 days)
        const refreshToken = await new SignJWT({
            userId: admin.id,
            username: admin.username
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('7d')
            .setIssuedAt()
            .sign(jwtRefreshSecret)

        return {
            success: true,
            user: {
                id: admin.id,
                username: admin.username,
                role: admin.role
            },
            accessToken,
            refreshToken
        }
    } catch (error: any) {
        console.error('Login error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Login failed'
        })
    }
})
