"use client";

import { BadgeDollarSign, MousePointerClick, ShoppingCart, TrendingUp } from "lucide-react";

const metrics = [
  { value: "6.2x", label: "Return on Ad Spend", icon: TrendingUp },
  { value: "-27%", label: "Cost Per Lead", icon: BadgeDollarSign },
  { value: "4.9%", label: "Conversion Rate", icon: ShoppingCart },
  { value: "7.8%", label: "Click Through Rate", icon: MousePointerClick },
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Performance Dashboard
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Every rupee should have a measurable job.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            We track conversion quality, lead cost, search terms, keyword efficiency
            and return on ad spend.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
                <Icon size={23} className="text-[#0066cc]" />
                <p className="mt-8 text-5xl font-semibold tracking-[-0.07em]">{item.value}</p>
                <p className="mt-2 text-sm font-bold text-white/40">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
