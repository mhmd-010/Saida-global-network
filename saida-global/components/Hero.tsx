import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full bg-[#F8F9FC] px-8 py-24">
      <div className="mx-auto max-w-[1280px] h-[515px] flex justify-between">

        {/* LEFT SIDE */}
       <div className="flex flex-col gap-[24px]">
  <h1 className="text-[67px] leading-[120%] tracking-[-0.03em] font-semibold text-black">
    <span className="text-[#2381B6]">Empowering Saida’s</span>
    <br />
    <span className="text-black">Future through technology</span>
  </h1>

  <p className="text-[18px] leading-[150%] text-gray-600 max-w-[520px]">
    Central hub and Marketplace for all Saida diaspora members globally, with
    direct access to all four verticals.
  </p>

  <div className="flex items-center gap-[24px] pt-[12px]">
    <button className="h-[56px] px-[32px] rounded-full bg-black text-white text-[14px] font-medium">
      Register Now →
    </button>

    <a href="#" className="text-[14px] font-semibold underline text-black">
      Learn more →
    </a>
  </div>
  
{/* Supported By */}
<div className="flex items-center gap-[32px] pt-[40px]">
  <span className="text-[14px] text-black/60 font-semibold">
    Supported by
  </span>

  <div className="flex items-center gap-[10px]">
    <Image
      src="/image/municipality.png"
      alt="Saida Municipality & communications"
      width={28}
      height={28}
      className="object-contain"
    />
   <span className="text-[16px] text-gray-500 font-semibold max-w-[180px] leading-[130%]">
  Saida Municipality & Communications
</span>
  </div>

  <div className="flex items-center gap-[10px]">
    <Image
      src="/image/municipality.png"
      alt="Lebanese GovermentalInstituation of Education"
      width={28}
      height={28}
      className="object-contain"
    />
    <span className="text-[16px] text-gray-500 font-semibold leading-[130%] max-w-[200px]">
  Lebanese Governmental Institution of Education
</span>
  </div>
</div>
</div>

        
        {/* RIGHT SIDE */}
        <div className="w-[588px] h-[515px] mt-[40px]">
<div className="grid grid-cols-[1.4fr_1fr] gap-6">

  {/* Image Card */}
      <div className="relative h-[275px] w-[303px] overflow-hidden rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rounded-tl-[1000px]">
  <Image
    src="/image/saida-castle.png"
    alt="Saida Castle"
    fill
    className="object-cover object-left-top"
    priority
  />
</div>

  {/* Grow Card */}
 <div className="w-[259px] h-[281px] bg-gray-200 rounded-[20px] flex flex-col p-[24px]">

  <div className="flex flex-col gap-[12px] mt-[14px]">
    <h3 className="text-[72px] font-bold leading-[120%] tracking-[-0.03em] text-black">
      Grow
    </h3>

    <p className="text-black text-sm leading-relaxed">
      Connect with Saida’s greatest minds and greatest talents.
    </p>
  </div>

  {/* Arrow */}
  <div className="mt-auto flex justify-center">
  <Image
    src="/image/arrow.svg"
    alt="Arrow"
    width={160}
    height={30}
  />
</div>

</div>

  {/* Black Card (Full Width Bottom) */}
 <div className="col-span-2 relative h-[200px] rounded-[20px] overflow-hidden">

  {/* Background Image */}
  <Image
    src="/image/BG.png"
    alt="Background"
    fill
    className="object-cover"
    priority
  />

  
  {/* Content Layer */}
<div className="relative z-10 h-full p-10">
  <div className="w-[291px] h-[93px] flex flex-col gap-[32px]">
    <p className="text-sm text-gray-300">
      We bring you the best technologies
    </p>

    <h3 className="text-xl font-semibold text-white">
      Working toward a prosperous Saida
    </h3>
  </div>
</div>
<div className="absolute right-8 bottom-2 z-20 opacity-200">
    <Image
      src="/image/network-icon.svg"
      alt="Network Icon"
      width={182}
      height={182}
    />
  </div>
</div>

</div>


      </div>
      </div>
    </section>
  );
}