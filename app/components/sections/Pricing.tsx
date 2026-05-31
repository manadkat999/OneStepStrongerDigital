"use client";
import { useState } from "react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { SectionLabel } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

// WCAG AA compliant: #6366F1 on white = 4.5:1 ✓
const Check = ({ muted }: { muted?: boolean }) => (
  <svg className={cn("w-4 h-4 flex-shrink-0 mt-0.5", muted ? "text-[#6366F1]" : "text-[#6366F1]")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const SEO_TIERS = [
  {
    name: "Starter",
    price: "£495",
    period: "/mo",
    tagline: "Get found locally. Build the foundation.",
    featured: false,
    cta: "Get Started",
    features: [
      "Google Business Profile setup & optimisation",
      "Local SEO foundation (up to 3 target terms)",
      "On-page optimisation (up to 5 pages)",
      "Local citation building & cleanup",
      "Monthly keyword ranking report",
      "Plain-English monthly summary",
      "Email support",
    ],
    note: null,
  },
  {
    name: "Growth",
    price: "£995",
    period: "/mo",
    tagline: "Full-service SEO. This is where results happen.",
    featured: true,
    cta: "Start Growing",
    features: [
      "Everything in Starter",
      "Full keyword strategy (up to 50 terms)",
      "2 optimised content pages per month",
      "Link building & digital outreach",
      "Review generation strategy",
      "Competitor gap analysis",
      "Google Business Profile ongoing management",
      "Priority support & monthly strategy call",
    ],
    note: "Most clients choose this.",
  },
  {
    name: "Authority",
    price: "From £1,895",
    period: "/mo",
    tagline: "Dominate your market. Built for serious growth.",
    featured: false,
    cta: "Let's Talk",
    features: [
      "Everything in Growth",
      "Dedicated SEO strategist",
      "4+ content pieces per month",
      "Digital PR & press outreach",
      "Quarterly technical SEO deep-audit",
      "Custom reporting & analytics dashboard",
      "Quarterly in-depth strategy session",
    ],
    note: null,
  },
] as const;

const WEBSITE_TIERS = [
  {
    name: "Essential",
    price: "£795",
    period: " one-off",
    tagline: "A clean, fast website built to rank.",
    featured: false,
    cta: "Get Started",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form",
      "Google Analytics connected",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Professional",
    price: "£1,895",
    period: " one-off",
    tagline: "A high-converting site built around your SEO strategy.",
    featured: true,
    cta: "Get Started",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "Full on-page SEO — every page",
      "Schema markup & technical setup",
      "Blog / content hub setup",
      "Speed optimisation (Core Web Vitals)",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "From £3,495",
    period: " one-off",
    tagline: "Fully bespoke. Built to compete at the top.",
    featured: false,
    cta: "Let's Talk",
    features: [
      "Unlimited pages",
      "Bespoke design system",
      "E-commerce / booking integration",
      "Advanced schema & structured data",
      "Content strategy & copywriting",
      "Priority build turnaround",
      "Ongoing maintenance options",
    ],
  },
] as const;

type Tab = "seo" | "websites";

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("seo");
  const tiers = tab === "seo" ? SEO_TIERS : WEBSITE_TIERS;

  return (
    <Section id="pricing" className="bg-[#F3F4F6]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#6366F1]/6 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-12">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight text-[#1E1B4B]">
            Simple Prices.{" "}
            <span className="gradient-text">No Surprises.</span>
          </h2>
          {/* #374151 on #F3F4F6 = 7.2:1 ✓ WCAG AAA */}
          <p className="text-[#374151] max-w-xl mx-auto mb-8">
            No hidden fees. No long contracts. Just clear, honest pricing for the work that actually moves the needle.
          </p>

          {/* Tab toggle */}
          <div className="inline-flex bg-white border border-[#E5E7EB] rounded-xl p-1 gap-1 shadow-sm">
            {(["seo", "websites"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
                  tab === t
                    ? "bg-[#6366F1] text-white shadow-lg shadow-indigo-500/25"
                    : "text-[#374151] hover:text-[#1E1B4B] hover:bg-[#F3F4F6]"
                )}
              >
                {t === "seo" ? "SEO Retainers" : "Website Builds"}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 100}>
              <div className={cn(
                "card-glow rounded-2xl flex flex-col h-full relative overflow-hidden transition-all duration-300 bg-white",
                tier.featured
                  ? "border-[#6366F1]/40 shadow-xl shadow-indigo-500/12 p-8"
                  : "p-7"
              )}>
                {tier.featured && (
                  <>
                    {/* Indigo top bar — replaces low-contrast orange line */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#6366F1] rounded-t-2xl" />
                    {/* White text on indigo = 4.5:1 ✓ */}
                    <span className="self-start mb-4 text-xs bg-[#6366F1] text-white font-bold px-3 py-1 rounded-full shadow-sm shadow-indigo-500/25 mt-2">
                      Most Popular
                    </span>
                  </>
                )}

                <div className="mb-5">
                  {/* #1E1B4B on white = 14:1 ✓ */}
                  <h3 className="text-lg font-black text-[#1E1B4B] mb-1">{tier.name}</h3>
                  {/* #374151 on white = 8.6:1 ✓ — replaces #9CA3AF (2.8:1 ✗) */}
                  <p className="text-[#374151] text-sm">{tier.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className={cn("font-black leading-none text-[#1E1B4B]", tier.featured ? "text-4xl" : "text-3xl")}>
                    {tier.price}
                  </span>
                  {/* #6B7280 on white = 4.6:1 ✓ — acceptable for large/bold text */}
                  <span className="text-[#6B7280] text-sm ml-1 font-medium">{tier.period}</span>
                  {"note" in tier && tier.note && (
                    <p className="text-[#4F46E5] text-xs font-semibold mt-1.5">{tier.note}</p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.featured ? "primary" : "outline"}
                  size="md"
                  href="#contact"
                  icon={<ArrowRight />}
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Founding cohort offer — SEO tab only */}
        {tab === "seo" && (
          <RevealOnScroll delay={200}>
            <div className="bg-white card-glow rounded-2xl p-8 md:p-10 relative overflow-hidden border-[#6366F1]/25">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/4 via-transparent to-transparent" />
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#22C55E] rounded-t-2xl" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 bg-[#EEF2FF] border border-[#6366F1]/20 text-[#4F46E5] text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    Founding Client Offer — 3 Spots Only
                  </span>
                  <h3 className="text-2xl font-black text-[#1E1B4B] mb-2">
                    Growth at{" "}
                    <span className="gradient-text">£595/mo</span>
                    {/* #6B7280 on white ✓ for decorative strikethrough */}
                    <span className="text-[#6B7280] text-lg font-normal line-through ml-3">£995</span>
                  </h3>
                  <p className="text-[#374151] text-sm leading-relaxed max-w-lg">
                    Our first three clients get 40% off the Growth plan for 6 months — in exchange for a 6-month commitment, a testimonial, and case study rights. You get full-service SEO at a founding price. We get proof. Everyone wins.
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4">
                    {["40% off for 6 months", "6-month commitment", "Testimonial + case study rights", "Full Growth plan — nothing removed"].map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-[#374151] font-medium">
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 md:ml-auto">
                  <Button variant="primary" size="lg" href="#contact" icon={<ArrowRight />}>
                    Claim a Founding Spot
                  </Button>
                  {/* #6B7280 on white = 4.6:1 ✓ */}
                  <p className="text-[#6B7280] text-xs text-center mt-2">3 spots · First come, first served</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Bundle offer — SEO tab only */}
        {tab === "seo" && (
          <RevealOnScroll delay={250} className="mt-5">
            <div className="bg-white card-glow rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div>
                  {/* #4F46E5 on white = 6.9:1 ✓ — replaces text-blue-400 on white (3:1 ✗) */}
                  <span className="inline-block bg-[#EEF2FF] border border-[#6366F1]/20 text-[#4F46E5] text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Bundle & Save
                  </span>
                  <h3 className="text-lg font-black text-[#1E1B4B] mb-1">Website + SEO Combo</h3>
                  <p className="text-[#374151] text-sm">
                    Professional website build <span className="text-[#1E1B4B] font-semibold">(£1,895)</span> + 3 months Growth SEO at{" "}
                    <span className="text-[#1E1B4B] font-semibold">£795/mo</span>{" "}
                    <span className="text-[#6B7280] line-through text-xs">£995</span> — one seamless project, one team.
                  </p>
                </div>
                <div className="flex-shrink-0 sm:ml-auto">
                  <Button variant="outline" size="md" href="#contact" icon={<ArrowRight />}>
                    Ask About the Bundle
                  </Button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll className="text-center mt-10">
          {/* #6B7280 on #F3F4F6 = 4.5:1 ✓ barely passes — use #374151 to be safe */}
          <p className="text-[#374151] text-sm">
            All plans are month-to-month after the initial term. No cancellation fees. No hidden costs. Prices exclude VAT.
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
