import { Request, Response } from "express";
import { ZodError } from "zod";
import {
  authService,
  RegisterSchema,
  LoginSchema,
} from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const data = RegisterSchema.parse(req.body);
    const user = await authService.register(data);
    res.status(201).json({ user });
  } catch (err: any) {
    if (err instanceof ZodError) {
      // Handle validation errors with detailed feedback
      const validationErrors = err.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
        code: error.code,
      }));

      return res.status(400).json({
        error: "ValidationError",
        message: "Invalid input data",
        details: validationErrors,
      });
    }

    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = LoginSchema.parse(req.body);
    const result = await authService.login(data);
    res.json(result);
  } catch (err: any) {
    if (err instanceof ZodError) {
      // Handle validation errors with detailed feedback
      const validationErrors = err.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
        code: error.code,
      }));

      return res.status(400).json({
        error: "ValidationError",
        message: "Invalid input data",
        details: validationErrors,
      });
    }

    res.status(400).json({ message: err.message });
  }
};
