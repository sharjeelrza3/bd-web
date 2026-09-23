"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  ["What if my industry is not listed?","We can still help. Our process starts with research, so we study the business model, customers and operational requirements before recommending a solution."],
  ["Do you use the same solution for similar businesses?","No. Even businesses in the same industry can have different goals, audiences, workflows and budgets."],
  ["Can you build both the website and internal software?","Yes. Being Digitals can connect websites, custom software, automation and digital marketing inside one ecosystem."],
  ["Do you provide industry-specific marketing?","Yes. SEO, social media and paid campaigns are planned around the audience and buying behavior of the selected industry."],
  ["Can you integrate existing business tools?","Yes, where supported. We can connect CRMs, forms, payment systems, messaging tools, analytics and custom APIs."],
];

export default function FAQ() {
  const [open,setOpen] = useState(0);
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Industry FAQs</p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">Clear answers for different business needs.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(([q,a],index) => {
            const active = open === index;
            return (
              <button key={q} onClick={() => setOpen(active ? -1 : index)} className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5f5f7] p-5 text-left transition hover:border-[#0066cc]/35">
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
