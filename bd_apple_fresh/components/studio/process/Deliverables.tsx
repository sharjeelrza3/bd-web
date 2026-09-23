"use client";

import { useState } from "react";
import { ChevronDown, FileCheck2, TimerReset } from "lucide-react";

const items = [
  {
    title: "Discovery & Strategy",
    duration: "1–3 days",
    deliverables: ["Project brief", "Requirements map", "Sitemap or feature plan", "Project roadmap"],
  },
  {
    title: "UX/UI Design",
    duration: "2–5 days",
    deliverables: ["Wireframes", "Visual direction", "Responsive UI screens", "Interactive review"],
  },
  {
    title: "Development",
    duration: "Varies by scope",
    deliverables: ["Responsive implementation", "Backend or CMS setup", "Integrations", "Admin features"],
  },
  {
    title: "Testing & Launch",
    duration: "1–3 days",
    deliverables: ["QA report", "Performance checks", "Production deployment", "Launch handover"],
  },
];

export default function Deliverables() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Stage Deliverables
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Know what happens and what you receive.
          </h2>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
            Each stage has defined outputs, so approvals are easier and the project
            stays accountable.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const active = open === index;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white"
              >
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                      Stage 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f7] text-[#0066cc]">
                    <ChevronDown size={19} className={`transition ${active ? "rotate-180" : ""}`} />
                  </span>
                </button>

                {active && (
                  <div className="border-t border-black/10 p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-black/45">
                      <TimerReset size={17} className="text-[#0066cc]" />
                      Typical duration: {item.duration}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {item.deliverables.map((deliverable) => (
                        <div
                          key={deliverable}
                          className="flex items-center gap-3 rounded-[1.2rem] bg-[#f5f5f7] p-4"
                        >
                          <FileCheck2 size={18} className="text-[#0066cc]" />
                          <span className="text-sm font-semibold text-black/60">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
