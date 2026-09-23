"use client";

import {
  BarChart3,
  Heart,
  MousePointerClick,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const metrics = [
  { value: "+12K", label: "Followers", icon: UsersRound },
  { value: "2.1M", label: "Reach", icon: TrendingUp },
  { value: "14.8%", label: "Engagement", icon: Heart },
  { value: "842", label: "Leads", icon: MousePointerClick },
];

export default function GrowthDashboard() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Live Growth Dashboard
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Measure attention, engagement and business impact.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            Reporting focuses on what changed, why it changed and what to do next.
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

        <div className="mt-5 rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                Monthly Performance
              </p>
              <p className="mt-2 text-2xl font-semibold">Growth trend</p>
            </div>
            <BarChart3 size={24} className="text-[#0066cc]" />
          </div>

          <div className="mt-8 flex h-48 items-end gap-3">
            {[32, 44, 50, 47, 61, 69, 78, 83, 91, 100].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-full bg-[#0066cc]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
