import { d as defineEventHandler, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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

const upload_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { logs } = body;
    if (!logs || !Array.isArray(logs)) {
      throw createError({
        statusCode: 400,
        message: "Invalid logs data"
      });
    }
    const results = await Promise.all(
      logs.map(
        (log) => prisma.verificationLog.create({
          data: {
            employeeId: log.employeeId,
            scanTimestamp: new Date(log.scanTimestamp),
            verifiedBy: log.verifiedBy,
            status: log.status,
            synced: true
          }
        })
      )
    );
    return {
      success: true,
      uploaded: results.length,
      message: `${results.length} logs uploaded successfully`
    };
  } catch (error) {
    console.error("Sync upload error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Failed to upload logs"
    });
  }
});

export { upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
