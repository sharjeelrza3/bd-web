"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, Plus } from "lucide-react";
import { websiteDevelopment } from "@/data/website-development";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.65fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            FAQs
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-3">
            {websiteDevelopment.faqs.map(([q, a], index) => {
              const isOpen = openFaq === index;

              return (
                <button
                  key={q}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full rounded-[1.5rem] border border-black/10 bg-[#f5f5f7] p-5 text-left transition hover:border-[#0066cc]/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{q}</h3>

                    <Plus
                      size={18}
                      className={`transition ${
                        isOpen ? "rotate-45 text-[#0066cc]" : ""
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-sm font-semibold leading-6 text-black/55">
                      {a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
            <MessageCircle size={28} />
          </div>

          <h3 className="mt-8 text-4xl font-semibold leading-none tracking-[-0.05em]">
            Still have questions? We’re here to help you.
          </h3>

          <p className="mt-5 text-base font-semibold leading-7 text-black/50">
            Let’s clear your project doubts and build something amazing
            together.
          </p>

          <a
            href="https://wa.me/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white transition hover:bg-[#0066cc] hover:text-[#000000]"
          >
            Talk to Our Expert
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
