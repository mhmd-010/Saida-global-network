import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  logo: string;
  buttonText?: string;
};

export default function SanadNavbar({
  title,
  logo,
  buttonText = "Register / Login",
}: Props) {
  return (
    <nav className="w-full px-[80px] pt-[36px]">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-[12px]">
          <Image src={logo} alt="" width={34} height={34} />
          <span className="text-[22px] font-semibold text-black">{title}</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[18px]">

          {/* Language */}
          <div className="flex items-center rounded-full bg-[#D9D9D9] p-[4px]">
            <button className="w-[34px] h-[30px] rounded-full bg-white text-[13px] text-black font-semibold">
              EN
            </button>
            <button className="w-[34px] h-[30px] text-[13px] text-black/60">
              AR
            </button>
          </div>

          {/* Back */}
          <Link
            href="/"
            className="h-[48px] px-[28px]  text-black font-bold rounded-full border border-black flex items-center"
          >
            Saida Global Network
          </Link>

          {/* CTA */}
          <button className="h-[48px] px-[28px] rounded-full bg-black text-white">
            {buttonText}
          </button>

        </div>
      </div>
    </nav>
  );
}