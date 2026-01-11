<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-emerald-600 text-white p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <h1 class="text-2xl font-bold">Admin Panel</h1>
                    <p class="text-sm text-emerald-100">Camp QR Code Scanner</p>
                </div>
                <div class="flex gap-3">
                    <UButton icon="i-heroicons-arrow-left" color="neutral" variant="outline" to="/">
                        Scanner
                    </UButton>
                    <UButton icon="i-heroicons-arrow-right-on-rectangle" color="neutral" variant="outline"
                        @click="handleLogout">
                        Logout
                    </UButton>
                </div>
            </div>
        </div>

        <div class="container mx-auto p-4 max-w-7xl">
            <!-- Stats -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <UCard>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-emerald-600">{{ stats.totalEmployees }}</p>
                        <p class="text-gray-600">Total Employees</p>
                    </div>
                </UCard>
                <UCard>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-blue-600">{{ stats.manningListCount }}</p>
                        <p class="text-gray-600">In Manning List</p>
                    </div>
                </UCard>
                <UCard>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-green-600">{{ stats.authorizedToday }}</p>
                        <p class="text-gray-600">Authorized Today</p>
                    </div>
                </UCard>
                <UCard>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-red-600">{{ stats.unauthorizedToday }}</p>
                        <p class="text-gray-600">Unauthorized Today</p>
                    </div>
                </UCard>
            </div>

            <!-- Navigation Tabs -->
            <UTabs :items="tabs" v-model="selectedTab">
                <!-- Employees Tab -->
                <template #employees>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <h2 class="text-xl font-semibold">All Employees ({{ employees?.length || 0 }})</h2>
                            <div class="flex gap-2">
                                <UButton icon="i-heroicons-arrow-up-tray" color="primary" variant="outline" @click="showImportModal = true">
                                    Import CSV
                                </UButton>
                                <UButton icon="i-heroicons-arrow-path" color="neutral" variant="ghost" @click="refreshEmployees">
                                    Refresh
                                </UButton>
                            </div>
                        </div>

                        <UCard>
                            <UTable 
                                :data="employees" 
                                :columns="employeeColumns"
                                :loading="isLoadingData">
                                <template #photoUrl-cell="{ row }">
                                    <UAvatar 
                                        :src="row.original.photoUrl" 
                                        :alt="row.original.fullName" 
                                        size="sm" />
                                </template>
                                <template #fullName-cell="{ row }">
                                    <div class="font-medium">{{ row.original.fullName }}</div>
                                    <div class="text-xs text-gray-500">{{ row.original.position }}</div>
                                    <div class="text-xs text-gray-400" v-if="row.original.grade">Grade: {{ row.original.grade }}</div>
                                </template>
                                <template #employeeId-cell="{ row }">
                                    <UBadge color="neutral" variant="subtle">{{ row.original.employeeId }}</UBadge>
                                    <div class="text-xs text-gray-500 mt-1" v-if="row.original.mobile">
                                        📱 {{ row.original.mobile }}
                                    </div>
                                </template>
                                <template #jobCategory-cell="{ row }">
                                    <UBadge :color="getCategoryColor(row.original.jobCategory) as any" variant="soft">
                                        {{ row.original.jobCategory || 'N/A' }}
                                    </UBadge>
                                </template>
                                <template #nationality-cell="{ row }">
                                    <span class="text-sm">{{ row.original.nationality || 'N/A' }}</span>
                                </template>
                                <template #designation-cell="{ row }">
                                    <div class="text-sm">
                                        <div>{{ row.original.designatedArea || 'N/A' }}</div>
                                        <div class="text-xs text-gray-500" v-if="row.original.foodCategory">
                                            {{ row.original.foodCategory }}
                                        </div>
                                    </div>
                                </template>
                                <template #status-cell="{ row }">
                                    <UBadge 
                                        :color="row.original.employeeStatus === 'Actual' ? 'success' : 'warning'" 
                                        variant="soft">
                                        {{ row.original.employeeStatus || 'N/A' }}
                                    </UBadge>
                                </template>
                                <template #actions-cell="{ row }">
                                    <div class="flex gap-1">
                                        <UButton 
                                            icon="i-heroicons-eye" 
                                            size="xs" 
                                            color="neutral" 
                                            variant="ghost"
                                            @click="viewEmployeeDetails(row.original)"
                                            title="View Details" />
                                        <UButton 
                                            icon="i-heroicons-identification" 
                                            size="xs" 
                                            color="primary" 
                                            variant="ghost"
                                            @click="previewEmployeeID(row.original)"
                                            title="Preview ID" />
                                        <UButton 
                                            icon="i-heroicons-pencil" 
                                            size="xs" 
                                            color="warning" 
                                            variant="ghost"
                                            @click="editEmployee(row.original)"
                                            title="Edit" />
                                    </div>
                                </template>
                            </UTable>
                        </UCard>
                    </div>
                </template>

                <!-- Logs Tab -->
                <template #logs>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <h2 class="text-xl font-semibold">Verification Logs</h2>
                            <UButton icon="i-heroicons-arrow-path" color="neutral" variant="ghost" @click="refreshLogs">
                                Refresh
                            </UButton>
                        </div>

                        <UCard>
                            <UTable :data="logs || []" :columns="logsColumns" :loading="isLoadingData">
                                <template #scanTimestamp-cell="{ row }">
                                    <div class="text-sm">
                                        {{ new Date(row.original.scanTimestamp).toLocaleDateString() }}
                                        <br>
                                        <span class="text-gray-500">{{ new Date(row.original.scanTimestamp).toLocaleTimeString()
                                            }}</span>
                                    </div>
                                </template>
                                <template #employee-cell="{ row }">
                                    <div class="flex items-center gap-2">
                                        <UAvatar :src="row.original.employee?.photoUrl" :alt="row.original.employee?.fullName"
                                            size="xs" />
                                        <div>
                                            <div class="font-medium text-sm">{{ row.original.employee?.fullName || 'Unknown' }}
                                            </div>
                                            <div class="text-xs text-gray-500">{{ row.original.employeeId }}</div>
                                        </div>
                                    </div>
                                </template>
                                <template #status-cell="{ row }">
                                    <UBadge :color="row.original.status === 'authorized' ? 'success' : 'error'" variant="subtle">
                                        {{ row.original.status.toUpperCase() }}
                                    </UBadge>
                                </template>
                            </UTable>
                        </UCard>
                    </div>
                </template>
            </UTabs>
        </div>

        <!-- View Details Modal -->
        <UModal v-model="showDetailsModal">
            <UCard :ui="{ root: 'sm:max-w-3xl' }">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Employee Details</h3>
                        <UButton icon="i-heroicons-x-mark" color="neutral" variant="ghost" @click="showDetailsModal = false" />
                    </div>
                </template>
                <div v-if="selectedEmployee" class="space-y-4">
                    <div class="flex items-start gap-4">
                        <UAvatar :src="selectedEmployee.photoUrl" :alt="selectedEmployee.fullName" size="xl" />
                        <div class="flex-1">
                            <h4 class="text-xl font-bold">{{ selectedEmployee.fullName }}</h4>
                            <p class="text-gray-600">{{ selectedEmployee.position }}</p>
                            <UBadge :color="getCategoryColor(selectedEmployee.jobCategory) as any" variant="soft" class="mt-2">
                                {{ selectedEmployee.jobCategory }}
                            </UBadge>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-medium text-gray-700">Employee ID</label>
                            <p class="text-gray-900">{{ selectedEmployee.employeeId }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Nationality</label>
                            <p class="text-gray-900">{{ selectedEmployee.nationality || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Iqama Number</label>
                            <p class="text-gray-900">{{ selectedEmployee.iqamaNumber || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Mobile</label>
                            <p class="text-gray-900">{{ selectedEmployee.mobile || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Grade</label>
                            <p class="text-gray-900">{{ selectedEmployee.grade || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Gender</label>
                            <p class="text-gray-900">{{ selectedEmployee.gender || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Designated Area</label>
                            <p class="text-gray-900">{{ selectedEmployee.designatedArea || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Food Category</label>
                            <p class="text-gray-900">{{ selectedEmployee.foodCategory || 'N/A' }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Building</label>
                            <p class="text-gray-900">{{ selectedEmployee.building }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Room Number</label>
                            <p class="text-gray-900">{{ selectedEmployee.roomNumber }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Status</label>
                            <UBadge :color="selectedEmployee.employeeStatus === 'Actual' ? 'success' : 'warning'" variant="soft">
                                {{ selectedEmployee.employeeStatus || 'N/A' }}
                            </UBadge>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-700">Active</label>
                            <UBadge :color="selectedEmployee.isActive ? 'success' : 'error'" variant="soft">
                                {{ selectedEmployee.isActive ? 'Yes' : 'No' }}
                            </UBadge>
                        </div>
                    </div>
                </div>
            </UCard>
        </UModal>

        <!-- Preview ID Modal -->
        <UModal v-model="showIDPreviewModal">
            <UCard :ui="{ root: 'sm:max-w-2xl' }">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Employee ID Card</h3>
                        <div class="flex gap-2">
                            <UButton icon="i-heroicons-printer" color="primary" variant="outline" @click="printEmployeeID">
                                Print
                            </UButton>
                            <UButton icon="i-heroicons-x-mark" color="neutral" variant="ghost" @click="showIDPreviewModal = false" />
                        </div>
                    </div>
                </template>
                <div id="employee-id-card" v-if="selectedEmployee" class="bg-white p-8">
                    <div class="border-4 border-emerald-600 rounded-lg p-6 max-w-md mx-auto">
                        <div class="text-center mb-4">
                            <h2 class="text-2xl font-bold text-emerald-600">SAFARI CAMP</h2>
                            <p class="text-sm text-gray-600">Employee Identification</p>
                        </div>
                        <div class="flex flex-col items-center mb-4">
                            <UAvatar :src="selectedEmployee.photoUrl" :alt="selectedEmployee.fullName" size="2xl" class="mb-3" />
                            <h3 class="text-xl font-bold text-center">{{ selectedEmployee.fullName }}</h3>
                            <p class="text-gray-600">{{ selectedEmployee.position }}</p>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="font-semibold">ID:</span>
                                <span>{{ selectedEmployee.employeeId }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="font-semibold">Nationality:</span>
                                <span>{{ selectedEmployee.nationality }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="font-semibold">Category:</span>
                                <span>{{ selectedEmployee.jobCategory }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="font-semibold">Building:</span>
                                <span>{{ selectedEmployee.building }} - {{ selectedEmployee.roomNumber }}</span>
                            </div>
                        </div>
                        <div class="mt-6 flex justify-center">
                            <img :src="getQRCodeURL(selectedEmployee.employeeId)" alt="QR Code" class="w-32 h-32" />
                        </div>
                    </div>
                </div>
            </UCard>
        </UModal>

        <!-- Edit Employee Modal -->
        <UModal v-model="showEditModal">
            <UCard :ui="{ root: 'sm:max-w-3xl' }">
                <template #header>
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Edit Employee</h3>
                        <UButton icon="i-heroicons-x-mark" color="neutral" variant="ghost" @click="showEditModal = false" />
                    </div>
                </template>
                <form v-if="editingEmployee" @submit.prevent="saveEmployee" class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <UInput v-model="editingEmployee.fullName" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Position</label>
                            <UInput v-model="editingEmployee.position" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Job Category</label>
                            <UInput v-model="editingEmployee.jobCategory" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                            <UInput v-model="editingEmployee.nationality" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Iqama Number</label>
                            <UInput v-model="editingEmployee.iqamaNumber" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                            <UInput v-model="editingEmployee.mobile" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                            <UInput v-model="editingEmployee.grade" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                            <UInput v-model="editingEmployee.gender" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Building</label>
                            <UInput v-model="editingEmployee.building" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
                            <UInput v-model="editingEmployee.roomNumber" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Designated Area</label>
                            <UInput v-model="editingEmployee.designatedArea" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Food Category</label>
                            <UInput v-model="editingEmployee.foodCategory" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Employee Status</label>
                            <UInput v-model="editingEmployee.employeeStatus" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                            <UInput v-model="editingEmployee.photoUrl" />
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 pt-4">
                        <UButton color="neutral" variant="outline" @click="showEditModal = false">Cancel</UButton>
                        <UButton type="submit" color="primary" :loading="isSaving">Save Changes</UButton>
                    </div>
                </form>
            </UCard>
        </UModal>

        <!-- Import CSV Modal -->
        <UModal v-model="showImportModal">
            <UCard>
                <template #header>
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Import Employees from CSV</h3>
                        <UButton icon="i-heroicons-x-mark" color="neutral" variant="ghost" @click="showImportModal = false" />
                    </div>
                </template>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Select CSV File</label>
                        <input 
                            ref="fileInput"
                            type="file" 
                            accept=".csv" 
                            @change="handleFileSelect"
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                    </div>
                    <div v-if="importResult" class="p-4 rounded-lg" :class="importResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
                        <p class="font-medium">{{ importResult.message }}</p>
                        <p v-if="importResult.details" class="text-sm mt-1">{{ importResult.details }}</p>
                    </div>
                    <div class="flex justify-end gap-2">
                        <UButton color="neutral" variant="outline" @click="showImportModal = false">Cancel</UButton>
                        <UButton color="primary" @click="uploadCSV" :loading="isImporting" :disabled="!selectedFile">Import</UButton>
                    </div>
                </div>
            </UCard>
        </UModal>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard'
})

const { logout, isAuthenticated, accessToken } = useAuth()
const router = useRouter()

const selectedTab = ref(0)
const showAddEmployee = ref(false)
const showDetailsModal = ref(false)
const showIDPreviewModal = ref(false)
const showEditModal = ref(false)
const showImportModal = ref(false)
const selectedEmployee = ref<EmployeeRow | null>(null)
const editingEmployee = ref<EmployeeRow | null>(null)
const isSaving = ref(false)
const isImporting = ref(false)
const selectedFile = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const importResult = ref<{ success: boolean; message: string; details?: string } | null>(null)

// Data refs
// Define the correct type for manningList rows to include 'employee'
interface ManningRow {
    employeeId: string
    employee: {
        photoUrl?: string
        fullName?: string
        position?: string
        grade?: string
        mobile?: string
        jobCategory?: string
        nationality?: string
        designatedArea?: string
        foodCategory?: string
        employeeStatus?: string
    }
}

interface EmployeeRow {
    id: number
    employeeId: string
    fullName: string
    photoUrl?: string
    position: string
    jobCategory?: string
    nationality?: string
    iqamaNumber?: string
    mobile?: string
    employeeStatus?: string
    designatedArea?: string
    foodCategory?: string
    gender?: string
    grade?: string
    building: string
    roomNumber: string
    isActive: boolean
}

interface LogRow {
    employeeId: string
    scanTimestamp: string
    status: string
    verifiedBy: string
    employee: {
        photoUrl?: string
        fullName?: string
    }
}

const employees = ref<EmployeeRow[]>([])
const logs = ref<LogRow[]>([])
const employeesError = ref<any>(null)
const logsError = ref<any>(null)
const isLoadingData = ref(false)

// Manual data fetching with proper auth
const refreshEmployees = async () => {
    if (!accessToken.value) return
    
    isLoadingData.value = true
    try {
        employeesError.value = null
        const data = await $fetch('/api/employees', {
            headers: {
                Authorization: `Bearer ${accessToken.value}`
            }
        })
        employees.value = (data as any).employees || []
    } catch (error: any) {
        console.error('Failed to fetch employees:', error)
        employeesError.value = error
        if (error.statusCode === 401) {
            handleLogout()
        }
    } finally {
        isLoadingData.value = false
    }
}

const refreshLogs = async () => {
    if (!accessToken.value) return
    
    isLoadingData.value = true
    try {
        logsError.value = null
        const data = await $fetch('/api/verification-logs', {
            headers: {
                Authorization: `Bearer ${accessToken.value}`
            }
        })
        logs.value = data as any[]
    } catch (error: any) {
        console.error('Failed to fetch logs:', error)
        logsError.value = error
        if (error.statusCode === 401) {
            handleLogout()
        }
    } finally {
        isLoadingData.value = false
    }
}

// Columns with proper accessorKey for NuxtUI
const employeeColumns = [
    { key: 'photoUrl', label: 'Photo', accessorKey: 'photoUrl' },
    { key: 'employeeId', label: 'ID', accessorKey: 'employeeId' },
    { key: 'fullName', label: 'Employee', accessorKey: 'fullName' },
    { key: 'jobCategory', label: 'Category', accessorKey: 'jobCategory' },
    { key: 'nationality', label: 'Nationality', accessorKey: 'nationality' },
    { key: 'designation', label: 'Designated Area', accessorKey: 'designatedArea' },
    { key: 'status', label: 'Status', accessorKey: 'employeeStatus' },
    { key: 'actions', label: 'Actions', accessorKey: 'id' }
]

const logsColumns = [
    { key: 'scanTimestamp', label: 'Time', accessorKey: 'scanTimestamp' },
    { key: 'employee', label: 'Employee', accessorKey: 'employee' },
    { key: 'status', label: 'Status', accessorKey: 'status' },
    { key: 'verifiedBy', label: 'Verified By', accessorKey: 'verifiedBy' }
]

const tabs = [
    {
        key: 'employees',
        label: 'Employees',
        icon: 'i-heroicons-users',
        slot: 'employees'
    },
    {
        key: 'logs',
        label: 'Verification Logs',
        icon: 'i-heroicons-document-text',
        slot: 'logs'
    }
]

const stats = ref({
    totalEmployees: 0,
    manningListCount: 0,
    authorizedToday: 0,
    unauthorizedToday: 0
})

// Check authentication
onMounted(async () => {
    if (!isAuthenticated.value) {
        router.push('/admin/login')
    } else {
        // Wait a tick to ensure accessToken is available
        await nextTick()
        await loadStats()
    }
})

// Watch for access token changes and refetch data
watch(accessToken, (newToken) => {
    if (newToken && employees.value.length === 0) {
        loadStats()
    }
})

const loadStats = async () => {
    await Promise.all([refreshEmployees(), refreshLogs()])
    try {
        if (employees.value) {
            stats.value.totalEmployees = employees.value.length
            stats.value.manningListCount = employees.value.filter((emp: any) => emp.isInManningList).length
        }
    } catch (e) {
        console.error('Failed to load stats', e)
    }
}

const handleLogout = async () => {
    await logout()
    router.push('/admin/login')
}

// Helper function for category colors
const getCategoryColor = (category: string | undefined) => {
    if (!category) return 'gray'
    
    const colors: Record<string, string> = {
        'Mgmt': 'purple',
        'Gen': 'blue',
        'Admin': 'green',
        'Housing': 'orange',
        'Furnt': 'yellow',
        'Tech': 'cyan',
        'Maint': 'red'
    }
    
    return colors[category] || 'gray'
}

// Action handlers
const viewEmployeeDetails = (employee: EmployeeRow) => {
    selectedEmployee.value = employee
    showDetailsModal.value = true
}

const previewEmployeeID = (employee: EmployeeRow) => {
    selectedEmployee.value = employee
    showIDPreviewModal.value = true
}

const editEmployee = (employee: EmployeeRow) => {
    editingEmployee.value = { ...employee }
    showEditModal.value = true
}

const saveEmployee = async () => {
    if (!editingEmployee.value || !accessToken.value) return
    
    isSaving.value = true
    try {
        await $fetch(`/api/employees/${editingEmployee.value.id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken.value}`
            },
            body: editingEmployee.value
        })
        
        showEditModal.value = false
        await refreshEmployees()
    } catch (error) {
        console.error('Failed to save employee:', error)
        alert('Failed to save employee changes')
    } finally {
        isSaving.value = false
    }
}

const getQRCodeURL = (employeeId: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${employeeId}`
}

const printEmployeeID = () => {
    const printContent = document.getElementById('employee-id-card')
    if (!printContent) return
    
    const printWindow = window.open('', '', 'height=600,width=800')
    if (!printWindow) return
    
    printWindow.document.write('<html><head><title>Employee ID Card</title>')
    printWindow.document.write('<style>body { margin: 0; padding: 20px; font-family: system-ui; } @media print { body { margin: 0; } }</style>')
    printWindow.document.write('</head><body>')
    printWindow.document.write(printContent.innerHTML)
    printWindow.document.write('</body></html>')
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
        printWindow.print()
        printWindow.close()
    }, 250)
}

const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0] || null
        importResult.value = null
    }
}

const uploadCSV = async () => {
    if (!selectedFile.value || !accessToken.value) return
    
    isImporting.value = true
    importResult.value = null
    
    try {
        const formData = new FormData()
        formData.append('file', selectedFile.value)
        
        const result = await $fetch('/api/manning-list/import', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken.value}`
            },
            body: formData
        })
        
        importResult.value = {
            success: true,
            message: 'Import successful!',
            details: `Imported ${(result as any).imported || 0} employees, skipped ${(result as any).skipped || 0} rows`
        }
        
        selectedFile.value = null
        if (fileInput.value) {
            fileInput.value.value = ''
        }
        
        await refreshEmployees()
    } catch (error: any) {
        console.error('Failed to import CSV:', error)
        importResult.value = {
            success: false,
            message: 'Import failed',
            details: error.message || 'An error occurred during import'
        }
    } finally {
        isImporting.value = false
    }
}
</script>
