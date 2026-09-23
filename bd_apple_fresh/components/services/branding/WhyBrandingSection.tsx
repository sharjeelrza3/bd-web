"use client";

import { BadgeCheck, Eye, HeartHandshake, Target, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Stand out instantly",
    desc: "A distinctive visual identity helps your business feel different from competitors.",
    icon: Eye,
  },
  {
    title: "Build trust faster",
    desc: "Professional branding makes your business look credible, organized and reliable.",
    icon: HeartHandshake,
  },
  {
    title: "Stay consistent",
    desc: "A clear system keeps your website, social media and campaigns visually aligned.",
    icon: BadgeCheck,
  },
  {
    title: "Support growth",
    desc: "Strong branding makes marketing, selling and expansion easier over time.",
    icon: TrendingUp,
  },
];

export default function WhyBrandingSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Why Branding Matters
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Good design gets attention. Strong branding builds preference.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Branding is not just a logo. It is the complete visual and emotional system
            that shapes how people remember, trust and choose your business.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.07)] ${
                  index === 1 || index === 3 ? "lg:mt-8" : ""
                }`}
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={23} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
