import { d as defineEventHandler, a as getMethod, p as prisma, r as readBody, c as createError } from '../../nitro/nitro.mjs';
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

const index = defineEventHandler(async (event) => {
  try {
    const method = getMethod(event);
    if (method === "GET") {
      const employees = await prisma.employee.findMany({
        orderBy: { fullName: "asc" },
        include: {
          manningList: {
            where: { isActive: true }
          }
        }
      });
      return {
        success: true,
        employees: employees.map((emp) => ({
          ...emp,
          isInManningList: emp.manningList.length > 0
        }))
      };
    }
    if (method === "POST") {
      const body = await readBody(event);
      const { employeeId, fullName, photoUrl, position, building, roomNumber } = body;
      if (!employeeId || !fullName || !position || !building || !roomNumber) {
        throw createError({
          statusCode: 400,
          message: "Missing required fields"
        });
      }
      const employee = await prisma.employee.create({
        data: {
          employeeId,
          fullName,
          photoUrl: photoUrl || null,
          position,
          building,
          roomNumber,
          isActive: true
        }
      });
      return {
        success: true,
        employee
      };
    }
    throw createError({
      statusCode: 405,
      message: "Method not allowed"
    });
  } catch (error) {
    console.error("Employees API error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to process request"
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
