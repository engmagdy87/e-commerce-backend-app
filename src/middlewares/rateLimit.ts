import { Request, Response, NextFunction } from "express";
import { cacheService } from "../services/redis.service.js";

const WINDOW_SECONDS = 60; // 1 minute
const MAX_REQUESTS = 30;

export const rateLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip;
  const key = `rate:${ip}`;
  const current = await cacheService.get(key);
  let count = current ? parseInt(current, 10) : 0;

  if (count >= MAX_REQUESTS) {
    return res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  }

  count++;
  await cacheService.set(key, count.toString(), WINDOW_SECONDS);
  next();
};
