"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] px-[24px] py-[24px]">
      <div className="mx-auto flex min-h-[92vh] max-w-[1280px] flex-col rounded-[28px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/10 px-[32px] py-[18px]">
          <Image src="/image/SGN icon.svg" alt="" width={40} height={40} />

          <Link
            href="/auth"
            className="rounded-full border border-black/10 px-[16px] py-[8px] text-[14px] text-black"
          >
         Back
          </Link>
        </div>

        {/* Content */}
        <div
          className="flex flex-1 items-center justify-center px-[20px] py-[40px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        >
          <div className="w-full max-w-[720px]">

            {/* Header */}
            <div className="text-center">
              <div className="mx-auto mb-[12px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E9EEFF]">
                <span className="text-[24px]">👤</span>
              </div>

              <h1 className="text-[28px] font-semibold text-black">
                Personal Information
              </h1>

              <p className="mt-[6px] text-[14px] text-black/50">
                Provide essential information to proceed.
              </p>
            </div>

            {/* Form */}
            <form className="mt-[30px] grid grid-cols-2 gap-[16px]">

              {/* First Name */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  First Name *
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] text-black border border-black/10 px-[14px]"
                  placeholder="James"
                />
              </div>

              {/* Father Name */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Father's Name *
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] text-black border border-black/10 px-[14px]"
                  placeholder="Roger"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Last Name *
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] text-black border border-black/10 px-[14px]"
                  placeholder="Brown"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="mt-[6px] h-[48px] w-full rounded-[10px] text-black border border-black/10 px-[14px]"
                />
              </div>

              {/* Country */}
              <div>
                <label className="text-[14px] font-bold text-black ">
                  Country of Residence *
                </label>
                <select className="mt-[6px] h-[48px] w-full rounded-[10px] border border-black/10 px-[14px]">
                  <option>Lebanon</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="text-[14px] font-bold text-black ">
                  City of Residence *
                </label>
                <select className="mt-[6px] h-[48px] w-full rounded-[10px] border border-black/10 px-[14px]">
                  <option>Saida</option>
                </select>
              </div>

              {/* Phone */}
              <div className="col-span-2">

                <label className="text-[14px] font-bold text-black ">
                  Phone Number *
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px]  border border-black/10 px-[14px]"
                  placeholder="+961"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Email *
                </label>
                <input
                  type="email"
                  className="mt-[6px] h-[48px] w-full rounded-[10px] text-black border border-black/10 px-[14px]"
                  placeholder="example@email.com"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  LinkedIn (Optional)
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] border border-black/10 px-[14px]"
                  placeholder="https://"
                />
              </div>

              {/* Facebook */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Facebook (Optional)
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] border border-black/10 px-[14px]"
                  placeholder="https://"
                />
              </div>

              {/* Instagram */}
              <div>
                <label className="text-[14px] font-bold text-black">
                  Instagram (Optional)
                </label>
                <input
                  className="mt-[6px] h-[48px] w-full rounded-[10px] border border-black/10 px-[14px]"
                  placeholder="https://"
                />
              </div>

              {/* Comments */}
              <div className="col-span-2">
                <label className="text-[14px] font-bold text-black">
                  Comments (Optional)
                </label>
                <textarea
                  className="mt-[6px] h-[100px] w-full rounded-[10px] border border-black/10 px-[14px] py-[10px]"
                  placeholder="Additional comments..."
                />
              </div>

              {/* Button */}
              <div className="col-span-2 mt-[10px]">
                <button
                  type="submit"
                  className="h-[54px] w-full rounded-[12px] bg-[#4B74FF] text-white font-bold shadow-[0_8px_20px_rgba(75,116,255,0.3)]"
                >
                  Continue
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-[32px] py-[16px] text-[14px] text-black/40">
          <p>© 2026 Saida Global Network</p>
          <span>ENG</span>
        </div>
      </div>
    </main>
  );
}