"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";

const steps = [
  ["01", "Issue Reported"],
  ["02", "Engineer Assigned"],
  ["03", "Investigation"],
  ["04", "Fix Applied"],
  ["05", "Website Stable"],
];

export default function EmergencySupport() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              <AlertTriangle size={16} />
              Emergency Support
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              When something breaks, you need a clear response.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/50">
              We follow a defined response process to investigate, fix and stabilize
              urgent website issues.
            </p>
          </div>

          <div className="grid gap-3">
            {steps.map(([num, title], index) => (
              <div
                key={title}
                className="flex items-center gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <span className="text-2xl font-semibold text-[#0066cc]">{num}</span>
                <div className="flex-1">
                  <p className="text-lg font-semibold">{title}</p>
                </div>
                {index === steps.length - 1 && (
                  <CheckCircle2 size={22} className="text-emerald-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
