"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const items = [
  { image: "/images/services/social-media/reel-cover.webp", label: "Reel Cover" },
  { image: "/images/services/social-media/creative-2.webp", label: "Carousel" },
  { image: "/images/services/social-media/creative-3.webp", label: "Campaign Post" },
  { image: "/images/services/social-media/creatives-5.webp", label: "Story Design" },
  { image: "/images/services/social-media/creative-4.webp", label: "Product Creative" },
  { image: "/images/services/social-media/creatives-6.webp", label: "Testimonial" },
];

export default function CreativeShowcase() {
  return (
    <section id="creative-work" className="overflow-hidden bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              <Sparkles size={16} />
              Creative Showcase
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Content designed to look branded before people even read it.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
              Reels, stories, carousels, campaigns and promotional content — all
              built inside one visual system.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0066cc]">
              Build my creative system
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <article
              key={item.image}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,.28)]"
            >
              <div className={`relative overflow-hidden rounded-[1.55rem] bg-black ${
                index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
              }`}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f]">
                  {item.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
