"use client";

import {
  Code2,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wand2,
  Zap,
} from "lucide-react";

export const websiteDevelopment = {
  hero: {
    eyebrow: "Website Development",
    title: "We build websites that turn visitors into customers.",
    description:
      "Modern design, fast performance and SEO-ready structure for businesses that need a premium website built to generate real inquiries.",
    primaryCta: "Start Your Website Project",
    secondaryCta: "View Our Work",
    image: "/images/portfolio/websites.webp",
    highlights: [
      ["Strategy First", "Approach"],
      ["SEO & Performance", "Optimized"],
      ["Mobile First", "Development"],
      ["Ongoing Support", "Maintenance"],
    ],
    badges: [
      ["98%", "Client Satisfaction"],
      ["Lightning Fast", "Performance"],
    ],
  },

  problems: [
    {
      title: "Outdated Design",
      description: "Old design makes your business look unprofessional and untrustworthy.",
      icon: Wand2,
    },
    {
      title: "Slow Performance",
      description: "Slow websites lose visitors and hurt search rankings.",
      icon: Gauge,
    },
    {
      title: "Poor SEO Structure",
      description: "Without proper SEO, your website will not be found on Google.",
      icon: Search,
    },
    {
      title: "Not Mobile Friendly",
      description: "A bad mobile experience loses more than half your customers.",
      icon: Smartphone,
    },
    {
      title: "No Clear Strategy",
      description: "Without clear goals and structure, your website will not deliver results.",
      icon: LayoutDashboard,
    },
  ],

  features: [
    {
      title: "Custom UI/UX Design",
      description: "Unique, modern and conversion-focused design that represents your brand.",
      icon: Sparkles,
    },
    {
      title: "Mobile Responsive",
      description: "Perfect experience on every screen size and device.",
      icon: MonitorSmartphone,
    },
    {
      title: "SEO Optimized",
      description: "Clean code and structure built for better search visibility.",
      icon: Search,
    },
    {
      title: "Fast Performance",
      description: "Optimized speed for better ranking, engagement and conversions.",
      icon: Zap,
    },
    {
      title: "Admin Friendly",
      description: "Easy-to-manage content, pages and sections.",
      icon: LayoutDashboard,
    },
    {
      title: "Secure & Reliable",
      description: "Security basics, clean deployment and scalable structure.",
      icon: ShieldCheck,
    },
    {
      title: "Clean Code Structure",
      description: "Reusable components and maintainable development architecture.",
      icon: Code2,
    },
    {
      title: "Ongoing Support",
      description: "Support after launch for updates, fixes and improvements.",
      icon: LockKeyhole,
    },
  ],

  stats: [
    ["120+", "Websites Delivered"],
    ["40+", "Businesses Served"],
    ["98%", "Client Satisfaction"],
    ["6+", "Years Experience"],
  ],

  process: [
    ["Discovery", "We understand your business, goals and target audience."],
    ["Strategy", "We plan sitemap, content and conversion flow."],
    ["Design", "We design modern UI/UX that builds trust."],
    ["Development", "We code your website with clean, efficient and secure code."],
    ["Testing", "We test speed, responsiveness and SEO."],
    ["Launch", "We go live and support your growth journey."],
  ],

  projects: [
    {
      title: "Restaurant Website",
      category: "Food Business",
      description: "Menu, reservations and conversion-focused restaurant presence.",
      image: "/images/services/projects/restaurant-website.webp",
    },
    {
      title: "Business Website",
      category: "Corporate",
      description: "Professional, clean and responsive company website.",
      image: "/images/services/projects/business-website.webp",
    },
    {
      title: "E-Commerce Website",
      category: "Online Store",
      description: "Modern shopping experience built to convert visitors.",
      image: "/images/services/projects/e-commerce.webp",
    },
  ],

  tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PHP", "Laravel", "WordPress", "MySQL", "Shopify"],

  testimonials: [
    {
      quote:
        "Being Digitals built a website that completely transformed our online presence. Highly professional team.",
      name: "Ali Raza",
      role: "Founder, Nexora Solutions",
    },
    {
      quote:
        "Our website loads faster and we are getting more leads than ever before. Amazing work.",
      name: "Sara Khan",
      role: "Marketing Head, Urban Store",
    },
    {
      quote:
        "The design, SEO and performance — everything is top notch. Highly recommended.",
      name: "Usman Tariq",
      role: "CEO, Spice Route",
    },
  ],

  faqs: [
    ["How long does it take to build a website?", "A standard business website usually takes 7 to 15 working days. More advanced websites can take 3 to 6 weeks depending on features."],
    ["Will my website be SEO friendly?", "Yes. We build SEO-ready structure, metadata, clean headings, sitemap, robots and performance-focused pages."],
    ["Can I update my website content easily?", "Yes. We can build editable sections, CMS structure or admin-friendly pages depending on your project."],
    ["Do you provide domain and hosting?", "Yes. We can guide you or provide domain, hosting, SSL and deployment setup as an add-on."],
  ],
};
