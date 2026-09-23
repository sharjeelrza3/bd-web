import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { guides } from "./data";

export default function FeaturedGuide() {
  const guide = guides.find((item) => item.featured) ?? guides[0];

  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
          Featured Guide
        </p>

        <article className="mt-10 grid overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_28px_100px_rgba(0,0,0,.07)] lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-[#1d1d1f]">
            <Image src={guide.image} alt={guide.title} fill className="object-cover" />
            <span className="absolute left-6 top-6 rounded-full bg-[#0066cc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#000000]">
              {guide.category}
            </span>
          </div>

          <div className="flex flex-col p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-black/35">
              <span>{guide.difficulty}</span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={14} />
                {guide.readTime}
              </span>
              <span>{guide.updated}</span>
            </div>

            <h2 className="mt-7 text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
              {guide.title}
            </h2>

            <p className="mt-6 text-base font-semibold leading-7 text-black/50">
              {guide.excerpt}
            </p>

            <Link
              href={`/seo-guides/${guide.slug}`}
              className="mt-auto flex items-center justify-between rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white"
            >
              Read Featured Guide
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
