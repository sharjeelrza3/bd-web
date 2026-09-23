"use client";

import {
  Bot,
  GitBranch,
  MessageSquare,
  PlayCircle,
} from "lucide-react";

const steps = [
  { label: "Trigger", value: "Form Submitted", icon: PlayCircle },
  { label: "Condition", value: "Lead Budget > 50k", icon: GitBranch },
  { label: "AI Action", value: "Qualify & Summarize", icon: Bot },
  { label: "Output", value: "Send WhatsApp + Update CRM", icon: MessageSquare },
];

export default function BuilderSection() {
  return (
    <section id="builder" className="bg-[#000000] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Automation Builder
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Business logic translated into a live workflow.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/50">
              Every automation is mapped from trigger to decision, AI action and final output.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="space-y-4">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label}>
                    <div className="grid gap-4 rounded-[1.7rem] border border-white/10 bg-[#0d201b] p-5 md:grid-cols-[auto_.65fr_1fr] md:items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                        <Icon size={21} />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold">{item.value}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="mx-auto h-4 w-px bg-[#0066cc]/50" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
