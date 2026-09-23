"use client";
import { BarChart3, Gauge, Search, TrendingUp } from "lucide-react";

const stats = [
  ["+320%", "Traffic Growth", TrendingUp],
  ["+480%", "Lead Growth", BarChart3],
  ["98", "Performance", Gauge],
  ["92", "SEO Score", Search],
];

export default function Results() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Measured Outcomes</p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Beautiful work should still perform.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value,label,Icon]) => {
            const SafeIcon = Icon as typeof Gauge;
            return (
              <article key={label as string} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7">
                <SafeIcon size={22} className="text-[#0066cc]" />
                <p className="mt-10 text-5xl font-semibold tracking-[-0.07em]">{value as string}</p>
                <p className="mt-2 text-sm font-bold text-white/40">{label as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
