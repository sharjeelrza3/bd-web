"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  { image: "/images/services/branding/campaign-d.webp", label: "Campaign Design" },
  { image: "/images/services/branding/product-creative.webp", label: "Product Creative" },
  { image: "/images/services/branding/story.png", label: "Brand Story" },
  { image: "/images/services/branding/promotional.webp", label: "Promotional Post" },
];

export default function SocialDesignSection() {
  return (
    <section className="overflow-hidden bg-[#1d1d1f] px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Social Media Design
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Content that looks consistent before people even read it.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
              We create branded post systems that make your feed feel intentional,
              recognizable and ready for campaigns.
            </p>
            <a
              href="#branding-work"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0066cc]"
            >
              Explore creative work
              <ArrowRight size={17} className="-rotate-45" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex min-w-max items-end justify-center gap-5">
          {posts.map((post, index) => (
            <div
              key={post.image}
              className={`relative w-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,.28)] transition hover:-translate-y-3 ${
                index === 0 || index === 3 ? "translate-y-12" : index === 2 ? "translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black">
                <Image src={post.image} alt={post.label} fill className="object-cover" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f]">
                  {post.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
