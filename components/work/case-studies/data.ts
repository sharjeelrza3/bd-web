export type CaseStudyIcon =
  | "restaurant"
  | "target"
  | "medical"
  | "sparkles";

export type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  location: string;
  year: string;
  heroTitle: string;
  heroDescription: string;
  cover: string;
  desktop: string;
  mobile: string;
  icon: CaseStudyIcon;
  services: string[];
  stack: string[];
  challenge: string;
  strategy: string[];
  solution: string[];
  results: { value: string; label: string }[];
  gallery: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "taste-of-karachi",
    client: "Taste of Karachi",
    category: "Restaurant Website",
    location: "USA",
    year: "2026",
    heroTitle:
      "A premium restaurant experience built to turn attention into orders.",
    heroDescription:
      "Strategy, design and development combined into a fast, conversion-focused restaurant platform.",
    cover: "/images/portfolio/tasteofkarachi-wm.webp",
    desktop: "/images/services/projects/restaurant-website.webp",
    mobile: "/images/portfolio/mobile.jpg",
    icon: "restaurant",
    services: ["Strategy", "UI/UX", "Development", "SEO"],
    stack: ["Next.js", "Tailwind", "PHP", "Stripe"],
    challenge:
      "The restaurant needed a stronger digital presence, easier menu discovery and a smoother path from browsing to reservation or order.",
    strategy: [
      "Simplify the customer journey",
      "Build trust through premium visuals",
      "Make menu discovery effortless",
      "Create clear ordering and reservation actions",
    ],
    solution: [
      "Conversion-focused responsive interface",
      "Structured menu and category system",
      "Integrated reservation and ordering flow",
      "SEO-ready architecture and local visibility",
    ],
    results: [
      { value: "98", label: "Performance" },
      { value: "92", label: "SEO Score" },
      { value: "3x", label: "Faster Journey" },
      { value: "24/7", label: "Digital Access" },
    ],
    gallery: [
      "/images/portfolio/tasteofkarachi-wm.webp",
      "/images/services/projects/restaurant-website.webp",
      "/images/services/projects/e-commerce.webp",
      "/images/portfolio/mobile.jpg",
    ],
    testimonial: {
      quote:
        "Being Digitals understood the restaurant experience from both the customer and business side.",
      name: "Taste of Karachi",
      role: "Restaurant Management",
    },
  },
  {
    slug: "the-pest-zone",
    client: "The Pest Zone",
    category: "Service Website & Local SEO",
    location: "Karachi",
    year: "2026",
    heroTitle:
      "A local service platform designed around trust and lead generation.",
    heroDescription:
      "A clear website structure, focused calls-to-action and local SEO foundation for consistent inquiries.",
    cover: "/images/portfolio/pestzone-wm.webp",
    desktop: "/images/services/projects/business-website.webp",
    mobile: "/images/portfolio/mobile.jpg",
    icon: "target",
    services: ["Website", "Local SEO", "Content", "Lead UX"],
    stack: ["PHP", "Bootstrap", "MySQL", "Google Maps"],
    challenge:
      "The business needed stronger credibility, clearer service pages and a better way to capture local leads across Karachi.",
    strategy: [
      "Clarify each service",
      "Build local trust signals",
      "Improve mobile conversion",
      "Create location-focused SEO pages",
    ],
    solution: [
      "Service-led information architecture",
      "Fast quote and call actions",
      "Areas-served experience",
      "Technical and local SEO setup",
    ],
    results: [
      { value: "2.4x", label: "More Inquiries" },
      { value: "90+", label: "SEO Score" },
      { value: "100%", label: "Responsive" },
      { value: "24/7", label: "Lead Capture" },
    ],
    gallery: [
      "/images/portfolio/pestzone-wm.webp",
      "/images/services/seo/search.png",
      "/images/services/seo/map-pack.jpg",
      "/images/services/seo/organic-traffic.jpg",
    ],
    testimonial: {
      quote:
        "The website now explains our services clearly and makes it easier for customers to contact us.",
      name: "The Pest Zone",
      role: "Business Owner",
    },
  },
  {
    slug: "nazar-medical",
    client: "Nazar Medical Center",
    category: "Healthcare Software",
    location: "Pakistan",
    year: "2026",
    heroTitle:
      "A practical hospital system built around daily clinical operations.",
    heroDescription:
      "OPD, pharmacy, billing and reporting brought together inside one connected workflow.",
    cover: "/images/portfolio/softwares.webp",
    desktop: "/images/services/softwares/restaurant-pos.png",
    mobile: "/images/portfolio/mobile.jpg",
    icon: "medical",
    services: ["Product Strategy", "UI System", "Development", "QA"],
    stack: ["PHP", "MySQL", "Bootstrap", "Charts"],
    challenge:
      "Daily operations relied on disconnected records, manual calculations and slow reporting.",
    strategy: [
      "Map the actual OPD workflow",
      "Connect pharmacy and billing",
      "Reduce repeated data entry",
      "Create clear daily reporting",
    ],
    solution: [
      "Role-based operational dashboard",
      "OPD and pharmacy workflow",
      "Expense and recovery tracking",
      "Daily, weekly and monthly reports",
    ],
    results: [
      { value: "2x", label: "Faster Workflow" },
      { value: "100%", label: "Digital Records" },
      { value: "3", label: "Core Modules" },
      { value: "Live", label: "Reporting" },
    ],
    gallery: [
      "/images/services/softwares/restaurant-pos.png",
      "/images/services/softwares/reports.png",
      "/images/services/softwares/stock.png",
      "/images/portfolio/softwares.webp",
    ],
    testimonial: {
      quote:
        "The system was planned around how our clinic actually works, not around a generic template.",
      name: "Nazar Medical Center",
      role: "Clinic Management",
    },
  },
  {
    slug: "being-digitals",
    client: "Being Digitals",
    category: "Agency Platform",
    location: "Global",
    year: "2026",
    heroTitle:
      "A digital studio platform designed to communicate capability and ambition.",
    heroDescription:
      "A premium agency website connecting services, work, insights and conversion into one system.",
    cover: "/images/portfolio/websites.webp",
    desktop: "/images/services/projects/business-website.webp",
    mobile: "/images/portfolio/mobile.jpg",
    icon: "sparkles",
    services: ["Brand Strategy", "UI/UX", "Next.js", "Motion"],
    stack: ["Next.js", "TypeScript", "Tailwind", "React"],
    challenge:
      "The agency needed a digital presence that matched the quality and breadth of its services.",
    strategy: [
      "Create a strong visual position",
      "Separate services by business outcome",
      "Show proof through work and case studies",
      "Improve inquiry conversion",
    ],
    solution: [
      "Editorial agency design system",
      "Component-based service architecture",
      "Premium portfolio and studio pages",
      "Conversion-focused calls-to-action",
    ],
    results: [
      { value: "120+", label: "Projects" },
      { value: "40+", label: "Businesses" },
      { value: "98%", label: "Satisfaction" },
      { value: "6+", label: "Years" },
    ],
    gallery: [
      "/images/portfolio/websites.webp",
      "/images/portfolio/branding-social.png",
      "/images/portfolio/seo-growth.png",
      "/images/portfolio/softwares.webp",
    ],
    testimonial: {
      quote:
        "The new platform presents Being Digitals as a serious digital partner, not a generic service provider.",
      name: "Being Digitals",
      role: "Internal Brand Review",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
