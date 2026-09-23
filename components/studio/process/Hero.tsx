"use client";

import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Sparkles,
  Workflow as WorkflowIcon,
} from "lucide-react";

const steps = [
  "Discovery",
  "Strategy",
  "Wireframe",
  "Design",
  "Development",
  "Testing",
  "Launch",
  "Growth",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f5f5f7] px-5 pb-24 pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-250px] top-[-180px] h-[720px] w-[720px] rounded-full bg-[#0066cc]/14 blur-[160px]" />
        <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#1d1d1f]/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-sm">
          <WorkflowIcon size={14} className="text-[#0066cc]" />
          <span>/ Studio / Our Process</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <Sparkles size={14} />
              Clear Process. Better Outcomes.
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.86] tracking-[-0.08em] md:text-[94px] lg:text-[106px]">
              Every successful digital product starts with a
              <span className="block text-[#0066cc]">clear process.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/55 md:text-xl">
              From first conversation to launch and growth, every stage is planned,
              reviewed and connected to a measurable business objective.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#process-timeline"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000]"
              >
                Explore Our Process
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="/contact"
                className="rounded-full border border-black/10 bg-white px-7 py-4 font-semibold shadow-sm transition hover:-translate-y-1 hover:border-[#0066cc]"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-black/45">
              {["Transparent stages", "Defined deliverables", "Regular reviews", "Launch support"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2.8rem] border border-black/10 bg-[#1d1d1f] p-5 text-white shadow-[0_40px_140px_rgba(16,35,31,.25)]">
            <div className="rounded-[2.2rem] border border-white/10 bg-[#0d201b] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                    Project Journey
                  </p>
                  <p className="mt-1 text-xl font-semibold">From idea to growth</p>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                  <CircleDot size={14} />
                  Active
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {steps.map((step, index) => (
                  <div key={step}>
                    <div className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0066cc] text-sm font-semibold text-[#000000]">
                        0{index + 1}
                      </span>

                      <div className="flex-1">
                        <p className="font-semibold">{step}</p>
                        <p className="mt-1 text-xs font-semibold text-white/35">
                          Stage planned and reviewed
                        </p>
                      </div>

                      <CheckCircle2 size={18} className="text-emerald-300" />
                    </div>

                    {index < steps.length - 1 && (
                      <div className="mx-auto h-3 w-px bg-gradient-to-b from-[#0066cc] to-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
