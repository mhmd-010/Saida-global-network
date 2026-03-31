import mongoose, { Schema, model, models } from "mongoose";

const VerificationCodeSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export const VerificationCode =
  models.VerificationCode || model("VerificationCode", VerificationCodeSchema);