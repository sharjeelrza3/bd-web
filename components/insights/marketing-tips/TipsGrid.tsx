import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { MarketingTip } from "./data";

export default function TipsGrid({ tips }: { tips: MarketingTip[] }) {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Latest Marketing Tips
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Practical ideas you can apply.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Better decisions across campaigns, content, positioning and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <article
              key={tip.slug}
              className={`group overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f5f5f7] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-[420px]" : "h-[280px]"}`}>
                <Image src={tip.image} alt={tip.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-5 top-5 rounded-full bg-[#0066cc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#000000]">
                  {tip.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-black/35">
                  <span>{tip.difficulty}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {tip.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{tip.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/45">{tip.excerpt}</p>

                <Link href={`/marketing-tips/${tip.slug}`} className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 font-semibold">
                  Read Tip
                  <ArrowUpRight size={18} className="text-[#0066cc]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
