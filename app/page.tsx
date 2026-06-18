import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import WhyDigital from "@/app/components/sections/WhyDigital";
import ServicesBento from "@/app/components/sections/ServicesBento";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Testimonials from "@/app/components/sections/Testimonials";
import About from "@/app/components/sections/About";
import Pricing from "@/app/components/sections/Pricing";
import CTABanner from "@/app/components/sections/CTABanner";
import FAQ from "@/app/components/sections/FAQ";
import Contact from "@/app/components/sections/Contact";
import MarqueeStrip from "@/app/components/sections/MarqueeStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhyDigital />
        <ServicesBento />
        <HowItWorks />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
