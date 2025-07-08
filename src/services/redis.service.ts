import { redis } from "../config/redis.js";

export const cacheService = {
  async set(key: string, value: string, ttlSeconds?: number) {
    if (ttlSeconds) {
      await redis.set(key, value, "EX", ttlSeconds);
    } else {
      await redis.set(key, value);
    }
  },
  async get(key: string) {
    return redis.get(key);
  },
  async del(key: string) {
    return redis.del(key);
  },
};
