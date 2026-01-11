import { d as defineEventHandler, c as createError, r as readBody, p as prisma } from '../../../nitro/nitro.mjs';
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

const import_post = defineEventHandler(async (event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  const body = await readBody(event);
  const { items } = body;
  if (!Array.isArray(items) || items.length === 0) {
    return { success: false, message: "No items to import", imported: 0, failed: 0 };
  }
  const uniqueIds = [...new Set(items.map((i) => {
    var _a;
    return (_a = i.employeeId) == null ? void 0 : _a.toString().trim();
  }).filter(Boolean))];
  if (uniqueIds.length === 0) {
    return { success: false, message: "No valid employee IDs found", imported: 0, failed: 0 };
  }
  const existingEmployees = await prisma.employee.findMany({
    where: {
      employeeId: {
        in: uniqueIds
      }
    },
    select: {
      employeeId: true
    }
  });
  const existingIds = new Set(existingEmployees.map((e) => e.employeeId));
  const validIds = uniqueIds.filter((id) => existingIds.has(id));
  const invalidIds = uniqueIds.filter((id) => !existingIds.has(id));
  if (validIds.length === 0) {
    return {
      success: false,
      message: "None of the provided Employee IDs exist in the system.",
      imported: 0,
      failed: invalidIds.length,
      errors: invalidIds
    };
  }
  try {
    const result = await prisma.$transaction([
      // Optional: Clear existing list? 
      // For now, let's just delete everything to ensure clean state for the new list.
      prisma.manningList.deleteMany({}),
      // Insert new
      prisma.manningList.createMany({
        data: validIds.map((id) => ({
          employeeId: id,
          addedBy: event.context.user.username || "admin",
          isActive: true
        }))
      })
    ]);
    return {
      success: true,
      message: `Successfully imported ${validIds.length} employees.`,
      imported: validIds.length,
      failed: invalidIds.length,
      errors: invalidIds
    };
  } catch (error) {
    console.error("Import error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to import manning list"
    });
  }
});

export { import_post as default };
//# sourceMappingURL=import.post.mjs.map
