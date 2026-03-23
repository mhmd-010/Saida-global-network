import Image from "next/image";
import Link from "next/link";

export default function SanadNavbar() {
  return (
    <nav className="w-full px-[80px] pt-[36px]">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-[12px]">
          <Image
            src="/image/SGN Icon.svg"
            alt="Sanad"
            width={34}
            height={34}
            className="object-contain"
          />
          <span className="text-[22px] font-semibold text-black">Sanad</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[18px]">
          {/* Language toggle */}
          <div className="flex items-center rounded-full bg-[#F3F3F3] p-[4px]">
            <button className="w-[34px] h-[30px] rounded-full bg-white text-[13px] font-semibold text-black shadow-sm">
              EN
            </button>
            <button className="w-[34px] h-[30px] text-[13px] font-semibold text-black/60">
              AR
            </button>
          </div>

          {/* Back to main site */}
          <Link
            href="/"
            className="h-[48px] px-[28px] rounded-full border border-black text-[15px] font-medium text-black flex items-center justify-center"
          >
            Saida Global Network
          </Link>

          {/* Register / Login */}
          <button className="h-[48px] px-[28px] rounded-full bg-black text-white text-[15px] font-medium">
            Register / Login
          </button>
        </div>
      </div>
    </nav>
  );
}