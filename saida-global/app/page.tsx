import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import News from "@/components/News";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
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