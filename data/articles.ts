export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  callout?: {
    title: string;
    text: string;
  };
  image?: string;
};

export type Article = {
  slug: string;
  type: "blog" | "seo-guide" | "marketing-tip";
  title: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  heroImage: string;
  sections: ArticleSection[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "high-converting-business-website",
    type: "blog",
    title: "How to Build a High-Converting Business Website in 2026",
    excerpt:
      "A practical breakdown of structure, content and UX decisions that turn a website into a real lead-generation asset.",
    category: "Web Design",
    date: "July 14, 2026",
    readTime: "8 min read",
    heroImage: "/images/portfolio/websites.webp",
    author: {
      name: "Being Digitals",
      role: "Digital Strategy Team",
      bio: "We build websites, growth systems and software for ambitious businesses.",
      image: "/images/brand-logo-dark.png",
    },
    sections: [
      {
        id: "start-with-business-goal",
        title: "Start with the business goal",
        paragraphs: [
          "A high-converting website begins with a clear commercial objective. Before deciding on colors, animations or layouts, define what the visitor should do next.",
          "For some businesses the goal is a booked call. For others it is a WhatsApp inquiry, online order, quotation request or product purchase.",
        ],
        callout: {
          title: "Key principle",
          text: "Every major section should move the visitor closer to one clear next action.",
        },
      },
      {
        id: "build-clear-structure",
        title: "Build a clear page structure",
        paragraphs: [
          "Visitors should understand what you do, who you help and why they should trust you within seconds.",
        ],
        bullets: [
          "Strong value proposition",
          "Clear services",
          "Relevant proof",
          "Simple calls-to-action",
          "Fast mobile experience",
        ],
      },
      {
        id: "use-proof",
        title: "Use proof at the right moments",
        paragraphs: [
          "Case studies, testimonials, client logos and specific results reduce risk. They work best when placed close to important conversion points.",
        ],
        quote:
          "Trust is not one section. It should be reinforced throughout the entire page.",
      },
      {
        id: "optimize-mobile",
        title: "Optimize for mobile first",
        paragraphs: [
          "Most visitors will judge the website on a phone. Mobile navigation, form usability, page speed and readable typography directly affect conversion.",
        ],
        image: "/images/portfolio/mobile.jpg",
      },
      {
        id: "measure-improve",
        title: "Measure and improve",
        paragraphs: [
          "Launch is the beginning. Track inquiries, scroll depth, form completion and important button clicks. Use this data to improve weak sections.",
        ],
      },
    ],
    related: ["local-seo-guide", "meta-ads-real-leads"],
  },
  {
    slug: "local-seo-guide",
    type: "seo-guide",
    title: "The Complete Local SEO Guide for Growing Businesses",
    excerpt:
      "A practical roadmap for improving local visibility, Google Maps rankings and qualified inquiries.",
    category: "Local SEO",
    date: "July 11, 2026",
    updated: "Updated July 2026",
    readTime: "25 min read",
    heroImage: "/images/services/seo/map-pack.jpg",
    author: {
      name: "Being Digitals",
      role: "SEO Team",
      bio: "Our SEO team focuses on visibility, qualified traffic and lead generation.",
      image: "/images/brand-logo-dark.png",
    },
    sections: [
      {
        id: "local-seo-basics",
        title: "Understand local SEO",
        paragraphs: [
          "Local SEO helps businesses appear when nearby customers search for relevant products or services.",
        ],
      },
      {
        id: "google-business-profile",
        title: "Optimize Google Business Profile",
        bullets: [
          "Use the correct primary category",
          "Complete every important field",
          "Add current photos",
          "Publish regular updates",
          "Respond to customer reviews",
        ],
      },
      {
        id: "location-pages",
        title: "Create useful location pages",
        paragraphs: [
          "Location pages should provide real local context rather than repeating the same text with a different city name.",
        ],
        callout: {
          title: "Avoid thin pages",
          text: "Each area page should include unique service details, local proof and a clear contact path.",
        },
      },
      {
        id: "citations-consistency",
        title: "Keep business information consistent",
        paragraphs: [
          "Your name, address and phone number should be accurate and consistent across the website and business directories.",
        ],
      },
      {
        id: "reviews-authority",
        title: "Build review and local authority",
        paragraphs: [
          "Consistent reviews, relevant local links and useful content strengthen trust and visibility over time.",
        ],
      },
    ],
    related: ["high-converting-business-website", "technical-seo-checklist"],
  },
  {
    slug: "meta-ads-real-leads",
    type: "marketing-tip",
    title: "How to Build Meta Ads That Generate Better Leads",
    excerpt:
      "A practical framework for creative, targeting, offers and campaign structure.",
    category: "Meta Ads",
    date: "July 8, 2026",
    readTime: "12 min read",
    heroImage: "/images/services/social-media/creative-3.webp",
    author: {
      name: "Being Digitals",
      role: "Performance Marketing Team",
      bio: "We plan and optimize campaigns around qualified leads and measurable outcomes.",
      image: "/images/brand-logo-dark.png",
    },
    sections: [
      {
        id: "strong-offer",
        title: "Start with a strong offer",
        paragraphs: [
          "Ads cannot rescue a weak offer. The value should be specific, relevant and easy to understand.",
        ],
      },
      {
        id: "creative-angle",
        title: "Choose the right creative angle",
        bullets: [
          "Problem and solution",
          "Client result",
          "Before and after",
          "Product demonstration",
          "Founder or owner testimonial",
        ],
      },
      {
        id: "landing-experience",
        title: "Fix the landing experience",
        paragraphs: [
          "The message in the ad should continue naturally on the landing page or WhatsApp flow.",
        ],
        quote:
          "A good campaign is one connected journey, not separate ads and pages.",
      },
      {
        id: "qualify-leads",
        title: "Qualify leads properly",
        paragraphs: [
          "Ask enough questions to understand intent without making the form unnecessarily difficult.",
        ],
      },
      {
        id: "optimize",
        title: "Optimize using real data",
        paragraphs: [
          "Judge campaigns using lead quality, conversion rate and business outcomes rather than impressions alone.",
        ],
      },
    ],
    related: ["high-converting-business-website", "local-seo-guide"],
  },
];

export function getArticle(type: Article["type"], slug: string) {
  return articles.find((article) => article.type === type && article.slug === slug);
}

export function getRelatedArticles(slugs: string[]) {
  return articles.filter((article) => slugs.includes(article.slug));
}
