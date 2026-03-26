import SanadNavbar from "@/components/SanadNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";

export default function SanadPage() {
  return (
    <main className="bg-[#F8F9FC] min-h-screen">
      import SanadNavbar from "@/components/SanadNavbar";

<SanadNavbar
  title="Sanad"
  logo="/image/SGN Icon.svg"
/>
      <section className="w-full px-[80px] pt-[54px] pb-[70px]">
        <div className="mx-auto max-w-[1280px] grid grid-cols-[1.6fr_1fr] gap-[70px] items-center">
          {/* Left side */}
          <div>
            <h1 className="text-[70px] leading-[108%] tracking-[-0.04em] font-semibold text-black max-w-[640px]">
              Mentorship and
              <br />
              Knowledge Sharing
              <br />
              for <span className="text-[#2381B6]">Saida&apos;s Youth</span>
            </h1>

            <p className="mt-[28px] max-w-[560px] text-[18px] leading-[165%] text-black/55">
              Seek out and connect with mentors who are established in your
              field, or even in fields that ignite your passion and curiosity.
              Building these relationships can provide invaluable guidance and
              support as you navigate your career.
            </p>

            <div className="mt-[36px] flex items-center gap-[14px]">
              <button className="h-[56px] px-[28px] rounded-full bg-black text-white text-[18px] font-semibold flex items-center gap-[16px]">
                Get Started
                <span className="text-[22px]">→</span>
              </button>

              <button className="h-[56px] px-[28px] rounded-full border border-black text-black text-[18px] font-semibold">
                Become a Mentor
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative w-[588px] h-[500px] rounded-[28px] overflow-hidden">
            <Image
              src="/image/doctorimage.png"
              alt="Sanad mentorship"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* BRIDGING SECTION */}
      <section className="px-[80px] pb-[60px]">
  <div className="mx-auto max-w-[1280px] rounded-[32px] bg-white px-[56px] pt-[56px] pb-[70px] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
    
    {/* Top row */}
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-[40px] items-start">
      <h2 className="text-[42px] leading-[120%] tracking-[-0.03em] font-semibold text-black max-w-[620px]">
        Bridging the gap between
        <br />
        heritage and ambition.
      </h2>

      <p className="text-[15px] leading-[180%] text-black/45 max-w-[360px] justify-self-end">
        SANAD is a movement to reinvest in our community&apos;s greatest asset:{" "}
        <span className="font-semibold text-black/65">our people.</span>
      </p>
    </div>

    {/* Bottom cards */}
    <div className="mt-[56px] grid grid-cols-3 gap-[36px]">
      
      {/* Card 1 */}
      <div>
        <div className="w-[64px] h-[64px] rounded-[20px] bg-[#FDF1E8] flex items-center justify-center">
          <Image
            src="/image/group-3-line.svg"
            alt="Bridge Generations"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <h3 className="mt-[28px] text-[20px] font-semibold text-[#1B223C]">
          Bridge Generations
        </h3>

        <p className="mt-[14px] max-w-[330px] text-[15px] leading-[180%] text-[#6F7787]">
          Connecting seasoned professionals from the Saida diaspora with local ambitious youth to transfer years of wisdom.
        </p>
      </div>

      {/* Card 2 */}
      <div>
        <div className="w-[64px] h-[64px] rounded-[20px] bg-[#EEF0FF] flex items-center justify-center">
          <Image
            src="/image/auto_graph.svg"
            alt="Transform Talent"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <h3 className="mt-[28px] text-[20px] font-semibold text-[#1B223C]">
          Transform Talent
        </h3>

        <p className="mt-[14px] max-w-[330px] text-[15px] leading-[180%] text-[#6F7787]">
          Moving beyond theoretical education to real-world skills, strategic thinking, and global professional standards.
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <div className="w-[64px] h-[64px] rounded-[20px] bg-[#EAF8F2] flex items-center justify-center">
          <Image
            src="/image/volunteer_activism.svg"
            alt="Culture of Giving"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        <h3 className="mt-[28px] text-[20px] font-semibold text-[#1B223C]">
          Culture of Giving
        </h3>

        <p className="mt-[14px] max-w-[330px] text-[15px] leading-[180%] text-[#6F7787]">
          Fostering a sustainable cycle where today&apos;s mentees become tomorrow&apos;s mentors, strengthening our future.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* DARK SECTION */}
      <section className="w-full bg-black px-[80px] py-[90px]">
  <div className="mx-auto max-w-[1280px] flex flex-col items-center text-center">

    {/* Top icon */}
    <div className="mb-[28px]">
      <Image
        src="/image/architecture.svg"
        alt="Sanad Icon"
        width={32}
        height={32}
        className="object-contain"
      />
    </div>

    {/* Heading */}
    <h2 className="text-[64px] leading-[110%] tracking-[-0.03em] font-semibold">
      <span className="text-[#2381B6]">
        Rooted in
        <br />
        History,
      </span>
      <br />
      <span className="text-white">
        Built for the
        <br />
        Future.
      </span>
    </h2>

    {/* Description */}
    <p className="mt-[36px] max-w-[760px] text-[18px] leading-[170%] text-white/65">
      Saida has always been a hub of trade, wisdom, and connection.
      SANAD carries this legacy into the digital age, ensuring that the walls of
      our city are no longer boundaries, but foundations for global reach.
    </p>

  </div>
