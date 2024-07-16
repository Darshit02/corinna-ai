import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const client = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;