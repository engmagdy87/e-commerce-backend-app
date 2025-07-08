import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/index.d.js";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = new Error("Missing or invalid token");
    (error as any).name = "UnauthorizedError";
    return next(error);
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    (req as any).user = { id: payload.userId, email: payload.email };
    next();
  } catch (err) {
    const error = new Error("Invalid or expired token");
    (error as any).name = "UnauthorizedError";
    return next(error);
  }
};
