"use client";

import { CheckCircle2, CircleDot, Rocket } from "lucide-react";

const progress = [
  ["Strategy", 100],
  ["Design", 100],
  ["Development", 100],
  ["SEO Setup", 100],
  ["Testing", 100],
];

export default function Dashboard() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Delivery Dashboard
            </p>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              Clear progress from first stage to launch.
            </h2>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              Project status, approvals and launch readiness are visible throughout
              the engagement.
            </p>
          </div>

          <div className="rounded-[2.6rem] bg-[#1d1d1f] p-6 text-white shadow-[0_35px_120px_rgba(16,35,31,.2)] md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                  Project Status
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                  Launch readiness
                </h3>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                <CircleDot size={14} />
                Ready
              </span>
            </div>

            <div className="mt-7 space-y-5">
              {progress.map(([label, value]) => (
                <div key={label as string}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm font-semibold text-[#0066cc]">{value}%</p>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#0066cc]"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-[1.7rem] bg-[#0066cc] p-5 text-[#000000]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000000] text-[#0066cc]">
                <Rocket size={21} />
              </span>

              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Final Status
                </p>
                <p className="mt-1 text-xl font-semibold">Approved for launch</p>
              </div>

              <CheckCircle2 size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
