"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  [
    "How long does a project take?",
    "Timeline depends on scope. A focused website can take days, while larger software or multi-page projects require a longer phased process.",
  ],
  [
    "How are revisions handled?",
    "Feedback is collected at defined approval stages so revisions stay organized and do not affect the full project unnecessarily.",
  ],
  [
    "Will I receive progress updates?",
    "Yes. We provide updates, review links and clear approval requests throughout the project.",
  ],
  [
    "What do you need from the client?",
    "Business information, goals, brand assets, content, required access and timely feedback are usually needed.",
  ],
  [
    "What happens after launch?",
    "We provide handover, support and optional ongoing maintenance, marketing or optimization services.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Process FAQs
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Clear answers before the project begins.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([question, answer], index) => {
            const active = open === index;

            return (
              <button
                key={question}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-white p-5 text-left transition hover:border-[#0066cc]/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{question}</h3>
                  <Plus
                    size={18}
                    className={`transition ${active ? "rotate-45 text-[#0066cc]" : ""}`}
                  />
                </div>

                {active && (
                  <p className="mt-4 text-sm font-semibold leading-6 text-black/55">
                    {answer}
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
