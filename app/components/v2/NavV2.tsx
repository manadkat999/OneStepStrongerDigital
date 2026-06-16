"use client";

/**
 * NavV2 — fixed glass nav for the /v2 page. Links resolve to real in-page
 * sections (smooth-scroll via the html `scroll-smooth` class). Slides in on
 * mount. cursor-pointer + aria on every control; honors reduced motion.
 */

import { motion, useReducedMotion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
];

export default function NavV2() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="navv2 fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-[#FAFAF9]/85 backdrop-blur-xl"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12"
      >
        <a
          href="#top"
          aria-label="One Step Stronger — back to top"
          className="cursor-pointer text-sm font-semibold tracking-tight text-[#1C1917] transition-opacity duration-200 hover:opacity-60"
        >
          One Step Stronger
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative cursor-pointer text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600 transition-colors duration-200 hover:text-stone-900"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-stone-900 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="cursor-pointer rounded-full bg-[#1C1917] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#FAFAF9] transition-colors duration-200 hover:bg-[#0C0A09]"
        >
          Start a project
        </a>
      </nav>
    </motion.header>
  );
}
