"use client";

import { ArrowUpRight, Search, Star } from "lucide-react";

export default function SearchExperience() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="rounded-[2.6rem] border border-black/10 bg-[#f5f5f7] p-5 shadow-[0_30px_110px_rgba(0,0,0,.07)]">
            <div className="rounded-[2rem] bg-white p-6">
              <div className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f5f5f7] px-5 py-4">
                <Search size={20} className="text-[#0066cc]" />
                <span className="font-semibold text-black/45">best seo agency for local businesses</span>
              </div>

              <div className="mt-6 rounded-[1.7rem] border border-[#0066cc]/30 bg-[#e7fbff] p-6">
                <p className="text-sm font-semibold text-[#0066cc]">beingdigitals.com › seo-services</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1d1d1f]">
                  SEO Services That Turn Search Into Qualified Leads
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/55">
                  Technical SEO, local visibility, content strategy and monthly
                  reporting built around measurable growth.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["Technical SEO", "Local SEO", "Content Strategy"].map((item) => (
                    <span key={item} className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black/45">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Search CTR</p>
                  <p className="mt-3 text-4xl font-semibold">8.7%</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">+3.2% improvement</p>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Review signal</p>
                  <div className="mt-3 flex items-center gap-2">
                    <p className="text-4xl font-semibold">4.9</p>
                    <Star size={20} fill="currentColor" className="text-[#0066cc]" />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-black/40">High trust result</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Search Experience</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Ranking is only useful when the result earns the click.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-black/50">
              We optimize titles, snippets, page intent, trust signals and conversion
              paths so visibility turns into meaningful action.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0066cc]">
              Improve search performance
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
