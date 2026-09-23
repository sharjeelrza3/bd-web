"use client";

import {
  AlarmClock,
  Copy,
  FileWarning,
  MessageSquareOff,
  Repeat,
  UserRoundX,
} from "lucide-react";

const problems = [
  { title: "Manual follow-ups", desc: "Leads wait too long and opportunities disappear.", icon: AlarmClock },
  { title: "Repeated data entry", desc: "Teams copy the same information between tools.", icon: Copy },
  { title: "Missed inquiries", desc: "Messages and forms are not handled consistently.", icon: MessageSquareOff },
  { title: "Slow reporting", desc: "Owners wait for manually prepared updates.", icon: FileWarning },
  { title: "Disconnected systems", desc: "CRM, email, forms and spreadsheets do not sync.", icon: Repeat },
  { title: "Team overload", desc: "Staff spend time on repetitive low-value tasks.", icon: UserRoundX },
];

export default function ProblemsSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Automation Problems
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Manual work quietly slows down growth.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Automation removes delays, reduces errors and keeps systems moving even
            when your team is busy.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:shadow-[0_20px_80px_rgba(0,0,0,.07)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-[#0066cc]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/50">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
