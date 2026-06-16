import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import HeroV2 from "@/app/components/v2/HeroV2";
import MarqueeStrip from "@/app/components/sections/MarqueeStrip";
import ServicesV2 from "@/app/components/v2/ServicesV2";
import ClosingV2 from "@/app/components/v2/ClosingV2";

/**
 * /v2 — preview of the next-version homepage. Non-destructive: the live
 * homepage (app/page.tsx) is untouched until this direction is approved.
 */
export default function V2Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroV2 />
        <MarqueeStrip />
        <ServicesV2 />
        <ClosingV2 />
      </main>
      <Footer />
    </>
  );
}
