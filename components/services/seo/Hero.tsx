"use client";

import {
  ArrowRight,
  CheckCircle2,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const keywords = [
  { term: "website development agency", position: "#2", move: "+11" },
  { term: "business software company", position: "#1", move: "+7" },
  { term: "seo agency karachi", position: "#3", move: "+9" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-24 pt-12 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-220px] top-[-200px] h-[680px] w-[680px] rounded-full bg-[#0066cc]/12 blur-[150px]" />
        <div className="absolute right-[-180px] bottom-[-220px] h-[620px] w-[620px] rounded-full bg-[#0066cc]/18 blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/55">
          <Search size={14} className="text-[#0066cc]" />
          <span>/ Grow / SEO</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Organic Growth Engine
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.86] tracking-[-0.08em] md:text-[96px] lg:text-[110px]">
              Search is not traffic.
              <span className="block text-[#0066cc]">Search is intent.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              We turn that intent into visibility, authority and qualified leads through
              technical SEO, content systems and continuous search experiments.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#growth-system" className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1">
                Build My SEO System
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>
              <a href="#proof" className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]">
                See Growth Proof
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {["Technical SEO", "Content Engine", "Local Visibility", "Conversion Tracking"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.7rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_45px_140px_rgba(0,0,0,.35)] backdrop-blur">
              <div className="rounded-[2.2rem] bg-[#0c1d19] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">Search Command Center</p>
                    <p className="mt-1 text-xl font-semibold">Live visibility</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    +38.4%
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
                  <div className="rounded-[1.7rem] bg-white p-5 text-[#101010]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                      Organic opportunity
                    </p>
                    <p className="mt-3 text-5xl font-semibold tracking-[-0.07em]">24.8K</p>
                    <p className="mt-1 text-sm font-semibold text-black/40">monthly searches mapped</p>

                    <div className="mt-7 flex h-36 items-end gap-2">
                      {[38, 56, 48, 72, 64, 81, 76, 92, 100].map((h, i) => (
                        <span key={i} className="flex-1 rounded-t-full bg-[#0066cc]" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.7rem] bg-[#0066cc] p-5 text-[#000000]">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]">SEO Health</p>
                      <p className="mt-3 text-5xl font-semibold tracking-[-0.07em]">97</p>
                      <p className="mt-1 text-sm font-semibold">Excellent</p>
                    </div>
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Lead efficiency</p>
                      <p className="mt-3 text-4xl font-semibold">+61%</p>
                      <p className="mt-1 text-sm font-semibold text-white/40">from organic</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {keywords.map((item) => (
                    <div key={item.term} className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <div>
                        <p className="font-semibold">{item.term}</p>
                        <p className="mt-1 text-xs font-semibold text-white/35">Current ranking</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-semibold">{item.position}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                          <TrendingUp size={13} />
                          {item.move}
                        </span>
                      </div>
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
