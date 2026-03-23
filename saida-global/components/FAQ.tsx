"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const faqs: FaqItem[] = [
    {
      question: "Why should I sign up with Saida Global Network",
      answer:
        "Saida Global Network’s sign up process helps us know you are interested in joining one of the largest and strongest communities in Lebanon, connecting you with people you can benefit and benefit from on any scale.",
    },
    {
      question: "Do I need to signup to all services?",
      answer:
        "No. You can sign up once and then choose which services you want to access based on your interests.",
    },
    {
      question: "How do I know about future events?",
      answer:
        "You can follow Saida News, subscribe to updates, and check the Resources section for announcements and upcoming events.",
    },
    {
      question: "What can I do to make the best out of Saida Global Network’s services?",
      answer:
        "Complete your profile, explore services, connect with members, and regularly check the news/resources for new opportunities.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number>(0); // first item open like the screenshot

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? -1 : i));
  };

  return (
    <section className="w-full bg-[#F8F9FC] px-[80px] py-[80px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-[56px] py-[56px]">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[60px]">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[40px] leading-[120%] tracking-[-0.02em] font-semibold text-black">
                Saida Global Network
                <br />
                FAQs
              </h2>

              <p className="text-[14px] leading-[170%] text-black/50 max-w-[360px]">
                As an initiative to connect Saida’s greatest minds we created Saida Global Network
                as a platform to empower every individual and business through education, opportunity,
                trust, and technology to keep the Saida community connected even from thousands of miles away!
              </p>

              <div className="flex items-center gap-[18px] pt-[12px]">
                <button className="h-[44px] px-[20px] rounded-full border border-black/30 text-[14px] font-bold text-black">
                  More Questions ?
                </button>

                <a href="#" className="text-[14px] font-medium text-black underline">
                  Contact Us
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (Accordion) */}
            <div className="flex flex-col">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i;

                return (
                  <div key={item.question} className="border-t-2 border-black/40">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full py-[22px] flex items-start justify-between gap-[24px] text-left"
                    >
                      <span className="text-[18px] font-semibold text-black">
                        {item.question}
                      </span>

                      <span className="text-[22px] leading-none text-black">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-[22px] pr-[40px]">
                        <p className="text-[14px] leading-[170%] text-black/50">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* bottom border to match the screenshot */}
              <div className="border-t-2 border-black/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}