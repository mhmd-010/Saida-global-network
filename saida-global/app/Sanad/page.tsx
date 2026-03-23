import SanadNavbar from "@/components/SanadNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SanadPage() {
  return (
    <main className="bg-[#F8F9FC] min-h-screen">
      <SanadNavbar />

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
      <section className="bg-black text-center py-[100px] px-[80px]">
        <div className="max-w-[800px] mx-auto">

          <h2 className="text-[42px] font-semibold text-white leading-[140%]">
            <span className="text-[#2381B6]">Rooted in History,</span>
            <br />
            Built for the Future.
          </h2>

          <p className="mt-[20px] text-white/60 text-sm">
            Saida has always been a hub of trade, wisdom, and connection.
          </p>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-[80px] py-[60px]">
        <div className="max-w-[1280px] mx-auto">

          <h2 className="text-[28px] font-semibold mb-[30px]">
            A curated journey of growth.
          </h2>

          <div className="grid grid-cols-4 gap-[24px]">

            {["Real Guidance","Global Network","Trust & Integrity","Lasting Impact"].map((item) => (
              <div key={item} className="bg-[#F6F6F6] p-[24px] rounded-[20px]">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm text-black/50">
                  Description here
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-[80px] py-[60px] text-center">
        <h2 className="text-[28px] font-semibold mb-[40px]">How it works.</h2>

        <div className="flex justify-center gap-[40px]">

          {["Profile","Vetting","Matching","Connect","Rise"].map((step, i) => (
            <div key={step}>
              <div className="w-[40px] h-[40px] rounded-full bg-black text-white flex items-center justify-center mb-[10px]">
                {i + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-[80px] pb-[80px]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-[24px]">

          <div className="bg-black text-white p-[40px] rounded-[24px]">
            <h3 className="text-xl font-semibold">For Mentees</h3>
            <button className="mt-[20px] bg-white text-black px-[20px] py-[10px] rounded-full">
              Get Started
            </button>
          </div>

          <div className="bg-[#2F7FA3] text-white p-[40px] rounded-[24px]">
            <h3 className="text-xl font-semibold">For Mentors</h3>
            <button className="mt-[20px] bg-black px-[20px] py-[10px] rounded-full">
              Start Mentoring
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}