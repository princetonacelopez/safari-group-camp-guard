export interface EmployeeData {
    id: number
    employeeId: string
    fullName: string
    photoUrl: string | null
    position: string
    building: string
    roomNumber: string
    isActive: boolean
    isInManningList?: boolean
}

export interface VerificationLogData {
    id?: number
    employeeId: string
    scanTimestamp: Date
    verifiedBy: string
    status: string
    synced: boolean
}

export const useIndexedDB = () => {
    const dbName = 'CampScannerDB'
    const dbVersion = 1
    let db: IDBDatabase | null = null

    const openDB = (): Promise<IDBDatabase> => {
        return new Promise((resolve, reject) => {
            if (!process.client) {
                reject(new Error('IndexedDB is only available in the browser'))
                return
            }

            const request = indexedDB.open(dbName, dbVersion)

            request.onerror = () => reject(request.error)
            request.onsuccess = () => {
                db = request.result
                resolve(request.result)
            }

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result

                // Create employees store
                if (!db.objectStoreNames.contains('employees')) {
                    const employeeStore = db.createObjectStore('employees', { keyPath: 'employeeId' })
                    employeeStore.createIndex('fullName', 'fullName', { unique: false })
                    employeeStore.createIndex('isActive', 'isActive', { unique: false })
                }

                // Create verification logs store
                if (!db.objectStoreNames.contains('verificationLogs')) {
                    const logsStore = db.createObjectStore('verificationLogs', {
                        keyPath: 'id',
                        autoIncrement: true
                    })
                    logsStore.createIndex('employeeId', 'employeeId', { unique: false })
                    logsStore.createIndex('synced', 'synced', { unique: false })
                    logsStore.createIndex('scanTimestamp', 'scanTimestamp', { unique: false })
                }

                // Create manning list store
                if (!db.objectStoreNames.contains('manningList')) {
                    const manningStore = db.createObjectStore('manningList', { keyPath: 'employeeId' })
                    manningStore.createIndex('isActive', 'isActive', { unique: false })
                }
            }
        })
    }

    const saveEmployees = async (employees: EmployeeData[]) => {
        const database = await openDB()
        const transaction = database.transaction(['employees'], 'readwrite')
        const store = transaction.objectStore('employees')

        for (const employee of employees) {
            store.put(employee)
        }

        return new Promise<void>((resolve, reject) => {
            transaction.oncomplete = () => resolve()
            transaction.onerror = () => reject(transaction.error)
        })
    }

    const getEmployee = async (employeeId: string): Promise<EmployeeData | null> => {
        const database = await openDB()
        const transaction = database.transaction(['employees'], 'readonly')
        const store = transaction.objectStore('employees')
        const request = store.get(employeeId)

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result || null)
            request.onerror = () => reject(request.error)
        })
    }

    const getAllEmployees = async (): Promise<EmployeeData[]> => {
        const database = await openDB()
        const transaction = database.transaction(['employees'], 'readonly')
        const store = transaction.objectStore('employees')
        const request = store.getAll()

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
        })
    }

    const saveVerificationLog = async (log: VerificationLogData) => {
        const database = await openDB()
        const transaction = database.transaction(['verificationLogs'], 'readwrite')
        const store = transaction.objectStore('verificationLogs')
        const request = store.add(log)

        return new Promise<number>((resolve, reject) => {
            request.onsuccess = () => resolve(request.result as number)
            request.onerror = () => reject(request.error)
        })
    }

    const getUnsyncedLogs = async (): Promise<VerificationLogData[]> => {
        const database = await openDB()
        const transaction = database.transaction(['verificationLogs'], 'readonly')
        const store = transaction.objectStore('verificationLogs')
        const index = store.index('synced')
        const request = index.getAll(false)

        return new Promise((resolve, reject) => {
            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
        })
    }

    const markLogsAsSynced = async (logIds: number[]) => {
        const database = await openDB()
        const transaction = database.transaction(['verificationLogs'], 'readwrite')
        const store = transaction.objectStore('verificationLogs')

        for (const id of logIds) {
            const getRequest = store.get(id)
            getRequest.onsuccess = () => {
                const log = getRequest.result
                if (log) {
                    log.synced = true
                    store.put(log)
                }
            }
        }

        return new Promise<void>((resolve, reject) => {
            transaction.oncomplete = () => resolve()
            transaction.onerror = () => reject(transaction.error)
        })
    }

    const saveManningList = async (manningList: { employeeId: string; isActive: boolean }[]) => {
        const database = await openDB()
        const transaction = database.transaction(['manningList'], 'readwrite')
        const store = transaction.objectStore('manningList')

        // Clear existing data
        store.clear()

        // Add new data
        for (const item of manningList) {
            store.put(item)
        }

        return new Promise<void>((resolve, reject) => {
            transaction.oncomplete = () => resolve()
            transaction.onerror = () => reject(transaction.error)
        })
    }

    const isInManningList = async (employeeId: string): Promise<boolean> => {
        const database = await openDB()
        const transaction = database.transaction(['manningList'], 'readonly')
        const store = transaction.objectStore('manningList')
        const request = store.get(employeeId)

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                const result = request.result
                resolve(result ? result.isActive : false)
            }
            request.onerror = () => reject(request.error)
        })
    }

    const clearAllData = async () => {
        const database = await openDB()
        const transaction = database.transaction(
            ['employees', 'verificationLogs', 'manningList'],
            'readwrite'
        )

        transaction.objectStore('employees').clear()
        transaction.objectStore('verificationLogs').clear()
        transaction.objectStore('manningList').clear()

        return new Promise<void>((resolve, reject) => {
            transaction.oncomplete = () => resolve()
            transaction.onerror = () => reject(transaction.error)
        })
    }

    return {
        openDB,
        saveEmployees,
        getEmployee,
        getAllEmployees,
        saveVerificationLog,
        getUnsyncedLogs,
        markLogsAsSynced,
        saveManningList,
        isInManningList,
        clearAllData
    }
}
