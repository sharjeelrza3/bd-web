"use client";

import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const before = [
  "Manual follow-ups",
  "Missed leads",
  "Repeated data entry",
  "Slow reporting",
];

const after = [
  "Instant responses",
  "Automatic qualification",
  "Connected systems",
  "Live reports",
];

export default function TransformationSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Before vs After
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Replace reactive work with proactive systems.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-[2.3rem] border border-black/10 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              Before Automation
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Manual operations</h3>
            <div className="mt-8 space-y-4">
              {before.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <XCircle size={19} className="text-red-500" />
                  <span className="font-semibold text-black/55">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_20px_60px_rgba(16,191,227,.28)]">
            <ArrowRight size={24} />
          </div>

          <div className="rounded-[2.3rem] bg-[#1d1d1f] p-7 text-white shadow-[0_30px_110px_rgba(16,35,31,.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
              After Automation
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Intelligent operations</h3>
            <div className="mt-8 space-y-4">
              {after.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="text-emerald-300" />
                  <span className="font-semibold text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
