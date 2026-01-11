import { d as defineEventHandler, c as createError, p as prisma } from '../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  if (!event.context.user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    });
  }
  const list = await prisma.manningList.findMany({
    where: { isActive: true },
    include: {
      employee: true
    },
    orderBy: {
      // Sort by employee name if possible, or added date
      addedDate: "desc"
    }
  });
  return list;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
