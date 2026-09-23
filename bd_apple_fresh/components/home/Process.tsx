import { CheckCircle2 } from "lucide-react";
import { processSteps } from "@/data/home";

export default function Process() {
  return (
    <section id="process" className="relative bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-[#0066cc]/10 blur-[140px]" />
        <div className="absolute right-[-240px] bottom-0 h-[620px] w-[620px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="self-start lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Our Process
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            From first idea to launch-ready execution.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            A structured workflow keeps your project clear, fast and professional — from strategy to launch and growth.
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#0066cc]">Project flow</p>
              <span className="rounded-full bg-[#0066cc] px-3 py-1 text-xs font-semibold text-[#000000]">
                06 Steps
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {processSteps.map((step) => (
                <div key={step.num} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066cc] text-xs font-semibold text-[#000000]">
                    {step.num}
                  </span>
                  <span className="text-sm font-semibold text-white/75">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-6">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.num}
                  className="group relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/45 hover:bg-white/[0.07]"
                >
                  <div className="absolute left-6 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#1d1d1f] bg-[#0066cc] md:block" />

                  <div className="grid gap-6 md:grid-cols-[170px_1fr] md:pl-8">
                    <div className="relative rounded-[1.5rem] bg-[#000000] p-6">
                      <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-[#0066cc]/20 blur-3xl transition group-hover:bg-[#0066cc]/35" />

                      <div className="relative flex h-full min-h-44 flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-5xl font-semibold tracking-[-0.08em] text-white/10">
                            {step.num}
                          </span>

                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                            <Icon size={23} />
                          </span>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0066cc]">
                            Step {step.num}
                          </p>
                          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between py-2">
                      <div>
                        <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] md:text-3xl">
                          {step.heading}
                        </h3>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {step.points.map((point) => (
                          <span
                            key={point}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/70"
                          >
                            <CheckCircle2 size={15} className="text-[#0066cc]" />
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
