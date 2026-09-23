"use client";

import {
  MonitorPlay,
  Repeat2,
  Search,
  ShoppingBag,
  Smartphone,
  Video,
} from "lucide-react";

const campaigns = [
  { title: "Search Campaigns", desc: "Text ads for high-intent keywords and service searches.", icon: Search },
  { title: "Performance Max", desc: "Cross-network campaigns using assets, signals and automation.", icon: MonitorPlay },
  { title: "Shopping Ads", desc: "Product-focused campaigns for ecommerce stores and catalogs.", icon: ShoppingBag },
  { title: "Display Remarketing", desc: "Bring previous visitors back with visual reminders.", icon: Repeat2 },
  { title: "YouTube Ads", desc: "Video campaigns for awareness, consideration and retargeting.", icon: Video },
  { title: "Call Campaigns", desc: "Drive direct phone calls from high-intent mobile searches.", icon: Smartphone },
];

export default function CampaignTypesSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Campaign Types
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              The right campaign depends on the customer journey.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-black/50">
              We choose campaign types based on intent, offer, sales cycle and
              conversion objective instead of using one setup for every business.
            </p>
          </div>

          <div className="space-y-4">
            {campaigns.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group grid gap-5 rounded-[2rem] border border-black/10 bg-white p-6 transition hover:border-[#0066cc]/40 hover:shadow-[0_25px_90px_rgba(0,0,0,.07)] md:grid-cols-[auto_1fr_auto] md:items-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                    <Icon size={23} />
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
                  </div>

                  <span className="text-5xl font-semibold tracking-[-0.08em] text-black/5">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
