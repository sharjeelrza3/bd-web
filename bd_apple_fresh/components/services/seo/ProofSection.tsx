"use client";

import { BarChart3, MousePointerClick, Search, TrendingUp } from "lucide-react";

const results = [
  { icon: TrendingUp, value: "+420%", label: "Organic Traffic" },
  { icon: MousePointerClick, value: "+310%", label: "Qualified Leads" },
  { icon: Search, value: "#1", label: "Priority Keywords" },
  { icon: BarChart3, value: "97", label: "SEO Health Score" },
];

export default function ProofSection() {
  return (
    <section id="proof" className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.7rem] bg-[#000000] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Growth Proof</p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-6xl">
                Numbers that explain what changed.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
              We report on outcomes that matter: visibility, qualified sessions,
              lead generation and technical health.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
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
