"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["Are these resources free?", "Yes. The listed resources are designed to be downloaded and used without charge."],
  ["Can I customize the templates?", "Yes. Document and spreadsheet templates can be edited for your own business needs."],
  ["Do I need an account?", "No account is required for the basic downloads on this page."],
  ["Will more resources be added?", "Yes. New checklists, templates and planning tools can be added over time."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Resources FAQ</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Everything you need before downloading.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([q, a], index) => {
            const active = open === index;
            return (
              <button
                key={q}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{q}</h3>
                  <Plus size={18} className={active ? "rotate-45 text-[#0066cc]" : ""} />
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
