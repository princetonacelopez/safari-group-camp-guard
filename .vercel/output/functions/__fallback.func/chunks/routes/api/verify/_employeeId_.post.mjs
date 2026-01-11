import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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

const _employeeId__post = defineEventHandler(async (event) => {
  try {
    const employeeId = getRouterParam(event, "employeeId");
    const body = await readBody(event);
    const { verifiedBy } = body;
    if (!employeeId) {
      throw createError({
        statusCode: 400,
        message: "Employee ID is required"
      });
    }
    const employee = await prisma.employee.findUnique({
      where: { employeeId },
      include: {
        manningList: {
          where: { isActive: true }
        }
      }
    });
    if (!employee) {
      await prisma.verificationLog.create({
        data: {
          employeeId,
          verifiedBy: verifiedBy || "unknown",
          status: "unauthorized",
          synced: true
        }
      });
      return {
        success: false,
        status: "unauthorized",
        message: "Employee not found",
        employee: null
      };
    }
    const isAuthorized = employee.isActive && employee.manningList.length > 0;
    await prisma.verificationLog.create({
      data: {
        employeeId,
        verifiedBy: verifiedBy || "scanner",
        status: isAuthorized ? "authorized" : "unauthorized",
        synced: true
      }
    });
    return {
      success: true,
      status: isAuthorized ? "authorized" : "unauthorized",
      employee: {
        id: employee.id,
        employeeId: employee.employeeId,
        fullName: employee.fullName,
        photoUrl: employee.photoUrl,
        position: employee.position,
        building: employee.building,
        roomNumber: employee.roomNumber,
        isActive: employee.isActive,
        isInManningList: employee.manningList.length > 0
      }
    };
  } catch (error) {
    console.error("Verification error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Verification failed"
    });
  }
});

export { _employeeId__post as default };
//# sourceMappingURL=_employeeId_.post.mjs.map