</section>
<Testimonial />

      {/* JOURNEY */}
      <section className="px-[80px] py-[80px]">
  <div className="mx-auto max-w-[1280px]">

    {/* Top row */}
    <div className="flex items-center justify-between">

      {/* LEFT */}
      <div>
        <h2 className="text-[48px] font-semibold text-black">
          A curated journey of growth.
        </h2>

        <p className="mt-[22px] text-[16px] text-black/50 max-w-[550px]">
          We don't just match profiles; we foster meaningful human connections
          that last a lifetime.
        </p>
      </div>

      {/* RIGHT BADGES */}
      <div className="flex items-center gap-[20px]">

  {/* Verified */}
  <div className="flex items-center gap-[10px] bg-[#FFFFF] px-[14px] py-[8px] rounded-full">
    <div className="w-[28px] h-[28px] bg-[#DBEAFE] rounded-full flex items-center justify-center">
      <Image
        src="/image/verified.svg"
        alt="Verified"
        width={14}
        height={14}
        className="object-contain"
      />
    </div>
    <span className="text-[14px] font-medium text-black">
      Verified Global Experts
    </span>
  </div>

  {/* Precision */}
  <div className="flex items-center gap-[10px] bg-[#FFFFF] px-[14px] py-[8px] rounded-full">
    <div className="w-[28px] h-[28px] bg-[#DBEAFE] rounded-full flex items-center justify-center">
      <Image
        src="/image/psychology.svg"
        alt="Precision"
        width={14}
        height={14}
        className="object-contain"
      />
    </div>
    <span className="text-[14px] font-medium text-black">
      Precision Matching
    </span>
  </div>

