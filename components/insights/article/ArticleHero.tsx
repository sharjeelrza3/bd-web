"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Share2,
} from "lucide-react";
import { useState } from "react";
import type { Article } from "@/data/articles";

const routeMap = {
  blog: "/blog",
  "seo-guide": "/seo-guides",
  "marketing-tip": "/marketing-tips",
};

export default function ArticleHero({ article }: { article: Article }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-20 pt-14 text-white md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-240px] top-[-220px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/18 blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Link
          href={routeMap[article.type]}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/55"
        >
          <ArrowLeft size={14} />
          Back to {article.type === "blog" ? "Blog" : article.type === "seo-guide" ? "SEO Guides" : "Marketing Tips"}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
              {article.category}
            </p>

            <h1 className="mt-5 text-[48px] font-semibold leading-[0.9] tracking-[-0.075em] md:text-[78px]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/50">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-xs font-semibold text-white/55">
                <CalendarDays size={15} className="text-[#0066cc]" />
                {article.updated ?? article.date}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-xs font-semibold text-white/55">
                <Clock3 size={15} className="text-[#0066cc]" />
                {article.readTime}
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={article.author.image}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/30">
                  {article.author.role}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-5 py-3 font-semibold text-[#000000]"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Link Copied" : "Copy Link"}
              </button>

              <button
                type="button"
                onClick={() =>
                  navigator.share?.({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold"
              >
                <Share2 size={17} />
                Share
              </button>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_35px_120px_rgba(0,0,0,.4)] md:min-h-[580px]">
            <div className="relative h-full min-h-[404px] overflow-hidden rounded-[2rem] md:min-h-[554px]">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
