"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  [
    "What is included in a complete branding package?",
    "A complete package can include logo systems, colors, typography, brand guidelines, social templates and key marketing assets.",
  ],
  [
    "How long does branding usually take?",
    "Most branding projects take between 2 and 5 weeks depending on scope, feedback and required deliverables.",
  ],
  [
    "Can you redesign an existing brand?",
    "Yes. We can refresh or completely reposition an existing identity while preserving important brand recognition.",
  ],
  [
    "Do you provide source files?",
    "Yes. Final delivery can include editable source files, export formats and organized folders for future use.",
  ],
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              FAQs
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
              Branding questions, answered.
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
      </div>
    </section>
  );
}
