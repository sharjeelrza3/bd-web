"use client";

import {
  Bug,
  FileWarning,
  GaugeCircle,
  Link2Off,
  SearchX,
  ShieldAlert,
} from "lucide-react";

const problems = [
  {
    title: "Website downtime",
    desc: "Customers leave when your website is unavailable or unstable.",
    icon: FileWarning,
  },
  {
    title: "Slow speed",
    desc: "Heavy pages and outdated code reduce rankings and conversions.",
    icon: GaugeCircle,
  },
  {
    title: "Security risks",
    desc: "Outdated plugins and weak protection can expose your website.",
    icon: ShieldAlert,
  },
  {
    title: "Broken forms",
    desc: "Lead forms, checkout flows and buttons can silently stop working.",
    icon: Link2Off,
  },
  {
    title: "Technical bugs",
    desc: "Small errors create poor user experience and damage trust.",
    icon: Bug,
  },
  {
    title: "Lost rankings",
    desc: "Technical issues can affect indexing, speed and search visibility.",
    icon: SearchX,
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Why Maintenance Matters
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Ignoring maintenance is expensive.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Problems usually appear after updates, traffic spikes, hosting changes or
            security threats. Regular maintenance prevents small issues from becoming
            costly emergencies.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:bg-white hover:shadow-[0_20px_80px_rgba(0,0,0,.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
