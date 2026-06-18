"use client";

/**
 * CustomParallaxPage.tsx
 * ---------------------------------------------------------------------------
 * Bespoke single-file landing page: a full-viewport hero with weighted
 * parallax media, a sticky-rail portfolio section, and a minimal closing CTA.
 *
 * Architecture notes:
 *  - All motion maps to compositor-safe properties only (transform, opacity),
 *    so scrolling never triggers layout or paint work.
 *  - Scroll-linked values settle through a single "luxury" spring profile to
 *    give the media layer physical weight.
 *  - Motion tokens and content live at the top of the file; the JSX below
 *    stays free of magic numbers.
 *  - Plain <img> is used instead of next/image so the file drops into any
 *    project without remote-domain config. Swap in next/image for production.
 *  - Honors prefers-reduced-motion: transforms collapse to static layout.
 */

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* ── Motion tokens ───────────────────────────────────────────────────────── */

/** Heavyweight, unhurried settle - shared by every scroll-linked layer. */
const LUXURY_SPRING = { stiffness: 70, damping: 22, mass: 0.8 };

/** Out-quint style curve for entrance reveals. */
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Distance (px) cards travel while fading up into view. */
const REVEAL_RISE = 30;

/* ── Content model ───────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

const HERO_MEDIA = {
  src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
  alt: "Minimal modern architecture - white concrete facade in soft daylight",
};

type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  src: string;
  alt: string;
};

const PROJECTS: Project[] = [
  {
    id: "atelier-north",
    index: "01",
    title: "Atelier North",
    category: "Interior Identity",
    year: "2025",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
    alt: "Clean, light-filled interior with sculptural furniture",
  },
  {
    id: "forma-studies",
    index: "02",
    title: "Forma Studies",
    category: "Art Direction",
    year: "2026",
    src: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1600&q=80",
    alt: "Abstract sculpted geometry in deep, muted tones",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function CustomParallaxPage() {
  const prefersReducedMotion = useReducedMotion();

  /* Hero progress: 0 while pinned at the top, 1 once it has fully left. */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Headline drifts upward and dissolves as the visitor commits to scrolling. */
  const headlineY = useTransform(heroProgress, [0, 1], [0, -140]);
  const headlineOpacity = useTransform(heroProgress, [0, 0.55], [1, 0]);

  /* Media lags the scroll (~0.4x feel) and settles on the luxury spring.
     The image is oversized inside its frame (h-130%, -top-15%) so the
     drift never exposes an edge. */
  const mediaY = useSpring(useTransform(heroProgress, [0, 1], [0, 60]), LUXURY_SPRING);
  const mediaScale = useSpring(useTransform(heroProgress, [0, 1], [1.06, 1]), LUXURY_SPRING);

  const heroCopyStyle = prefersReducedMotion
    ? undefined
    : { y: headlineY, opacity: headlineOpacity };
  const heroMediaStyle = prefersReducedMotion
    ? undefined
    : { y: mediaY, scale: mediaScale };

  return (
    <main className="parallax-page min-h-screen bg-stone-100 text-stone-900 antialiased selection:bg-stone-900 selection:text-stone-100">
      {/* Fixed site header - lives outside the scroll flow entirely. */}
      <header className="site-header fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Primary"
          className="site-nav mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12"
        >
          <a
            href="#top"
            aria-label="One Step Stronger - back to top"
            className="brand-wordmark text-sm font-medium uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-60"
          >
            One Step Stronger
          </a>

          <ul className="nav-link-list hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={`Go to ${link.label}`}
                  className="nav-link relative text-xs font-medium uppercase tracking-[0.2em] text-stone-600 transition-colors duration-300 hover:text-stone-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-stone-900 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ── Hero - typographic statement with weighted parallax media ────── */}
      <section
        id="top"
        ref={heroRef}
        className="parallax-hero-section relative flex h-screen w-full items-center overflow-hidden"
      >
        <div className="hero-layout-grid mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
          {/* Left - drifts up and fades to zero on scroll */}
          <motion.header style={heroCopyStyle} className="hero-copy will-change-transform">
            <p className="hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
              Digital Studio - Est. 2025
            </p>
            <h1 className="hero-headline text-6xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Quietly
              <br />
              considered
              <br />
              <span className="font-normal italic">work.</span>
            </h1>
            <p className="hero-standfirst mt-8 max-w-sm text-sm leading-relaxed text-stone-600">
              A small studio crafting unhurried digital experiences for brands
              that value restraint.
            </p>
          </motion.header>

          {/* Right - framed media, lags the scroll for depth */}
          <figure className="hero-media-frame relative hidden aspect-[4/5] overflow-hidden bg-stone-200 md:block">
            <motion.img
              src={HERO_MEDIA.src}
              alt={HERO_MEDIA.alt}
              style={heroMediaStyle}
              loading="eager"
              decoding="async"
              className="hero-media-image absolute -top-[15%] left-0 h-[130%] w-full object-cover will-change-transform"
            />
          </figure>
        </div>

        <p
          aria-hidden="true"
          className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-stone-400"
        >
          Scroll
        </p>
      </section>

      {/* ── Selected works - pinned rail, rising stack ────────────────────── */}
      <section id="works" className="works-section">
        <div className="works-layout-grid mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-3 md:px-12 md:py-36">
          {/* Left rail stays locked while the stack scrolls past it */}
          <header className="works-rail md:sticky md:top-24 md:col-span-1 md:self-start">
            <h2 className="works-title text-xs font-medium uppercase tracking-[0.35em] text-stone-500">
              Selected Works
            </h2>
            <p className="works-count mt-3 text-sm text-stone-400">
              ({PROJECTS.length.toString().padStart(2, "0")})
            </p>
          </header>

          <div className="works-stack flex flex-col gap-24 md:col-span-2">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                rise={prefersReducedMotion ? 0 : REVEAL_RISE}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / close ───────────────────────────────────────────────── */}
      <footer id="contact" className="site-footer border-t border-stone-300">
        <div className="footer-layout mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-12">
          <p className="footer-statement max-w-md text-2xl font-light leading-snug md:text-3xl">
            Have something quietly ambitious in mind?
          </p>
          <a
            href="mailto:hello@onestepstronger.co.uk"
            aria-label="Email the studio"
            className="footer-cta relative text-sm uppercase tracking-[0.25em] transition-transform duration-300 hover:scale-[1.04] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-stone-900"
          >
            hello@onestepstronger.co.uk
          </a>
        </div>
      </footer>
    </main>
  );
}

/* ── Project card ────────────────────────────────────────────────────────── */

/** Fades up REVEAL_RISE px on first entry into the viewport. */
function ProjectCard({ project, rise }: { project: Project; rise: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: rise }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE_PREMIUM }}
      className="project-card group"
    >
      <a
        href={`#${project.id}`}
        aria-label={`View case study: ${project.title}`}
        className="project-link block"
      >
        <figure className="project-media aspect-[3/2] overflow-hidden bg-stone-200">
          <img
            src={project.src}
            alt={project.alt}
            loading="lazy"
            decoding="async"
            className="project-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </figure>

        <footer className="project-meta mt-5 flex items-baseline justify-between border-t border-stone-300 pt-4">
          <h3 className="project-title text-lg tracking-tight">
            <span className="project-index mr-3 text-xs text-stone-400">{project.index}</span>
            {project.title}
          </h3>
          <p className="project-tags text-xs uppercase tracking-[0.2em] text-stone-500">
            {project.category} - {project.year}
          </p>
        </footer>
      </a>
    </motion.article>
  );
}
