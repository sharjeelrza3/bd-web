"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white shadow-[0_30px_120px_rgba(16,35,31,.2)] md:p-14">
          <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#0066cc]/22 blur-[140px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
                Ready to get started?
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
                Let’s build a website that grows your business.
              </h2>
            </div>

            <div className="grid gap-3">
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]"
              >
                Start Your Website Project
                <ArrowRight
                  size={18}
                  className="-rotate-45 transition group-hover:rotate-0"
                />
              </a>

              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#000000]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
