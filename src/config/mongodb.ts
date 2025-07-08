import mongoose from "mongoose";
import { config } from "./env.js";

export const connectMongo = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.warn("MongoDB connection failed, continuing without MongoDB:", err);
  }
};
