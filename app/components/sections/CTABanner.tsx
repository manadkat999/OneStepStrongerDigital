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
    <Section size="md" className="bg-[#080808]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-orange-500/7 blur-[120px] pointer-events-none" />

      <Container size="md" className="relative z-10">
        <RevealOnScroll>
          <div className="card-glow rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 via-transparent to-blue-500/8" />
            <div className="relative z-10">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
                Start Today — It&apos;s Free
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                One step closer to{" "}
                <span className="gradient-text">page one.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
                Join 150+ local businesses growing their organic revenue with One Step Stronger Media.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {perks.map((p) => (
                  <span key={p} className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/8 rounded-full px-3 py-1.5">
                    <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
