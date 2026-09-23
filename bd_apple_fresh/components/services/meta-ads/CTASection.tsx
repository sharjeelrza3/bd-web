"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.7rem] bg-[#0066cc] p-8 text-[#000000] md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em]">
                Ready to scale?
              </p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
                Build campaigns designed to generate real business.
              </h2>
            </div>

            <div className="grid gap-3">
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-[#000000] px-7 py-4 font-semibold text-white"
              >
                Start Meta Ads Project
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>

              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full border border-black/15 px-7 py-4 font-semibold transition hover:bg-white"
              >
                <MessageCircle size={18} />
                Talk to an Ads Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
