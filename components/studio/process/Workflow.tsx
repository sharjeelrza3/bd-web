"use client";

import {
  BarChart3,
  Braces,
  Compass,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Idea",
    icon: Lightbulb,
  },
  {
    title: "Research",
    icon: Search,
  },
  {
    title: "Strategy",
    icon: Compass,
  },
  {
    title: "Design",
    icon: Sparkles,
  },
  {
    title: "Development",
    icon: Braces,
  },
  {
    title: "QA",
    icon: ShieldCheck,
  },
  {
    title: "Launch",
    icon: Rocket,
  },
  {
    title: "Optimize",
    icon: BarChart3,
  },
];

export default function Workflow() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1d1d1f] px-5 py-24 text-white md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/10 blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Process Visualization
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Every decision connects to the next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/50">
            Every stage moves the project forward with a clear purpose, review
            point and defined outcome.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-[6%] right-[6%] top-1/2 h-px -translate-y-1/2 bg-white/10" />

          <div className="grid grid-cols-8 gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative">
                  <article className="group relative z-10 rounded-[1.7rem] border border-white/10 bg-white/[0.06] px-3 py-5 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/40 hover:bg-white/[0.09]">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000] shadow-[0_14px_40px_rgba(16,191,227,.22)]">
                      <Icon size={20} />
                    </span>

                    <p className="mt-5 text-sm font-semibold">
                      {step.title}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25">
                      Stage 0{index + 1}
                    </p>
                  </article>

                  {index < steps.length - 1 && (
                    <span className="absolute -right-[8px] top-1/2 z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#1d1d1f] bg-[#0066cc]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet and mobile flow */}
        <div className="mt-14 lg:hidden">
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="flex items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                    <Icon size={20} />
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                      Stage 0{index + 1}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      {step.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:grid-cols-3">
          {[
            {
              title: "Clear stages",
              description:
                "Every phase has a defined objective and review point.",
            },
            {
              title: "Connected decisions",
              description:
                "Research, design and development stay aligned.",
            },
            {
              title: "Continuous improvement",
              description:
                "The process continues after launch through optimization.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.4rem] bg-[#0d201b] p-5"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-semibold leading-6 text-white/40">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}