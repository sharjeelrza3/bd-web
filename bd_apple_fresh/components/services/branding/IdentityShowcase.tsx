"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const chips = ["Primary Logo", "Alt Logo", "Color System", "Typography", "Patterns", "Guidelines"];

export default function IdentityShowcase() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Brand Identity System
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl">
              Not just a logo. A complete visual language.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-white/55">
              We create a system your business can use across social media, websites,
              packaging, print and campaigns without losing consistency.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {chips.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.06] p-4"
                >
                  <CheckCircle2 size={18} className="text-[#0066cc]" />
                  <span className="font-semibold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#f5f5f7] p-5 shadow-[0_30px_110px_rgba(0,0,0,.07)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,191,227,.16),transparent_32%)]" />

            <div className="relative grid h-full grid-cols-12 gap-4">
              <div className="relative col-span-7 overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src="/images/services/branding/logo.jpg"
                  alt="Brand identity main showcase"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="col-span-5 grid gap-4">
                <div className="relative overflow-hidden rounded-[2rem] bg-black">
                  <Image
                    src="/images/services/branding/packaging.png"
                    alt="Logo application"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative overflow-hidden rounded-[2rem] bg-[#0066cc] p-6 text-[#000000]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Color System
                  </p>
                  <div className="mt-6 flex gap-3">
                    {["#10231F", "#10BFE3", "#FBFAF5", "#101010"].map((color) => (
                      <span
                        key={color}
                        className="h-12 flex-1 rounded-2xl border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <p className="mt-8 text-4xl font-semibold tracking-[-0.06em]">
                    Aa
                  </p>
                  <p className="mt-1 font-semibold">Typography direction</p>
                </div>
              </div>

              <div className="relative col-span-5 overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src="/images/services/branding/socialmediaposts.png"
                  alt="Packaging application"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative col-span-7 overflow-hidden rounded-[2rem] bg-black">
                <Image
                  src="/images/services/branding/brand-g.jpg"
                  alt="Social media application"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
