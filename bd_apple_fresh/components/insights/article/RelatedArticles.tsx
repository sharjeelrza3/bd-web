import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getRelatedArticles } from "@/data/articles";

const routeMap = {
  blog: "/blog",
  "seo-guide": "/seo-guides",
  "marketing-tip": "/marketing-tips",
};

export default function RelatedArticles({ slugs }: { slugs: string[] }) {
  const related = getRelatedArticles(slugs);

  if (!related.length) return null;

  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
          Related Insights
        </p>
        <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
          Continue reading.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f5f5f7]"
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                  {article.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em]">
                  {article.title}
                </h3>
                <Link
                  href={`${routeMap[article.type]}/${article.slug}`}
                  className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 font-semibold"
                >
                  Read Article
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
