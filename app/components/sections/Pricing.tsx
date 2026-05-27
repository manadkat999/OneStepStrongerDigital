"use client";
import { useState } from "react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { SectionLabel } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

const Check = ({ muted }: { muted?: boolean }) => (
  <svg className={cn("w-4 h-4 flex-shrink-0 mt-0.5", muted ? "text-gray-600" : "text-orange-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
    <Section id="pricing" className="bg-gradient-to-b from-[#080808] to-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-orange-500/5 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-12">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
            Simple Prices.{" "}
            <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            No hidden fees. No long contracts. Just clear, honest pricing for the work that actually moves the needle.
          </p>

          {/* Tab toggle */}
          <div className="inline-flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
            {(["seo", "websites"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                  tab === t
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "text-gray-400 hover:text-white"
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
                "card-glow rounded-2xl flex flex-col h-full relative overflow-hidden transition-all duration-300",
                tier.featured
                  ? "border-orange-500/35 shadow-xl shadow-orange-500/10 p-8"
                  : "p-7"
              )}>
                {tier.featured && (
                  <>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                    <span className="self-start mb-4 text-xs bg-orange-500 text-white font-bold px-2.5 py-1 rounded-full">
                      Most Popular
                    </span>
                  </>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-black text-white mb-1">{tier.name}</h3>
                  <p className="text-gray-500 text-sm">{tier.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className={cn("font-black leading-none", tier.featured ? "text-4xl text-white" : "text-3xl text-white")}>
                    {tier.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{tier.period}</span>
                  {"note" in tier && tier.note && (
                    <p className="text-orange-400 text-xs font-semibold mt-1.5">{tier.note}</p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
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
            <div className="card-glow rounded-2xl p-8 md:p-10 relative overflow-hidden border-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-transparent" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                    Founding Client Offer — 3 Spots Only
                  </span>
                  <h3 className="text-2xl font-black text-white mb-2">
                    Growth at{" "}
                    <span className="gradient-text">£595/mo</span>
                    <span className="text-gray-500 text-lg font-normal line-through ml-3">£995</span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                    Our first three clients get 40% off the Growth plan for 6 months — in exchange for a 6-month commitment, a testimonial, and case study rights. You get full-service SEO at a founding price. We get proof. Everyone wins.
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4">
                    {["40% off for 6 months", "6-month commitment", "Testimonial + case study rights", "Full Growth plan — nothing removed"].map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-xs text-gray-300">
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
                  <p className="text-gray-600 text-xs text-center mt-2">3 spots · First come, first served</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Bundle offer — SEO tab only */}
        {tab === "seo" && (
          <RevealOnScroll delay={250} className="mt-5">
            <div className="card-glow rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div>
                  <span className="inline-block bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Bundle & Save
                  </span>
                  <h3 className="text-lg font-black text-white mb-1">Website + SEO Combo</h3>
                  <p className="text-gray-400 text-sm">
                    Professional website build <span className="text-white font-semibold">(£1,895)</span> + 3 months Growth SEO at{" "}
                    <span className="text-white font-semibold">£795/mo</span>{" "}
                    <span className="text-gray-500 line-through text-xs">£995</span> — one seamless project, one team.
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
          <p className="text-gray-600 text-sm">
            All plans are month-to-month after the initial term. No cancellation fees. No hidden costs. Prices exclude VAT.
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
