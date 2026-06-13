"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { WHY_DIGITAL_STATS } from "@/app/lib/data";
import AnimatedNumber from "@/app/components/ui/AnimatedNumber";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Card from "@/app/components/ui/Card";
import { SectionLabel } from "@/app/components/ui/Badge";

export default function WhyDigital() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Cards drift slightly at different rates for depth
  const cardY0 = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], ["20px", "-50px"]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], ["50px", "-20px"]);
  const cardY3 = useTransform(scrollYProgress, [0, 1], ["10px", "-60px"]);
  const cardOffsets = [cardY0, cardY1, cardY2, cardY3];

  // Quote block has slower parallax
  const quoteY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  // GSAP cinematic horizontal slide for stat cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-card",
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-cards-grid",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <Section id="why-digital" className="bg-gradient-to-b from-[#F5F5F4] via-[#EFEEEC] to-[#F5F5F4]">
        <Container>
          <RevealOnScroll className="text-center mb-16">
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight">
              Your customers are searching.{" "}
              <span className="gradient-text italic font-normal">Are you showing up?</span>
            </h2>
            <p className="text-[#57534E] max-w-2xl mx-auto text-lg">
              A strong online presence isn&apos;t optional for small businesses anymore — it&apos;s the difference between a full calendar and an empty one.
            </p>
          </RevealOnScroll>

          <div className="why-cards-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {WHY_DIGITAL_STATS.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 90}>
                <motion.div style={{ y: cardOffsets[i] }}>
                  <Card className="why-card h-full flex flex-col gap-4 group">
                    <AnimatedNumber
                      to={s.value}
                      suffix={s.suffix}
                      className="text-6xl font-light tracking-tight text-[#1C1917]"
                    />
                    <p className="text-[#1C1917] text-sm font-medium leading-snug flex-1">{s.label}</p>
                    <p className="text-[#57534E] text-xs">Source: {s.source}</p>
                  </Card>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Pull quote — parallax float */}
          <RevealOnScroll>
            <motion.div style={{ y: quoteY }}>
              <div className="relative card-glow rounded-2xl p-10 md:p-14 text-center overflow-hidden max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1917]/5 via-transparent to-[#1C1917]/4" />
                <div className="relative z-10">
                  <span className="text-6xl text-[#1C1917]/20 font-serif leading-none">&ldquo;</span>
                  <p className="text-xl md:text-2xl font-medium text-[#1C1917] leading-relaxed -mt-4 mb-5">
                    Businesses with websites are{" "}
                    <span className="text-[#1C1917] font-bold">2.8× more likely to grow revenues</span>{" "}
                    than those without — and small businesses with a strong online presence grow{" "}
                    <span className="text-[#1C1917] font-bold">40% faster</span>.
                  </p>
                  <p className="text-[#57534E] text-sm">Google & Deloitte Connected Small Businesses Report</p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </Container>
      </Section>
    </div>
  );
}
