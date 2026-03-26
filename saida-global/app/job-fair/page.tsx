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
            <section className="px-[80px] py-[70px]">
  <div className="mx-auto max-w-[1280px]">

    {/* Title */}
    <h2 className="text-[48px] font-bold text-black">
      Learn all about it.
    </h2>

    {/* Cards */}
    <div className="mt-[34px] grid grid-cols-3 gap-[24px]">

      {/* Card 1 */}
      <div className="rounded-[22px] bg-[#FFFFFF] px-[28px] py-[40px]">
        <Image
          src="/image/maps-location-01.svg"
          alt=""
          width={72}
          height={72}
        />

        <h3 className="mt-[40px] text-[26px] font-semibold text-black">
          Location
        </h3>

        <p className="mt-[30px] text-[20px] text-black">
          Saida’s Municipality Hall
        </p>

        <p className="mt-[12px] text-[13px] text-black/40 leading-[160%]">
          34th drive next to McDonald’s, Saida, Lebanon 29389
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-[22px] bg-[#FFFFFF] px-[28px] py-[40px]">
        <Image
          src="/image/calendar-02.svg"
          alt=""
          width={72}
          height={72}
        />

        <h3 className="mt-[40px] text-[26px] font-semibold text-black">
          Date & Time
        </h3>

        <p className="mt-[30px] text-[20px] text-black">
          12 Aug – 18 Aug, 8:00 – 19:30
        </p>

        <p className="mt-[12px] text-[13px] text-black/40 leading-[160%]">
          Doors open at 8:00 AM, you may show up earlier to help with organization.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-[22px] bg-[#FFFFFF] px-[28px] py-[40px]">
        <Image
          src="/image/calendar-02.svg"
          alt=""
          width={72}
          height={72}
        />

        <h3 className="mt-[40px] text-[26px] font-semibold text-black">
          Entry Access
        </h3>

        <p className="mt-[30px] text-[20px] text-black">
          QR Code
        </p>

        <p className="mt-[12px] text-[13px] text-black/40 leading-[160%]">
          Grab your ticket at any of our open kiosks throughout the event, any day or time!
        </p>
      </div>

    </div>

  </div>
</section>

      {/* WHO IS COMING */}
                   <section className="px-[80px] py-[60px]">
  <div className="mx-auto max-w-[1280px]">
    {/* Top row */}
    <div className="flex items-start justify-between gap-[80px]">
      <h2 className="text-[48px] font-bold text-black min-w-[300px]">
        Who is coming?
      </h2>

      <p className="max-w-[520px] text-[14px] leading-[180%] text-black/50">
        We are excited to announce that 32 local businesses from Saida will
        participate in the first-ever open job fair. This event aims to connect
        job seekers with diverse employers, highlighting the vibrant local economy
        and available career paths.
      </p>
    </div>

    {/* Company list below */}
    <div className="mt-[40px] grid grid-cols-4 gap-x-[48px] gap-y-[28px]">
      {[
        { name: "EcoTech", desc: "A pioneering firm dedicated to sustainable technology." },
        { name: "GreenWave", desc: "A company specializing in eco-friendly products." },
        { name: "SolarSync", desc: "An enterprise providing advanced solar energy systems." },
        { name: "WindForce", desc: "A startup creating wind turbine technology for homes." },

        { name: "BioEnergy", desc: "A firm focused on biofuel production and innovation." },
        { name: "EcoSphere", desc: "A company developing circular economy solutions." },
        { name: "TerraPower", desc: "An organization working on geothermal energy projects." },
        { name: "HydroGen", desc: "A startup specializing in hydrogen fuel technology." },

        { name: "CleanFuture", desc: "A firm aimed at reducing carbon footprints." },
        { name: "Sustainify", desc: "A company dedicated to sustainable living products." },
        { name: "RegenTech", desc: "An innovative company focused on regenerative energy." },
        { name: "EcoMotive", desc: "A startup creating sustainable transportation solutions." },

        { name: "SolarCity", desc: "A company providing comprehensive solar energy services." },
        { name: "GreenGrid", desc: "An enterprise focused on energy-efficient grid systems." },
        { name: "EcoStream", desc: "A firm specializing in water conservation technologies." },
        { name: "NatureNest", desc: "A company providing eco-friendly housing solutions." },

        { name: "EcoLution", desc: "A startup dedicated to innovative environmental solutions." },
        { name: "AgriTech", desc: "A firm focused on sustainable agriculture practices." },
        { name: "SmartWaste", desc: "An organization developing waste management innovations." },
        { name: "GreenPulse", desc: "A startup focused on energy-efficient products." },

        { name: "EcoXplore", desc: "A company specializing in sustainable travel solutions." },
        { name: "BioSphere", desc: "An enterprise dedicated to ecological conservation." },
        { name: "PureEnergy", desc: "A startup developing clean energy alternatives." },
        { name: "SolarFlow", desc: "A company innovating in solar panel technology." },

        { name: "WindHarvest", desc: "A firm specializing in harnessing wind energy." },
        { name: "EcoFusion", desc: "A startup merging technology with sustainability." },
      ].map((company) => (
        <div key={company.name}>
          <p className="font-semibold text-black border-b border-black/30 inline-block">
            {company.name}
          </p>
          <p className="mt-[6px] text-[13px] leading-[160%] text-black/45 max-w-[220px]">
            {company.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}