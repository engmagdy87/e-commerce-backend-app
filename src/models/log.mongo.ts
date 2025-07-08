import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILog extends Document {
  timestamp: Date;
  level: "info" | "warn" | "error";
  message: string;
}

const LogSchema: Schema = new Schema<ILog>({
  timestamp: { type: Date, default: Date.now },
  level: { type: String, enum: ["info", "warn", "error"], required: true },
  message: { type: String, required: true },
});

export const Log: Model<ILog> =
  mongoose.models.Log || mongoose.model<ILog>("Log", LogSchema);
