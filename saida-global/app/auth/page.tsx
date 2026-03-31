import Image from "next/image";
import Link from "next/link";

export default function AuthHomePage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] px-[24px] py-[24px]">
      <div className="mx-auto flex min-h-[92vh] max-w-[1280px] flex-col rounded-[28px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/8 px-[32px] py-[18px]">
          <div className="flex items-center gap-[10px]">
            <Image
              src="/image/SGN Icon.svg"
              alt="Saida Global Network"
              width={45}
              height={45}
            />
          </div>

          <div className="flex items-center gap-[12px] text-[14px] text-black/50">
            <span>Need help?</span>
            <button className="rounded-full border border-black/10 px-[16px] py-[8px] text-black">
              Contact Us
            </button>
          </div>
        </div>

        {/* Center content */}
        <div
          className="flex flex-1 items-center justify-center bg-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        >
          <div className="w-full max-w-[380px] text-center">
            <div className="mx-auto mb-[18px] flex justify-center">
              <Image
                src="/image/SGN Icon.svg"
                alt="Saida Global Network"
                width={55}
                height={55}
              />
            </div>

            <h1 className="text-[38px] font-semibold leading-[120%] text-black">
              Welcome to Saida Global Network
            </h1>

            <p className="mx-auto mt-[12px] max-w-[320px] text-[16px] leading-[165%] text-black/55">
              Access all Saida Global Network services with a single account.
            </p>

            <div className="mt-[28px] flex flex-col gap-[12px]">
              <Link
                href="/auth/sign-up"
                className="flex h-[54px] items-center justify-center rounded-[12px] bg-[#4B74FF] text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(75,116,255,0.35)] transition hover:opacity-95"
              >
                Create Account
              </Link>

              <Link
                href="/auth/sign-in"
                className="flex h-[54px] items-center justify-center rounded-[12px] bg-black text-[16px] font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition hover:opacity-95"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-[32px] py-[18px] text-[14px] text-black/45">
          <p>© 2026 Saida Global Network</p>
          <button className="flex items-center gap-[6px]">
            <span>ENG</span>
            <span>⌄</span>
          </button>
        </div>
      </div>
    </main>
  );
}