import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Database connected successfully" });
  } catch (error) {
    console.error("DB TEST ERROR:", error);
    return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
  }
}