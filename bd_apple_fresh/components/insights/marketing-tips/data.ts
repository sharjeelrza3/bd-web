export type MarketingTip = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Meta Ads" | "Google Ads" | "Content" | "Branding" | "Social Media" | "Strategy";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  readTime: string;
  image: string;
  featured?: boolean;
};

export const tips: MarketingTip[] = [
  {
    slug: "high-converting-meta-ads",
    title: "How to Build Meta Ads That Generate Better Leads",
    excerpt: "A practical framework for creative, targeting, offers and campaign structure.",
    category: "Meta Ads",
    difficulty: "Intermediate",
    readTime: "12 min read",
    image: "/images/services/social-media/creative-3.webp",
    featured: true,
  },
  {
    slug: "google-ads-search-campaign",
    title: "Google Search Ads: A Better Campaign Structure",
    excerpt: "Organize keywords, ad groups and landing pages around real customer intent.",
    category: "Google Ads",
    difficulty: "Advanced",
    readTime: "14 min read",
    image: "/images/services/seo/search-ad.jpg",
  },
  {
    slug: "content-plan-for-small-business",
    title: "A Practical Content Plan for Small Businesses",
    excerpt: "Create a repeatable content system without posting random ideas every day.",
    category: "Content",
    difficulty: "Beginner",
    readTime: "9 min read",
    image: "/images/services/social-media/creative-2.webp",
  },
  {
    slug: "brand-positioning-basics",
    title: "Brand Positioning Without Complicated Jargon",
    excerpt: "Clarify who you serve, what makes you different and why customers should care.",
    category: "Branding",
    difficulty: "Beginner",
    readTime: "8 min read",
    image: "/images/services/branding/brand-g.jpg",
  },
  {
    slug: "social-media-growth-system",
    title: "Build a Social Media Growth System, Not Random Posts",
    excerpt: "A better way to connect content themes, offers, engagement and paid campaigns.",
    category: "Social Media",
    difficulty: "Intermediate",
    readTime: "11 min read",
    image: "/images/services/social-media/after.png",
  },
  {
    slug: "marketing-funnel-basics",
    title: "A Simple Marketing Funnel for Service Businesses",
    excerpt: "Connect awareness, trust, conversion and follow-up into one clear customer journey.",
    category: "Strategy",
    difficulty: "Beginner",
    readTime: "10 min read",
    image: "/images/services/seo/organic-traffic.jpg",
  },
];

export const categories = [
  "All",
  "Meta Ads",
  "Google Ads",
  "Content",
  "Branding",
  "Social Media",
  "Strategy",
];
