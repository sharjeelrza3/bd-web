import {
  Gauge,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const websiteDevelopmentService = {
  hero: {
    badge: "Website Development",
    title: "Premium website development that turns visitors into customers.",
    description:
      "We design and build fast, responsive, SEO-ready websites for businesses that want a premium online presence and real inquiries.",
    primaryCta: "Start Website Project",
    secondaryCta: "View Website Portfolio",
    image: "/images/portfolio/websites.webp",
    stats: [
      ["48+", "Website Projects"],
      ["98%", "Satisfaction"],
      ["SEO", "Ready"],
    ],
  },

  problems: {
    eyebrow: "Common Problems",
    title: "Your website should not look good only. It should work hard for your business.",
    description:
      "Most business websites fail because they are slow, confusing, outdated or not built with a clear conversion strategy.",
    items: [
      "Outdated design that reduces trust",
      "Slow loading speed on mobile",
      "Poor SEO structure and weak content flow",
      "No clear lead generation or CTA strategy",
    ],
  },

  features: {
    eyebrow: "What You Get",
    title: "Everything your business website needs to look premium and perform.",
    items: [
      {
        title: "Custom UI Design",
        description: "Modern, clean and premium design tailored around your brand.",
        icon: Sparkles,
      },
      {
        title: "Mobile Responsive",
        description: "Perfect layout across desktop, tablet and mobile devices.",
        icon: MonitorSmartphone,
      },
      {
        title: "SEO Foundation",
        description: "Metadata, headings, schema-ready structure and clean page flow.",
        icon: Search,
      },
      {
        title: "Fast Performance",
        description: "Optimized images, clean code and performance-focused development.",
        icon: Gauge,
      },
      {
        title: "Admin Friendly",
        description: "Scalable sections, easy updates and clean website architecture.",
        icon: LayoutDashboard,
      },
      {
        title: "Secure Build",
        description: "Security basics, clean deployment and production-ready best practices.",
        icon: ShieldCheck,
      },
    ],
  },

  process: {
    eyebrow: "Website Process",
    title: "From idea to launch-ready website.",
    steps: [
      ["Discovery", "We understand your business, target audience, competitors and goals."],
      ["Strategy", "We plan sitemap, content hierarchy and conversion flow."],
      ["Design", "We create a clean, premium and mobile-first interface."],
      ["Development", "We build responsive and SEO-ready pages with clean code."],
      ["Testing", "We test speed, mobile layout, forms, links and SEO basics."],
      ["Launch", "We deploy the website and support your next improvements."],
    ],
  },

  tech: {
    eyebrow: "Technology Stack",
    title: "Built with modern tools depending on your business needs.",
    items: ["Next.js", "React", "WordPress", "PHP", "Tailwind CSS", "MySQL", "Node.js", "Vercel", "Hostinger"],
  },

  portfolio: {
    eyebrow: "Website Work",
    title: "Recent website-style projects and categories.",
    items: [
      ["Restaurant Websites", "Menu, reservations, ordering flows and local SEO structure."],
      ["Service Business Websites", "Lead-focused pages for local and professional service businesses."],
      ["Luxury Brand Websites", "Premium layouts with strong visuals and conversion-focused messaging."],
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Website development FAQs",
    items: [
      ["How long does a business website take?", "A standard business website usually takes 7 to 15 working days depending on pages, content, revisions and required features."],
      ["Will the website be mobile responsive?", "Yes. Every website is built mobile-first and tested across common screen sizes."],
      ["Do you include SEO?", "We include SEO foundation such as title tags, meta descriptions, heading structure, clean URLs, sitemap, robots and basic schema where needed."],
      ["Can you also write website content?", "Yes. We can create professional website copy and SEO-focused content for service pages."],
      ["Can you maintain the website after launch?", "Yes. We provide website maintenance, content updates, backups, fixes and ongoing improvements."],
    ],
  },

  cta: {
    title: "Ready to build a website that actually supports your business?",
    description:
      "Tell us about your business and we will suggest the right website structure, pages and launch plan.",
    primaryCta: "Start Website Project",
    secondaryCta: "Talk on WhatsApp",
  },
};
