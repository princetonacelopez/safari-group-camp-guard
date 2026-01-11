import { ref, computed } from 'vue'

export interface User {
    id: number
    username: string
    role: string
}

export const useAuth = () => {
    const user = useState<User | null>('auth-user', () => null)
    const accessToken = useState<string | null>('auth-token', () => null)
    const refreshToken = useState<string | null>('auth-refresh-token', () => null)

    const isAuthenticated = computed(() => !!user.value && !!accessToken.value)

    const login = async (username: string, password: string) => {
        try {
            const response = await $fetch('/api/auth/login', {
                method: 'POST',
                body: { username, password }
            })

            user.value = response.user
            accessToken.value = response.accessToken
            refreshToken.value = response.refreshToken

            // Store in localStorage for persistence
            if (process.client) {
                localStorage.setItem('auth-user', JSON.stringify(response.user))
                localStorage.setItem('auth-token', response.accessToken)
                localStorage.setItem('auth-refresh-token', response.refreshToken)
            }

            return { success: true }
        } catch (error: any) {
            console.error('Login error:', error)
            return {
                success: false,
                error: error.data?.message || 'Login failed'
            }
        }
    }

    const logout = async () => {
        try {
            await $fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken.value}`
                }
            })
        } catch (error) {
            console.error('Logout error:', error)
        } finally {
            user.value = null
            accessToken.value = null
            refreshToken.value = null

            if (process.client) {
                localStorage.removeItem('auth-user')
                localStorage.removeItem('auth-token')
                localStorage.removeItem('auth-refresh-token')
            }
        }
    }

    const refreshAccessToken = async () => {
        try {
            const response = await $fetch('/api/auth/refresh', {
                method: 'POST',
                body: { refreshToken: refreshToken.value }
            })

            accessToken.value = response.accessToken

            if (process.client) {
                localStorage.setItem('auth-token', response.accessToken)
            }

            return true
        } catch (error) {
            console.error('Token refresh error:', error)
            await logout()
            return false
        }
    }

    const initAuth = () => {
        if (process.client) {
            const storedUser = localStorage.getItem('auth-user')
            const storedToken = localStorage.getItem('auth-token')
            const storedRefreshToken = localStorage.getItem('auth-refresh-token')

            if (storedUser && storedToken && storedRefreshToken) {
                user.value = JSON.parse(storedUser)
                accessToken.value = storedToken
                refreshToken.value = storedRefreshToken
            }
        }
    }

    return {
        user,
        accessToken,
        refreshToken,
        isAuthenticated,
        login,
        logout,
        refreshAccessToken,
        initAuth
    }
}
