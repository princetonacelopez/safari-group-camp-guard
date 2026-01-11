import { d as defineEventHandler, r as readBody, c as createError, p as prisma, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';
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

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, password } = body;
    if (!username || !password) {
      throw createError({
        statusCode: 400,
        message: "Username and password are required"
      });
    }
    const admin = await prisma.adminUser.findUnique({
      where: { username }
    });
    if (!admin || !admin.isActive) {
      throw createError({
        statusCode: 401,
        message: "Invalid credentials"
      });
    }
    const isValidPassword = await bcrypt.compare(password, admin.passwordHash);
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: "Invalid credentials"
      });
    }
    const config = useRuntimeConfig();
    const jwtSecret = new TextEncoder().encode(config.jwtSecret);
    const jwtRefreshSecret = new TextEncoder().encode(config.jwtRefreshSecret);
    const accessToken = await new SignJWT({
      userId: admin.id,
      username: admin.username,
      role: admin.role
    }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("8h").setIssuedAt().sign(jwtSecret);
    const refreshToken = await new SignJWT({
      userId: admin.id,
      username: admin.username
    }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").setIssuedAt().sign(jwtRefreshSecret);
    return {
      success: true,
      user: {
        id: admin.id,
        username: admin.username,
        role: admin.role
      },
      accessToken,
      refreshToken
    };
  } catch (error) {
    console.error("Login error:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Login failed"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
