import { d as defineEventHandler, a as getMethod, g as getRouterParam, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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

const _employeeId_ = defineEventHandler(async (event) => {
  var _a;
  try {
    const method = getMethod(event);
    const employeeId = getRouterParam(event, "employeeId");
    if (!employeeId) {
      throw createError({
        statusCode: 400,
        message: "Employee ID is required"
      });
    }
    if (method === "POST") {
      const username = ((_a = event.context.user) == null ? void 0 : _a.username) || "admin";
      const employee = await prisma.employee.findUnique({
        where: { employeeId }
      });
      if (!employee) {
        throw createError({
          statusCode: 404,
          message: "Employee not found"
        });
      }
      const existing = await prisma.manningList.findUnique({
        where: { employeeId }
      });
      if (existing) {
        if (!existing.isActive) {
          const updated = await prisma.manningList.update({
            where: { employeeId },
            data: {
              isActive: true,
              addedBy: username,
              addedDate: /* @__PURE__ */ new Date()
            }
          });
          return { success: true, manningList: updated };
        }
        throw createError({
          statusCode: 400,
          message: "Employee already in manning list"
        });
      }
      const manningEntry = await prisma.manningList.create({
        data: {
          employeeId,
          addedBy: username,
          isActive: true
        },
        include: {
          employee: true
        }
      });
      return {
        success: true,
        manningList: manningEntry
      };
    }
    if (method === "DELETE") {
      await prisma.manningList.update({
        where: { employeeId },
        data: { isActive: false }
      });
      return {
        success: true,
        message: "Employee removed from manning list"
      };
    }
    throw createError({
      statusCode: 405,
      message: "Method not allowed"
    });
  } catch (error) {
    console.error("Manning list API error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to process request"
    });
  }
});

export { _employeeId_ as default };
//# sourceMappingURL=_employeeId_.mjs.map
