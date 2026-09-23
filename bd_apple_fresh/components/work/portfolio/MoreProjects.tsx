"use client";
import { ArrowUpRight } from "lucide-react";
import { moreProjects } from "./data";

export default function MoreProjects() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">More Work</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              More projects across websites, software and growth.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            A broader selection of digital experiences and business systems.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map(([title,category],index) => {
            const dark = index === 0 || index === 4;
            return (
              <article key={title} className={`rounded-[2rem] p-6 ${dark ? "bg-[#1d1d1f] text-white" : "border border-black/10 bg-[#f5f5f7]"}`}>
                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${dark ? "bg-[#0066cc] text-[#000000]" : "bg-white text-[#0066cc]"}`}>
                    <ArrowUpRight size={19} />
                  </span>
                  <span className={dark ? "text-white/25" : "text-black/20"}>0{index+1}</span>
                </div>
                <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-[#0066cc]" : "text-[#0066cc]"}`}>{category}</p>
                <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
