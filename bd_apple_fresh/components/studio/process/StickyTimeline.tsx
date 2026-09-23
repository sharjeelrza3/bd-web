"use client";

import {
  Braces,
  Compass,
  Eye,
  LayoutTemplate,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand the business, users, goals, constraints and current digital environment.",
    items: ["Business goals", "Audience research", "Competitor review", "Requirements"],
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We convert discovery into a clear roadmap, priorities and measurable outcomes.",
    items: ["Project roadmap", "Feature priorities", "Content plan", "Success metrics"],
    icon: Compass,
  },
  {
    number: "03",
    title: "UX & Wireframes",
    description:
      "We organize information and user journeys before visual styling begins.",
    items: ["Sitemap", "User flows", "Wireframes", "Content hierarchy"],
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "Visual Design",
    description:
      "We develop a distinctive interface that matches the brand and supports conversion.",
    items: ["UI direction", "Design system", "Responsive screens", "Prototype"],
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Development",
    description:
      "Approved designs are turned into fast, scalable and maintainable code.",
    items: ["Component build", "CMS or backend", "Integrations", "Responsive implementation"],
    icon: Braces,
  },
  {
    number: "06",
    title: "Quality Assurance",
    description:
      "We test functionality, performance and usability before the project is released.",
    items: ["Device testing", "Bug fixing", "Speed review", "Security checks"],
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Launch",
    description:
      "We prepare deployment, analytics, redirects and final production checks.",
    items: ["Production setup", "Domain configuration", "Analytics", "Final approval"],
    icon: Rocket,
  },
  {
    number: "08",
    title: "Growth & Support",
    description:
      "After launch, we monitor performance and improve the system over time.",
    items: ["Performance review", "SEO improvements", "Content updates", "Ongoing support"],
    icon: Eye,
  },
];

export default function StickyTimeline() {
  return (
    <section id="process-timeline" className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              The Complete Process
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              One clear stage at a time.
            </h2>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              Every stage has a purpose, defined outputs and a clear approval point,
              so the project keeps moving without confusion.
            </p>
          </div>

          <div className="space-y-5">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="group rounded-[2.2rem] border border-black/10 bg-[#f5f5f7] p-7 transition hover:border-[#0066cc]/40 hover:bg-white hover:shadow-[0_25px_90px_rgba(0,0,0,.07)]"
                >
                  <div className="grid gap-7 md:grid-cols-[auto_1fr]">
                    <div className="flex items-start gap-4">
                      <span className="text-5xl font-semibold tracking-[-0.08em] text-[#0066cc]/60">
                        {stage.number}
                      </span>

                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                        <Icon size={23} />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-4xl font-semibold tracking-[-0.05em]">
                        {stage.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-black/50">
                        {stage.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {stage.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
