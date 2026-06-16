"use client";

/**
 * ClosingV2 — full-width charcoal CTA band. Single strong call to action
 * (per the minimal-single-column pattern), scroll-revealed, inverted button.
 */

import { motion, useReducedMotion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ClosingV2() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="closing-v2 bg-[#1C1917] px-6 py-32 text-stone-50 md:px-12 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-stone-400">
          Free 48-hour consultation
        </p>
        <h2 className="max-w-[16ch] text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.0] tracking-tight">
          Let&apos;s get your business{" "}
          <span className="italic text-stone-400">found.</span>
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-stone-400">
          Tell us where you want to be. We&apos;ll show you exactly how to get
          there — no jargon, no lock-ins, no obligation.
        </p>

        <motion.a
          href="mailto:hello@onestepstronger.co.uk"
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="group mt-12 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#FAFAF9] px-9 py-4 text-sm font-medium text-[#1C1917]"
        >
          Start the conversation
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

        <p className="mt-6 text-xs tracking-wide text-stone-500">
          hello@onestepstronger.co.uk
        </p>
      </motion.div>
    </section>
  );
}
