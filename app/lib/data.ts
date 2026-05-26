// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why It Matters", href: "#why-digital" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
] as const;

// ─── Logo Strip ───────────────────────────────────────────────────────────────
export const LOGO_STRIP_ITEMS = [
  { name: "Rosa's Artisan Bakery", type: "Food & Beverage" },
  { name: "Metro Plumbing Co.", type: "Home Services" },
  { name: "Sharma Dental Group", type: "Healthcare" },
  { name: "JW Auto & Tire", type: "Auto Services" },
  { name: "Chen Law Group", type: "Legal" },
  { name: "Peak Fitness Studio", type: "Health & Wellness" },
  { name: "Harbor Coffee Roasters", type: "Retail" },
  { name: "City Realty Partners", type: "Real Estate" },
  { name: "Summit HVAC", type: "Home Services" },
  { name: "Nova Family Clinic", type: "Healthcare" },
  { name: "Green Ridge Landscaping", type: "Outdoor Services" },
  { name: "Swift Accounting LLC", type: "Professional Services" },
  { name: "Blue Lake Salon", type: "Beauty & Wellness" },
  { name: "Apex Electrical", type: "Trades" },
];

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
    metric: { label: "Avg. ranking improvement", value: "Top 3" },
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
    metric: { label: "Avg. speed improvement", value: "2.4×" },
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
    metric: { label: "Avg. organic traffic lift", value: "+220%" },
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
    metric: { label: "Avg. new keywords ranking", value: "180+" },
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
    metric: { label: "Avg. DA improvement", value: "+18 pts" },
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
    metric: { label: "Avg. new monthly reviews", value: "+14" },
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
    metric: { label: "Client retention rate", value: "94%" },
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
      "No cookie-cutter packages. We build a strategy around your specific goals, market, and budget — whether you're a plumber, a café owner, or a growing law firm.",
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

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Before One Step Stronger, my bakery was invisible online. Within 4 months we were the top result for 'bakery near me' and I had to hire two more staff just to keep up with new orders. I wish I'd done this years ago.",
    name: "Rosa Lombardi",
    role: "Owner, Rosa's Artisan Bakery",
    initials: "RL",
    color: "#f97316",
    result: "+180% Walk-ins",
    industry: "Food & Beverage",
  },
  {
    quote:
      "As a plumber, all my work came from word of mouth. One Step Stronger got us ranked #1 on Google Maps for three cities. Now 60% of new jobs come through Google. It completely changed our business.",
    name: "Marcus Thompson",
    role: "Owner, Metro Plumbing Co.",
    initials: "MT",
    color: "#3b82f6",
    result: "#1 on Google Maps",
    industry: "Home Services",
  },
  {
    quote:
      "My dental practice was struggling to attract new patients. The team built our online presence from scratch — reviews, local SEO, content — and we're fully booked three weeks out now.",
    name: "Dr. Sunita Kapoor",
    role: "Principal Dentist, Bright Smiles Dental",
    initials: "SK",
    color: "#10b981",
    result: "Fully Booked",
    industry: "Healthcare",
  },
  {
    quote:
      "I was skeptical about SEO — thought it was just for big companies. They showed me how many people in my town search for auto repair every month and were never finding me. That changed everything.",
    name: "James Whitfield",
    role: "Owner, JW Auto & Tire",
    initials: "JW",
    color: "#8b5cf6",
    result: "3× More Calls",
    industry: "Auto Services",
  },
  {
    quote:
      "The reporting is what sold me. Every month I get a simple breakdown — no tech jargon — showing exactly how many people found my law firm through Google. The ROI is crystal clear.",
    name: "Patricia Chen",
    role: "Principal Attorney, Chen Law Group",
    initials: "PC",
    color: "#f97316",
    result: "4.8× ROI",
    industry: "Legal",
  },
] as const;

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "150+", label: "Small Businesses" },
  { value: "4.9★", label: "Avg. Client Rating" },
  { value: "94%", label: "Retention Rate" },
  { value: "0", label: "Long-term Contracts" },
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
  "Plumbers & Electricians",
  "Dental & Medical",
  "Law Firms",
  "Auto Repair",
  "Retail Boutiques",
  "Real Estate",
  "Salons & Spas",
  "Contractors",
  "Accountants",
  "Fitness Studios",
  "Veterinary Clinics",
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
  Company: ["About Us", "Our Mission", "Case Studies", "Blog", "Careers"],
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
