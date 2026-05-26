"use client";
import { useEffect, useState } from "react";
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
        scrolled ? "glass-nav py-3" : "py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/45 transition-shadow">
            1S
          </div>
          <span className="font-bold text-[15px] tracking-tight hidden sm:block">
            One Step <span className="text-orange-500">Stronger</span> Digital
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-gray-400 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" href="#results">See Results</Button>
          <Button variant="primary" size="sm" href="#contact" icon={<ArrowRight />}>
            Free Audit
          </Button>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={cn("block w-5 h-px bg-white transition-all duration-300", open && "rotate-45 translate-y-2")} />
          <span className={cn("block w-5 h-px bg-white transition-all duration-300", open && "opacity-0")} />
          <span className={cn("block w-5 h-px bg-white transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300", open ? "max-h-80" : "max-h-0")}>
        <Container className="glass-nav flex flex-col gap-4 py-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-orange-400 transition-colors py-1 text-sm"
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" size="md" href="#contact" className="mt-1 text-center justify-center" icon={<ArrowRight />}>
            Get Free Audit
          </Button>
        </Container>
      </div>
    </header>
  );
}
