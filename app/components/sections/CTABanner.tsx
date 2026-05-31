import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

const perks = [
  "Free 48-hour audit",
  "No contracts",
  "Plain-English reporting",
  "90-day results guarantee",
];

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function CTABanner() {
  return (
    <Section size="md" className="bg-[#F8F9FF]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-[#6366F1]/7 blur-[120px] pointer-events-none" />

      <Container size="md" className="relative z-10">
        <RevealOnScroll>
          <div className="card-glow rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/8 via-transparent to-[#22C55E]/6" />
            <div className="relative z-10">
              <p className="text-[#6366F1] text-xs font-bold tracking-widest uppercase mb-4">
                Start Today — It&apos;s Free
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B] mb-5 leading-tight">
                One step closer to{" "}
                <span className="gradient-text">page one.</span>
              </h2>
              <p className="text-[#4B5563] text-lg mb-10 max-w-lg mx-auto">
                Get a free, honest look at your digital presence. We&apos;ll tell you exactly where you stand — no hard sell, no jargon, no obligation.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {perks.map((p) => (
                  <span key={p} className="flex items-center gap-1.5 text-sm text-[#1E1B4B] bg-[#F3F4F6] border border-[#E5E7EB] rounded-full px-3 py-1.5">
                    <svg className="w-3.5 h-3.5 text-[#6366F1] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {p}
                  </span>
                ))}
              </div>

              <Button variant="primary" size="lg" href="#contact" icon={<ArrowRight />}>
                Claim Your Free Audit
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