</div>
    </div>

    {/* Cards */}
    <div className="mt-[50px] grid grid-cols-4 gap-[24px]">

  {/* Card 1 */}
  <div className="bg-[#FFFFFF] rounded-[20px] p-[26px]">
    <Image
      src="/image/Vector.svg"
      alt="Real Guidance"
      width={24}
      height={24}
      className="object-contain"
    />
    <h3 className="mt-[22px] text-[26px] font-semibold text-black">
      Real Guidance
    </h3>
    <p className="mt-[30px] text-[14px] text-black/50 leading-[170%]">
      No generic advice. Get hands-on feedback on your specific challenges
      and career hurdles from someone who has been there.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#FFFFFF] rounded-[20px] p-[26px]">
    <Image
      src="/image/Vector (1).svg"
      alt="Global Network"
      width={24}
      height={24}
      className="object-contain"
    />
    <h3 className="mt-[22px] text-[26px] font-semibold text-black">
      Global Network
    </h3>
    <p className="mt-[30px] text-[14px] text-black/50 leading-[170%]">
      Open doors to companies and international networks that were previously
      beyond reach, bypassing traditional boundaries.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#FFFFFF] rounded-[20px] p-[26px]">
    <Image
      src="/image/Vector (2).svg"
      alt="Trust & Integrity"
      width={24}
      height={24}
      className="object-contain"
    />
    <h3 className="mt-[22px] text-[26px] font-semibold text-black">
      Trust & Integrity
    </h3>
    <p className="mt-[30px] text-[14px] text-black/50 leading-[170%]">
      A sanctuary for honest professional exchange built on a foundation of
      mutual respect and communal pride.
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-[#FFFFFF] rounded-[20px] p-[26px]">
    <Image
      src="/image/Vector (3).svg"
      alt="Lasting Impact"
      width={24}
      height={24}
      className="object-contain"
    />
    <h3 className="mt-[22px] text-[26px] font-semibold text-black">
      Lasting Impact
    </h3>
    <p className="mt-[30px] text-[14px] text-black/50 leading-[170%]">
      Our relationships don't end with a call. We aim for long-term mentorships
      that evolve with your career trajectory.
    </p>
  </div>

</div>

  </div>
</section>

      {/* HOW IT WORKS */}
     <section className="px-[80px] py-[90px]">
  <div className="mx-auto max-w-[1280px] text-center">

    {/* Title */}
    <h2 className="text-[48px] font-semibold text-black">
      How it works.
    </h2>

    {/* Steps */}
    <div className="mt-[60px] grid grid-cols-5 gap-[40px]">

      {/* Step 1 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-[48px] h-[48px] rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold">
          1
        </div>
        <h3 className="mt-[18px] text-[26px] text-black font-semibold ">Profile</h3>
        <p className="mt-[8px] text-[14px] text-black/50 leading-[160%]">
          Submit your journey and aspirations to our platform.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-[48px] h-[48px] rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold">
          2
        </div>
        <h3 className="mt-[18px] text-[26px] text-black font-semibold">Vetting</h3>
        <p className="mt-[8px] text-[14px] text-black/50 leading-[160%]">
          Our community curators review every application.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-[48px] h-[48px] rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold">
          3
        </div>
        <h3 className="mt-[18px] text-[26px] text-black font-semibold">Matching</h3>
        <p className="mt-[8px] text-[14px] text-black/50 leading-[160%]">
          Get paired with a partner who aligns with your goals.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-start text-left">
        <div className="w-[48px] h-[48px] rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold">
          4
        </div>
        <h3 className="mt-[18px] text-[26px] text-black font-semibold">Connect</h3>
        <p className="mt-[8px] text-[14px] text-black/50 leading-[160%]">
          Schedule your first session and set milestones.
        </p>
      </div>

      {/* Step 5 (Highlighted) */}
      <div className="flex flex-col items-start text-left">
        <div className="w-[48px] h-[48px] rounded-full bg-[#2F7FA3] text-white flex items-center justify-center font-semibold">
          5
        </div>
        <h3 className="mt-[18px] text-[18px] font-semibold text-[#2F7FA3]">
          Rise
        </h3>
        <p className="mt-[8px] text-[14px] text-black/50 leading-[160%]">
          Consistent check-ins and tangible career progress.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
     <section className="px-[80px] pb-[90px]">
  <div className="mx-auto max-w-[1280px] grid grid-cols-2 gap-[28px]">

    {/* For Mentees */}
    <div className="rounded-[32px] bg-black px-[40px] pt-[42px] pb-[36px] text-white">
      <h3 className="text-[36px] leading-[120%] font-medium">
        For Mentees
      </h3>

      <p className="mt-[22px] max-w-[520px] text-[16px] leading-[175%] text-white/70">
        Are you a student or young professional from Saida? Gain direct access
        to world-class experts dedicated to your success.
      </p>

      <div className="mt-[36px] flex flex-col gap-[18px]">
        <div className="flex items-center gap-[12px] text-[16px] text-white/85">
          <span className="text-[#2F7FA3] text-[22px] leading-none">→</span>
          <span>Strategic career clarity</span>
        </div>

        <div className="flex items-center gap-[12px] text-[16px] text-white/85">
          <span className="text-[#2F7FA3] text-[22px] leading-none">→</span>
          <span>Global industry insights</span>
        </div>

        <div className="flex items-center gap-[12px] text-[16px] text-white/85">
          <span className="text-[#2F7FA3] text-[22px] leading-none">→</span>
          <span>Real-world interview prep</span>
        </div>
      </div>

      <button className="mt-[54px] h-[58px] w-full rounded-full bg-white text-[#111827] text-[16px] font-semibold hover:bg-[#f2f2f2] transition">
        Get Started
      </button>
    </div>

    {/* For Mentors */}
    <div className="rounded-[32px] bg-[#2F86B8] px-[40px] pt-[42px] pb-[36px] text-white">
      <h3 className="text-[36px] leading-[120%] font-medium">
        For Mentors
      </h3>

      <p className="mt-[22px] max-w-[560px] text-[16px] leading-[175%] text-white/80">
        Have you built a successful global career? Your experience is the
        ultimate gift to the next generation of Saida&apos;s leaders. Start mentoring!
      </p>

      <div className="mt-[36px] flex flex-col gap-[18px]">
        <div className="flex items-center gap-[12px] text-[16px] text-white/90">
          <span className="text-[#0F172A] text-[22px] leading-none">→</span>
          <span>Flexible mentorship models</span>
        </div>

        <div className="flex items-center gap-[12px] text-[16px] text-white/90">
          <span className="text-[#0F172A] text-[22px] leading-none">→</span>
          <span>Reconnect with your roots</span>
        </div>

        <div className="flex items-center gap-[12px] text-[16px] text-white/90">
          <span className="text-[#0F172A] text-[22px] leading-none">→</span>
          <span>Shape future city leaders</span>
        </div>
      </div>

      <button className="mt-[54px] h-[58px] w-full rounded-full bg-[#0F172A] text-white text-[16px] font-semibold hover:opacity-90 transition">
        Start Mentoring
      </button>
    </div>

  </div>
</section>

      <Footer />
    </main>
  );
}