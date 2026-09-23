"use client";

import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For brands building consistency.",
    featured: false,
    features: ["12 posts monthly", "Basic stories", "Monthly calendar", "Caption writing", "Reporting"],
  },
  {
    name: "Growth",
    desc: "For active brands focused on reach and engagement.",
    featured: true,
    features: ["16–20 posts", "Reels strategy", "Stories", "Community management", "Monthly reporting"],
  },
  {
    name: "Scale",
    desc: "For brands that want aggressive content growth.",
    featured: false,
    features: ["High-volume content", "Reels production", "Campaign creatives", "Community growth", "Weekly optimization"],
  },
];

export default function PackagesSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Social Media Packages
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Choose the content system that matches your growth stage.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2.2rem] border p-7 ${
                plan.featured
                  ? "border-[#0066cc] bg-[#1d1d1f] text-white shadow-[0_30px_110px_rgba(16,35,31,.2)]"
                  : "border-black/10 bg-white"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                plan.featured ? "text-[#0066cc]" : "text-[#0066cc]"
              }`}>
                {plan.featured ? "Most Popular" : "Monthly Plan"}
              </p>
              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{plan.name}</h3>
              <p className={`mt-4 text-sm font-semibold leading-6 ${
                plan.featured ? "text-white/50" : "text-black/50"
              }`}>
                {plan.desc}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#0066cc]" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center rounded-full px-6 py-4 font-semibold ${
                  plan.featured
                    ? "bg-[#0066cc] text-[#000000]"
                    : "bg-[#1d1d1f] text-white"
                }`}
              >
                Get Custom Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
