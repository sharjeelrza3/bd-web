"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  [
    "What does website maintenance include?",
    "Maintenance can include updates, backups, security checks, uptime monitoring, bug fixes, performance optimization and reports.",
  ],
  [
    "Do you maintain WordPress websites?",
    "Yes. We can maintain WordPress websites, plugins, themes, forms, backups and security settings.",
  ],
  [
    "Can you fix a website that is already broken?",
    "Yes. We can first audit the issue, stabilize the website and then recommend an ongoing maintenance plan.",
  ],
  [
    "How often do you provide reports?",
    "Professional and advanced plans can include regular reports covering updates, backups, security and performance.",
  ],
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
            Maintenance questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([q, a], index) => {
            const active = open === index;
            return (
              <button
                key={q}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5f5f7] p-5 text-left transition hover:border-[#0066cc]/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{q}</h3>
                  <Plus
                    size={18}
                    className={`transition ${active ? "rotate-45 text-[#0066cc]" : ""}`}
                  />
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
