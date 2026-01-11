<template>
    <div class="min-h-screen bg-linear-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
        <UCard class="w-full max-w-md">
            <template #header>
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-900">Admin Login</h1>
                    <p class="text-gray-600 mt-2">Camp QR Code Scanner</p>
                </div>
            </template>

            <form @submit.prevent="handleLogin" class="space-y-4">
                <UFormGroup label="Username" required>
                    <UInput v-model="username" placeholder="Enter username" icon="i-heroicons-user" size="lg" />
                </UFormGroup>

                <UFormGroup label="Password" required>
                    <UInput v-model="password" type="password" placeholder="Enter password"
                        icon="i-heroicons-lock-closed" size="lg" />
                </UFormGroup>

                <UAlert v-if="error" color="error" variant="soft" :title="error"
                    :close-button="{ icon: 'i-heroicons-x-mark', color: 'gray', variant: 'link' }"
                    @close="error = ''" />

                <UButton type="submit" color="success" size="lg" block :loading="isLoading">
                    Login
                </UButton>
            </form>

            <template #footer>
                <div class="text-center text-sm text-gray-600">
                    <NuxtLink to="/" class="text-emerald-600 hover:underline">
                        ← Back to Scanner
                    </NuxtLink>
                </div>
            </template>
        </UCard>
    </div>
</template>

<script setup lang="ts">
const { login } = useAuth()

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
    if (!username.value || !password.value) {
        error.value = 'Please enter both username and password'
        return
    }

    isLoading.value = true
    error.value = ''

    const result = await login(username.value, password.value)

    if (result.success) {
        // Use navigateTo with replace to ensure clean navigation
        await navigateTo('/admin', { replace: true })
    } else {
        error.value = result.error || 'Login failed'
    }

    isLoading.value = false
}
</script>
