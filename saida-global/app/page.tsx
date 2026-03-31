"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("scrollTo");

    if (target) {
      const el = document.getElementById(target);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <FAQ />
      <Stats />
      <News />
      <CTA />
      <Footer />
    </main>
  );
}