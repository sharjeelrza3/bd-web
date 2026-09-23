"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gauge,
  HardDrive,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const healthItems = [
  {
    label: "Website Status",
    value: "Online",
    detail: "All systems operational",
    icon: Activity,
  },
  {
    label: "Security",
    value: "Protected",
    detail: "No threats detected",
    icon: ShieldCheck,
  },
  {
    label: "Last Backup",
    value: "Completed",
    detail: "Today at 04:30 AM",
    icon: HardDrive,
  },
];

const performanceBars = [50, 64, 58, 76, 68, 88, 82, 96, 91, 100];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f5f5f7] px-5 pb-20 pt-12 md:pb-28 md:pt-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-260px] top-[-180px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[160px]" />

        <div className="absolute bottom-[-300px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#1d1d1f]/8 blur-[160px]" />

        <div className="absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-white/80 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-sm">
          <Radar size={14} className="text-[#0066cc]" />

          <span>/ Services / Website Maintenance</span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Website Maintenance & Support
            </p>

            <h1 className="mt-7 max-w-5xl text-[56px] font-semibold leading-[0.88] tracking-[-0.075em] text-[#101010] md:text-[86px] lg:text-[96px]">
              Keep your website
              <span className="block text-[#0066cc]">fast, secure</span>
              and always online.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/55 md:text-xl md:leading-9">
              We handle updates, backups, security, performance and technical
              support so your website stays reliable while you focus on your
              business.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000]"
              >
                Get Maintenance Plan

                <ArrowRight
                  size={18}
                  className="-rotate-45 transition group-hover:rotate-0"
                />
              </a>

              <a
                href="#monitoring"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#101010] shadow-sm transition hover:-translate-y-1 hover:border-[#0066cc]"
              >
                View Monitoring
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-black/45">
              {[
                "Uptime Monitoring",
                "Daily Backups",
                "Security Protection",
                "Priority Support",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative min-h-[600px]">
            <div className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/14 blur-[100px]" />

            {/* Main panel */}
            <div className="relative ml-auto max-w-[680px] rounded-[2.8rem] border border-black/10 bg-white p-4 shadow-[0_45px_140px_rgba(0,0,0,.14)]">
              <div className="overflow-hidden rounded-[2.3rem] bg-[#1d1d1f] p-5 text-white">
                {/* Top bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                      <Activity size={22} />

                      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#1d1d1f] bg-emerald-400" />
                    </span>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        Live Website Health
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        All systems operational
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    Online
                  </span>
                </div>

                {/* Main metrics */}
                <div className="mt-5 grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="rounded-[1.8rem] bg-white p-6 text-[#101010]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                      Uptime
                    </p>

                    <p className="mt-4 text-6xl font-semibold tracking-[-0.08em] text-[#1d1d1f]">
                      99.99%
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                      <CheckCircle2 size={17} />
                      Stable this month
                    </div>

                    <div className="mt-8 border-t border-black/10 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-black/40">
                          Response time
                        </span>

                        <span className="font-semibold">0.42s</span>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/8">
                        <div className="h-full w-[88%] rounded-full bg-[#0066cc]" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] bg-[#e7fbff] p-6 text-[#000000]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                          Performance
                        </p>

                        <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                          Healthy & optimized
                        </p>
                      </div>

                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0066cc] shadow-sm">
                        <Gauge size={22} />
                      </span>
                    </div>

                    <div className="mt-8 flex h-32 items-end gap-2">
                      {performanceBars.map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-t-full bg-[#0066cc]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-bold text-black/45">
                        Current score
                      </span>

                      <span className="text-3xl font-semibold">98</span>
                    </div>
                  </div>
                </div>

                {/* Health items */}
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {healthItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4"
                      >
                        <Icon size={20} className="text-[#0066cc]" />

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          {item.label}
                        </p>

                        <p className="mt-2 font-semibold">{item.value}</p>

                        <p className="mt-1 text-xs font-semibold text-white/35">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating card: security */}
            <div className="absolute -left-4 top-20 hidden rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,.13)] md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <LockKeyhole size={20} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/35">
                    Security
                  </p>

                  <p className="mt-1 font-semibold">Protected</p>
                </div>
              </div>
            </div>

            {/* Floating card: update */}
            <div className="absolute -bottom-2 right-5 hidden rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,.13)] md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                  <Zap size={20} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/35">
                    Latest Check
                  </p>

                  <p className="mt-1 font-semibold">Just now</p>
                </div>
              </div>
            </div>

            {/* Floating card: monitoring */}
            <div className="absolute -right-3 top-24 hidden rounded-[1.6rem] border border-black/10 bg-[#0066cc] p-5 text-[#000000] shadow-[0_25px_80px_rgba(0,0,0,.13)] xl:block">
              <Clock3 size={20} />

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em]">
                Monitoring
              </p>

              <p className="mt-1 text-xl font-semibold">24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}