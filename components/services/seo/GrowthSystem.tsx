"use client";

import {
  Braces,
  FileSearch,
  Link2,
  MapPinned,
  Search,
  TextSearch,
} from "lucide-react";

const pillars = [
  { title: "Technical Foundation", desc: "Crawlability, indexing, site architecture, speed and structured data.", icon: Braces },
  { title: "Search Intent Mapping", desc: "Keywords grouped by commercial, informational and local intent.", icon: Search },
  { title: "Content Engine", desc: "Landing pages, clusters and editorial topics designed to compound.", icon: TextSearch },
  { title: "Authority Signals", desc: "Relevant links, citations, digital PR and trust-building assets.", icon: Link2 },
  { title: "Local Visibility", desc: "Google Business Profile, map pack and city-level landing strategy.", icon: MapPinned },
  { title: "Conversion SEO", desc: "Turn search sessions into calls, forms, bookings and sales.", icon: FileSearch },
];

export default function GrowthSystem() {
  return (
    <section id="growth-system" className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Growth System</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              SEO that works like a system, not a checklist.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-black/50">
              Each pillar supports the next. Technical health creates access,
              content creates relevance, authority creates trust and conversion
              turns visibility into revenue.
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((item, index) => {
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
                  <span className="text-5xl font-semibold tracking-[-0.08em] text-black/5">0{index + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
