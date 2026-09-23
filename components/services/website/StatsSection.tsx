"use client";

import { Sparkles } from "lucide-react";
import { websiteDevelopment } from "@/data/website-development";

export default function StatsSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 rounded-[2rem] bg-[#1d1d1f] p-6 text-white shadow-[0_25px_90px_rgba(16,35,31,.18)] md:grid-cols-4">
          {websiteDevelopment.stats.map(([value, label]) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-[1.4rem] p-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#0066cc]">
                <Sparkles size={20} />
              </span>

              <div>
                <p className="text-3xl font-semibold tracking-[-0.05em]">
                  {value}
                </p>
                <p className="text-sm font-bold text-white/45">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
