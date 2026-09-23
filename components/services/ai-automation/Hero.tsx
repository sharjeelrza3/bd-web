"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  MessageSquare,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const flow = [
  { label: "New Lead", icon: MessageSquare },
  { label: "AI Qualifies", icon: Bot },
  { label: "CRM Updated", icon: Database },
  { label: "Sales Alert", icon: Zap },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 px-5 pb-24 pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-260px] top-[-200px] h-[780px] w-[780px] rounded-full bg-[#0066cc]/20 blur-[170px]" />
        <div className="absolute left-[-260px] bottom-[-300px] h-[660px] w-[660px] rounded-full bg-white/5 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/55">
          <Cpu size={14} className="text-[#0066cc]" />
          <span>/ Services / AI Automation</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Intelligent Business Automation
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.84] tracking-[-0.08em] md:text-[96px] lg:text-[108px]">
              Turn repetitive work into
              <span className="block text-[#0066cc]">intelligent systems.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Automate operations, connect tools and deploy AI agents that handle
              leads, follow-ups, reporting and support without adding more manual work.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1"
              >
                Build My Automation
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="#workflow"
                className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:bg-white hover:text-[#000000]"
              >
                Explore Workflow
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {["AI Agents", "CRM Automation", "Smart Follow-ups", "Live Reporting"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_45px_150px_rgba(0,0,0,.4)] backdrop-blur">
              <div className="rounded-[2.25rem] bg-[#0d201b] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                      Automation Control Center
                    </p>
                    <p className="mt-1 text-xl font-semibold">Live workflow</p>
                  </div>

                  <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                    Active
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {flow.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="relative">
                        <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                            <Icon size={21} />
                          </span>

                          <div className="flex-1">
                            <p className="font-semibold">{item.label}</p>
                            <p className="mt-1 text-xs font-semibold text-white/35">
                              Step {index + 1} completed
                            </p>
                          </div>

                          <CheckCircle2 size={20} className="text-emerald-300" />
                        </div>

                        {index < flow.length - 1 && (
                          <div className="mx-auto h-5 w-px bg-gradient-to-b from-[#0066cc] to-white/10" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["1.8s", "Avg. Response"],
                    ["92%", "Tasks Automated"],
                    ["24/7", "System Active"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[1.4rem] bg-white p-4 text-center text-[#101010]">
                      <p className="text-2xl font-semibold tracking-[-0.05em]">{value}</p>
                      <p className="mt-1 text-xs font-bold text-black/40">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-[1.5rem] border border-black/10 bg-white p-5 text-[#101010] shadow-[0_25px_80px_rgba(0,0,0,.18)] md:block">
              <Workflow size={20} className="text-[#0066cc]" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                Workflow
              </p>
              <p className="mt-1 text-xl font-semibold">Synced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
