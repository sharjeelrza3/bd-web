"use client";

import {
  AlertTriangle,
  Gauge,
  MousePointerClick,
  SearchX,
  Smartphone,
  Wand2,
} from "lucide-react";

const problems = [
  {
    title: "Outdated Design",
    description:
      "Your website looks old, weak or unprofessional compared to competitors.",
    icon: Wand2,
  },
  {
    title: "Slow Loading",
    description:
      "Visitors leave before your website even gets a chance to convert them.",
    icon: Gauge,
  },
  {
    title: "Poor Mobile UX",
    description:
      "Most traffic is mobile. If mobile feels bad, inquiries drop quickly.",
    icon: Smartphone,
  },
  {
    title: "No SEO Structure",
    description:
      "Beautiful pages are useless if customers cannot find you on Google.",
    icon: SearchX,
  },
  {
    title: "Weak CTAs",
    description:
      "If users do not know what to do next, they simply leave the page.",
    icon: MousePointerClick,
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-[#0066cc]/10 blur-[140px]" />
        <div className="absolute right-[-260px] bottom-[-180px] h-[560px] w-[560px] rounded-full bg-[#1d1d1f]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              <AlertTriangle size={15} />
              Why Websites Fail
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.065em] text-[#101010] md:text-6xl">
              Traffic nothing.
              <span className="block text-[#0066cc]">
                If your website
                doesn't convert.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/55">
            A premium website must do more than look good. It needs clear
            messaging, fast performance, strong structure, mobile-first UX and
            conversion-focused calls to action.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#0066cc]/45 hover:bg-white hover:shadow-[0_25px_90px_rgba(0,0,0,.09)] ${index === 1 || index === 3 ? "lg:mt-10" : ""
                  }`}
              >
                <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-[#0066cc]/0 blur-3xl transition group-hover:bg-[#0066cc]/18" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc] transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                      <Icon size={23} />
                    </span>

                    <span className="text-5xl font-semibold tracking-[-0.08em] text-black/5 transition group-hover:text-[#0066cc]/15">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#101010]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-semibold leading-6 text-black/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.4rem] border border-[#0066cc]/10 bg-[#1d1d1f] shadow-[0_35px_100px_rgba(16,35,31,.22)]">
          <div className="relative p-8 md:p-10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#0066cc]/10 blur-3xl" />
            <div className="pointer-events-none absolute left-[-80px] bottom-[-80px] h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
                  OUR APPROACH
                </p>

                <h3 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-5xl">
                  We don't build
                  <span className="text-[#0066cc]"> ordinary websites. </span>
                  we build digital assets that generate business.
                </h3>

              
              </div>

              <div className="mt-27 flex shrink-0 flex-col gap-4">
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-8 py-4 text-base font-semibold text-[#000000] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,191,227,.35)]"
                >
                  Explore Our Process →
                </a>

                <span className="text-center text-sm font-semibold text-white/45">
                  Strategy • Design • Development • Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}