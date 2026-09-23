"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollLift from "@/components/apple/ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;
const quotes = [
  ["Taste of Karachi", "The final website feels premium and practical. The experience was planned around the business, not just the design."],
  ["The Pest Zone", "The website now explains our services clearly and makes it much easier for customers to contact us."],
  ["Nazar Medical Center", "The software was built around our real workflow, which made the system much easier for the team to use."],
  ["SARSS Fragrance", "The work felt polished, modern and aligned with the premium direction we wanted for the brand."],
] as const;
const logos = [
  "/images/clients/taste-of-karachi.png",
  "/images/clients/the-pest-zones.png",
  "/images/clients/naturesynch.png",
  "/images/clients/mehran-royalee.png",
  "/images/clients/brandealss.png",
  "/images/clients/m-one-target.png",
];

export default function ReviewsPage() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="px-5 pb-20 pt-20 text-center md:px-8 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-[1120px]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[17px] font-semibold text-[#6e6e73]">Client stories</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.89] tracking-[-.075em]">The best proof is what clients say after launch.</motion.h1>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-4 py-20 text-white md:px-8 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(0,113,227,.26),transparent_28%),radial-gradient(circle_at_78%_66%,rgba(126,63,242,.18),transparent_25%)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <ScrollLift className="mb-14 max-w-4xl">
            <p className="text-[17px] font-semibold text-white/45">In their own words.</p>
            <h2 className="mt-3 text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[.92] tracking-[-.067em]">Listen to the experience, not a sales pitch.</h2>
          </ScrollLift>
          <div className="grid gap-5 lg:grid-cols-2">
            {["/videos/reviews/review-1.mp4", "/videos/reviews/review-2.mp4"].map((src, i) => (
              <ScrollLift key={src} distance={46} className="h-full">
                <article className="relative flex min-h-[680px] h-full items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-white/[.055] p-5 md:min-h-[760px] md:p-8">
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 md:p-8">
                    <p className="text-[13px] font-semibold text-white/45">Client review {String(i + 1).padStart(2, "0")}</p>
                    <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white/55 backdrop-blur-xl">Play with sound</span>
                  </div>
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:34px_34px]" />
                  <div className="relative z-[1] w-[min(72%,390px)] overflow-hidden rounded-[38px] border border-white/14 bg-black p-2 shadow-[0_45px_140px_rgba(0,0,0,.65)]">
                    <video controls playsInline preload="metadata" className="aspect-[9/16] w-full rounded-[30px] bg-black object-cover">
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                </article>
              </ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] py-24 md:py-36">
        <div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <ScrollLift>
            <p className="text-[17px] font-semibold text-[#6e6e73]">What working together felt like.</p>
            <h2 className="mt-3 max-w-5xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-semibold leading-[.93] tracking-[-.065em]">Details clients remember after the project is done.</h2>
          </ScrollLift>
        </div>
        <div className="bd-rail mx-auto mt-14 flex max-w-[1500px] snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 md:px-8">
          {quotes.map(([client, quote]) => (
            <article key={client} className="min-h-[440px] w-[86vw] max-w-[620px] shrink-0 snap-center rounded-[38px] bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,.04)] md:min-h-[520px] md:p-11">
              <Quote className="text-[#0071e3]" size={30} />
              <div className="mt-6 flex gap-1">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" className="text-[#0071e3]" />)}</div>
              <p className="mt-8 text-[clamp(2rem,3.5vw,3.6rem)] font-semibold leading-[1.04] tracking-[-.052em]">“{quote}”</p>
              <p className="mt-9 text-[14px] font-semibold text-black/40">{client}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <ScrollLift className="text-center"><p className="text-[17px] font-semibold text-[#6e6e73]">Trusted by businesses across different industries.</p></ScrollLift>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {logos.map((src) => (
              <ScrollLift key={src} distance={18} className="h-full">
                <div className="flex min-h-[140px] h-full items-center justify-center rounded-[26px] bg-[#f5f5f7] p-6 transition-transform duration-300 hover:-translate-y-1">
                  <Image src={src} alt="Being Digitals client" width={170} height={80} className="max-h-14 w-auto object-contain" />
                </div>
              </ScrollLift>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-28 text-center text-white md:px-8 md:py-40">
        <ScrollLift className="mx-auto max-w-[1000px]">
          <p className="text-[17px] font-semibold text-white/45">Build the next success story.</p>
          <h2 className="mt-3 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.89] tracking-[-.07em]">Make the experience worth recommending.</h2>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-black transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black">Start a project <ArrowRight size={16} /></Link>
        </ScrollLift>
      </section>
    </main>
  );
}
