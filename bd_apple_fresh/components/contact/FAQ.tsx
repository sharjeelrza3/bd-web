"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  [
    "How quickly will you respond?",
    "Most project inquiries receive a response within 24 hours during business days.",
  ],
  [
    "Do you work with international clients?",
    "Yes. Being Digitals can work remotely with clients in Pakistan and international markets.",
  ],
  [
    "Do I need a complete project brief?",
    "No. Share what you currently know. We can help define scope, features and priorities.",
  ],
  [
    "Can you work with my existing website or software?",
    "Yes. Existing systems can be audited, improved, redesigned or rebuilt depending on their condition.",
  ],
  [
    "Do you offer ongoing support?",
    "Yes. Maintenance, SEO, marketing and technical support plans can be discussed based on the project.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Project FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Before we start, here&apos;s what most clients ask.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([question, answer], index) => {
            const active = open === index;

            return (
              <button
                key={question}
                onClick={() => setOpen(active ? -1 : index)}
                className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5f5f7] p-5 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">{question}</h3>
                  <Plus
                    size={18}
                    className={active ? "rotate-45 text-[#0066cc]" : ""}
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
