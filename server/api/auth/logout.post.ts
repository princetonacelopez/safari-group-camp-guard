export default defineEventHandler(async (event) => {
    // In a production app, you might want to blacklist the token here
    // For now, we'll just return success and let the client clear the tokens

    return {
        success: true,
        message: 'Logged out successfully'
    }
})
