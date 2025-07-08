import { PrismaClient } from "@prisma/client";
import { config } from "./env.js";

// Singleton Prisma client for PostgreSQL
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.DATABASE_URL,
    },
  },
});
