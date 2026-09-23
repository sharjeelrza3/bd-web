"use client";

import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const bars = [34, 49, 43, 61, 70, 78, 88, 95, 100];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-24 pt-12 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-240px] top-[-160px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[160px]" />
        <div className="absolute left-[-260px] bottom-[-280px] h-[620px] w-[620px] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/55">
          <Search size={14} className="text-[#0066cc]" />
          <span>/ Grow / Google Ads</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              High-Intent Paid Search
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.86] tracking-[-0.08em] md:text-[94px] lg:text-[106px]">
              Be there when customers are ready to buy.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              We build and optimize Google Ads campaigns around buying intent,
              profitable keywords and measurable conversions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1"
              >
                Start Google Ads Campaign
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="#performance"
                className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]"
              >
                See Campaign Performance
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {["Search Ads", "Shopping Ads", "Remarketing", "Conversion Tracking"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.8rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_45px_140px_rgba(0,0,0,.35)] backdrop-blur">
              <div className="rounded-[2.2rem] bg-[#0d201b] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                      Google Ads Overview
                    </p>
                    <p className="mt-1 text-xl font-semibold">Search Performance</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    Active
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["6.2x", "ROAS"],
                    ["4.9%", "Conversion Rate"],
                    ["-27%", "Cost Per Lead"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.5rem] bg-white p-5 text-[#101010]">
                      <p className="text-3xl font-semibold tracking-[-0.06em]">{value}</p>
                      <p className="mt-1 text-xs font-bold text-black/40">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[1.7rem] bg-white p-5 text-[#101010]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                        Conversion Trend
                      </p>
                      <p className="mt-1 text-xl font-semibold">High-intent traffic improving</p>
                    </div>
                    <TrendingUp size={23} className="text-[#0066cc]" />
                  </div>

                  <div className="mt-7 flex h-40 items-end gap-3">
                    {bars.map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-full bg-[#0066cc]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Top Keyword", "website development agency", "8.4% CVR"],
                    ["Best Campaign", "Search — High Intent", "6.2x ROAS"],
                  ].map(([title, value, metric]) => (
                    <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                        {title}
                      </p>
                      <p className="mt-3 text-lg font-semibold">{value}</p>
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                        <Target size={13} />
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-[1.5rem] border border-black/10 bg-white p-5 text-[#101010] shadow-[0_25px_80px_rgba(0,0,0,.14)] md:block">
              <MousePointerClick size={20} className="text-[#0066cc]" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                Click Quality
              </p>
              <p className="mt-1 text-xl font-semibold">High Intent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
