"use client";

/**
 * HeroV2 — modern agency hero (adapted from a 21st.dev aurora hero).
 * Performance notes:
 *  - Ambient aurora = 2 transform-only blobs on slow loops; paused entirely
 *    under prefers-reduced-motion. No per-frame mouse listeners / re-renders.
 *  - Grid is a static inline SVG. Headline reveals once on mount.
 *  - No image in the hero, so first paint / LCP stays fast.
 * Copy is the real One Step Stronger Digital messaging.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADLINE = ["Your", "business", "deserves", "to", "be", "found", "first."];

export default function HeroV2() {
  const reduce = useReducedMotion();

  const headline: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.15 } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 40, rotateX: reduce ? 0 : -80 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: EASE } },
  };
  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const blob = (delay: number) =>
    reduce
      ? undefined
      : {
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          transition: { duration: 26 + delay, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <section
      id="top"
      className="hero-v2 relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAFAF9] px-6 pt-28 pb-20 md:px-12"
    >
      {/* ambient aurora — transform-only, paused for reduced motion */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={blob(0)}
          className="absolute -top-24 left-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-stone-300/40 blur-[110px]"
        />
        <motion.div
          animate={blob(6)}
          className="absolute -bottom-24 right-1/4 h-[30rem] w-[30rem] translate-x-1/2 rounded-full bg-stone-400/30 blur-[120px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAF9]/40 to-[#FAFAF9]" />
      </div>

      {/* static grid texture */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-60">
        <defs>
          <pattern id="hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(28,25,23,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.span
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-8 inline-flex items-center rounded-full border border-stone-300 bg-white/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-stone-600 backdrop-blur-sm"
        >
          UK Digital Agency — Free 48-Hour Consultation
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={headline}
          style={{ perspective: 1000 }}
          className="mx-auto max-w-[15ch] text-[clamp(2.75rem,8vw,6.5rem)] font-light leading-[0.98] tracking-tight text-[#1C1917]"
        >
          {HEADLINE.map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              style={{ transformStyle: "preserve-3d" }}
              className={`mr-[0.25em] inline-block ${i >= 5 ? "italic text-stone-500" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.55 }}
          className="mx-auto mt-9 max-w-xl text-lg leading-relaxed text-stone-600"
        >
          We help UK small businesses get to the top of Google — with expert SEO,
          professional design, and bespoke software. No jargon. No lock-ins. Real
          results.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          transition={{ delay: 0.68 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#1C1917] px-8 py-4 text-sm font-medium text-[#FAFAF9]"
          >
            Get your free consultation
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
            Explore our services
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex h-9 w-5 -translate-x-1/2 items-start justify-center rounded-full border border-stone-300 p-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
      </motion.div>
    </section>
  );
}
