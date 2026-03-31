import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/Users";
import { VerificationCode } from "@/models/verificationcode";
import { sendVerificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      firstName,
      fatherName,
      lastName,
      dateOfBirth,
      country,
      city,
      phone,
      email,
      password,
      linkedin,
      facebook,
      instagram,
      comments,
    } = body;

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "First name, last name, email, and password are required." },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      fatherName,
      lastName,
      dateOfBirth,
      country,
      city,
      phone,
      email,
      password: hashedPassword,
      linkedin,
      facebook,
      instagram,
      comments,
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await VerificationCode.deleteMany({ email });
    await VerificationCode.create({
      email,
      code,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    await sendVerificationEmail(email, code);

    return NextResponse.json({
      message: "Account created. Verification code sent to email.",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json(
      { message: "Something went wrong during registration." },
      { status: 500 }
    );
  }
}