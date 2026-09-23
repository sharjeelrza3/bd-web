"use client";

import { Activity, BellRing, DatabaseBackup, Gauge, ShieldCheck } from "lucide-react";

const performanceBars = [56, 72, 64, 88, 82, 94, 90, 100];

export default function MonitoringSection() {
  return (
    <section id="monitoring" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Live Monitoring
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Know your website is healthy before customers notice a problem.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              We monitor uptime, speed, backups, security and performance indicators
              so issues can be handled early.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-[#1d1d1f] p-5 text-white shadow-[0_35px_120px_rgba(16,35,31,.2)]">
            <div className="grid gap-4 md:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-[1.8rem] bg-white p-6 text-[#101010]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                      Website Health
                    </p>
                    <p className="mt-2 text-3xl font-semibold">Excellent</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Activity size={22} />
                  </span>
                </div>

                <div className="mt-8 flex h-40 items-end gap-3">
                  {performanceBars.map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t-full bg-[#0066cc]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  [ShieldCheck, "Security", "No threats found"],
                  [DatabaseBackup, "Backup", "Completed today"],
                  [Gauge, "Speed", "98 performance"],
                  [BellRing, "Alerts", "No active alerts"],
                ].map(([Icon, title, text]) => {
                  const SafeIcon = Icon as typeof ShieldCheck;
                  return (
                    <div
                      key={title as string}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
                    >
                      <SafeIcon size={21} className="text-[#0066cc]" />
                      <p className="mt-4 font-semibold">{title as string}</p>
                      <p className="mt-1 text-sm font-semibold text-white/40">{text as string}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
