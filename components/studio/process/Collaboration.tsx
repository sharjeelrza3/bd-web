"use client";

import {
  CheckCircle2,
  MonitorUp,
  Video,
} from "lucide-react";

import {
  FaFigma,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";

const tools = [
  {
    name: "WhatsApp",
    role: "Fast communication",
    icon: FaWhatsapp,
  },
  {
    name: "Google Meet",
    role: "Reviews and meetings",
    icon: Video,
  },
  {
    name: "Figma",
    role: "Design collaboration",
    icon: FaFigma,
  },
  {
    name: "GitHub",
    role: "Development workflow",
    icon: FaGithub,
  },
  {
    name: "Project Board",
    role: "Tasks and progress",
    icon: MonitorUp,
  },
];

const collaborationPoints = [
  "Regular progress updates",
  "Clear approval points",
  "Shared design reviews",
  "Documented project scope",
];

export default function Collaboration() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 md:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-220px] top-[-180px] h-[560px] w-[560px] rounded-full bg-[#0066cc]/10 blur-[140px]" />

        <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-[#1d1d1f]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Collaboration
            </p>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.88] tracking-[-0.065em] text-[#101010] md:text-7xl">
              Clear communication keeps projects moving.
            </h2>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              You always know what is being worked on, what needs approval and
              what comes next.
            </p>

            <div className="mt-8 space-y-3">
              {collaborationPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#0066cc]"
                  />

                  <span className="font-semibold text-black/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools panel */}
          <div className="rounded-[2.5rem] border border-black/10 bg-[#f5f5f7] p-5 shadow-[0_30px_110px_rgba(0,0,0,.07)] md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {tools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <article
                    key={tool.name}
                    className={`group relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/40 hover:shadow-[0_20px_70px_rgba(0,0,0,.08)] ${
                      index === tools.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#0066cc]/0 transition duration-300 group-hover:bg-[#0066cc]/10" />

                    <div className="relative flex items-start gap-4">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc] transition duration-300 group-hover:bg-[#1d1d1f] group-hover:text-[#0066cc]">
                        <Icon className="text-xl" />
                      </span>

                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#101010]">
                          {tool.name}
                        </h3>

                        <p className="mt-2 text-sm font-semibold leading-6 text-black/45">
                          {tool.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-6 border-t border-black/10 pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                        Collaboration Tool
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 rounded-[1.7rem] bg-[#1d1d1f] p-5 text-white">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0066cc] text-[#000000]">
                  <CheckCircle2 size={19} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                    Communication Standard
                  </p>

                  <p className="mt-2 font-semibold text-white/85">
                    Every decision, approval and update remains clear and documented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}