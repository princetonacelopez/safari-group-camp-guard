export default defineNuxtPlugin((nuxtApp) => {
    const { initAuth } = useAuth()
    
    // Initialize auth state from localStorage before the app starts
    initAuth()
})
