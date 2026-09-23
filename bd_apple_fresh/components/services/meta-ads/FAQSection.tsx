"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["How much budget do I need for Meta Ads?", "The right budget depends on your offer, market, campaign objective and expected cost per result."],
  ["Do you create the ad creatives?", "Yes. Creative planning, static ads, video direction and testing variations can be included."],
  ["Can you run lead generation campaigns?", "Yes. We can run instant forms, WhatsApp, website conversion and retargeting campaigns."],
  ["How quickly can campaigns generate results?", "Campaigns can start producing data quickly, but profitable optimization usually requires testing and iteration."],
  ["Do you provide reports?", "Yes. Reporting can cover spend, leads, conversions, ROAS, CPL, creative performance and next actions."],
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            FAQs
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Meta Ads without vague answers.
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
