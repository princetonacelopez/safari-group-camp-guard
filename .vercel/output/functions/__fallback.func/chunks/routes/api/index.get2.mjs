import { d as defineEventHandler, c as createError, b as getQuery, p as prisma } from '../../nitro/nitro.mjs';
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
  const { limit = "100" } = getQuery(event);
  const take = parseInt(limit) || 100;
  const logs = await prisma.verificationLog.findMany({
    take,
    orderBy: {
      scanTimestamp: "desc"
    },
    include: {
      employee: true
    }
  });
  return logs;
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
