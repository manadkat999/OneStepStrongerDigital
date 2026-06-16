import Footer from "@/app/components/layout/Footer";
import NavV2 from "@/app/components/v2/NavV2";
import HeroV2 from "@/app/components/v2/HeroV2";
import MarqueeStrip from "@/app/components/sections/MarqueeStrip";
import ServicesV2 from "@/app/components/v2/ServicesV2";
import StudioV2 from "@/app/components/v2/StudioV2";
import ProcessV2 from "@/app/components/v2/ProcessV2";
import ClosingV2 from "@/app/components/v2/ClosingV2";

/**
 * /v2 — preview of the next-version homepage. Self-contained nav whose links
 * resolve to in-page sections (#work, #studio, #process, #contact).
 * Non-destructive: the live homepage (app/page.tsx) is untouched.
 */
export default function V2Page() {
  return (
    <>
      <NavV2 />
      <main>
        <HeroV2 />
        <MarqueeStrip />
        <ServicesV2 />
        <StudioV2 />
        <ProcessV2 />
        <ClosingV2 />
      </main>
      <Footer />
    </>
  );
}
