import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const newsItems = [
  {
    title: "Saida Global Network just launched with a whopping 190+ business venture.",
    desc: "Over 190 local businesses signed up for Saida Global Network’s largest scale community platform...",
    read: "5 min read",
    color: "bg-sky-400",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    desc: "Working with this digital marketing agency has been a true partnership. They have tak...",
    read: "8 min read",
    color: "bg-orange-500",
  },
  {
    title: "Saida Digital District opening on the 7th of July. Sign up today for free!",
    desc: "What sets this digital district apart is their commitment to transparency and collaboration...",
    read: "5 min read",
    color: "bg-violet-600",
  },
  {
    title: "Saida Digital District opening on the 7th of July. Sign up today for free!",
    desc: "What sets this digital district apart is their commitment to transparency and collaboration...",
    read: "5 min read",
    color: "bg-violet-600",
  },
  {
    title: "Saida Digital District opening on the 7th of July. Sign up today for free!",
    desc: "What sets this digital district apart is their commitment to transparency and collaboration...",
    read: "5 min read",
    color: "bg-violet-600",
  },
  {
    title: "Exploring the Future of Remote Work: Trends and Predictions",
    desc: "As companies adapt to the new normal, remote work strategies are evolving, focusing on produ...",
    read: "6 min read",
    color: "bg-orange-500",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    desc: "Working with this digital marketing agency has been a true partnership. They have tak...",
    read: "8 min read",
    color: "bg-orange-500",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    desc: "Working with this digital marketing agency has been a true partnership. They have tak...",
    read: "8 min read",
    color: "bg-orange-500",
  },
  {
    title: "Saida Digital District opening on the 7th of July. Sign up today for free!",
    desc: "What sets this digital district apart is their commitment to transparency and collaboration...",
    read: "5 min read",
    color: "bg-violet-600",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-[#F8F9FC] min-h-screen">
      <Navbar />

      <section className="px-[80px] pt-[40px] pb-[80px]">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="text-[72px] leading-[120%] tracking-[-0.03em] font-semibold text-[#2381B6] mb-[56px]">
            News
          </h1>

          <div className="grid grid-cols-3 gap-[36px]">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-[#F4F4F4] rounded-[24px] p-[32px] h-[240px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-[14px]">
                  <div className={`w-[10px] h-[10px] rounded-full ${item.color}`} />
                  <span className="text-[12px] text-black/35">{item.read}</span>
                </div>

                <h3 className="text-[16px] leading-[150%] tracking-[-0.02em] font-semibold text-black max-w-[250px]">
                  {item.title}
                </h3>

                <div className="mt-auto flex items-end justify-between gap-[16px]">
                  <p className="text-[14px] leading-[170%] text-black/45 max-w-[190px]">
                    {item.desc}
                  </p>

                 <button className="w-[56px] h-[40px] rounded-full border border-[#010205] text-[#010205] hover:bg-[#010205] hover:text-white transition-all duration-300 flex items-center justify-center">
                 →
                 </button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-[18px] mt-[40px] text-[14px] text-black/40">
            <button className="hover:text-black">← Previous</button>
            <button className="w-[28px] h-[28px] rounded-[8px] bg-[#2D2D2D] text-white">1</button>
            <button className="hover:text-black">2</button>
            <button className="hover:text-black">3</button>
            <span>...</span>
            <button className="hover:text-black">67</button>
            <button className="hover:text-black">68</button>
            <button className="hover:text-black">Next →</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}