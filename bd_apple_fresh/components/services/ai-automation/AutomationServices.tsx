"use client";

import {
  Bot,
  CalendarClock,
  DatabaseZap,
  FileChartColumn,
  MailCheck,
  MessageSquareText,
  RefreshCcw,
  Workflow,
} from "lucide-react";

const services = [
  { title: "Lead Qualification", desc: "Score, summarize and route leads automatically.", icon: Bot },
  { title: "WhatsApp Automation", desc: "Instant replies, reminders and follow-up flows.", icon: MessageSquareText },
  { title: "CRM Automation", desc: "Create records, update stages and assign tasks.", icon: DatabaseZap },
  { title: "Email Workflows", desc: "Personalized sequences triggered by customer actions.", icon: MailCheck },
  { title: "Appointment Automation", desc: "Booking, reminders, rescheduling and confirmations.", icon: CalendarClock },
  { title: "Reporting Automation", desc: "Live dashboards and scheduled performance summaries.", icon: FileChartColumn },
  { title: "Data Sync", desc: "Connect forms, sheets, CRM and internal tools.", icon: RefreshCcw },
  { title: "Custom Workflows", desc: "Logic designed around your exact business process.", icon: Workflow },
];

export default function AutomationServices() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              What We Automate
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Turn daily operations into reliable automated systems.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            We connect your tools, define decision logic and automate the work that
            currently depends on manual follow-up.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-[0_30px_110px_rgba(0,0,0,.06)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.8rem] p-5 transition hover:bg-[#e7fbff]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/48">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
