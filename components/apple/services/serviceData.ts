export type ServiceKey =
  | "website"
  | "software"
  | "seo"
  | "social"
  | "google"
  | "meta"
  | "branding"
  | "ai"
  | "maintenance";

export type ServiceData = {
  key: ServiceKey;
  eyebrow: string;
  title: string;
  headline: string;
  intro: string;
  primary: string;
  visual: string;
  theme: "light" | "dark" | "blue" | "violet";
  highlights: { kicker: string; title: string; text: string; visual: string }[];
  capabilities: string[];
  stats: { value: string; label: string }[];
  process: { n: string; title: string; text: string }[];
};

export const serviceData: Record<ServiceKey, ServiceData> = {
  website: {
    key: "website",
    eyebrow: "Website Development",
    title: "Websites",
    headline: "Exceptional websites. Built to perform.",
    intro: "High-performance websites where interface, motion, content and conversion are designed as one experience.",
    primary: "Start a website project",
    visual: "/images/services/projects/business-website.webp",
    theme: "dark",
    highlights: [
      { kicker: "Design", title: "A first impression people remember.", text: "A visual system shaped around your business—not a recycled template.", visual: "/images/services/projects/restaurant-website.webp" },
      { kicker: "Performance", title: "Fast feels premium.", text: "Responsive engineering, lean interaction and performance-conscious builds from the start.", visual: "/images/services/projects/business-website.webp" },
      { kicker: "Conversion", title: "Every screen has a job.", text: "Clear hierarchy, purposeful journeys and calls-to-action designed around real business goals.", visual: "/images/services/projects/e-commerce.webp" },
    ],
    capabilities: ["Custom UI/UX", "Next.js & React", "WordPress", "E-commerce", "Landing pages", "Technical SEO", "CMS & admin", "Motion design"],
    stats: [{ value: "100%", label: "Responsive" }, { value: "SEO", label: "Ready structure" }, { value: "Fast", label: "Performance-first" }],
    process: [
      { n: "01", title: "Discover", text: "Goals, audience and content." },
      { n: "02", title: "Frame", text: "Structure and interaction concept." },
      { n: "03", title: "Design", text: "Visual system and key screens." },
      { n: "04", title: "Build", text: "Responsive development and motion." },
      { n: "05", title: "Launch", text: "QA, performance and deployment." },
    ],
  },
  software: {
    key: "software",
    eyebrow: "Business Software",
    title: "Software",
    headline: "Your business. One clear system.",
    intro: "Custom software that turns daily business complexity into focused screens, faster workflows and useful visibility.",
    primary: "Build custom software",
    visual: "/images/services/softwares/restaurant-pos.png",
    theme: "light",
    highlights: [
      { kicker: "Control", title: "See the business as it happens.", text: "Sales, expenses, staff, inventory and reporting can live in one coherent workspace.", visual: "/images/services/softwares/reports.png" },
      { kicker: "Workflow", title: "Less clicking. Less repetition.", text: "We map the real operational flow before we design the interface around it.", visual: "/images/services/softwares/restaurant-pos.png" },
      { kicker: "Access", title: "Made for the people who use it daily.", text: "Role-aware, responsive interfaces that stay understandable under pressure.", visual: "/images/services/softwares/stock.png" },
    ],
    capabilities: ["POS systems", "Inventory", "CRM", "Dashboards", "Reports", "Role permissions", "Offline/LAN systems", "Custom workflows"],
    stats: [{ value: "One", label: "Connected system" }, { value: "Live", label: "Operational visibility" }, { value: "Custom", label: "Built around you" }],
    process: [
      { n: "01", title: "Map", text: "Understand the current workflow." },
      { n: "02", title: "Simplify", text: "Remove friction and repetition." },
      { n: "03", title: "Prototype", text: "Validate the key flows." },
      { n: "04", title: "Engineer", text: "Build modules and permissions." },
      { n: "05", title: "Improve", text: "Deploy, train and iterate." },
    ],
  },
  seo: {
    key: "seo",
    eyebrow: "Search Engine Optimization",
    title: "SEO",
    headline: "Be found when it matters.",
    intro: "Technical foundations, search-led content and ongoing optimization designed to compound—not disappear when the campaign stops.",
    primary: "Grow with SEO",
    visual: "/images/services/seo/search.png",
    theme: "blue",
    highlights: [
      { kicker: "Technical", title: "Make every page easier to discover.", text: "Crawlability, indexation, speed, metadata and structured signals handled systematically.", visual: "/images/services/seo/visual-featured.png" },
      { kicker: "Content", title: "Build around real search intent.", text: "Keywords become useful pages and articles—not just a spreadsheet of terms.", visual: "/images/services/seo/search-results-features.jpg" },
      { kicker: "Measurement", title: "Know what is actually moving.", text: "Rankings matter, but qualified organic traffic and business outcomes matter more.", visual: "/images/services/seo/organic-traffic.jpg" },
    ],
    capabilities: ["SEO audits", "Keyword research", "On-page SEO", "Technical SEO", "Local SEO", "Content strategy", "Schema", "Reporting"],
    stats: [{ value: "Intent", label: "Before volume" }, { value: "Clean", label: "Technical base" }, { value: "Compounding", label: "Organic growth" }],
    process: [
      { n: "01", title: "Audit", text: "Find technical and content gaps." },
      { n: "02", title: "Prioritize", text: "Choose queries that matter." },
      { n: "03", title: "Optimize", text: "Improve pages and architecture." },
      { n: "04", title: "Publish", text: "Create search-led content." },
      { n: "05", title: "Compound", text: "Measure and improve monthly." },
    ],
  },
  social: {
    key: "social",
    eyebrow: "Social Media",
    title: "Social",
    headline: "Make people stop scrolling.",
    intro: "Strategy, design and content systems that make your social presence consistent, recognizable and worth paying attention to.",
    primary: "Build our social presence",
    visual: "/images/services/social-media/hero-reel.png",
    theme: "violet",
    highlights: [
      { kicker: "Creative", title: "Designed to earn the pause.", text: "Strong hooks, recognizable art direction and formats built for the feed.", visual: "/images/services/social-media/reel-cover.webp" },
      { kicker: "System", title: "Consistency without repetition.", text: "A repeatable design language gives every post a clear relationship to your brand.", visual: "/images/services/social-media/creative-2.webp" },
      { kicker: "Growth", title: "Content with a business purpose.", text: "Awareness, trust and response are planned into the calendar from the start.", visual: "/images/services/social-media/after.png" },
    ],
    capabilities: ["Content strategy", "Post design", "Reels concepts", "Captions", "Content calendars", "Community support", "Campaign creative", "Reporting"],
    stats: [{ value: "Always", label: "On-brand" }, { value: "Fast", label: "Content system" }, { value: "Clear", label: "Monthly direction" }],
    process: [
      { n: "01", title: "Position", text: "Define what the brand should own." },
      { n: "02", title: "Plan", text: "Build the monthly content system." },
      { n: "03", title: "Create", text: "Design posts and reel concepts." },
      { n: "04", title: "Publish", text: "Keep the presence consistent." },
      { n: "05", title: "Learn", text: "Use performance to refine output." },
    ],
  },
  google: {
    key: "google",
    eyebrow: "Google Ads",
    title: "Google Ads",
    headline: "Turn search intent into action.",
    intro: "Search campaigns designed around qualified intent, measurable conversion paths and disciplined ongoing optimization.",
    primary: "Launch Google Ads",
    visual: "/images/services/seo/search-ad.jpg",
    theme: "light",
    highlights: [
      { kicker: "Intent", title: "Meet demand that already exists.", text: "Campaigns are structured around what customers are actively looking for.", visual: "/images/services/seo/search-ad.jpg" },
      { kicker: "Landing", title: "The click is only half the job.", text: "Ad message and landing-page experience are treated as one conversion journey.", visual: "/images/services/projects/restaurant-website.webp" },
      { kicker: "Optimize", title: "Budget follows evidence.", text: "Search terms, creative and conversions guide the next allocation—not guesswork.", visual: "/images/services/seo/display-ad.jpg" },
    ],
    capabilities: ["Search campaigns", "Keyword strategy", "Conversion tracking", "Remarketing", "Landing pages", "Ad copy", "A/B testing", "Optimization"],
    stats: [{ value: "High", label: "Intent focus" }, { value: "Tracked", label: "Conversions" }, { value: "Lean", label: "Budget allocation" }],
    process: [
      { n: "01", title: "Research", text: "Demand, competitors and intent." },
      { n: "02", title: "Structure", text: "Campaigns, keywords and negatives." },
      { n: "03", title: "Launch", text: "Ads, tracking and landing flow." },
      { n: "04", title: "Learn", text: "Collect meaningful search data." },
      { n: "05", title: "Scale", text: "Move spend toward what converts." },
    ],
  },
  meta: {
    key: "meta",
    eyebrow: "Meta Ads",
    title: "Meta Ads",
    headline: "Creative that earns attention.",
    intro: "Paid social built as a creative testing system, with clear offers, deliberate audiences and conversion-focused landing journeys.",
    primary: "Launch Meta Ads",
    visual: "/images/services/social-media/creative-3.webp",
    theme: "dark",
    highlights: [
      { kicker: "Creative", title: "The ad has to stop the scroll first.", text: "Hooks, formats and visual concepts are designed to win attention before optimization starts.", visual: "/images/services/social-media/creative-3.webp" },
      { kicker: "Audience", title: "Right message. Right stage.", text: "Cold audiences, warm prospects and retargeting need different creative and offers.", visual: "/images/services/social-media/creative-4.webp" },
      { kicker: "Performance", title: "Test. Learn. Reallocate.", text: "Creative and audience signals shape what gets scaled and what gets cut.", visual: "/images/services/social-media/creatives-6.webp" },
    ],
    capabilities: ["Lead generation", "Sales campaigns", "Retargeting", "Creative strategy", "Audience testing", "Pixel setup", "Landing flow", "Reporting"],
    stats: [{ value: "Creative", label: "First" }, { value: "Signal", label: "Driven" }, { value: "Scale", label: "With evidence" }],
    process: [
      { n: "01", title: "Offer", text: "Clarify why someone should act." },
      { n: "02", title: "Creative", text: "Build multiple angles and hooks." },
      { n: "03", title: "Launch", text: "Structure audiences and tracking." },
      { n: "04", title: "Test", text: "Read creative and funnel signals." },
      { n: "05", title: "Scale", text: "Back the combinations that win." },
    ],
  },
  branding: {
    key: "branding",
    eyebrow: "Branding & Design",
    title: "Branding",
    headline: "Make your brand unmistakable.",
    intro: "Identity systems that give your business a distinct visual language across digital, social and real-world touchpoints.",
    primary: "Build our brand",
    visual: "/images/services/branding/project-sarss.webp",
    theme: "light",
    highlights: [
      { kicker: "Identity", title: "One idea. A whole visual language.", text: "Logo, type, color and composition are designed to work together as a system.", visual: "/images/services/branding/brand-g.jpg" },
      { kicker: "Digital", title: "Built to live on modern screens.", text: "Your identity is tested in the places customers will actually experience it.", visual: "/images/services/branding/project-mehran.webp" },
      { kicker: "Consistency", title: "Flexible enough to grow.", text: "Guidelines make the identity repeatable without making every touchpoint identical.", visual: "/images/services/branding/socialmediaposts.png" },
    ],
    capabilities: ["Logo systems", "Visual identity", "Brand guidelines", "Social templates", "Marketing design", "Typography", "Color systems", "Campaign art direction"],
    stats: [{ value: "Distinct", label: "Visual direction" }, { value: "Flexible", label: "Brand system" }, { value: "Ready", label: "For every channel" }],
    process: [
      { n: "01", title: "Define", text: "Audience, position and personality." },
      { n: "02", title: "Explore", text: "Visual territories and concepts." },
      { n: "03", title: "Refine", text: "Build the core identity system." },
      { n: "04", title: "Apply", text: "Test it across real touchpoints." },
      { n: "05", title: "Systemize", text: "Create guidelines for consistency." },
    ],
  },
  ai: {
    key: "ai",
    eyebrow: "AI Automation",
    title: "AI Automation",
    headline: "Automate the work that slows you down.",
    intro: "Practical AI and automation connected to the real tools, conversations and workflows your business already uses.",
    primary: "Automate a workflow",
    visual: "/images/portfolio/ai.jpg",
    theme: "dark",
    highlights: [
      { kicker: "Assist", title: "Turn repeated questions into instant answers.", text: "Customer-facing and internal assistants can handle structured conversations around the clock.", visual: "/images/portfolio/ai.jpg" },
      { kicker: "Connect", title: "Make tools talk to each other.", text: "Automations can move information between forms, CRM, email, WhatsApp and reporting flows.", visual: "/images/portfolio/softwares.webp" },
      { kicker: "Accelerate", title: "Keep people focused on judgment, not repetition.", text: "Routine steps are automated while important decisions remain visible to the team.", visual: "/images/portfolio/uiux.jpg" },
    ],
    capabilities: ["AI assistants", "Lead qualification", "CRM automation", "WhatsApp flows", "Email workflows", "Reporting", "Scheduling", "API integrations"],
    stats: [{ value: "24/7", label: "Automated response" }, { value: "Less", label: "Manual repetition" }, { value: "More", label: "Operational focus" }],
    process: [
      { n: "01", title: "Find", text: "Identify repetitive high-value work." },
      { n: "02", title: "Map", text: "Define triggers, data and decisions." },
      { n: "03", title: "Connect", text: "Integrate the required systems." },
      { n: "04", title: "Test", text: "Validate edge cases and handoffs." },
      { n: "05", title: "Expand", text: "Measure and automate the next flow." },
    ],
  },
  maintenance: {
    key: "maintenance",
    eyebrow: "Website Maintenance",
    title: "Maintenance",
    headline: "Keep your website fast, secure and ready.",
    intro: "Ongoing technical care for businesses that want their website monitored, updated and improved—not slowly neglected.",
    primary: "Protect our website",
    visual: "/images/services/projects/business-website.webp",
    theme: "blue",
    highlights: [
      { kicker: "Updates", title: "Stay current without breaking things.", text: "Framework, plugin and content changes are handled with controlled checks and backups.", visual: "/images/portfolio/websites.webp" },
      { kicker: "Performance", title: "Slow creep gets caught early.", text: "We keep an eye on performance issues, broken journeys and technical regressions.", visual: "/images/portfolio/pestzone-wm.webp" },
      { kicker: "Support", title: "A technical partner when something changes.", text: "Small fixes, content updates and improvement requests have a clear place to go.", visual: "/images/portfolio/softwares.webp" },
    ],
    capabilities: ["Updates", "Backups", "Security checks", "Performance", "Content changes", "Bug fixes", "Uptime review", "Technical support"],
    stats: [{ value: "Current", label: "Software & content" }, { value: "Watched", label: "Key issues" }, { value: "Ready", label: "For change" }],
    process: [
      { n: "01", title: "Baseline", text: "Review the current site health." },
      { n: "02", title: "Protect", text: "Set backup and update routines." },
      { n: "03", title: "Maintain", text: "Handle planned technical work." },
      { n: "04", title: "Review", text: "Check performance and issues." },
      { n: "05", title: "Improve", text: "Make incremental enhancements." },
    ],
  },
};
