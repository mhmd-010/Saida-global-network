import Image from "next/image";
export default function Navbar() {
  const links = [
    { label: "Services", href: "#" },
    { label: "About us", href: "#" },
    { label: "Saida News", href: "/News" },
    { label: "Resources", href: "#" },
    { label: "Get in touch", href: "#" },
    
  ];

  return (
    <nav className="w-full bg-white px-[80px] py-[30px]">
      <div className="mx-auto w-full max-w-[1281px] h-[48px] flex items-center">
        {/* Left: Logo */}
       <div className="flex items-center gap-[12px] shrink-0 h-[48px]">
  <Image
    src="/image/SGN Icon.svg"
    alt="SGN Icon"
    width={40}
    height={40}
  />

  <span className="text-[18px] font-semibold text-black">
    Saida Global Network
  </span>
</div>

        {/* Middle: Links (centered) */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center gap-[40px] text-[14px] font-semibold text-black/80">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-black">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Language + Register */}
        <div className="flex items-center gap-[24px] shrink-0">
          {/* Language pill */}
          {/* Language Toggle */}
<div className="relative flex items-center bg-gray-100 rounded-full p-[4px] mr-[80px]">
  {/* Active background */}
  <div className="absolute left-[4px] top-[4px] h-[28px] w-[40px] bg-white rounded-full shadow-sm transition-all"></div>

  <button className="relative z-10 w-[40px] h-[28px] text-[12px] font-semibold text-black">
    EN
  </button>

  <button className="relative z-10 w-[40px] h-[28px] text-[12px] font-semibold text-black/60">
    AR
  </button>
</div>

          {/* Register button */}
          <button className="h-[44px] px-8 rounded-full bg-black text-white text-[14px] font-medium">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}