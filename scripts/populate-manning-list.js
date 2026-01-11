/**
 * Populate Manning List from all active employees
 * Usage: node scripts/populate-manning-list.js
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function populateManningList() {
  console.log('\n🚀 Starting Manning List Population...\n')

  try {
    // Get all active employees
    const employees = await prisma.employee.findMany({
      where: { isActive: true },
      select: { employeeId: true, fullName: true }
    })

    console.log(`📊 Found ${employees.length} active employees`)

    if (employees.length === 0) {
      console.log('❌ No employees found. Please import employees first.')
      return
    }

    let added = 0
    let skipped = 0

    for (const emp of employees) {
      try {
        // Check if already in manning list
        const existing = await prisma.manningList.findUnique({
          where: { employeeId: emp.employeeId }
        })

        if (existing) {
          skipped++
          continue
        }

        // Add to manning list
        await prisma.manningList.create({
          data: {
            employeeId: emp.employeeId,
            addedBy: 'System',
            isActive: true
          }
        })

        added++
      } catch (error) {
        console.error(`   ❌ Error adding ${emp.employeeId}: ${error.message}`)
      }
    }

    console.log(`\n✅ Manning List Population Complete!`)
    console.log(`   Added: ${added}`)
    console.log(`   Skipped (already exists): ${skipped}`)
    console.log(`   Total in manning list: ${added + skipped}`)

  } catch (error) {
    console.error('❌ Error:', error)
    throw error
  }
}

// Main execution
populateManningList()
  .then(() => {
    console.log('\n✨ Done!')
  })
  .catch((error) => {
    console.error('\n❌ Failed:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
