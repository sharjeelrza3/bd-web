"use client";
import Image from "next/image";
import { ArrowDownRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-24 pt-12 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-240px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
          <Sparkles size={14} /> Selected Work
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="text-[58px] font-semibold leading-[0.84] tracking-[-0.085em] md:text-[98px] lg:text-[112px]">
              We don&apos;t just build websites.
              <span className="block text-[#0066cc]">We build businesses.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Selected websites, software products and digital systems built to improve trust, operations and growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#featured-work" className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000]">
                Explore Projects <ArrowDownRight size={18} />
              </a>
              <a href="/showreel" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold">
                <Play size={17} /> Watch Showreel
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[["120+","Projects"],["40+","Businesses"],["98%","Satisfaction"],["6+","Years"]].map(([v,l]) => (
                <div key={l} className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-2xl font-semibold">{v}</p>
                  <p className="mt-1 text-xs text-white/35">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[620px]">
            <div className="absolute left-[2%] top-[8%] h-[450px] w-[78%] rotate-[-4deg] overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_45px_150px_rgba(0,0,0,.45)]">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-black">
                <Image src="/images/portfolio/websites.webp" alt="Portfolio desktop preview" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-[4%] right-[2%] h-[380px] w-[35%] rotate-[5deg] overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_35px_120px_rgba(0,0,0,.4)]">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-black">
                <Image src="/images/portfolio/mobile.jpg" alt="Portfolio mobile preview" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
