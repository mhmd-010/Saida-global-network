import Image from "next/image";

export default function Stats() {
  const logos = ["/image/Ellipse 1.svg", "/image/Ellipse 2.svg", "/image/Ellipse 3.svg", "/image/Ellipse 4.svg"];

  return (
    <section className="w-full bg-[#F8F9FC] px-[80px] py-[90px]">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-[48px]">
        {/* Top row */}
        <div className="flex items-start justify-between gap-[40px]">
          <h2 className="text-[48px] leading-[120%] tracking-[-0.03em] font-semibold text-black">
            We are Saida, so are you.
          </h2>

          <p className="mt-[14px] max-w-[520px] text-[14px] leading-[180%] text-black/45">
            we are a passionate team of digital enthusiasts dedicated to helping the people of Saida succeed
            in their endeavors. With years of experience and a deep understanding of the community, we stay
            at the forefront of industry trends and technologies.
          </p>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-[0.8fr_1.6fr] gap-[24px]">
          {/* Left stats card */}
          <div className="relative h-[320px] rounded-[28px] overflow-hidden">
            <Image
              src="/image/BG.png"
              alt="Stats background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 h-full p-[32px] flex flex-col justify-between">
              <div>
                <div className="text-white text-[64px] leading-none font-semibold">
                  920<span className="text-[#2381B6]">+</span>
                </div>

                <p className="mt-[10px] text-white/65 text-[14px] leading-[170%] max-w-[260px]">
                  Companies in Saida Global Network’s network
                </p>
              </div>

              <div className="flex items-center justify-center gap-[16px]">
                {logos.map((src) => (
    <div
        key={src}
       className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
      >
        <Image
         src={src}
         alt="Logo"
         width={70}
         height={70}
        className="object-contain"
    />
  </div>
))}

                <span className="text-white text-[74px] font-semibold leading-none relative top-[-8px]">
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Right image card */}
          <div className="relative h-[320px] rounded-[28px] overflow-hidden">
            <Image
              src="/image/saida-castle.png"
              alt="Built for you"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-[36px] font-medium italic drop-shadow">
                Built for You
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}