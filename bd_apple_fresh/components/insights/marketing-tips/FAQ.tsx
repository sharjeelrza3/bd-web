"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["Which marketing channel should I start with?", "Start with the channel that best matches your audience, offer and buying intent."],
  ["How much should I spend on ads?", "Budget depends on your market, offer, conversion rate and the amount of testing required."],
  ["Do I need both organic and paid marketing?", "Usually yes. Organic builds trust while paid campaigns can accelerate reach and testing."],
  ["How quickly can marketing generate results?", "Paid campaigns can produce data quickly, while brand and content growth usually require consistency over time."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Marketing FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Clear answers for common marketing questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <button
                key={question}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{question}</h3>
                  <Plus size={18} className={active ? "rotate-45 text-[#0066cc]" : ""} />
                </div>
                {active && <p className="mt-4 text-sm font-semibold leading-6 text-black/55">{answer}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
