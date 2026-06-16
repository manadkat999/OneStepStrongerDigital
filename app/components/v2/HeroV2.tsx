"use client";

/**
 * HeroV2 — animated agency hero (21st.dev-style word reveal).
 * Minimal single-column: oversized light-weight display type, one primary CTA,
 * staggered word entrance via Framer Motion. Honors prefers-reduced-motion.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";

const LINE_ONE = ["We", "build", "presence"];
const LINE_TWO = ["for", "brands", "that"];
const ACCENT = "deserve to be found.";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroV2() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.1 } },
  };
  const word: Variants = {
    hidden: { y: reduce ? 0 : "100%", opacity: reduce ? 1 : 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: EASE } },
  };
  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section id="top" className="hero-v2 relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#FAFAF9] px-6 pt-32 pb-20 md:px-12">
      {/* texture */}
      <div aria-hidden className="dot-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 50% 0%, transparent 55%, rgba(28,25,23,0.04) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500"
        >
          UK Digital Studio — SEO · Design · Software
        </motion.p>

        {/* Display headline with per-word reveal */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-[16ch] text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.98] tracking-tight text-[#1C1917]"
        >
          {[LINE_ONE, LINE_TWO].map((line, li) => (
            <span key={li} className="block">
              {line.map((w, i) => (
                <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                  <motion.span variants={word} className="inline-block">
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block italic text-stone-500">
              {ACCENT}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-md text-lg leading-relaxed text-stone-600"
        >
          A small studio crafting search visibility, sharp design and bespoke
          software for ambitious small businesses. Measured in real results.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.62 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <motion.a
            href="#contact"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#1C1917] px-8 py-4 text-sm font-medium text-[#FAFAF9]"
          >
            Start a project
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>

          <a
            href="#work"
            className="cursor-pointer text-sm tracking-wide text-stone-600 underline-offset-4 transition-colors duration-200 hover:text-stone-900 hover:underline"
          >
            See selected work
          </a>
        </motion.div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-stone-400"
      >
        Scroll
      </span>
    </section>
  );
}
