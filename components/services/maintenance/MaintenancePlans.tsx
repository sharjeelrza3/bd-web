"use client";

import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Essential",
    desc: "For small business websites that need regular updates and protection.",
    featured: false,
    features: [
      "Monthly updates",
      "Weekly backups",
      "Security checks",
      "Basic speed review",
      "Email support",
    ],
  },
  {
    name: "Professional",
    desc: "For active business websites that need ongoing monitoring and priority support.",
    featured: true,
    features: [
      "Weekly updates",
      "Daily backups",
      "Uptime monitoring",
      "Performance optimization",
      "Priority support",
      "Monthly report",
    ],
  },
  {
    name: "Advanced",
    desc: "For ecommerce, high-traffic and business-critical websites.",
    featured: false,
    features: [
      "Priority maintenance",
      "Daily backups",
      "Advanced security",
      "Emergency response",
      "Database optimization",
      "Custom reporting",
    ],
  },
];

export default function MaintenancePlans() {
  return (
    <section id="plans" className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Maintenance Plans
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Choose support that matches your website.
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
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                plan.featured ? "text-[#0066cc]" : "text-[#0066cc]"
              }`}>
                {plan.featured ? "Most Popular" : "Maintenance Plan"}
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
                className={`mt-8 flex items-center justify-center rounded-full px-6 py-4 font-semibold transition ${
                  plan.featured
                    ? "bg-[#0066cc] text-[#000000]"
                    : "bg-[#1d1d1f] text-white hover:bg-[#0066cc] hover:text-[#000000]"
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
