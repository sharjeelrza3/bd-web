export type Review = {
  client: string;
  company: string;
  industry: string;
  project: string;
  rating: number;
  quote: string;
  image: string;
  logo: string;
};

export const reviews: Review[] = [
  {
    client: "Restaurant Management",
    company: "Taste of Karachi",
    industry: "Restaurant",
    project: "Website, Menu & Reservations",
    rating: 5,
    quote:
      "Being Digitals understood our business, our audience and the experience we wanted to create. The final website feels premium and practical.",
    image: "/images/portfolio/tasteofkarachi-wm.webp",
    logo: "/images/clients/taste-of-karachi.png",
  },
  {
    client: "Business Owner",
    company: "The Pest Zone",
    industry: "Local Services",
    project: "Website & Local SEO",
    rating: 5,
    quote:
      "The website now explains our services properly and makes it much easier for customers to contact us.",
    image: "/images/portfolio/pestzone-wm.webp",
    logo: "/images/clients/the-pest-zones.png",
  },
  {
    client: "Clinic Management",
    company: "Nazar Medical Center",
    industry: "Healthcare",
    project: "Hospital Management System",
    rating: 5,
    quote:
      "The software was built around our real workflow. OPD, pharmacy and reporting are now much easier to manage.",
    image: "/images/services/softwares/restaurant-pos.png",
    logo: "/images/being-digitals-logo.png",
  },
  {
    client: "Business Owner",
    company: "Vice City Farmhouse",
    industry: "Hospitality",
    project: "Branding & Social Media",
    rating: 5,
    quote:
      "The visual direction and campaign content improved how customers see our farmhouse and helped us present a stronger offer.",
    image: "/images/services/branding/project-mehran.webp",
    logo: "/images/clients/vice-city-farms.png",
  },
  {
    client: "Brand Team",
    company: "SARSS Fragrance",
    industry: "Ecommerce",
    project: "Branding & Digital Content",
    rating: 5,
    quote:
      "The work felt polished, modern and aligned with the premium direction we wanted for the brand.",
    image: "/images/services/branding/project-sarss.webp",
    logo: "/images/being-digitals-logo.png",
  },
  {
    client: "Project Team",
    company: "AURA",
    industry: "Education",
    project: "Smart Complaint Portal",
    rating: 5,
    quote:
      "The system was organized clearly and delivered with a strong understanding of the user roles and workflow.",
    image: "/images/portfolio/branding-social.png",
    logo: "/images/being-digitals-logo.png",
  },
];

export const videoReviews = [
  {
    title: "Restaurant Owner Testimonial",
    client: "Kings Burger",
    industry: "Restaurant Software",
    image: "/images/portfolio/branding-social.png",
    video: "/videos/reviews/review-1.mp4",
    duration: "0:42",
  },
  {
    title: "Healthcare Software Review",
    client: "Nazar Medical Center",
    industry: "Hospital Management",
    image: "/images/services/softwares/restaurant-pos.png",
    video: "/videos/reviews/review-1.mp4",
    duration: "0:48",
  },
  {
    title: "Website & SEO Review",
    client: "The Pest Zone",
    industry: "Local Services",
    image: "/images/portfolio/pestzone-wm.webp",
    video: "/videos/reviews/review-1.mp4",
    duration: "0:36",
  },
];

export const clientLogos = [
  { name: "Taste of Karachi", src: "/images/clients/taste-of-karachi.png" },
  { name: "The Pest Zone", src: "/images/clients/the-pest-zones.png" },
  { name: "Nazar Medical Center", src: "/images/being-digitals-logo.png" },
  { name: "Vice City Farmhouse", src: "/images/clients/vice-city-farms.png" },
  { name: "Mehran Royale", src: "/images/clients/mehran-royalee.png" },
  { name: "SARSS Fragrance", src: "/images/being-digitals-logo.png" },
  { name: "M-One Targets", src: "/images/clients/m-one-target.png" },
  { name: "AURA", src: "/images/being-digitals-logo.png" },
];
