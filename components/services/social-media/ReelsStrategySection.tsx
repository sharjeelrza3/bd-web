"use client";

import Image from "next/image";

const steps = [
  ["Hook", "Stop the scroll in the first 2 seconds."],
  ["Retention", "Keep attention through pacing and pattern changes."],
  ["Story", "Deliver a clear message people can follow."],
  ["CTA", "Guide viewers toward comment, follow, click or inquiry."],
];

export default function ReelsStrategySection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto h-[620px] w-[330px] rounded-[3rem] border border-black/10 bg-white p-3 shadow-[0_40px_130px_rgba(0,0,0,.16)]">
          <div className="relative h-full overflow-hidden rounded-[2.45rem] bg-black">
            <Image
              src="/images/services/social-media/reels-strategy.webp"
              alt="Reels strategy preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                High-Retention Reel
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Hook. Hold. Convert.
              </h3>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Reels Strategy
          </p>
          <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Reels should do more than collect views.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
            We design reel structures that improve watch time, brand recall and action.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {steps.map(([title, desc], index) => (
              <div
                key={title}
                className="rounded-[1.7rem] border border-black/10 bg-[#f5f5f7] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-black/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
