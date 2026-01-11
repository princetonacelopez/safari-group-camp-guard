import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
    const passwordHash = await bcrypt.hash('admin123', 10)

    const admin = await prisma.adminUser.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            passwordHash,
            role: 'admin',
            isActive: true
        }
    })

    console.log('Admin user created:', admin.username)
    console.log('Password: admin123')

    // Seed Employees
    const employees = [
        { employeeId: 'EMP001', fullName: 'John Doe', position: 'Electrician', building: 'Camp A', roomNumber: '101' },
        { employeeId: 'EMP002', fullName: 'Jane Smith', position: 'Plumber', building: 'Camp B', roomNumber: '205' },
        { employeeId: 'EMP003', fullName: 'Mike Johnson', position: 'Driver', building: 'Camp A', roomNumber: '102' },
        { employeeId: 'EMP004', fullName: 'Sarah Williams', position: 'Cook', building: 'Mess Hall', roomNumber: 'M01' },
        { employeeId: 'EMP005', fullName: 'Robert Brown', position: 'Security', building: 'Gate 1', roomNumber: 'G01' },
        { employeeId: 'EMP006', fullName: 'Emily Davis', position: 'Nurse', building: 'Clinic', roomNumber: 'C01' },
        { employeeId: 'EMP007', fullName: 'David Miller', position: 'Engineer', building: 'Camp B', roomNumber: '206' },
        { employeeId: 'EMP008', fullName: 'Lisa Wilson', position: 'Admin', building: 'Office', roomNumber: 'O02' },
    ]

    console.log('Seeding employees...')
    for (const emp of employees) {
        await prisma.employee.upsert({
            where: { employeeId: emp.employeeId },
            update: emp,
            create: emp
        })
    }

    // Seed Manning List
    const manningIds = ['EMP001', 'EMP002', 'EMP004', 'EMP006', 'EMP008']
    console.log('Seeding manning list...')

    for (const id of manningIds) {
        await prisma.manningList.upsert({
            where: { employeeId: id },
            update: { isActive: true },
            create: {
                employeeId: id,
                addedBy: 'seeder',
                isActive: true
            }
        })
    }

    // Seed/Add Logs (Append a few recent ones)
    console.log('Seeding verification logs...')
    const logs = [
        { employeeId: 'EMP001', status: 'authorized', minsAgo: 120 },
        { employeeId: 'EMP003', status: 'unauthorized', minsAgo: 90 },
        { employeeId: 'EMP002', status: 'authorized', minsAgo: 60 },
        { employeeId: 'EMP007', status: 'unauthorized', minsAgo: 45 },
        { employeeId: 'EMP004', status: 'authorized', minsAgo: 30 },
        { employeeId: 'EMP005', status: 'unauthorized', minsAgo: 15 },
        { employeeId: 'EMP006', status: 'authorized', minsAgo: 5 },
    ]

    for (const log of logs) {
        await prisma.verificationLog.create({
            data: {
                employeeId: log.employeeId,
                status: log.status,
                scanTimestamp: new Date(Date.now() - 1000 * 60 * log.minsAgo),
                verifiedBy: 'scanner',
                synced: true
            }
        })
    }

    console.log('Sample data seeded successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
