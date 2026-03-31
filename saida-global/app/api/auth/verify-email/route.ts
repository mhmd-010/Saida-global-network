import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { VerificationCode } from "@/models/verificationcode";
import { User } from "@/models/Users";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, code } = await req.json();

    const record = await VerificationCode.findOne({ email, code });

    if (!record) {
      return NextResponse.json(
        { message: "Invalid verification code." },
        { status: 400 }
      );
    }

    if (new Date() > new Date(record.expiresAt)) {
      return NextResponse.json(
        { message: "Verification code has expired." },
        { status: 400 }
      );
    }

    const user = await User.findOneAndUpdate(
      { email },
      { isEmailVerified: true },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    await VerificationCode.deleteMany({ email });

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
    });

    const res = NextResponse.json({
      message: "Email verified successfully.",
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (error) {
    console.error("VERIFY EMAIL ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong during verification." },
      { status: 500 }
    );
  }
}