"use client";

import {
  Accessibility,
  BarChart3,
  CheckCircle2,
  Gauge,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const checks = [
  { title: "Responsive", icon: Smartphone },
  { title: "SEO Basics", icon: Search },
  { title: "Performance", icon: Gauge },
  { title: "Security", icon: LockKeyhole },
  { title: "Accessibility", icon: Accessibility },
  { title: "Quality Assurance", icon: ShieldCheck },
  { title: "Analytics", icon: BarChart3 },
  { title: "Launch Review", icon: CheckCircle2 },
];

export default function QualityChecklist() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Quality Checklist
            </p>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Nothing launches without passing the essentials.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            Every project is reviewed across usability, speed, responsiveness,
            technical quality and production readiness.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {checks.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                    <Icon size={21} />
                  </span>
                  <CheckCircle2 size={20} className="text-emerald-300" />
                </div>

                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                  Completed
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
