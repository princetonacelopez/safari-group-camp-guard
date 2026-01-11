/**
 * Import Manning List from CSV
 * Usage: node scripts/import-manning-csv.js <path-to-csv>
 */

import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

async function importCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const lines = fileContent.split('\n')
  
  const employees = []
  let skippedRows = 0
  
  // Skip first 2 rows (title and header)
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue
    
    // Parse CSV line (handling quoted fields)
    const columns = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || []
    const row = columns.map(col => col.replace(/^"|"$/g, '').trim())
    
    // Column indices based on the CSV structure
    const employeeId = row[2] || ''  // Column 2: Emp. ID
    const fullName = row[3] || ''    // Column 3: Employee Name
    
    // Skip invalid rows
    if (!employeeId || !fullName || !/^\d+$/.test(employeeId)) {
      skippedRows++
      continue
    }
    
    const employee = {
      employeeId,
      fullName,
      jobCategory: row[1] || '',           // Column 1: Job Category
      iqamaNumber: row[4] || '',           // Column 4: IQAMA Number
      nationality: row[14] || '',          // Column 14: Nationality
      position: row[15] || 'N/A',          // Column 15: Job Position
      gender: row[17] || '',               // Column 17: Gender
      employeeStatus: row[18] || 'Actual', // Column 18: Employee Status
      grade: row[19] || '',                // Column 19: Grade
      mobile: row[31] || '',               // Column 31: Mobile #
      foodCategory: row[36] || 'General',  // Column 36: Food Category
      designatedArea: row[37] || 'Community', // Column 37: Designated Area
      building: row[37] || 'Community',
      roomNumber: 'N/A',
      photoUrl: null,
      isActive: true
    }
    
    employees.push(employee)
  }
  
  console.log(`\n📊 CSV Parsing Complete`)
  console.log(`   Total rows processed: ${employees.length}`)
  console.log(`   Skipped rows: ${skippedRows}`)
  console.log(`\n💾 Importing ${employees.length} employees to database...`)
  
  let imported = 0
  let updated = 0
  let errors = 0
  
  for (const emp of employees) {
    try {
      const existing = await prisma.employee.findUnique({ 
        where: { employeeId: emp.employeeId } 
      })
      
      await prisma.employee.upsert({
        where: { employeeId: emp.employeeId },
        update: {
          fullName: emp.fullName,
          position: emp.position,
          jobCategory: emp.jobCategory,
          nationality: emp.nationality,
          iqamaNumber: emp.iqamaNumber,
          mobile: emp.mobile,
          employeeStatus: emp.employeeStatus,
          designatedArea: emp.designatedArea,
          foodCategory: emp.foodCategory,
          gender: emp.gender,
          grade: emp.grade,
          building: emp.building,
          roomNumber: emp.roomNumber,
          isActive: emp.isActive
        },
        create: emp
      })
      
      if (existing) {
        updated++
      } else {
        imported++
      }
    } catch (error) {
      console.error(`   ❌ Error importing ${emp.employeeId}: ${error.message}`)
      errors++
    }
  }
  
  console.log(`\n✅ Import Complete!`)
  console.log(`   New employees: ${imported}`)
  console.log(`   Updated employees: ${updated}`)
  if (errors > 0) {
    console.log(`   Errors: ${errors}`)
  }
  
  return { imported, updated, errors }
}

// Main execution
const csvFilePath = process.argv[2]

if (!csvFilePath) {
  console.error('❌ Please provide a CSV file path')
  console.log('Usage: node scripts/import-manning-csv.js <path-to-csv>')
  process.exit(1)
}

if (!fs.existsSync(csvFilePath)) {
  console.error(`❌ File not found: ${csvFilePath}`)
  process.exit(1)
}

console.log(`\n🚀 Starting CSV import from: ${csvFilePath}\n`)

importCSV(csvFilePath)
  .then(() => {
    console.log('\n✨ All done!')
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
    process.exit(0)
  })
