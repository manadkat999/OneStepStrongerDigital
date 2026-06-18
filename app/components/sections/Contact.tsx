"use client";
import { useState } from "react";
import RevealOnScroll from "@/app/components/ui/RevealOnScroll";
import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";
import { SectionLabel } from "@/app/components/ui/Badge";

const BENEFITS = [
  { title: "Free SEO Analysis", desc: "A full technical and content review - £500 value, yours free." },
  { title: "Custom Growth Plan", desc: "A 90-day roadmap tailored to your goals and market." },
  { title: "No Long Contracts", desc: "We earn your business month by month." },
  { title: "Response in 24hrs", desc: "A senior strategist will reach out personally." },
];

const inputClass =
  "w-full bg-white border border-[#E7E5E4] rounded-lg px-4 py-3 text-[#1C1917] placeholder-[#A8A29E] text-sm focus:outline-none focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [budget, setBudget] = useState("");
  const [challenge, setChallenge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, website, budget, challenge }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-[#F5F5F4] to-[#EFEEEC]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1C1917]/6 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-14">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-5 leading-tight">
            Ready to{" "}
            <span className="gradient-text italic font-normal">dominate search?</span>
          </h2>
          <p className="text-[#57534E] max-w-xl mx-auto">
            Get a free, no-obligation SEO analysis. We&apos;ll identify exactly what&apos;s holding back your rankings and build a custom growth roadmap.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Benefits column */}
            <div className="lg:col-span-2 space-y-5">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1C1917]/20 border border-[#1C1917]/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#1C1917]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1917] text-sm">{b.title}</p>
                    <p className="text-[#57534E] text-xs mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-[#E7E5E4] space-y-2">
                <a href="mailto:hello@onestepstronger.co.uk" className="flex items-center gap-2 text-[#57534E] hover:text-[#1C1917] transition-colors text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  hello@onestepstronger.co.uk
                </a>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3 card-glow rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#F5F5F4] border border-[#1C1917]/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#1C1917]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-2">You&apos;re on the list!</h3>
                  <p className="text-[#57534E] text-sm">A senior strategist will reach out within 24 hours with your custom consultation plan.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#57534E] mb-1.5">First Name</label>
                      <input type="text" required placeholder="Alex" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#57534E] mb-1.5">Last Name</label>
                      <input type="text" required placeholder="Morgan" value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1.5">Work Email</label>
                    <input type="email" required placeholder="alex@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1.5">Website URL</label>
                    <input type="url" required placeholder="https://yoursite.com" value={website} onChange={(e) => setWebsite(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1.5">Service / Budget</label>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full bg-white border border-[#E7E5E4] rounded-lg px-4 py-3 text-[#1C1917] text-sm focus:outline-none focus:border-[#1C1917]/50 transition-colors">
                      <option value="">Select a service or budget...</option>
                      <optgroup label="SEO Retainers">
                        <option>SEO Starter - £495/mo</option>
                        <option>SEO Growth - £995/mo</option>
                        <option>SEO Authority - From £1,895/mo</option>
                      </optgroup>
                      <optgroup label="Website Builds">
                        <option>Website Essential - £795 one-off</option>
                        <option>Website Professional - £1,895 one-off</option>
                        <option>Website Premium - From £3,495 one-off</option>
                      </optgroup>
                      <optgroup label="Other Services">
                        <option>Graphic Design - Request a quote</option>
                        <option>Bespoke App Development - Request a quote</option>
                        <option>Website + SEO Bundle - Ask us</option>
                      </optgroup>
                      <option>Not sure yet - let&apos;s talk</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1.5">Tell us your biggest SEO challenge</label>
                    <textarea rows={3} placeholder="We're struggling with..." value={challenge} onChange={(e) => setChallenge(e.target.value)} className={`${inputClass} resize-none`} />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Free SEO Analysis
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[#57534E] text-xs">No spam. No commitment. Just a free, honest analysis.</p>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
