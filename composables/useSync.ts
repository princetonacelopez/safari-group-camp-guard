import { ref, computed } from 'vue'

export const useSync = () => {
    const isOnline = ref(true)
    const isSyncing = ref(false)
    const lastSyncTime = ref<Date | null>(null)
    const syncError = ref<string | null>(null)

    const { getUnsyncedLogs, markLogsAsSynced, saveEmployees, saveManningList } = useIndexedDB()
    const { accessToken } = useAuth()

    const checkOnlineStatus = () => {
        if (process.client) {
            isOnline.value = navigator.onLine
        }
    }

    const setupOnlineListener = () => {
        if (process.client) {
            window.addEventListener('online', () => {
                isOnline.value = true
                syncData() // Auto-sync when coming back online
            })

            window.addEventListener('offline', () => {
                isOnline.value = false
            })

            // Check initial status
            checkOnlineStatus()
        }
    }

    const downloadData = async () => {
        try {
            if (!isOnline.value) {
                throw new Error('Cannot download data while offline')
            }

            // Download employees
            const employeesResponse = await $fetch('/api/sync/download', {
                headers: {
                    Authorization: `Bearer ${accessToken.value}`
                }
            })

            // Save to IndexedDB
            await saveEmployees(employeesResponse.employees)
            await saveManningList(employeesResponse.manningList)

            return { success: true }
        } catch (error: any) {
            console.error('Download error:', error)
            return { success: false, error: error.message }
        }
    }

    const uploadLogs = async () => {
        try {
            if (!isOnline.value) {
                throw new Error('Cannot upload logs while offline')
            }

            const unsyncedLogs = await getUnsyncedLogs()

            if (unsyncedLogs.length === 0) {
                return { success: true, uploaded: 0 }
            }

            const response = await $fetch('/api/sync/upload', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken.value}`
                },
                body: { logs: unsyncedLogs }
            })

            // Mark logs as synced
            const logIds = unsyncedLogs.map(log => log.id!).filter(id => id !== undefined)
            await markLogsAsSynced(logIds)

            return { success: true, uploaded: unsyncedLogs.length }
        } catch (error: any) {
            console.error('Upload error:', error)
            return { success: false, error: error.message }
        }
    }

    const syncData = async () => {
        if (isSyncing.value || !isOnline.value) {
            return { success: false, error: 'Already syncing or offline' }
        }

        isSyncing.value = true
        syncError.value = null

        try {
            // Upload pending logs first
            const uploadResult = await uploadLogs()

            // Then download latest data
            const downloadResult = await downloadData()

            if (uploadResult.success && downloadResult.success) {
                lastSyncTime.value = new Date()
                return { success: true }
            } else {
                throw new Error(uploadResult.error || downloadResult.error || 'Sync failed')
            }
        } catch (error: any) {
            syncError.value = error.message
            return { success: false, error: error.message }
        } finally {
            isSyncing.value = false
        }
    }

    const getPendingSyncCount = async (): Promise<number> => {
        try {
            const unsyncedLogs = await getUnsyncedLogs()
            return unsyncedLogs.length
        } catch (error) {
            console.error('Error getting pending sync count:', error)
            return 0
        }
    }

    const needsSync = computed(() => {
        if (!lastSyncTime.value) return true

        const hoursSinceSync = (Date.now() - lastSyncTime.value.getTime()) / (1000 * 60 * 60)
        return hoursSinceSync > 24 // Sync if more than 24 hours
    })

    return {
        isOnline,
        isSyncing,
        lastSyncTime,
        syncError,
        needsSync,
        checkOnlineStatus,
        setupOnlineListener,
        downloadData,
        uploadLogs,
        syncData,
        getPendingSyncCount
    }
}
