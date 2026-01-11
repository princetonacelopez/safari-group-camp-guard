import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'

const prisma = new PrismaClient()

async function generateQRCodes() {
  try {
    console.log('Starting QR code generation...')
    
    // Get all employees without QR codes
    const employees = await prisma.employee.findMany({
      where: {
        qrCode: null
      }
    })
    
    console.log(`Found ${employees.length} employees without QR codes`)
    
    let updated = 0
    
    for (const employee of employees) {
      // Generate a unique QR code using employee ID and a random hash
      const uniqueHash = crypto
        .createHash('sha256')
        .update(`${employee.employeeId}-${Date.now()}-${Math.random()}`)
        .digest('hex')
        .substring(0, 16)
      
      const qrCode = `EMP-${employee.employeeId}-${uniqueHash}`.toUpperCase()
      
      // Update employee with unique QR code
      await prisma.employee.update({
        where: { id: employee.id },
        data: { qrCode }
      })
      
      updated++
      if (updated % 50 === 0) {
        console.log(`Updated ${updated}/${employees.length} employees...`)
      }
    }
    
    console.log(`✅ Successfully generated QR codes for ${updated} employees`)
  } catch (error) {
    console.error('Error generating QR codes:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

generateQRCodes()
