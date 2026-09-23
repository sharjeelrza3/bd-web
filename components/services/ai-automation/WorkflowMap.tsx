"use client";

import {
  BellRing,
  Bot,
  Database,
  FileText,
  MessageSquare,
  Workflow,
} from "lucide-react";

const nodes = [
  { title: "New Lead", subtitle: "Form or WhatsApp", icon: MessageSquare },
  { title: "AI Qualifies", subtitle: "Intent + budget", icon: Bot },
  { title: "CRM Updated", subtitle: "Contact + status", icon: Database },
  { title: "Follow-up Sent", subtitle: "Personalized reply", icon: FileText },
  { title: "Team Alerted", subtitle: "Priority notification", icon: BellRing },
];

export default function WorkflowMap() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-[#000000] px-5 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/12 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Intelligent Workflow Map
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Watch the system think, decide and act.
          </h2>
        </div>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="mx-auto flex min-w-[1050px] items-center justify-center gap-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.title} className="flex items-center gap-4">
                  <div className="w-[180px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{node.title}</h3>
                    <p className="mt-2 text-xs font-semibold text-white/35">{node.subtitle}</p>
                  </div>

                  {index < nodes.length - 1 && (
                    <div className="relative h-px w-12 bg-white/15">
                      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-[#0066cc]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white/55">
          <Workflow size={17} className="text-[#0066cc]" />
          Automation completed in 1.8 seconds
        </div>
      </div>
    </section>
  );
}
