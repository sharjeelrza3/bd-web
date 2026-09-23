"use client";

import { BadgeDollarSign, MousePointerClick, ShoppingCart, TrendingUp } from "lucide-react";

const results = [
  { value: "4.8x", label: "Return on Ad Spend", icon: TrendingUp },
  { value: "-32%", label: "Cost Per Lead", icon: BadgeDollarSign },
  { value: "+186%", label: "Conversions", icon: ShoppingCart },
  { value: "5.1%", label: "Click Through Rate", icon: MousePointerClick },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.7rem] border border-black/10 bg-white p-8 shadow-[0_30px_110px_rgba(0,0,0,.07)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Campaign Results
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Better decisions create better performance.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
              Results improve when creative, audience, offer and optimization all
              work together.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[2rem] bg-[#1d1d1f] p-7 text-white">
                  <Icon size={23} className="text-[#0066cc]" />
                  <p className="mt-8 text-5xl font-semibold tracking-[-0.07em]">{item.value}</p>
                  <p className="mt-2 text-sm font-bold text-white/40">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
