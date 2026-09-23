import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { Article } from "@/data/articles";

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <main className="overflow-clip bg-white pt-[58px] text-[#1d1d1f]">
      <section className="px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-[1040px] text-center">
          <p className="text-[14px] font-semibold text-[#6e6e73] md:text-[16px]">{article.category} · {article.readTime}</p>
          <h1 className="mx-auto mt-4 text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[.89] tracking-[-.07em]">{article.title}</h1>
          <p className="mx-auto mt-7 max-w-3xl text-[18px] font-semibold leading-[1.5] text-black/43 md:text-[21px]">{article.excerpt}</p>
          <p className="mt-6 text-[12px] font-semibold text-black/35">{article.date}{article.updated ? ` · ${article.updated}` : ""}</p>
        </div>
        <div className="relative mx-auto mt-14 aspect-[16/8.5] max-w-[1260px] overflow-hidden rounded-[34px] bg-[#f5f5f7]">
          <Image src={article.heroImage} alt={article.title} fill priority sizes="94vw" className="object-cover object-top" />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[820px]">
          {article.sections.map((section, index) => (
            <article id={section.id} key={section.id} className="border-t border-black/[.09] py-12 first:border-t-0 first:pt-0 md:py-16">
              <p className="text-[11px] font-semibold text-black/28">0{index + 1}</p>
              <h2 className="mt-3 text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[.96] tracking-[-.057em]">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-6 text-[18px] font-medium leading-[1.72] text-black/58 md:text-[20px]">{paragraph}</p>)}
              {section.bullets && <div className="mt-7 overflow-hidden rounded-[24px] bg-[#f5f5f7]">{section.bullets.map((bullet, i) => <div key={bullet} className="grid grid-cols-[44px_1fr] border-b border-black/[.07] px-5 py-4 last:border-b-0"><span className="text-[11px] font-semibold text-black/26">0{i + 1}</span><span className="text-[16px] font-semibold">{bullet}</span></div>)}</div>}
              {section.callout && <div className="mt-8 rounded-[26px] bg-black p-7 text-white md:p-9"><p className="text-[12px] font-semibold text-white/40">{section.callout.title}</p><p className="mt-3 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1.12] tracking-[-.045em]">{section.callout.text}</p></div>}
              {section.quote && <blockquote className="mt-9 border-l-2 border-[#0071e3] pl-6 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1.18] tracking-[-.04em] text-black/75">“{section.quote}”</blockquote>}
              {section.image && <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-[28px] bg-[#f5f5f7]"><Image src={section.image} alt={section.title} fill sizes="800px" className="object-cover" /></div>}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[15px] font-semibold text-[#6e6e73]">Need help applying this?</p>
          <h2 className="mt-3 text-[clamp(3.3rem,6.6vw,6.6rem)] font-semibold leading-[.9] tracking-[-.066em]">Turn the idea into execution.</h2>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white">Start a project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
