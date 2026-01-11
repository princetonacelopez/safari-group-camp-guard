<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-emerald-600 text-white p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <h1 class="text-2xl font-bold">Camp QR Scanner</h1>
                    <p class="text-sm text-emerald-100">Employee Verification System</p>
                </div>
                <div class="flex items-center gap-3">
                    <UBadge :color="isOnline ? 'success' : 'error'" size="lg">
                        {{ isOnline ? 'Online' : 'Offline' }}
                    </UBadge>
                    <UButton v-if="isOnline" icon="i-heroicons-arrow-path" color="neutral" variant="outline"
                        :loading="isSyncing" @click="handleSync">
                        Sync
                    </UButton>
                </div>
            </div>
        </div>

        <div class="container mx-auto p-4 max-w-4xl">
            <!-- Scanner Section -->
            <UCard class="mb-6">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl font-semibold">Scan QR Code</h2>
                        <UButton icon="i-heroicons-camera" color="primary" @click="toggleCameraActive">
                            {{ isCameraActive ? 'Stop Camera' : 'Start Camera' }}
                        </UButton>
                    </div>
                </template>

                <div v-if="isCameraActive" class="space-y-4">
                    <!-- QR Scanner -->
                    <div class="relative bg-black rounded-lg overflow-hidden scanner-container">
                        <div id="qr-scanner" class="w-full h-full"></div>
                        <!-- Corner brackets overlay -->
                        <div class="scanner-overlay" :class="{ 'scan-detected': scanDetected }">
                            <div class="corner-bracket top-left"></div>
                            <div class="corner-bracket top-right"></div>
                            <div class="corner-bracket bottom-left"></div>
                            <div class="corner-bracket bottom-right"></div>
                        </div>
                    </div>

                    <!-- Camera Toggle -->
                    <div class="flex justify-center">
                        <UButton icon="i-heroicons-arrow-path" color="neutral" @click="switchCamera">
                            Switch Camera
                        </UButton>
                    </div>
                </div>

                <!-- Manual Entry -->
                <div class="mt-4">
                    <div class="space-y-1">
                        <label class="block text-sm font-medium text-gray-700">Or enter Employee ID manually</label>
                        <div class="flex gap-2">
                            <UInput v-model="manualId" placeholder="Enter Employee ID" class="flex-1"
                                @keyup.enter="handleManualVerify" />
                            <UButton color="primary" :loading="isVerifying" @click="handleManualVerify">
                                Verify
                            </UButton>
                        </div>
                    </div>
                </div>
            </UCard>

            <!-- Verification Result -->
            <UCard v-if="lastScan" :class="{
                'border-2': true,
                'border-emerald-500': lastScan.status === 'authorized',
                'border-red-500': lastScan.status === 'unauthorized'
            }" class="mb-6">
                <div class="flex items-start gap-4">
                    <!-- Photo -->
                    <div class="flex-shrink-0">
                        <img v-if="lastScan.employee?.photoUrl" :src="lastScan.employee.photoUrl" alt="Employee Photo"
                            class="w-24 h-24 rounded-lg object-cover" />
                        <div v-else class="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center">
                            <UIcon name="i-heroicons-user" class="text-4xl text-gray-400" />
                        </div>
                    </div>

                    <!-- Employee Details -->
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                            <h3 class="text-2xl font-bold">
                                {{ lastScan.employee?.fullName || 'Unknown Employee' }}
                            </h3>
                            <UBadge :color="lastScan.status === 'authorized' ? 'success' : 'error'" size="lg">
                                {{ lastScan.status === 'authorized' ? 'AUTHORIZED' : 'UNAUTHORIZED' }}
                            </UBadge>
                        </div>

                        <div v-if="lastScan.employee" class="space-y-1 text-gray-600">
                            <p><strong>ID:</strong> {{ lastScan.employee.employeeId }}</p>
                            <p><strong>Position:</strong> {{ lastScan.employee.position }}</p>
                            <p><strong>Building:</strong> {{ lastScan.employee.building }}</p>
                            <p><strong>Room:</strong> {{ lastScan.employee.roomNumber }}</p>
                        </div>
                        <p v-else class="text-red-600">
                            {{ lastScan.message || 'Employee not found in system' }}
                        </p>
                    </div>
                </div>
            </UCard>

            <!-- Scan History -->
            <UCard>
                <template #header>
                    <h2 class="text-xl font-semibold">Recent Scans (Last 10)</h2>
                </template>

                <div v-if="scanHistory.length > 0" class="space-y-2">
                    <div v-for="(scan, index) in scanHistory" :key="index"
                        class="flex justify-between items-center p-3 rounded-lg" :class="{
                            'bg-emerald-50': scan.status === 'authorized',
                            'bg-red-50': scan.status === 'unauthorized'
                        }">
                        <div>
                            <p class="font-medium">{{ scan.employee?.fullName || 'Unknown' }}</p>
                            <p class="text-sm text-gray-600">{{ scan.employee?.employeeId }}</p>
                        </div>
                        <div class="text-right">
                            <UBadge :color="scan.status === 'authorized' ? 'success' : 'error'">
                                {{ scan.status }}
                            </UBadge>
                            <p class="text-xs text-gray-500 mt-1">
                                {{ formatTime(scan.timestamp) }}
                            </p>
                        </div>
                    </div>
                </div>
                <p v-else class="text-gray-500 text-center py-4">
                    No scans yet
                </p>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Html5Qrcode } from 'html5-qrcode'

