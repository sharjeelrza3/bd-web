"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["How long does SEO take?", "Most campaigns need several months to build meaningful visibility, depending on competition, website condition and content."],
  ["Do you guarantee rankings?", "No responsible SEO agency can guarantee a specific position, but we use proven methods and transparent reporting."],
  ["Is Local SEO included?", "Local SEO can be included for businesses targeting specific cities, areas or service locations."],
  ["Do you write SEO content?", "Yes. Content research, planning, optimization and writing can be included based on campaign scope."],
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">FAQs</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            SEO without vague answers.
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
                {active && <p className="mt-4 text-sm font-semibold leading-6 text-black/55">{a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
