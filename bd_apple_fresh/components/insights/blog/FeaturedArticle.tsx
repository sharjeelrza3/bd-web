import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock3 } from "lucide-react";
import { posts } from "./blogData";

export default function FeaturedArticle() {
  const post = posts.find((item) => item.featured) ?? posts[0];

  return (
    <section className="bd-defer bg-[#f5f5f7] px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-[1180px] md:mb-16">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Featured insight.</p>
          <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7vw,7.2rem)] font-semibold leading-[.91] tracking-[-.068em]">One useful idea. Fully unpacked.</h2>
        </div>

        <Link href={`/blog/${post.slug}`} className="group relative block min-h-[720px] overflow-hidden rounded-[34px] bg-black text-white md:min-h-[780px] md:rounded-[42px]">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 1440px" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.018]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-black/5" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 lg:p-14">
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-semibold text-white/48">
              <span>{post.category}</span><span>·</span><span>{post.date}</span><span className="inline-flex items-center gap-1.5"><Clock3 size={14}/>{post.readTime}</span>
            </div>
            <h3 className="mt-4 max-w-[980px] text-[clamp(3rem,6.4vw,7rem)] font-semibold leading-[.91] tracking-[-.068em]">{post.title}</h3>
            <p className="mt-5 max-w-2xl text-[16px] font-medium leading-[1.55] text-white/52 md:text-[18px]">{post.excerpt}</p>
            <span className="mt-7 inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff]">Read article <ChevronRight size={18} className="transition-transform group-hover:translate-x-1"/></span>
          </div>
        </Link>
      </div>
    </section>
  );
}
