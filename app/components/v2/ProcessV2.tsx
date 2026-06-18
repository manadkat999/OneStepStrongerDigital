"use client";

/**
 * ProcessV2 - three-step "how it works" with a scroll-revealed stagger.
 * Section id ("process") is a nav target.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    n: "01",
    title: "Free consultation",
    desc: "A full read on your online visibility - site health, local rankings, competitors and the gaps worth closing. Delivered in 48 hours.",
  },
  {
    n: "02",
    title: "A plan for your business",
    desc: "No cookie-cutter packages. A strategy built around your goals, market and budget - whatever stage you're at.",
  },
  {
    n: "03",
    title: "We grow, you trade",
    desc: "We handle rankings, content, design and reporting. You get a clear monthly update and stay focused on customers.",
  },
];

export default function ProcessV2() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section
      id="process"
      className="process-v2 scroll-mt-24 border-t border-stone-200 bg-[#FAFAF9] px-6 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-stone-500">
              How it works
            </p>
            <h2 className="max-w-[16ch] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-[#1C1917]">
              Simple process. Real results.
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400">(03)</span>
        </motion.header>

        <motion.ol
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 md:grid-cols-3"
        >
          {STEPS.map((s) => (
            <motion.li
              key={s.n}
              variants={item}
              className="flex flex-col gap-5 bg-[#FAFAF9] p-8 md:p-10"
            >
              <span className="text-sm font-medium tracking-[0.2em] text-stone-400">{s.n}</span>
              <h3 className="text-xl font-light tracking-tight text-[#1C1917]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-stone-600">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
