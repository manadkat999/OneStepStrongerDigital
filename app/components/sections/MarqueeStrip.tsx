/**
 * MarqueeStrip.tsx
 * ---------------------------------------------------------------------------
 * A continuously scrolling capability ticker that sits between the hero and
 * the body. Pure CSS transform animation (see .marquee-track) - no JS, no
 * layout work. Doubled content array makes the loop seamless.
 */

const CAPABILITIES = [
  "90-Day Results Guarantee",
  "Local SEO",
  "Graphic Design",
  "Bespoke App Development",
  "Technical SEO",
  "Plain-English Reporting",
  "No Long-Term Contracts",
  "Free 48-Hour SEO Analysis",
];

export default function MarqueeStrip() {
  const loop = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <aside
      aria-label="What we do"
      className="capability-marquee w-full overflow-hidden border-y border-stone-800 bg-stone-900 py-5"
    >
      <ul className="marquee-track items-center">
        {loop.map((item, i) => (
          <li
            key={i}
            className="marquee-item flex items-center whitespace-nowrap px-8 text-xs font-medium uppercase tracking-[0.25em] text-stone-300"
          >
            {item}
            <span aria-hidden="true" className="ml-8 text-stone-600">
              -
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
