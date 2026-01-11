import { d as defineEventHandler, a as getMethod, p as prisma, c as createError } from '../../nitro/nitro.mjs';
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
      const manningList = await prisma.manningList.findMany({
        where: { isActive: true },
        include: {
          employee: true
        },
        orderBy: { addedDate: "desc" }
      });
      return {
        success: true,
        manningList
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

export { index as default };
//# sourceMappingURL=index2.mjs.map
