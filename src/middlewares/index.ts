import express from "express";
import cors from "cors";
import morgan from "morgan";
import { rateLimit } from "./rateLimit.js";

export function setupMiddleware(app: express.Application) {
  // CORS middleware
  app.use(cors());

  // Logging middleware
  app.use(morgan("dev"));

  // Body parsing middleware
  app.use(express.json());

  // Rate limiting middleware (commented out for now)
  // app.use(rateLimit);
}

export function setupErrorHandling(app: express.Application) {
  // 404 handler - must be before error handler
  app.use((req, res) => {
    res.status(404).json({
      message: "Route not found",
      path: req.path,
      method: req.method,
    });
  });

  // Global error handler - must be last
  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      // Log the error for debugging
      console.error("Error occurred:", {
        message: err.message,
        stack: err.stack,
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString(),
      });

      // Handle different types of errors
      if (err.name === "ValidationError") {
        return res.status(400).json({
          message: "Validation error",
          errors: err.errors,
        });
      }

      if (err.name === "UnauthorizedError") {
        return res.status(401).json({
          message: "Unauthorized access",
        });
      }

      // Default error response
      res.status(err.status || 500).json({
        message:
          process.env.NODE_ENV === "production"
            ? "Internal server error"
            : err.message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
      });
    }
  );
}
