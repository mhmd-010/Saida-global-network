import Image from "next/image";
import Footer from "@/components/Footer";
import SanadNavbar from "@/components/SanadNavbar";

export default function SandoukPage() {
  const impactAreas = [
    {
      category: "Education",
      title: "Academic Scholarships",
      desc: "Supporting high-performing students with financial needs to pursue higher education.",
      image: "/image/Grads.png",
      amount: "$15,000 / $20,000",
      progress: "75%",
      width: "75%",
    },
    {
      category: "Technology",
      title: "Digital Empowerment",
      desc: "Bridging the tech divide by establishing youth coding hubs and remote work centers.",
      image: "/image/digitalmousecursor.png",
      amount: "$12,000 / $30,000",
      progress: "40%",
      width: "40%",
    },
    {
      category: "Business",
      title: "SME Micro-grants",
      desc: "Fueling local business growth through interest-free seed capital and mentorship.",
      image: "/image/plant.png",
      amount: "$45,000 / $50,000",
      progress: "90%",
      width: "90%",
    },
  ];

  const communityCards = [
    {
      title: "Aspiring Students",
      desc: "Helping the next generation access education despite economic shifts.",
      image: "/image/community-students.png",
    },
    {
      title: "Small Business Owners",
      desc: "Providing the support needed to sustain and grow local livelihoods.",
      image: "/image/community-business.png",
    },
    {
      title: "Vulnerable Seniors",
      desc: "Ensuring dignified living and health support for the elderly community.",
      image: "/image/community-seniors.png",
    },
    {
      title: "Tech Innovators",
      desc: "Supporting youth leaders in digital and remote economies.",
      image: "/image/community-tech.png",
    },
  ];

  return (
    <main className="bg-[#F8F9FC] min-h-screen">
      <SanadNavbar
        title="Sanduk Al Eghtirab"
        logo="/image/SGN Icon.svg"
        buttonText="Contact Us"
      />

      {/* HERO */}
      <section className="px-[80px] pt-[28px] pb-[48px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative w-full h-[450px] rounded-[28px] overflow-hidden">
            <Image
              src="/image/handshake.png"
              alt="Sandouk hero"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-[26px] grid grid-cols-[1.1fr_0.9fr] gap-[48px] items-start">
            <h1 className="text-[64px] leading-[110%] tracking-[-0.03em] font-semibold text-black max-w-[700px]">
              Empowering Saida
              <br />
              through{" "}
              <span className="text-[#2F86B8]">Collective</span>
              <br />
              <span className="text-[#2F86B8]">Growth.</span>
            </h1>

            <div className="pt-[10px]">
              <p className="max-w-[430px] text-[18px] leading-[165%] text-black/55">
                Organized solidarity. A transparency-driven fund bridging the
                Saida diaspora with high-impact local development and sustainable
                initiatives.
              </p>

              <button className="mt-[50px] h-[52px] px-[24px] rounded-full bg-black text-white text-[15px] font-medium flex items-center gap-[30px] hover:opacity-90 transition justify">
                Contact Us
                <span className="text-[18px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#FFFFFF] px-[80px] py-[46px]">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="text-[14px] font-semibold tracking-[0.02em] text-[#2F86B8] uppercase">
            What is it?
          </p>

          <h2 className="mt-[14px] text-[48px] leading-[150%] tracking-[-0.02em] font-semibold text-black max-w-[980px] mx-auto">
            “Organized solidarity is the bridge between{" "}
            <span className="text-black/35">good intentions</span> and lasting impact.”
          </h2>
        </div>
      </section>

      {/* IMPACT AREAS */}
      <section className="px-[80px] py-[70px]">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-[48px] leading-[120%] font-semibold text-black">
            Impact Areas.
          </h2>

          <p className="mt-[10px] max-w-[520px] text-[14px] leading-[170%] text-black/45">
            We direct funds into critical sectors that define the quality of life
            and future prosperity of our local community.
          </p>

          <div className="mt-[40px] grid grid-cols-3 gap-[50px]">
            {impactAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <div className="relative h-[170px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-[20px]">
                  <p className="text-[11px] font-semibold tracking-[0.04em] uppercase text-[#2F86B8]">
                    {item.category}
                  </p>

                  <h3 className="mt-[25px] text-[24px] leading-[120%] font-bold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-[15px] text-[13px] leading-[170%] text-black/45 min-h-[66px]">
                    {item.desc}
                  </p>

                  <div className="mt-[14px] h-[4px] w-full rounded-full bg-[#D9D9D9] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2F86B8]"
                      style={{ width: item.width }}
                    />
                  </div>

                  <div className="mt-[10px] flex items-center justify-between text-[12px] text-black font-semibold">
                    <span>{item.amount}</span>
                    <span className="text-[#2F86B8]">{item.progress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 VALUES */}
      
<section className="px-[80px] pb-[70px] mt-[170px]">
  <div className="mx-auto max-w-[1280px] grid grid-cols-3 gap-[170px]">

    {/* Strategic */}
    <div>
      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#2F86B8] flex items-center justify-center">
        <Image
          src="/image/node-tree.svg"
          alt="Strategic"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      <h3 className="mt-[22px] text-[24px] font-semibold text-black">
        Strategic
      </h3>

      <p className="mt-[14px] max-w-[330px] text-[14px] leading-[180%] text-black/50">
        We focus on projects that create long-term value, moving beyond immediate
        relief to structural improvements in Saida&apos;s infrastructure and services.
      </p>
    </div>

    {/* Sustainable */}
    <div>
      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#2F86B8] flex items-center justify-center">
        <Image
          src="/image/loop-left-line.svg"
          alt="Sustainable"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      <h3 className="mt-[22px] text-[24px] font-semibold text-black">
        Sustainable
      </h3>

      <p className="mt-[14px] max-w-[330px] text-[14px] leading-[180%] text-black/50">
        Every dollar is invested in models that can eventually become self-sustaining,
        ensuring your contribution seeds a future of independence.
      </p>
    </div>

    {/* Transparent */}
    <div>
      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#2F86B8] flex items-center justify-center">
        <Image
          src="/image/shield-check-line.svg"
          alt="Transparent"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      <h3 className="mt-[22px] text-[24px] font-semibold text-black">
        Transparent
      </h3>

      <p className="mt-[14px] max-w-[360px] text-[14px] leading-[180%] text-black/50">
        Full visibility into fund allocation. Every contributor receives real-time
        updates and detailed impact reports on their funded initiatives.
      </p>
    </div>

  </div>
</section>

      {/* FOUNDATION OF TRUST */}
           <section className="bg-black px-[80px] py-[80px] mt-[80px]">
  <div className="mx-auto max-w-[1280px] grid grid-cols-[1fr_1fr] gap-[60px] items-center">

    {/* LEFT SIDE */}
    <div>

      <h2 className="text-[40px] font-semibold text-white">
        Foundation of Trust
      </h2>

      <p className="mt-[18px] max-w-[480px] text-[15px] leading-[180%] text-white/60">
        The fund is governed by a decentralized committee of diaspora
        professionals and local civil society leaders, ensuring strict oversight
        and non-partisan allocation.
      </p>

      <div className="mt-[34px] flex flex-col gap-[26px]">

        {/* Item 1 */}
        <div className="flex items-start gap-[14px]">
          <Image src="/image/div.mt-1.svg" alt="" width={30} height={30} />
          <div>
            <p className="text-white font-semibold text-[15px]">
              Independent Oversight
            </p>
            <p className="text-white/50 text-[13px] mt-[4px]">
              Regular audits performed by tier-one international accounting firms.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-[14px]">
          <Image src="/image/div.mt-1 (1).svg" alt="" width={30} height={30} />
          <div>
            <p className="text-white font-semibold text-[15px]">
              Public Documentation
            </p>
            <p className="text-white/50 text-[13px] mt-[4px]">
              Every board meeting minute and financial transaction is archived and accessible.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-[14px]">
          <Image src="/image/div.mt-1 (2).svg" alt="" width={30} height={30} />
          <div>
            <p className="text-white font-semibold text-[15px]">
              Impact Reporting
            </p>
            <p className="text-white/50 text-[13px] mt-[4px]">
              Detailed quarterly reports measuring project KPIs and social return on investment.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE (Dashboard Image/Card) */}
         <div className="flex justify-end">
  <Image
    src="/image/div.relative.png"
    alt="Dashboard"
    width={576}
    height={442}
    className="rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
  />
</div>

  </div>
</section>
      {/* MODERN PHILANTHROPY TOOLS */}
                 <section className="px-[80px] py-[80px]">
  <div className="mx-auto max-w-[1280px]">

    {/* Title */}
    <div className="text-center">
      <h2 className="text-[40px] leading-[120%] font-bold text-black">
        Modern Philanthropy Tools
      </h2>

      <p className="mt-[10px] text-[14px] leading-[170%] text-black/85">
        We leverage technology to make giving simple, traceable, and rewarding.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-[42px] grid grid-cols-2 gap-[28px]">

      {/* Card 1 */}
      <div className="rounded-[24px] border border-black bg-white px-[30px] pt-[30px] pb-[28px]">
        <div className="w-[44px] h-[44px] rounded-[12px] bg-[#2F86B8] flex items-center justify-center">
          <Image
            src="/image/philanthro1.svg"
            alt="Contribution Platform"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <h3 className="mt-[22px] text-[24px] font-bold text-black">
          Contribution Platform
        </h3>

        <p className="mt-[20px] max-w-[460px] text-[14px] leading-[175%] text-black/85">
          Seamlessly donate from anywhere in the world with support for local
          and international payment methods.
        </p>

        <div className="mt-[26px] h-[150px] rounded-[14px] bg-[#F3F4F6] border border-black/5 flex items-center justify-center">
          <span className="text-[18px] text-black/30 font-medium">
            Coming soon
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded-[24px] border border-black bg-white px-[30px] pt-[30px] pb-[28px]">
        <div className="w-[44px] h-[44px] rounded-[12px] bg-[#20B486] flex items-center justify-center">
          <Image
            src="/image/philanthro2.svg"
            alt="Impact Dashboards"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <h3 className="mt-[22px] text-[24px] font-bold text-black">
          Impact Dashboards
        </h3>

        <p className="mt-[20px] max-w-[460px] text-[14px] leading-[175%] text-black/85">
          Watch your impact grow in real-time. Follow projects from inception to
          completion with photo updates.
        </p>

        <div className="mt-[26px] h-[150px] rounded-[14px] bg-[#F3F4F6] border border-black/5 flex items-center justify-center">
          <span className="text-[18px] text-black/30 font-medium">
            Coming soon
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FUND LIFECYCLE */}
                  <section className="px-[80px] py-[80px]">
  <div className="mx-auto max-w-[1280px] text-center">

    {/* Title */}
    <h2 className="text-[48px] font-bold text-black">
      The Fund Lifecycle
    </h2>

    {/* Timeline */}
    <div className="mt-[50px] relative">

      {/* Horizontal line */}
      <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-black/20" />

      {/* Steps */}
      <div className="relative grid grid-cols-5 gap-[20px]">

        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-[#2F86B8] text-white flex items-center justify-center text-[18px] font-semibold">
            1
          </div>
          <p className="mt-[18px] font-semibold text-black">
            Contribution
          </p>
          <p className="mt-[15px] text-[13px] text-black/45 max-w-[150px]">
            Diaspora donates through the platform.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full border-2 border-[#137FEC33] text-black flex items-center justify-center text-[18px] font-semibold bg-white">
            2
          </div>
          <p className="mt-[18px] font-semibold text-black">
            Validation
          </p>
          <p className="mt-[15px] text-[13px] text-black/45 max-w-[150px]">
            Governance committee reviews project proposals.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full border-2 border-[#137FEC33] text-black flex items-center justify-center text-[18px] font-semibold bg-white">
            3
          </div>
          <p className="mt-[18px] font-semibold text-black">
            Allocation
          </p>
          <p className="mt-[15px] text-[13px] text-black/45 max-w-[150px]">
            Funds released to vetted local implementers.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full border-2 border-[#137FEC33] text-black flex items-center justify-center text-[18px] font-semibold bg-white">
            4
          </div>
          <p className="mt-[18px] font-semibold text-black">
            Execution
          </p>
          <p className="mt-[15px] text-[13px] text-black/45 max-w-[150px]">
            Project implemented with milestone tracking.
          </p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full bg-[#22B07D] text-white flex items-center justify-center text-[18px] font-semibold">
            5
          </div>
          <p className="mt-[18px] font-semibold text-black">
            Reporting
          </p>
          <p className="mt-[15px] text-[13px] text-black/45 max-w-[150px]">
            Full impact report sent to all contributors.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* SERVING THE COMMUNITY */}
                 <section className="px-[80px] py-[80px]">
  <div className="mx-auto max-w-[1280px]">
    {/* Title */}
    <h2 className="text-[48px] leading-[120%] font-bold text-black text-center">
      Serving the Saida Community
    </h2>

    {/* Cards */}
    <div className="mt-[55px] grid grid-cols-4 gap-[22px]">
      {/* Card 1 */}
      <div className="rounded-[20px] bg-white overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        <div className="relative h-[165px] w-full">
          <Image
            src="/image/kid.png"
            alt="Aspiring Students"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-[20px] pt-[20px] pb-[22px]">
          <h3 className="text-[16px] font-bold text-black">
            Aspiring Students
          </h3>
          <p className="mt-[10px] text-[14px] leading-[165%] text-black/75">
            Helping the next generation access education despite economic shifts.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="rounded-[20px] bg-white overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        <div className="relative h-[165px] w-full">
          <Image
            src="/image/coffeeshop.png"
            alt="Small Business Owners"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-[20px] pt-[20px] pb-[22px]">
          <h3 className="text-[16px] font-bold text-black">
            Small Business Owners
          </h3>
          <p className="mt-[10px] text-[14px] leading-[165%] text-black/75">
            Providing the support needed to sustain and grow local livelihoods.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded-[20px] bg-white overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        <div className="relative h-[165px] w-full">
          <Image
            src="/image/grandparents.png"
            alt="Vulnerable Seniors"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-[20px] pt-[20px] pb-[22px]">
          <h3 className="text-[16px] font-bold text-black">
            Vulnerable Seniors
          </h3>
          <p className="mt-[10px] text-[14px] leading-[165%] text-black/75">
            Ensuring dignified living and health support for the elderly community.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="rounded-[20px] bg-white overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        <div className="relative h-[165px] w-full">
          <Image
            src="/image/laptop.png"
            alt="Tech Innovators"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-[20px] pt-[20px] pb-[22px]">
          <h3 className="text-[16px] font-bold text-black">
            Tech Innovators
          </h3>
          <p className="mt-[10px] text-[14px] leading-[165%] text-black/75">
            Supporting youth ventures in digital and remote economies.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FINAL CTA */}
                 <section className="px-[80px] pb-[90px]">
  <div className="mx-auto max-w-[1280px]">

    <div className="relative rounded-[32px] overflow-hidden px-[60px] py-[70px] text-center">

      {/* Background image */}
      <Image
        src="/image/image strips .png"
        alt="CTA background"
        fill
        className="object-cover"
      />

      {/* Blue overlay (your color) */}
      <div className="absolute inset-0 bg-[#2381B6]/90" />

      {/* Content */}
      <div className="relative z-10">

        <h2 className="text-[60px] leading-[115%] font-bold text-white">
          Your City, Your Legacy.
        </h2>

        <p className="mt-[30px] max-w-[700px] mx-auto text-[20px] leading-[175%] text-white/90">
          Join hundreds of your fellow Saida diaspora members in building a more
          resilient and prosperous city for all.
        </p>

        <div className="mt-[34px] flex items-center justify-center gap-[16px]">

          {/* Button 1 */}
          <button className="h-[52px] px-[26px] rounded-full bg-white text-[#2381B6] text-[16px] font-bold hover:bg-[#f2f2f2] transition">
            Contribute with Confidence
          </button>

          {/* Button 2 */}
          <button className="h-[52px] px-[26px] rounded-full  bg-[#2381B6] border border-white/60 text-white text-[16px] font-bold hover:bg-white/10 transition">
            Participate with Clarity
          </button>

        </div>

      </div>

    </div>

  </div>
</section>

      <Footer />
    </main>
  );
}