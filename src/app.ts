import express from "express";
import routes from "./routes/index.js";
import { setupMiddleware, setupErrorHandling } from "./middlewares/index.js";

const app = express();

// Setup middleware
setupMiddleware(app);

// Routes
app.use("/api/v1", routes);

// Setup error handling (must be last)
setupErrorHandling(app);

export default app;
