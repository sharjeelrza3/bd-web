import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import type { ArticleSection } from "@/data/articles";

export default function ArticleContent({
  sections,
}: {
  sections: ArticleSection[];
}) {
  return (
    <article className="min-w-0">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 border-b border-black/10 pb-14 pt-4 first:pt-0 last:border-b-0"
        >
          <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
            {section.title}
          </h2>

          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-lg font-medium leading-9 text-black/60"
            >
              {paragraph}
            </p>
          ))}

          {section.bullets && (
            <div className="mt-7 space-y-3 rounded-[1.8rem] bg-[#f5f5f7] p-6">
              {section.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#0066cc]"
                  />
                  <span className="font-semibold leading-7 text-black/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}

          {section.quote && (
            <blockquote className="mt-8 rounded-[2rem] bg-[#1d1d1f] p-7 text-white md:p-9">
              <Quote size={28} className="text-[#0066cc]" />
              <p className="mt-5 text-2xl font-semibold leading-[1.25] tracking-[-0.035em] md:text-4xl">
                “{section.quote}”
              </p>
            </blockquote>
          )}

          {section.callout && (
            <div className="mt-8 rounded-[2rem] border border-[#0066cc]/35 bg-[#e7fbff] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
                {section.callout.title}
              </p>
              <p className="mt-4 text-lg font-semibold leading-8 text-black/65">
                {section.callout.text}
              </p>
            </div>
          )}

          {section.image && (
            <div className="relative mt-8 h-[320px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#1d1d1f] md:h-[520px]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </section>
      ))}
    </article>
  );
}
