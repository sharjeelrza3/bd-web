"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  [
    "Is SEO still worth investing in?",
    "Yes. SEO remains valuable when it is tied to real demand, useful content, technical quality and conversion-focused pages.",
  ],
  [
    "How long does SEO take?",
    "Meaningful results commonly require several months, depending on competition, website condition, authority and execution quality.",
  ],
  [
    "Do these guides work for local businesses?",
    "Yes. Several guides are specifically written for local businesses, service companies and location-based lead generation.",
  ],
  [
    "Can I do SEO without paid tools?",
    "Yes. Google Search Console, Analytics, Trends and PageSpeed Insights provide a strong free foundation.",
  ],
  [
    "Will AI replace traditional SEO?",
    "AI changes search behavior and content workflows, but relevance, trust, technical accessibility and genuine usefulness still matter.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            SEO FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Questions business owners ask most.
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
