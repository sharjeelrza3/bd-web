"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["What can AI automation handle?", "It can handle lead qualification, follow-ups, data entry, reporting, scheduling, customer support and many custom workflows."],
  ["Can you connect our existing tools?", "Yes. We can connect compatible platforms through APIs, webhooks and automation services."],
  ["Will automation replace our staff?", "The goal is usually to remove repetitive work so staff can focus on decisions, relationships and high-value tasks."],
  ["Can AI automation work with WhatsApp?", "Yes, depending on the approved WhatsApp setup and business requirements."],
  ["How long does implementation take?", "Simple workflows can be completed quickly, while multi-system automations require discovery, testing and phased deployment."],
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            AI automation without confusing answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([q, a], index) => {
            const active = open === index;
            return (
              <button
                key={q}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-white p-5 text-left transition hover:border-[#0066cc]/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{q}</h3>
                  <Plus size={18} className={`transition ${active ? "rotate-45 text-[#0066cc]" : ""}`} />
                </div>

                {active && (
                  <p className="mt-4 text-sm font-semibold leading-6 text-black/55">
                    {a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
