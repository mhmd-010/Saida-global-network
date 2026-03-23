import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JobFairPage() {
  return (
    <main className="bg-[#F8F9FC] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-[80px] pt-[40px] pb-[60px]">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-[40px]">

          {/* IMAGE */}
          <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden">
            <Image
              src="/image/seminar.png"
              alt="Job Fair"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT + BUTTON */}
          <div className="flex items-start justify-between">

            <div>
              <h1 className="text-[72px] text-black leading-[110%] font-semibold max-w-[750px]">
                <span className="text-[#2381B6]">Saida’s</span> Job Fair is Here
              </h1>

              <p className="mt-[44px] text-[14px] leading-[180%] text-black/50 max-w-[450px]">
                Join us at the Saida Global Network Job Fair! Discover exciting career
                opportunities and connect with top employers. Don't miss your chance
                to take the next step in your professional journey!
              </p>
            </div>

            <button className="flex items-center gap-[25px] bg-black text-white px-[40px] py-[20px] rounded-full hover:opacity-70 transition">
              How to Join →
            </button>

          </div>

        </div>
      </section>

      {/* LEARN SECTION */}
      <section className="px-[80px] py-[60px]">
        <div className="mx-auto max-w-[1280px]">

          <h2 className="text-[48px] text-black font-semibold mb-[32px]">
            Learn all about it.
          </h2>

          <div className="grid grid-cols-3 gap-[24px]">

            {/* LOCATION */}
            <div className="bg-[#FFFFFF] rounded-[20px] p-[28px] ">
              <h3 className="font-semibold mb-[12px]">Location</h3>
              <p className="text-sm text-black/70">
                Saida’s Municipality Hall
              </p>
              <p className="text-xs text-black/40 mt-[6px]">
                34th drive next to McDonald's, Saida, Lebanon
              </p>
            </div>

            {/* DATE */}
            <div className="bg-[#FFFFFF] rounded-[20px] p-[28px]">
              <h3 className="font-semibold mb-[12px]">Date & Time</h3>
              <p className="text-sm text-black/70">
                12 Aug - 18 Aug, 8:00 - 19:30
              </p>
              <p className="text-xs text-black/40 mt-[6px]">
                Doors open at 8:00 AM
              </p>
            </div>

            {/* ENTRY */}
            <div className="bg-[#FFFFFF] rounded-[20px] p-[28px]">
              <h3 className="font-semibold mb-[12px]">Entry Access</h3>
              <p className="text-sm text-black/70">
                QR Code
              </p>
              <p className="text-xs text-black/40 mt-[6px]">
                Grab your ticket at kiosks throughout the event
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHO IS COMING */}
      <section className="px-[80px] py-[60px]">
        <div className="mx-auto max-w-[1280px] flex gap-[80px]">

          {/* LEFT */}
          <div className="min-w-[300px]">
            <h2 className="text-[36px] font-semibold">
              Who is coming?
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex-1">

            <p className="text-[14px] text-black/50 max-w-[480px] mb-[30px]">
              We are excited to announce that 32 local businesses from Saida will
              participate in the first-ever open job fair. This event aims to connect
              job seekers with diverse employers, highlighting the vibrant local economy
              and available career paths.
            </p>

            <div className="grid grid-cols-4 gap-[24px] text-sm">

              {[
                "EcoTech","GreenWave","SolarSync","WindForce",
                "BioEnergy","EcoSphere","TerraPower","HydroGen",
                "CleanFuture","Sustainify","RegenTech","EcoMotive",
                "SolarCity","GreenGrid","EcoStream","NatureNest",
                "EcoLution","AgriTech","SmartWaste","GreenPulse",
                "EcoXplore","BioSphere","PureEnergy","SolarFlow",
                "WindHarvest","EcoFusion"
              ].map((company) => (
                <div key={company}>
                  <p className="font-semibold text-black">{company}</p>
                  <p className="text-black/40 text-xs">
                    Company description here
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}