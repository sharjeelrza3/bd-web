"use client";

import { MapPin, Navigation, Phone, Star } from "lucide-react";

const metrics = [
  { icon: MapPin, value: "Top 3", label: "Map Pack" },
  { icon: Phone, value: "+186%", label: "Calls" },
  { icon: Navigation, value: "+94%", label: "Directions" },
  { icon: Star, value: "4.9", label: "Rating" },
];

export default function LocalDominance() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Local Dominance</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Own the searches happening near your business.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-white/50">
              We connect local pages, Google Business Profile, reviews, citations
              and location signals into one local growth system.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="rounded-[2rem] bg-white p-6 text-[#101010]">
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[1.5rem] bg-[#f5f5f7] p-5">
                      <Icon size={20} className="text-[#0066cc]" />
                      <p className="mt-5 text-4xl font-semibold tracking-[-0.06em]">{item.value}</p>
                      <p className="mt-1 text-sm font-bold text-black/40">{item.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-[1.5rem] bg-[#e7fbff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Google Business Profile</p>
                <p className="mt-2 text-2xl font-semibold">Being Digitals — Karachi</p>
                <p className="mt-2 text-sm font-semibold text-black/50">Optimized for visibility, calls and directions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
