"use client";

import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  MousePointerClick,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const bars = [36, 48, 44, 62, 71, 78, 84, 94, 100];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-24 pt-12 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-240px] top-[-180px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/20 blur-[160px]" />
        <div className="absolute left-[-260px] bottom-[-260px] h-[620px] w-[620px] rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/55">
          <Megaphone size={14} className="text-[#0066cc]" />
          <span>/ Grow / Meta Ads</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Paid Growth System
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.86] tracking-[-0.08em] md:text-[94px] lg:text-[106px]">
              Ads that generate
              <span className="block text-[#0066cc]">real business growth.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              We plan, create, test and optimize Meta Ads campaigns designed to
              generate qualified leads, sales and measurable business growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1"
              >
                Start Meta Ads Campaign
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="#performance"
                className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]"
              >
                See Campaign Metrics
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {["Lead Generation", "Sales Campaigns", "Creative Testing", "Retargeting"].map((item) => (
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
                      Campaign Overview
                    </p>
                    <p className="mt-1 text-xl font-semibold">Performance Dashboard</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    Live
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["4.8x", "ROAS"],
                    ["-32%", "Cost Per Lead"],
                    ["+186%", "Conversions"],
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
                        Conversion Growth
                      </p>
                      <p className="mt-1 text-xl font-semibold">Campaign scaling steadily</p>
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
                    ["Winning Creative", "UGC Video", "CTR 4.9%"],
                    ["Best Audience", "Lookalike 3%", "CPL -28%"],
                  ].map(([title, value, metric]) => (
                    <div key={title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                        {title}
                      </p>
                      <p className="mt-3 text-xl font-semibold">{value}</p>
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                        <MousePointerClick size={13} />
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
