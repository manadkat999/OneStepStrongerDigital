// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why It Matters", href: "#why-digital" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Clients", href: "#results" },
  { label: "About", href: "#about" },
] as const;

// ─── Why Digital Stats ────────────────────────────────────────────────────────
export const WHY_DIGITAL_STATS = [
  {
    value: 80,
    suffix: "%",
    label: "of consumers search online for local businesses every week",
    source: "BrightLocal, 2026",
    accent: "orange" as const,
  },
  {
    value: 27,
    suffix: "%",
    label: "of small businesses still don't have a website — invisible to customers",
    source: "SCORE, 2025",
    accent: "blue" as const,
  },
  {
    value: 76,
    suffix: "%",
    label: "of people who find a local business online visit within 24 hours",
    source: "Google, 2024",
    accent: "orange" as const,
  },
  {
    value: 40,
    suffix: "%",
    label: "faster revenue growth for small businesses with a strong online presence",
    source: "Google & Deloitte, 2024",
    accent: "blue" as const,
  },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "local-seo",
    icon: "map-pin",
    title: "Local SEO",
    description:
      "Own the top spot on Google Maps and local search when customers in your area search for what you do. We make sure your community finds you — not your competitors.",
    tags: ["Google Business Profile", "Maps Ranking", "Local Citations"],
    featured: true,
    accent: "orange" as const,
    metric: { label: "The goal for every client", value: "Top 3" },
  },
  {
    id: "technical-seo",
    icon: "wrench",
    title: "Technical SEO",
    description:
      "Fix the invisible problems stopping Google from ranking you: site speed, crawl errors, Core Web Vitals, and broken structure.",
    tags: ["Site Speed", "Core Web Vitals", "Schema Markup"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Target page speed grade", value: "A+" },
  },
  {
    id: "content",
    icon: "document",
    title: "Content That Converts",
    description:
      "Pages that answer real customer questions, build local authority, and rank — turning traffic into trust and trust into sales.",
    tags: ["Service Pages", "Blog & FAQ", "EEAT"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Content pieces per month", value: "4–8" },
  },
  {
    id: "keywords",
    icon: "search",
    title: "Keyword Strategy",
    description:
      "We map exactly what your future customers are searching and build a precise plan to capture every high-intent opportunity.",
    tags: ["Search Intent", "Competitor Gaps", "Opportunity Mapping"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Opportunities identified per audit", value: "50+" },
  },
  {
    id: "links",
    icon: "link",
    title: "Link Building",
    description:
      "Quality backlinks from trusted local publications and industry sites that signal authority to Google — white-hat only.",
    tags: ["Local Press", "Digital PR", "Guest Posts"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Only approach we use", value: "White-hat" },
  },
  {
    id: "reviews",
    icon: "star",
    title: "Reputation & Reviews",
    description:
      "97% of consumers read reviews before choosing a local business. We help you earn more 5-star reviews and manage your reputation everywhere.",
    tags: ["Review Generation", "Response Strategy", "Reputation Mgmt"],
    featured: false,
    accent: "blue" as const,
    metric: { label: "Consumers who read reviews first", value: "97%" },
  },
  {
    id: "analytics",
    icon: "chart",
    title: "Plain-English Reporting",
    description:
      "Monthly reports in plain language showing exactly how many customers found you through search and what we're doing next — no dashboards to decipher.",
    tags: ["Monthly Reports", "ROI Tracking", "Clear Metrics"],
    featured: false,
    accent: "orange" as const,
    metric: { label: "Reporting frequency", value: "Monthly" },
  },
] as const;

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Free Digital Presence Audit",
    description:
      "We do a full analysis of your online visibility — website health, local rankings, competitors, and missed opportunities. No jargon. No sales pitch. Just the honest truth about where you stand.",
    detail: "Delivered in 48 hours",
    accent: "orange" as const,
  },
  {
    number: "02",
    title: "A Plan Built for Your Business",
    description:
      "No cookie-cutter packages. We build a strategy around your specific goals, market, and budget — whether you're a candle maker, an app founder, or a growing local firm.",
    detail: "Custom to your goals",
    accent: "blue" as const,
  },
  {
    number: "03",
    title: "We Grow. You Run Your Business.",
    description:
      "We handle everything — rankings, content, reviews, backlinks — and report back monthly in plain English. You focus on serving customers while we grow your visibility.",
    detail: "Month-over-month results",
    accent: "orange" as const,
  },
] as const;

// ─── Clients ──────────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "We pour every candle by hand in our London studio — but reaching the right customers online felt out of reach. One Step Stronger Digital is building our search presence so that people looking for premium home fragrance find Casa Nochi first.",
    name: "Pavel & Milayde",
    role: "Co-Founders, Casa Nochi",
    initials: "CN",
    color: "#f97316",
    result: "Home Fragrance SEO",
    industry: "Luxury Candles",
  },
  {
    quote:
      "We're launching something completely new in London's nightlife scene. Before we go live, One Step Stronger Digital is laying the SEO foundations to make sure MYSOVA shows up wherever London's nightlife crowd is searching.",
    name: "MYSOVA Team",
    role: "MYSOVA — London Nightlife App",
    initials: "MY",
    color: "#8b5cf6",
    result: "App Launch SEO",
    industry: "Entertainment & Nightlife",
  },
] as const;

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "Free", label: "SEO Audit" },
  { value: "48hr", label: "Turnaround" },
  { value: "0", label: "Lock-in Contracts" },
  { value: "90-Day", label: "Results Guarantee" },
] as const;

// ─── About ────────────────────────────────────────────────────────────────────
export const VALUES = [
  {
    title: "We Root for the Underdog",
    desc: "Big brands have massive marketing budgets. We level the playing field with expert SEO that gives small businesses a real shot.",
  },
  {
    title: "No Jargon. Ever.",
    desc: "You'll always know what we're doing and why. If we can't explain it in plain English, we won't do it.",
  },
  {
    title: "Long-Term Thinking",
    desc: "We build lasting visibility — not quick tricks. Your SEO compounds every month like interest in a savings account.",
  },
  {
    title: "Month-to-Month Only",
    desc: "We earn your business every month. No lock-in contracts, no cancellation fees. Our results keep you.",
  },
] as const;

export const INDUSTRIES = [
  "Restaurants & Cafés",
  "E-commerce & Retail",
  "Apps & Tech Startups",
  "Law Firms",
  "Trades & Contractors",
  "Health & Wellness",
  "Real Estate",
  "Salons & Spas",
  "Home Services",
  "Accountants",
  "Fitness Studios",
  "Luxury & Lifestyle",
] as const;

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  Services: [
    "Local SEO",
    "Technical SEO",
    "Content Marketing",
    "Reputation & Reviews",
    "Keyword Strategy",
    "SEO Reporting",
  ],
  Company: ["About Us", "Our Mission", "Case Studies", "Blog"],
  Resources: [
    "Free SEO Audit",
    "Small Business Guide",
    "Local SEO Checklist",
    "FAQ",
  ],
} as const;

export const SOCIAL_LINKS = [
  { name: "Twitter / X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
] as const;
