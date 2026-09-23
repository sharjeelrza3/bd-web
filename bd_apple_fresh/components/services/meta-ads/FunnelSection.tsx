"use client";

import {
  BadgeCheck,
  Eye,
  MessageSquareText,
  MousePointerClick,
  ShoppingCart,
} from "lucide-react";

const stages = [
  { title: "Attention", metric: "1.8M Reach", icon: Eye },
  { title: "Interest", metric: "62K Clicks", icon: MousePointerClick },
  { title: "Lead", metric: "4,920 Leads", icon: MessageSquareText },
  { title: "Conversion", metric: "1,180 Sales", icon: ShoppingCart },
  { title: "Retention", metric: "32% Repeat", icon: BadgeCheck },
];

export default function FunnelSection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Conversion Funnel
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Every campaign needs a path from attention to revenue.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {stages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`relative rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 text-center ${
                  index === 1 || index === 3 ? "lg:mt-8" : ""
                }`}
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={22} />
                </span>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                  Stage {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold text-[#0066cc]">{item.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
