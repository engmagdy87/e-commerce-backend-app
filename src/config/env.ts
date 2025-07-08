import dotenv from "dotenv";
import path from "path";

// Load environment-specific .env file
const env = process.env.NODE_ENV || "development";
const envFile = `.env.${env}`;

// Load the environment-specific file
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Fallback to default .env if environment-specific file doesn't exist
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const config = {
  // Database
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://user:password@localhost:5432/mydb",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/mydb",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret_change_in_production",

  // Server
  PORT: parseInt(process.env.PORT || "3000", 10),
  NODE_ENV: process.env.NODE_ENV || "development",

  // Environment
  isDevelopment: env === "development",
  isStaging: env === "staging",
  isProduction: env === "production",
};