const { isOnline, isSyncing, syncData } = useSync()
const { getEmployee, saveVerificationLog, isInManningList } = useIndexedDB()

const isCameraActive = ref(false)
const isVerifying = ref(false)
const scanDetected = ref(false)
const manualId = ref('')
const lastScan = ref<any>(null)
const scanHistory = ref<any[]>([])
const html5QrCode = ref<Html5Qrcode | null>(null)

// Setup sync listener
onMounted(() => {
    const { setupOnlineListener } = useSync()
    setupOnlineListener()

    // Load scan history from localStorage
    if (process.client) {
        const saved = localStorage.getItem('scan-history')
        if (saved) {
            scanHistory.value = JSON.parse(saved)
        }
    }
})

const toggleCameraActive = async () => {
    if (isCameraActive.value) {
        await stopScanner()
    } else {
        await startScanner()
    }
}

const startScanner = async () => {
    try {
        isCameraActive.value = true
        await nextTick()

        html5QrCode.value = new Html5Qrcode('qr-scanner')

        await html5QrCode.value.start(
            { facingMode: 'environment' },
            {
                fps: 20,
                qrbox: { width: 280, height: 280 },
                aspectRatio: 1.0,
                disableFlip: false
            },
            onScanSuccess,
            onScanError
        )
    } catch (error) {
        console.error('Scanner start error:', error)
        isCameraActive.value = false
    }
}

const stopScanner = async () => {
    if (html5QrCode.value) {
        await html5QrCode.value.stop()
        html5QrCode.value = null
    }
    isCameraActive.value = false
}

const switchCamera = async () => {
    await stopScanner()
    await startScanner()
}

const onScanSuccess = async (decodedText: string) => {
    // Trigger scan detected animation
    scanDetected.value = true
    
    // Stop the scanner immediately after detection
    await stopScanner()
    
    // Verify employee
    await verifyEmployee(decodedText)
    
    // Reset animation after 1 second
    setTimeout(() => {
        scanDetected.value = false
    }, 1000)
}

const onScanError = (error: any) => {
    // Ignore scan errors (happens frequently when no QR code is in view)
}

const handleManualVerify = async () => {
    if (manualId.value.trim()) {
        await verifyEmployee(manualId.value.trim())
        manualId.value = ''
    }
}

const verifyEmployee = async (employeeId: string) => {
    if (isVerifying.value) return

    isVerifying.value = true

    try {
        let result

        if (isOnline.value) {
            // Online verification via API
            result = await $fetch(`/api/verify/${employeeId}`, {
                method: 'POST',
                body: { verifiedBy: 'scanner' }
            })
        } else {
            // Offline verification via IndexedDB
            const employee = await getEmployee(employeeId)
            const inManningList = employee ? await isInManningList(employeeId) : false

            result = {
                success: !!employee,
                status: employee && inManningList ? 'authorized' : 'unauthorized',
                employee: employee || null,
                message: employee ? undefined : 'Employee not found'
            }

            // Save log for later sync
            await saveVerificationLog({
                employeeId,
                scanTimestamp: new Date(),
                verifiedBy: 'scanner',
                status: result.status,
                synced: false
            })
        }

        // Update last scan
        lastScan.value = {
            ...result,
            timestamp: new Date()
        }

        // Add to history
        scanHistory.value.unshift(lastScan.value)
        if (scanHistory.value.length > 10) {
            scanHistory.value = scanHistory.value.slice(0, 10)
        }

        // Save to localStorage
        if (process.client) {
            localStorage.setItem('scan-history', JSON.stringify(scanHistory.value))
        }

        // Play feedback sound/vibration
        if (process.client && navigator.vibrate) {
            navigator.vibrate(result.status === 'authorized' ? 100 : [100, 50, 100])
        }
    } catch (error) {
        console.error('Verification error:', error)
    } finally {
        isVerifying.value = false
    }
}

const handleSync = async () => {
    await syncData()
}

const formatTime = (timestamp: Date | string) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString()
}

onBeforeUnmount(() => {
    if (html5QrCode.value) {
        stopScanner()
    }
})
</script>

<style scoped>
.scanner-container {
    height: 500px;
    position: relative;
}

/* Style the scanner video */
:deep(#qr-scanner video) {
    object-fit: cover;
}

/* Hide the default border but keep scan region functional */
:deep(#qr-scanner__scan_region img) {
    opacity: 0 !important;
}

:deep(#qr-scanner__dashboard_section_csr) {
    display: none !important;
}

.scanner-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    pointer-events: none;
    z-index: 10;
}

.corner-bracket {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 4px solid #f59e0b;
    border-radius: 8px;
    transition: all 0.3s ease;
}

/* Scan detected state - change to green and expand */
.scanner-overlay.scan-detected .corner-bracket {
    border-color: #10b981;
    border-width: 6px;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.8);
}

.corner-bracket.top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 12px;
}

.corner-bracket.top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 12px;
}

.corner-bracket.bottom-left {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 12px;
}

.corner-bracket.bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 12px;
}

/* Animation for scanning effect */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.corner-bracket {
    animation: pulse 2s ease-in-out infinite;
}

/* Stop pulsing when scan detected */
.scanner-overlay.scan-detected .corner-bracket {
    animation: none;
    opacity: 1;
}

/* Flash animation for scan detection */
@keyframes flash {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
        transform: translate(-50%, -50%) scale(1.1);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

.scanner-overlay.scan-detected {
    animation: flash 0.5s ease-out;
}
</style>
