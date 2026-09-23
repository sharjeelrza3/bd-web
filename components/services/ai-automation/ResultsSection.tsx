"use client";

import { Clock3, Gauge, TrendingUp, UsersRound } from "lucide-react";

const results = [
  { value: "92%", label: "Tasks Automated", icon: Gauge },
  { value: "18h", label: "Weekly Time Saved", icon: Clock3 },
  { value: "+46%", label: "Lead Response Rate", icon: TrendingUp },
  { value: "-38%", label: "Operational Load", icon: UsersRound },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#000000] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Automation Results
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Less manual work. Faster decisions. Better customer experience.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            We measure automation by time saved, response speed, task completion and operational efficiency.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => {
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
