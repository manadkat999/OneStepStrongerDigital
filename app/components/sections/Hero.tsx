"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_STATS } from "@/app/lib/data";
import Container from "@/app/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ShieldCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Parallax scroll values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background glows move up slower than scroll (parallax depth)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgYSpring = useSpring(bgY, { stiffness: 80, damping: 20 });

  // Dot pattern moves at half scroll speed
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Hero copy fades and rises on scroll
  const copyY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-15%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Card moves at different rate for depth
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardYSpring = useSpring(cardY, { stiffness: 60, damping: 18 });

  // Mouse tilt on card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * 0.012;
      const y = (e.clientY - top - height / 2) * 0.012;
      card.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // GSAP cinematic stats counter on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stat",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-stats-strip",
            start: "top 90%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Parallax dot background */}
      <motion.div
        style={{ y: dotY }}
        className="absolute inset-0 dot-bg pointer-events-none"
      />

      {/* Parallax ambient glows */}
      <motion.div
        style={{ y: bgYSpring }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-stone-300/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-stone-400/15 blur-[100px]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Copy — fades/rises on scroll ── */}
          <motion.div style={{ y: copyY, opacity: copyOpacity }}>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2.5 border border-stone-300 text-stone-700 text-[11px] font-medium uppercase tracking-[0.2em] px-4 py-2 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-stone-900 animate-pulse" />
              UK Digital Agency · Free 48-Hour Consultation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-light leading-[1.05] tracking-tight mb-6 text-[#1C1917]"
            >
              Your business deserves to{" "}
              <span className="gradient-text font-normal italic">be found.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[#57534E] text-lg leading-relaxed mb-10 max-w-lg"
            >
              We help UK small businesses get to the top of Google — with expert SEO, professional design, and bespoke digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold"
              >
                Get Your Free SEO Analysis
                <ArrowRight />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold border-2 border-[#1C1917]/25 text-[#0C0A09] hover:bg-[#F5F5F4] hover:border-[#1C1917]/50 transition-all duration-200 cursor-pointer"
              >
                Our Services
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-2.5"
            >
              {[
                { label: "Free 48-hour consultation" },
                { label: "No long-term contracts" },
              ].map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#44403C] bg-[#F5F5F4] border border-[#1C1917]/25 rounded-full px-3.5 py-1.5"
                >
                  <ShieldCheck />
                  {t.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Dashboard card — parallax depth ── */}
          <motion.div
            style={{ y: cardYSpring }}
            className="hidden lg:block"
          >
            <div ref={cardRef} className="relative max-w-sm mx-auto">
              {/* Main card */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="card-glow rounded-2xl p-7"
              >
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#E7E5E4]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C1917] to-[#0C0A09] flex items-center justify-center text-white font-semibold text-xs shadow-lg shadow-stone-900/20">OS</div>
                  <div>
                    <p className="text-[#1C1917] font-semibold text-sm">Digital Presence Report</p>
                    <p className="text-[#57534E] text-xs">Rosa&apos;s Artisan Bakery · Example</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-xs text-[#1C1917] font-semibold bg-[#F5F5F4] px-2 py-1 rounded-full border border-[#1C1917]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] animate-pulse" />Live
                  </span>
                </div>

                {[
                  { label: "Visibility Score", after: 91, color: "#1C1917" },
                  { label: "Local Rank",       after: 96, color: "#1C1917" },
                  { label: "Review Score",     after: 88, color: "#78716C" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="mb-4"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#57534E] text-xs font-medium">{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.after}%</span>
                    </div>
                    <div className="h-2 bg-[#EFEEEC] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: m.color }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${m.after}%` }}
                        transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}

                <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-[#E7E5E4]">
                  {[
                    { v: "#1",    l: "Maps Rank",   c: "#1C1917" },
                    { v: "+340%", l: "Traffic",      c: "#1C1917" },
                    { v: "4.9★",  l: "Rating",       c: "#78716C" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.l}
                      className="bg-[#F5F5F4] rounded-xl p-2.5 text-center border border-[#E7E5E4]"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                    >
                      <p className="text-base font-black" style={{ color: s.c }}>{s.v}</p>
                      <p className="text-[#57534E] text-xs mt-0.5">{s.l}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating notification — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-5 -right-5 card-glow rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 w-52 shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-[#1C1917] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[#1C1917] text-xs font-semibold leading-tight">New customer found you</p>
                  <p className="text-[#57534E] text-xs">via &quot;bakery near me&quot; · just now</p>
                </div>
              </motion.div>

              {/* Floating ranking tag — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1.35 }}
                className="absolute -bottom-5 -left-5 card-glow rounded-xl px-3.5 py-2.5 w-44 shadow-xl"
              >
                <p className="text-[#57534E] text-xs mb-0.5">Now ranking</p>
                <p className="text-[#1C1917] text-xs font-bold">&quot;best bakery london&quot;</p>
                <p className="text-[#1C1917] text-xs font-bold mt-0.5">Top 3 · Google Maps ↑5</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hero-stats-strip mt-20 pt-8 border-t border-[#E7E5E4] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center hero-stat"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <p className="text-2xl md:text-3xl font-black gradient-text mb-1">{s.value}</p>
              <p className="text-[#57534E] text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F5F5F4] to-transparent pointer-events-none" />
    </section>
  );
}
