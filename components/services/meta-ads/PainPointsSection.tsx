"use client";

import {
  BadgeDollarSign,
  CircleOff,
  MousePointerClick,
  Repeat2,
  Target,
  TrendingDown,
} from "lucide-react";

const items = [
  { title: "Random boosting", desc: "Boosting posts without strategy usually wastes budget.", icon: CircleOff },
  { title: "High cost per lead", desc: "Weak audiences and creatives make every result more expensive.", icon: BadgeDollarSign },
  { title: "Low conversion quality", desc: "Campaigns bring clicks but not serious buyers or qualified leads.", icon: MousePointerClick },
  { title: "No retargeting", desc: "Interested people leave and are never brought back into the funnel.", icon: Repeat2 },
  { title: "Poor audience targeting", desc: "Broad or incorrect targeting reduces relevance and performance.", icon: Target },
  { title: "No optimization system", desc: "Without testing and iteration, campaign performance declines.", icon: TrendingDown },
];

export default function PainPointsSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Why Meta Ads Fail
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Stop blaming
              the budget.
              Start fixing
              the strategy.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Profitable campaigns require the right offer, creative, audience,
            conversion flow and continuous testing.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
