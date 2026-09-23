import {
  Search,
  Code2,
  Megaphone,
  Palette,
  MonitorCog,
  BarChart3,
  Layers3,
  PenTool,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Goal = [string, string, LucideIcon];

export type Project = {
  title: string;
  category: string;
  desc: string;
  image?: string;
  tags: string[];
};

export type Review = {
  name: string;
  role: string;
  quote: string;
  tag: string;
};

export type VideoReview = {
  title: string;
  type: string;
  video: string;
};

export type ProcessStep = {
  num: string;
  title: string;
  heading: string;
  desc: string;
  icon: LucideIcon;
  points: string[];
};

export const showcase = [
  {
    label: "Website Development",
    title: "Premium websites that sell your business before you speak.",
    desc: "Fast, responsive, SEO-ready websites designed to convert visitors into real inquiries.",
    bg: "bg-[#1d1d1f]",
  },
  {
    label: "SEO Growth",
    title: "Get found when customers are already searching.",
    desc: "Technical SEO, local SEO and content structure built for long-term visibility.",
    bg: "bg-[#0066cc]",
  },
  {
    label: "Business Software",
    title: "Systems that make your business easier to run.",
    desc: "POS, booking systems, dashboards, portals and admin panels built around your workflow.",
    bg: "bg-[#1d1d1f]",
  },
];

export const goals: Goal[] = [
  ["Build my website", "Web design, development and SEO structure", Code2],
  ["Get more leads", "Landing pages, ads and conversion strategy", BarChart3],
  ["Rank on Google", "Technical SEO, local SEO and content growth", Search],
  ["Design my brand", "Logo, identity and social media creative direction", Palette],
  ["Automate my business", "POS, dashboards, CRM and custom systems", MonitorCog],
  ["Grow my social media", "Posts, reels, captions and content planning", Megaphone],
];

export const projects: Project[] = [
  {
    title: "Taste of Karachi",
    category: "Restaurant Website",
    desc: "Menu, reservations, ordering flow and SEO-ready restaurant presence.",
    image: "/images/portfolio/tasteofkarachi-wm.webp",
    tags: ["Website", "UI/UX", "SEO"],
  },
  {
    title: "The Pest Zone",
    category: "SEO Website",
    desc: "Local SEO service website designed for pest control leads.",
    image: "/images/portfolio/pestzone-wm.webp",
    tags: ["SEO", "Service Pages", "Leads"],
  },
  {
    title: "Restaurant POS",
    category: "Business Software",
    desc: "Billing, menu, orders, reports and admin dashboard system.",
    image: "/images/services/softwares/restaurant-pos.png",
    tags: ["Software", "Dashboard", "POS"],
  },
  {
    title: "Clinic OPD System",
    category: "Healthcare Software",
    desc: "OPD, pharmacy, inventory, billing and reporting dashboard.",
    image: "/images/portfolio/softwares.webp",
    tags: ["OPD", "Pharmacy", "Reports"],
  },
  {
    title: "Vice City Farm",
    category: "Branding & Social",
    desc: "Creative content direction, ad posts and social media campaigns.",
    image: "/images/portfolio/branding-social.png",
    tags: ["Branding", "Ads", "Social"],
  },
];

export const reviews: Review[] = [
  {
    name: "Taste of Karachi",
    role: "Restaurant Website Client",
    quote:
      "Being Digitals handled our website professionally. The design, structure and delivery were smooth from start to launch.",
    tag: "Website",
  },
  {
    name: "The Pest Zone",
    role: "SEO Website Client",
    quote:
      "They understood our service business and built SEO-focused pages that made the website more lead-driven.",
    tag: "SEO",
  },
  {
    name: "Mehran Royale",
    role: "Farmhouse Brand Client",
    quote:
      "The website and creative direction gave our farmhouse a more premium and professional online presence.",
    tag: "Branding",
  },
  {
    name: "Restaurant POS Client",
    role: "Software Client",
    quote:
      "The POS system made billing, reporting and daily management much easier for our restaurant team.",
    tag: "Software",
  },
  {
    name: "Vice City Farm",
    role: "Social Media Client",
    quote:
      "Their creative posts and campaign ideas helped us present the farmhouse in a much better way online.",
    tag: "Social",
  },
  {
    name: "Clinic OPD System",
    role: "Healthcare Software Client",
    quote:
      "The OPD and pharmacy workflow became more organized with billing, reports and patient records in one system.",
    tag: "System",
  },
];

export const videoReviews: VideoReview[] = [
  {
    title: "Client Review 01",
    type: "Website Project",
    video: "/videos/reviews/review-1.mp4",
  },
  {
    title: "Client Review 02",
    type: "Marketing Project",
    video: "/videos/reviews/review-2.mp4",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    heading: "Understand the business before writing a single line of code.",
    desc: "We study your business, audience, competitors, goals and current digital presence so every decision has a reason.",
    icon: Search,
    points: ["Business goals", "Audience research", "Competitor scan"],
  },
  {
    num: "02",
    title: "Strategy",
    heading: "Map the fastest route from idea to measurable growth.",
    desc: "We plan the website structure, conversion flow, SEO direction, content hierarchy and launch priorities.",
    icon: Layers3,
    points: ["Sitemap", "Conversion flow", "SEO planning"],
  },
  {
    num: "03",
    title: "Design",
    heading: "Design every screen to build trust and drive action.",
    desc: "We create clean, premium and mobile-first interfaces with strong spacing, readable typography and clear CTAs.",
    icon: PenTool,
    points: ["UI direction", "Mobile UX", "Brand system"],
  },
  {
    num: "04",
    title: "Build",
    heading: "Clean code, fast loading and scalable architecture.",
    desc: "We develop performance-focused websites and systems using modern, maintainable and SEO-friendly code.",
    icon: Code2,
    points: ["Frontend build", "CMS / backend", "Performance"],
  },
  {
    num: "05",
    title: "Launch",
    heading: "Testing, SEO, analytics and a smooth production launch.",
    desc: "Before going live, we test responsiveness, speed, forms, SEO metadata, tracking and deployment setup.",
    icon: Rocket,
    points: ["QA testing", "SEO setup", "Deployment"],
  },
  {
    num: "06",
    title: "Grow",
    heading: "Improve continuously with real behaviour and data.",
    desc: "After launch, we improve content, campaigns, SEO and conversion performance based on real insights.",
    icon: TrendingUp,
    points: ["Optimization", "Content growth", "Reporting"],
  },
];
