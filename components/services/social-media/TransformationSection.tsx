"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TransformationSection() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Brand Transformation
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
              From random posting to a recognizable brand system.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              We transform inconsistent pages into structured content ecosystems with
              clear positioning, stronger visuals and repeatable growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <article className="rounded-[2.3rem] border border-black/10 bg-[#f5f5f7] p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-black">
                <Image
                  src="/images/services/social-media/before.webp"
                  alt="Before social media profile"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f]">
                  Before
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Weak brand presence</h3>
                <p className="mt-2 text-sm font-semibold text-black/45">
                  Inconsistent visuals, weak hooks and no content system.
                </p>
              </div>
            </article>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_20px_60px_rgba(16,191,227,.3)]">
              <ArrowRight size={24} />
            </div>

            <article className="rounded-[2.3rem] border border-[#0066cc]/30 bg-white p-4 shadow-[0_30px_110px_rgba(0,0,0,.08)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-black">
                <Image
                  src="/images/services/social-media/after.png"
                  alt="After social media profile"
                  fill
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-4 py-2 text-xs font-semibold text-[#000000]">
                  <Sparkles size={14} />
                  After
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Premium brand presence</h3>
                <p className="mt-2 text-sm font-semibold text-black/45">
                  Clear visual identity, stronger content and measurable growth.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
