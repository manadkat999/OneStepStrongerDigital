"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/app/lib/data";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { cn } from "@/app/lib/utils";

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group select-none" aria-label="One Step Stronger Digital - Home">
          <Image
            src="/logo.png"
            alt="One Step Stronger Digital"
            width={240}
            height={64}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors duration-200 relative group cursor-pointer"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#results"
            className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600 hover:text-stone-900 transition-colors cursor-pointer px-3 py-2"
          >
            See Results
          </a>
          <a
            href="#contact"
            className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            Free Consultation
            <ArrowRight />
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden p-2 flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className={cn("block w-5 h-0.5 bg-stone-900 transition-all duration-300", open && "rotate-45 translate-y-2")} />
          <span className={cn("block w-5 h-0.5 bg-stone-900 transition-all duration-300", open && "opacity-0")} />
          <span className={cn("block w-5 h-0.5 bg-stone-900 transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300", open ? "max-h-96" : "max-h-0")}>
        <Container className="bg-stone-50/95 backdrop-blur-md border-t border-stone-200 flex flex-col gap-1 py-5 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors py-2.5 px-3 text-sm font-medium rounded-lg cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
          >
            Get Free Consultation
            <ArrowRight />
          </a>
        </Container>
      </div>
    </header>
  );
}
