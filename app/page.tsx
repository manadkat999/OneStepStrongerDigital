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
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
<WhyDigital />
        <ServicesBento />
        <HowItWorks />
        <Testimonials />
        <About />
        <Pricing />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
