"use client";

/**
 * ServicesV2 - bento grid of capabilities with scroll-reveal + stable hover.
 * Hover uses colour/border + a transform-only lift (no layout shift), per the
 * UI/UX skill's "stable hover states" rule. SVG icons only - no emoji.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Service = {
  n: string;
  title: string;
  desc: string;
  icon: ReactNode;
  wide?: boolean;
};

const icon = (d: string) => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const SERVICES: Service[] = [
  {
    n: "01",
    title: "Local & Technical SEO",
    desc: "Get found first when nearby customers search. Foundations, content, links and a clean technical base - reported in plain English.",
    wide: true,
    icon: icon("m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"),
  },
  {
    n: "02",
    title: "Graphic Design",
    desc: "Logos, brand systems and assets that earn trust on sight.",
    icon: icon("M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"),
  },
  {
    n: "03",
    title: "Bespoke Apps",
    desc: "Custom web & mobile software, quoted and built around your business.",
    icon: icon("M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"),
  },
  {
    n: "04",
    title: "Plain-English Reporting",
    desc: "One clear monthly update - what changed, what's next, who found you.",
    wide: true,
    icon: icon("M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"),
  },
];

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function ServicesV2() {
  const reduce = useReducedMotion();

  const grid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };

  return (
    <section id="work" className="services-v2 scroll-mt-24 bg-[#FAFAF9] px-6 py-28 md:px-12 md:py-36">
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
              What we do
            </p>
            <h2 className="max-w-[18ch] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-[#1C1917]">
              Everything a small business needs to grow online.
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400">(04)</span>
        </motion.header>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.a
              key={s.n}
              href="#contact"
              variants={card}
              className={`group relative flex min-h-56 cursor-pointer flex-col justify-between rounded-3xl border border-stone-200 bg-white p-8 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-stone-900 hover:shadow-[0_24px_60px_-30px_rgba(28,25,23,0.35)] ${
                s.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-stone-900">{s.icon}</span>
                <span className="text-xs tracking-[0.2em] text-stone-400">{s.n}</span>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-light tracking-tight text-[#1C1917]">{s.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">{s.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
