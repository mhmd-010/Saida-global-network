"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] px-[8px] py-[8px]">
      <div className="mx-auto flex min-h-[96vh] max-w-[1400px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/8 px-[40px] py-[22px]">
          <Image
            src="/image/SGN icon.svg"
            alt="Saida Global Network"
            width={38}
            height={38}
          />

          <div className="flex items-center gap-[12px] text-[14px] text-black/50">
            <span>Need help?</span>
            <button className="flex items-center gap-[8px] rounded-[12px] border border-black/10 px-[16px] py-[10px] text-[14px] text-black">
              <span>🎧</span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        {/* Center area */}
        <div
          className="flex flex-1 items-center justify-center px-[24px] py-[40px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        >
          <div className="w-full max-w-[420px]">
            <div className="mb-[18px] flex justify-center">
              <Image
                src="/image/SGN icon.svg"
                alt="Saida Global Network"
                width={52}
                height={52}
              />
            </div>

            <h1 className="text-center text-[26px] font-semibold text-black">
              Welcome to Saida Global Network
            </h1>

            <p className="mx-auto mt-[8px] max-w-[330px] text-center text-[15px] leading-[165%] text-black/50">
              Access all Saida Global Network services with a single account.
            </p>

            <form className="mt-[28px]">
              {/* Email */}
              <div>
                <label className="mb-[8px] block text-[14px] font-bold text-black">
                  Email Address
                </label>
                <div className="flex h-[50px] items-center rounded-[12px] border border-black/10 bg-white px-[14px]">
                  <span className="mr-[10px] text-black/35">✉</span>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-transparent text-[15px] outline-none placeholder:text-black/30"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="my-[22px] flex items-center gap-[14px]">
                <div className="h-[1px] flex-1 bg-black/10" />
                <span className="text-[13px] text-black/35">OR</span>
                <div className="h-[1px] flex-1 bg-black/10" />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-[8px] block text-[14px] font-bold text-black">
                  Phone Number
                </label>
                <div className="flex h-[50px] overflow-hidden rounded-[12px] border border-black/10 bg-white">
                  <div className="flex items-center gap-[8px] border-r border-black/10 px-[12px] text-[15px] text-black/70">
                    <span>🇱🇧</span>
                    <span>+1</span>
                    <span>⌄</span>
                  </div>

                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-[14px] text-[15px] outline-none placeholder:text-black/30"
                  />
                </div>
              </div>

              {/* Remember me */}
              <label className="mt-[18px] flex items-center gap-[10px] text-[14px] text-black/60">
                <input type="checkbox" defaultChecked />
                <span>Remember me</span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="mt-[22px] flex h-[54px] w-full items-center justify-center rounded-[12px] bg-[#4B74FF] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(75,116,255,0.3)] transition hover:opacity-95"
              >
                Proceed
              </button>
            </form>

            {/* Bottom link */}
            <p className="mt-[22px] text-center text-[14px] text-black/55">
              Don’t have an account yet?{" "}
              <Link href="/auth/sign-up" className="font-medium text-black underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-[40px] py-[20px] text-[14px] text-black/45">
          <p>© 2026 Saida Global Network</p>

          <button className="flex items-center gap-[6px]">
            <span>🌐</span>
            <span>ENG</span>
            <span>⌄</span>
          </button>
        </div>
      </div>
    </main>
  );
}