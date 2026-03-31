import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/Users";

export async function DELETE() {
  try {
    await connectDB();

    const token = (await cookies()).get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    await User.findByIdAndDelete(decoded.userId);

    const res = NextResponse.json({ message: "Profile deleted." });
    res.cookies.set("token", "", { path: "/", maxAge: 0 });

    return res;
  } catch {
    return NextResponse.json({ message: "Delete failed" }, { status: 400 });
  }
}