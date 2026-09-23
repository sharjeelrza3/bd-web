export type ResourceItem = {
  title: string;
  type: string;
  category: string;
  description: string;
  href: string;
};

export const resources: ResourceItem[] = [
  {
    title: "SEO Audit Checklist",
    type: "PDF",
    category: "SEO",
    description: "A practical checklist for technical, on-page and local SEO reviews.",
    href: "/resources/seo-audit-checklist.pdf",
  },
  {
    title: "Website Planning Sheet",
    type: "PDF",
    category: "Website",
    description: "Plan pages, goals, content, integrations and launch requirements.",
    href: "/resources/website-planning-sheet.pdf",
  },
  {
    title: "Brand Discovery Questionnaire",
    type: "PDF",
    category: "Branding",
    description: "Clarify positioning, audience, visual direction and brand personality.",
    href: "/resources/brand-discovery-questionnaire.pdf",
  },
  {
    title: "Social Media Content Planner",
    type: "PDF",
    category: "Marketing",
    description: "Organize content themes, publishing dates and campaign objectives.",
    href: "/resources/social-media-content-planner.pdf",
  },
  {
    title: "Website Launch Checklist",
    type: "PDF",
    category: "Website",
    description: "Review performance, SEO, forms, analytics and final launch checks.",
    href: "/resources/website-launch-checklist.pdf",
  },
  {
    title: "Proposal Template",
    type: "PDF",
    category: "Business",
    description: "A clean structure for project scope, pricing, timeline and terms.",
    href: "/resources/proposal-template.pdf",
  },
];

export const categories = ["All", "SEO", "Website", "Branding", "Marketing", "Business"];
