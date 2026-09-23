"use client";

import { BadgeDollarSign, Search, Target, TrendingUp } from "lucide-react";

const keywords = [
  ["website development company", "High", "8.4%", "Rs 320"],
  ["business software pakistan", "High", "7.1%", "Rs 410"],
  ["seo agency karachi", "Medium", "5.9%", "Rs 280"],
  ["restaurant pos software", "High", "9.2%", "Rs 460"],
];

export default function KeywordStrategySection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Keyword Strategy
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Buy the clicks most likely to become customers.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              We separate buying intent, research intent and irrelevant searches
              to protect budget and improve conversion quality.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-black/10 bg-[#f5f5f7] p-5">
            <div className="grid gap-3">
              {keywords.map(([keyword, intent, cvr, cpc]) => (
                <div
                  key={keyword}
                  className="grid gap-4 rounded-[1.5rem] bg-white p-5 md:grid-cols-[1.5fr_.7fr_.6fr_.6fr] md:items-center"
                >
                  <div className="flex items-center gap-3">
                    <Search size={18} className="text-[#0066cc]" />
                    <p className="font-semibold">{keyword}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                      Intent
                    </p>
                    <p className="mt-1 font-semibold">{intent}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                      CVR
                    </p>
                    <p className="mt-1 font-semibold text-emerald-700">{cvr}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                      Avg. CPC
                    </p>
                    <p className="mt-1 font-semibold">{cpc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                [Target, "Negative Keywords", "Protected"],
                [TrendingUp, "Quality Score", "9/10"],
                [BadgeDollarSign, "Budget Waste", "-31%"],
              ].map(([Icon, label, value]) => {
                const SafeIcon = Icon as typeof Target;
                return (
                  <div key={label as string} className="rounded-[1.4rem] bg-[#1d1d1f] p-5 text-white">
                    <SafeIcon size={20} className="text-[#0066cc]" />
                    <p className="mt-5 text-sm font-bold text-white/40">{label as string}</p>
                    <p className="mt-1 text-2xl font-semibold">{value as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
