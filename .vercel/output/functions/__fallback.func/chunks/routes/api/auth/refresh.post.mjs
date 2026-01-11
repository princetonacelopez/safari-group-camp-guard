import { d as defineEventHandler, r as readBody, c as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { jwtVerify, SignJWT } from 'jose';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';

const refresh_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { refreshToken } = body;
    if (!refreshToken) {
      throw createError({
        statusCode: 400,
        message: "Refresh token is required"
      });
    }
    const config = useRuntimeConfig();
    const jwtSecret = new TextEncoder().encode(config.jwtSecret);
    const jwtRefreshSecret = new TextEncoder().encode(config.jwtRefreshSecret);
    const { payload } = await jwtVerify(refreshToken, jwtRefreshSecret);
    const accessToken = await new SignJWT({
      userId: payload.userId,
      username: payload.username,
      role: payload.role
    }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("8h").setIssuedAt().sign(jwtSecret);
    return {
      success: true,
      accessToken
    };
  } catch (error) {
    console.error("Token refresh error:", error);
    throw createError({
      statusCode: 401,
      message: "Invalid or expired refresh token"
    });
  }
});

export { refresh_post as default };
//# sourceMappingURL=refresh.post.mjs.map
