export type SeoGuide = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Local SEO"
    | "Technical SEO"
    | "On-Page SEO"
    | "Off-Page SEO"
    | "WordPress SEO"
    | "Ecommerce SEO"
    | "AI SEO"
    | "Google Business";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readTime: string;
  updated: string;
  image: string;
  featured?: boolean;
};

export const guides: SeoGuide[] = [
  {
    slug: "complete-local-seo-guide",
    title: "The Complete Local SEO Guide for Growing Businesses",
    excerpt:
      "A practical roadmap for improving local visibility, Google Maps rankings and qualified inquiries.",
    category: "Local SEO",
    difficulty: "Beginner",
    readTime: "25 min read",
    updated: "Updated July 2026",
    image: "/images/services/seo/map-pack.jpg",
    featured: true,
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist for Modern Websites",
    excerpt:
      "Crawlability, indexing, performance, structured data and technical health explained clearly.",
    category: "Technical SEO",
    difficulty: "Advanced",
    readTime: "18 min read",
    updated: "Updated July 2026",
    image: "/images/services/seo/visual-featured.png",
  },
  {
    slug: "on-page-seo-framework",
    title: "A Practical On-Page SEO Framework",
    excerpt:
      "Build pages that are easy for search engines to understand and useful for real visitors.",
    category: "On-Page SEO",
    difficulty: "Intermediate",
    readTime: "14 min read",
    updated: "Updated July 2026",
    image: "/images/services/seo/search-results-features.jpg",
  },
  {
    slug: "google-business-profile-guide",
    title: "How to Optimize Your Google Business Profile",
    excerpt:
      "Improve visibility in local search and turn profile visits into calls, directions and inquiries.",
    category: "Google Business",
    difficulty: "Beginner",
    readTime: "12 min read",
    updated: "Updated June 2026",
    image: "/images/services/seo/map-pack.jpg",
  },
  {
    slug: "wordpress-seo-guide",
    title: "WordPress SEO Without Plugin Confusion",
    excerpt:
      "A clean setup for titles, schema, internal links, performance and content structure.",
    category: "WordPress SEO",
    difficulty: "Intermediate",
    readTime: "16 min read",
    updated: "Updated June 2026",
    image: "/images/services/projects/business-website.webp",
  },
  {
    slug: "ecommerce-seo-guide",
    title: "Ecommerce SEO for Products, Categories and Growth",
    excerpt:
      "Structure product and category pages for discovery, relevance and stronger organic sales.",
    category: "Ecommerce SEO",
    difficulty: "Advanced",
    readTime: "20 min read",
    updated: "Updated May 2026",
    image: "/images/services/projects/e-commerce.webp",
  },
  {
    slug: "off-page-seo-guide",
    title: "Off-Page SEO Beyond Random Backlinks",
    excerpt:
      "Build authority through relevance, trust, digital PR and useful brand signals.",
    category: "Off-Page SEO",
    difficulty: "Intermediate",
    readTime: "15 min read",
    updated: "Updated May 2026",
    image: "/images/services/seo/organic-traffic.jpg",
  },
  {
    slug: "ai-seo-guide",
    title: "AI SEO: What Changes and What Still Matters",
    excerpt:
      "How AI search, answer engines and evolving SERPs affect content and technical strategy.",
    category: "AI SEO",
    difficulty: "Advanced",
    readTime: "17 min read",
    updated: "Updated July 2026",
    image: "/images/portfolio/ai.jpg",
  },
];

export const categories = [
  "All",
  "Local SEO",
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "WordPress SEO",
  "Ecommerce SEO",
  "AI SEO",
  "Google Business",
];

export const resources = [
  {
    title: "SEO Audit Checklist",
    type: "PDF Checklist",
    href: "/resources/seo-audit-checklist.pdf",
  },
  {
    title: "Website Launch SEO Checklist",
    type: "PDF Checklist",
    href: "/resources/website-launch-seo.pdf",
  },
  {
    title: "Keyword Planning Sheet",
    type: "PDF Worksheet",
    href: "/resources/keyword-planner.pdf",
  },
  {
    title: "SEO Proposal Template",
    type: "PDF Template",
    href: "/resources/seo-proposal-template.pdf",
  },
];

export const tools = [
  "Google Search Console",
  "Google Analytics",
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "Google Trends",
  "PageSpeed Insights",
  "GTmetrix",
];
