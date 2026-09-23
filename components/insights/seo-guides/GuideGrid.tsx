import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { SeoGuide } from "./data";

export default function GuideGrid({ guides }: { guides: SeoGuide[] }) {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              SEO Guides
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Build your SEO knowledge step by step.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Clear explanations, practical frameworks and useful implementation
            guidance.
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <article
                key={guide.slug}
                className={`group overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f5f5f7] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_90px_rgba(0,0,0,.07)] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "h-[420px]" : "h-[280px]"
                  }`}
                >
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-[#0066cc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#000000]">
                    {guide.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-black/35">
                    <span>{guide.difficulty}</span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={14} />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-black/45">
                    {guide.excerpt}
                  </p>

                  <Link
                    href={`/seo-guides/${guide.slug}`}
                    className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 font-semibold"
                  >
                    Read Guide
                    <ArrowUpRight size={18} className="text-[#0066cc]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-10 text-center">
            <p className="text-xl font-semibold">No guides matched your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
