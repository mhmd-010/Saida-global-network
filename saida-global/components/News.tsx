import Image from "next/image";

const news = [
  {
    title: "Saida Global Network just launched with a whopping 190+ business venture.",
    desc: "Over 190 local businesses signed up for Saida Global Network’s largest scale community platform...",
    read: "5 min read",
    color: "bg-blue-400",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    desc: "Working with this digital marketing agency has been a true partnership. They have tak...",
    read: "8 min read",
    color: "bg-orange-400",
  },
  {
    title: "Saida Digital District opening on the 7th of July. Sign up today for free!",
    desc: "What sets this digital district apart is their commitment to transparency and collaboration...",
    read: "5 min read",
    color: "bg-purple-500",
  },
];

export default function News() {
  return (
    <section className="w-full py-[100px] bg-[#F8F9FC]">
      <div className="max-w-[1280px] mx-auto">

        {/* TOP SECTION */}
        <div className="flex items-start gap-[80px] mb-[60px]">

          <h2 className="text-[42px]  text-black font-semibold leading-[130%] max-w-[650px]">
            Get the latest unfiltered news straight from trusted sources.
          </h2>

          <div className="max-w-[420px]">
            <p className="text-[14px] leading-[180%] text-black/50 mb-[20px]">
              We are aware of the noise found in a lot of news sources out there, so we decided to give you a source that delivers unfiltered, unbiased, trustworthy news about your home city.
            </p>

            <button className="border border-[#010205] rounded-full px-[26px] py-[14px] text-[14px] text-black font-bold">
              Go to News
            </button>
          </div>

        </div>

        {/* NEWS CARDS */}
        <div className="grid grid-cols-3 gap-[24px]">

          {news.map((item, index) => (
           <div className="bg-[#FFFFFF] rounded-[24px] p-[28px] h-[250px] flex flex-col">

  {/* TOP */}
  <div className="flex justify-between items-center mb-[12px]">
    <div className={`w-[8px] h-[8px] rounded-full ${item.color}`} />
    <span className="text-[12px] text-black/40">{item.read}</span>
  </div>

  {/* TITLE */}
  <h3 className="text-[24px] text-black font-semibold leading-[140%] mb-[12px]">
    {item.title}
  </h3>

  {/* BOTTOM SECTION */}
  <div className="mt-auto flex justify-between items-end">

    {/* DESCRIPTION */}
    <p className="text-[13px] text-black/50 leading-[170%] max-w-[220px]">
      {item.desc}
    </p>

    {/* BUTTON */}
    <button className="w-[70px] h-[44px] rounded-full border border-[#010205] flex items-center justify-center text-[#010205] hover:bg-[#010205] hover:text-white transition">
  →
</button>
  </div>

</div>
          ))}

        </div>

      </div>
    </section>
  );
}