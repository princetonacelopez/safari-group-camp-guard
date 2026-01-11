import { d as defineEventHandler, p as prisma, c as createError } from '../../../nitro/nitro.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'jose';
import '@iconify/utils';
import 'consola';

const download_get = defineEventHandler(async (event) => {
  try {
    const employees = await prisma.employee.findMany({
      where: { isActive: true },
      include: {
        manningList: {
          where: { isActive: true }
        }
      }
    });
    const manningList = await prisma.manningList.findMany({
      where: { isActive: true },
      select: {
        employeeId: true,
        isActive: true
      }
    });
    return {
      success: true,
      employees: employees.map((emp) => ({
        id: emp.id,
        employeeId: emp.employeeId,
        fullName: emp.fullName,
        photoUrl: emp.photoUrl,
        position: emp.position,
        building: emp.building,
        roomNumber: emp.roomNumber,
        isActive: emp.isActive,
        isInManningList: emp.manningList.length > 0
      })),
      manningList
    };
  } catch (error) {
    console.error("Sync download error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to download data"
    });
  }
});

export { download_get as default };
//# sourceMappingURL=download.get.mjs.map
