import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    fatherName: { type: String, trim: true },
    lastName: { type: String, required: true, trim: true },
    dateOfBirth: { type: String },
    country: { type: String },
    city: { type: String },
    phone: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    linkedin: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    comments: { type: String },
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);