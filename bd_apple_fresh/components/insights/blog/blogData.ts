export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO" | "Marketing" | "Web Design" | "Software" | "AI";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "high-converting-business-website",
    title: "How to Build a High-Converting Business Website in 2026",
    excerpt: "A practical breakdown of structure, content and UX decisions that turn a website into a lead-generation asset.",
    category: "Web Design",
    date: "July 14, 2026",
    readTime: "8 min read",
    image: "/images/services/projects/business-website.webp",
    featured: true,
  },
  {
    slug: "local-seo-guide",
    title: "The Local SEO Guide Every Small Business Needs",
    excerpt: "Improve local visibility, rank for nearby searches and convert more visitors into qualified inquiries.",
    category: "SEO",
    date: "July 11, 2026",
    readTime: "7 min read",
    image: "/images/services/seo/map-pack.jpg",
  },
  {
    slug: "meta-ads-real-leads",
    title: "How to Build Meta Ads That Generate Real Leads",
    excerpt: "The strategy behind creative, targeting and campaign structures that produce better quality leads.",
    category: "Marketing",
    date: "July 8, 2026",
    readTime: "6 min read",
    image: "/images/services/social-media/creative-3.webp",
  },
  {
    slug: "ai-automation-small-business",
    title: "Where AI Automation Actually Helps Small Businesses",
    excerpt: "Practical automation opportunities across leads, reporting, support and daily operations.",
    category: "AI",
    date: "July 6, 2026",
    readTime: "9 min read",
    image: "/images/portfolio/ai.jpg",
  },
  {
    slug: "custom-software-vs-ready-made",
    title: "Custom Software vs Off-the-Shelf: What Should You Choose?",
    excerpt: "A clear decision framework for businesses comparing ready-made systems with custom software.",
    category: "Software",
    date: "July 4, 2026",
    readTime: "8 min read",
    image: "/images/services/softwares/restaurant-pos.png",
  },
  {
    slug: "website-redesign-signs",
    title: "7 Signs Your Business Website Needs a Redesign",
    excerpt: "The most common performance, design and conversion issues that signal it is time for a better website.",
    category: "Web Design",
    date: "July 1, 2026",
    readTime: "5 min read",
    image: "/images/services/projects/restaurant-website.webp",
  },
];

export const categories = ["All", "SEO", "Marketing", "Web Design", "Software", "AI"];
