"use client";

import Image from "next/image";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";

const previews = [
  { image: "/images/services/seo/search-ad.jpg", label: "Search Ad" },
  { image: "/images/services/seo/shopping-ads.jpg", label: "Shopping Ad" },
  { image: "/images/services/seo/display-ad.jpg", label: "Display Ad" },
];

export default function AdsPreviewSection() {
  return (
    <section className="overflow-hidden bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              <Sparkles size={16} />
              Ad Experience
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Strong ads match the exact moment of search.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
              We align keyword intent, ad copy, offer and landing page so every
              click feels relevant and more likely to convert.
            </p>

            <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0066cc]">
              Plan my search campaign
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <article className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white p-4">
            <div className="relative h-full min-h-[490px] overflow-hidden rounded-[2rem] bg-black">
              <Image
                src="/images/services/seo/search-results-features.jpg"
                alt="Google search ads preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f]">
                <Search size={14} />
                High-intent search result
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                {/* <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                  Search Campaign
                </p> */}
                <h3 className="mt-3 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.055em] text-white md:text-5xl">
                  Relevant ads. Better clicks. Stronger conversions.
                </h3>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {previews.map((item) => (
              <article
                key={item.image}
                className="relative min-h-[155px] overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3"
              >
                <div className="relative h-full min-h-[129px] overflow-hidden rounded-[1.5rem] bg-black">
                  <Image src={item.image} alt={item.label} fill className="object-cover opacity-85" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-between p-5">
                    <h3 className="mt-17 text-2xl font-semibold text-white">{item.label}</h3>
                    <ArrowUpRight size={22} className="text-[#0066cc]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
