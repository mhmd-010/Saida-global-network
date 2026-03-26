import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-[80px] py-[70px]">
      <div className="mx-auto max-w-[1280px] flex items-start justify-between gap-[80px]">

        {/* LEFT */}
        <div className="max-w-[380px]">
          <div className="flex items-center gap-[12px]">
            {/* If you already have your SGN icon, use it here */}
            <Image
              src="/image/Footer Logo.svg"
              alt="SGN"
              width={38}
              height={38}
            />

            <span className="text-[18px] font-semibold text-black">
              Saida Global Network
            </span>
          </div>

          <p className="mt-[18px] text-[13px] leading-[180%] text-black/50">
            To foster connections among the brightest minds in Saida, we established Saida Global Network.
            This platform aims to empower individuals and businesses alike through education, opportunities,
            trust, and technology, ensuring that the Saida community remains interconnected, even across great distances!
          </p>

          {/* Social Icons */}
          <div className="mt-[26px] flex items-center gap-[14px]">
            {["f", "x", "in", "ig"].map((t) => (
              <button
                key={t}
                className="w-[36px] h-[36px] rounded-full border border-black/20 flex items-center justify-center text-black"
                aria-label={`social-${t}`}
              >
                {t === "f" ? "f" : t === "x" ? "𝕏" : t === "in" ? "in" : "⌁"}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="min-w-[140px]">
          <h4 className="text-[14px] font-semibold text-black mb-[18px]">Navigation</h4>
          <ul className="space-y-[12px] text-[13px] text-black/45">
            <li>Services</li>
            <li>About us</li>
            <li>News</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="min-w-[160px]">
          <h4 className="text-[14px] font-semibold text-black mb-[18px]">Services</h4>
          <ul className="space-y-[12px] text-[13px] text-black/45">
            <li>Sanad</li>
            <li>Saida Digital District</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-[220px]">
          <h4 className="text-[14px] font-semibold text-black mb-[18px]">Contact</h4>

          <div className="space-y-[14px] text-[13px] text-black/45">
            <div className="flex items-start gap-[10px]">
              <span className="text-black">📞</span>
              <span>+961 3 555 120</span>
            </div>

            <div className="flex items-start gap-[10px]">
              <span className="text-black">✉️</span>
              <span>hello@saidacom.com</span>
            </div>

            <div className="flex items-start gap-[10px]">
              <span className="text-black">📍</span>
              <span>
                2972 Westheimer Rd. Santa Ana,
                Illinois 85486
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}