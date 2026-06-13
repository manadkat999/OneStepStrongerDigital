import { HOW_IT_WORKS_STEPS } from "@/app/lib/data";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import { SectionLabel } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-[#F5F5F4] to-[#EFEEEC]">
      <Container>
        <RevealOnScroll className="text-center mb-20">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight">
            Simple Process.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto">
            We made getting started as friction-free as possible — because you have a business to run.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 relative mb-16">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-stone-300/50 via-stone-400/40 to-stone-300/50" />

          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const isOrange = step.accent === "orange";
            return (
              <RevealOnScroll key={step.number} delay={i * 140} className="flex flex-col items-center text-center">
                {/* Step bubble */}
                <div className={cn(
                  "relative w-20 h-20 rounded-2xl flex flex-col items-center justify-center border mb-7 z-10",
                  isOrange
                    ? "bg-[#1C1917]/[0.06] border-[#1C1917]/20 shadow-lg shadow-stone-900/10"
                    : "bg-[#F5F5F4] border-[#1C1917]/20 shadow-lg shadow-stone-900/10"
                )}>
                  <span className={cn("text-2xl font-light", isOrange ? "text-[#1C1917]" : "text-[#1C1917]")}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-light text-[#1C1917] mb-3 leading-tight">{step.title}</h3>
                <p className="text-[#57534E] text-sm leading-relaxed mb-5">{step.description}</p>

                <span className={cn(
                  "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border",
                  isOrange
                    ? "bg-[#F5F5F4] text-[#1C1917] border-[#1C1917]/25"
                    : "bg-[#F5F5F4] text-[#1C1917] border-[#1C1917]/30"
                )}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {step.detail}
                </span>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll className="text-center">
          <Button variant="primary" size="lg" href="#contact"
            icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>}
          >
            Start with Your Free Consultation
          </Button>
          <p className="mt-3 text-[#57534E] text-xs">Free · No commitment · 48-hour turnaround</p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
