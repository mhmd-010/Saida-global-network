import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full py-[80px] bg-[#F8F9FC] " >
      <div className="max-w-[1280px] mx-auto">

        <div className="relative bg-black rounded-[28px] px-[60px] py-[80px] flex items-center justify-between overflow-hidden">

          {/* Background Gradient */}
          <Image
            src="/image/BG.png"
            alt="Background"
            fill
            className="object-cover opacity-70"
          />

          {/* Content */}
          <div className="relative z-10">

            <h2 className="text-[80px] font-semibold text-white leading-[120%]">
              Ready to join us?
            </h2>

          </div>

          {/* Button */}
          <div className="relative z-10">

            <button className="flex items-center gap-[30px] bg-white text-black font-semibold px-[34px] py-[12px] rounded-full hover:bg-black hover:text-white border border-white transition">

              Get Started

              <span className="text-[18px]">→</span>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}