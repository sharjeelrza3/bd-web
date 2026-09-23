"use client";

import { Bot, Headphones, LineChart, ShoppingBag } from "lucide-react";

const agents = [
  {
    title: "Sales Agent",
    status: "Qualifying new leads",
    tasks: "128 actions today",
    response: "1.8s",
    icon: ShoppingBag,
  },
  {
    title: "Support Agent",
    status: "Resolving customer queries",
    tasks: "94 conversations",
    response: "2.1s",
    icon: Headphones,
  },
  {
    title: "Operations Agent",
    status: "Updating reports and records",
    tasks: "312 tasks completed",
    response: "0.9s",
    icon: LineChart,
  },
];

export default function AgentShowcase() {
  return (
    <section className="bg-[#000000] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              AI Agent Showcase
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Digital team members that work around the clock.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            Each AI agent is configured for a specific business role, set of tools
            and measurable outcome.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.title}
                className={`rounded-[2.2rem] border p-6 ${
                  index === 1
                    ? "border-[#0066cc]/40 bg-[#0066cc] text-[#000000]"
                    : "border-white/10 bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 1 ? "bg-[#000000] text-[#0066cc]" : "bg-[#0066cc] text-[#000000]"
                  }`}>
                    <Icon size={23} />
                  </span>

                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    index === 1 ? "bg-[#000000]/10" : "bg-emerald-400/10 text-emerald-300"
                  }`}>
                    Online
                  </span>
                </div>

                <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.18em] ${
                  index === 1 ? "text-black/45" : "text-white/35"
                }`}>
                  AI Agent
                </p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">{agent.title}</h3>

                <div className={`mt-6 rounded-[1.5rem] p-5 ${
                  index === 1 ? "bg-white/40" : "bg-white/[0.05]"
                }`}>
                  <div className="flex items-center gap-3">
                    <Bot size={18} />
                    <p className="font-semibold">{agent.status}</p>
                  </div>
                  <p className={`mt-3 text-sm font-semibold ${
                    index === 1 ? "text-black/55" : "text-white/40"
                  }`}>
                    {agent.tasks}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-current/10 pt-5">
                  <span className="text-sm font-semibold opacity-55">Avg. response</span>
                  <span className="text-xl font-semibold">{agent.response}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
