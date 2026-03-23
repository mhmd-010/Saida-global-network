"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export default function Testimonial() {
  // Later you can replace this with data fetched from an API.
  const testimonials: TestimonialItem[] = useMemo(
    () => [
      {
        quote:
          "Amazing initiative from Saida’s municipality council to help connect and grow Saida’s community from within. Proud to be a part of such a talented and loving community",
        name: "Ahmad Daou",
        role: "CEO of Basecamp Corp",
        avatarSrc: "/images/person.jpg",
      },
      {
        quote:
          "A strong platform idea that helps the community connect, share opportunities, and build real impact together.",
        name: "Sarah K.",
        role: "Product Manager",
        avatarSrc: "/images/person2.jpg",
      },
      {
        quote:
          "The vision is clear and the execution is promising. Excited to see this grow into a full ecosystem.",
        name: "Omar H.",
        role: "Software Engineer",
        avatarSrc: "/images/person3.jpg",
      },
      {
        quote:
          "This initiative makes collaboration easier and brings structure to community support and innovation.",
        name: "Rana M.",
        role: "Founder",
        avatarSrc: "/images/person4.jpg",
      },
      {
        quote:
          "A well-designed hub that can connect talent, investment, and knowledge in one place.",
        name: "Khaled A.",
        role: "Community Member",
        avatarSrc: "/images/person5.jpg",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="w-full bg-[#F8F9FC] px-[80px] py-[100px]">
      <div className="mx-auto max-w-[1280px] flex flex-col gap-[60px]">
        {/* Quote */}
        <h2 className="text-[36px] leading-[160%] tracking-[-0.03em] font-semibold text-black max-w-[1100px]">
          “{current.quote}”
        </h2>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-[16px]">
            <Image
              src={current.avatarSrc}
              alt={current.name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />

            <div>
              <p className="text-[16px] font-semibold text-black">
                {current.name}
              </p>
              <p className="text-[14px] text-gray-500">{current.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-[24px]">
            <button
              onClick={goPrev}
              className="w-[72px] h-[52px] rounded-full border border-black flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <span className="text-[14px] font-medium text-black">
              {format(index + 1)}/{format(total)}
            </span>

            <button
              onClick={goNext}
              className="w-[72px] h-[52px] rounded-full bg-black text-white flex items-center justify-center"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}