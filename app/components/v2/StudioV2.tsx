"use client";

/**
 * StudioV2 - "about the studio" section. Large statement type + a small
 * figures row, scroll-revealed. Section id ("studio") is a nav target.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FIGURES = [
  { v: "2025", l: "Founded" },
  { v: "48hr", l: "Consultation turnaround" },
  { v: "90-day", l: "Results guarantee" },
  { v: "1:1", l: "Senior attention" },
];

export default function StudioV2() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      id="studio"
      className="studio-v2 scroll-mt-24 border-t border-stone-200 bg-[#FAFAF9] px-6 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500"
        >
          The studio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-[20ch] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.1] tracking-tight text-[#1C1917]"
        >
          A small team, deliberately - so every client gets{" "}
          <span className="italic text-stone-500">senior attention, no filler.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-stone-600"
        >
          We came together because we kept seeing hard-working businesses buried
          online while flashier competitors took the traffic. We do SEO, design
          and bespoke software - all under one roof, all done properly, all
          explained in plain English.
        </motion.p>

        <motion.dl
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-stone-200 pt-12 md:grid-cols-4"
        >
          {FIGURES.map((f) => (
            <motion.div key={f.l} variants={item}>
              <dt className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-[#1C1917]">
                {f.v}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">{f.l}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
