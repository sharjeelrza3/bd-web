import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3 } from "lucide-react";
import type { BlogPost } from "./blogData";

export default function LatestArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bd-defer bg-white px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Latest thinking.</p>
          <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7.2rem)] font-semibold leading-[.91] tracking-[-.068em]">Ideas you can actually use.</h2>
        </div>
        {posts.length === 0 ? (
          <div className="mx-auto mt-14 max-w-[1180px] rounded-[30px] bg-[#f5f5f7] p-10 text-center text-[17px] font-medium text-black/45">No insights match that search yet.</div>
        ) : (
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 md:mt-16">
            {posts.map((post, index) => {
              const featured = index % 5 === 0;
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={`group relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#f5f5f7] ${featured ? "lg:col-span-7" : "lg:col-span-5"}`}>
                  <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 min-h-[45%] bg-[#f5f5f7] p-7 md:p-8">
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-black/35"><span>{post.category}</span><span>·</span><span className="inline-flex items-center gap-1.5"><Clock3 size={13}/>{post.readTime}</span></div>
                    <h3 className="mt-3 max-w-2xl text-[clamp(2rem,3.5vw,3.7rem)] font-semibold leading-[.98] tracking-[-.052em]">{post.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-1 text-[15px] font-medium text-[#0066cc]">Read more <ChevronRight size={16} className="transition-transform group-hover:translate-x-1"/></span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
