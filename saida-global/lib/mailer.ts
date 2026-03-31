import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendVerificationEmail(email: string, code: string) {
  await transporter.sendMail({
    from: `"Saida Global Network" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your verification code",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px;">
        <h2>Verify your email</h2>
        <p>Your verification code is:</p>
        <div style="font-size: 28px; font-weight: bold; letter-spacing: 4px; margin: 16px 0;">
          ${code}
        </div>
        <p>This code expires in 10 minutes.</p>
      </div>
    `,
  });
}