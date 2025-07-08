import Redis from "ioredis";
import { config } from "./env.js";

export const redis = new Redis(config.REDIS_URL);

redis.on("error", (err: Error) => {
  console.warn("Redis connection failed, continuing without Redis:", err);
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});
