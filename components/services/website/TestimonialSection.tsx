"use client";

import { websiteDevelopment } from "@/data/website-development";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
          What Clients Say
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
          Happy clients. Real results.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {websiteDevelopment.testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,.05)]"
            >
              <p className="text-lg font-semibold leading-8 text-black/58">
                “{item.quote}”
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#1d1d1f]" />

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm font-semibold text-black/40">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
