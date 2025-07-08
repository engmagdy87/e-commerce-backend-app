import app from "./app.js";
import { connectMongo } from "./config/mongodb.js";
import { config } from "./config/env.js";

export async function startServer() {
  try {
    // await connectMongo();

    const server = app.listen(config.PORT, () => {
      console.log(`Server running on http://localhost:${config.PORT}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM received, shutting down gracefully");
      server.close(() => {
        console.log("Process terminated");
      });
    });

    return server;
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}
