import Image from "next/image";
import ServiceCard from "./ServiceCard";


export default function Services() {
  const services = [
    {
      title: "Sanad" ,
      description: "Empowering Saida’s youth with mentorship & shared knowledge.",
      buttonText: "Go to Sanad",
      iconRight: "/image/agreement.png",
      comingSoon: false,
      link: "/Sanad",
    },
    {
      title: "Saida Job Fair",
      description: "Matching Saida’s greatest talents with seekers.",
      buttonText: "Go to Job Fair",
      iconRight: "/image/job-search.png",
      comingSoon: false,
      link: "/job-fair",
    },
    {
      title: "Saida Digital District",
      description: "Bringing Saida’s best mind into one district.",
      buttonText: "Learn more",
      iconRight: "/image/share.png",
      comingSoon: true,
    },
    {
      title: "Sanduk Al Eghtirab",
      description: "Invest in Saida’s greatest potential businesses & individuals.",
      buttonText: "Learn more",
      iconRight: "/image/tips.png",
      comingSoon: false,
       link: "/sandoukAlEghtirab", 
    },
  ];

  return (
    <section id="services" className="w-full px-[80px] py-[80px] bg-[#F8F9FC]">
      <div className="mx-auto max-w-[1280px]">
        {/* Big rounded dark container */}
        <div className="relative rounded-[32px] overflow-hidden px-[60px] pt-[48px] pb-[60px]">
          {/* Background image */}
          <Image
            src="/image/ServicesBG.png"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay to match the vibe */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-center text-white text-[40px] font-semibold">
              Our Services
            </h2>

            <div className="mt-[44px] flex items-center justify-between gap-[28px]">
              {services.map((s) => (
                <ServiceCard
                  key={s.title}
                  title={s.title}
                  description={s.description}
                  buttonText={s.buttonText}
                  iconRight={s.iconRight}
                  comingSoon={s.comingSoon}
                  link={s.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}