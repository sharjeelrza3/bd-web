import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "./blogData";

export default function PopularPosts() {
  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
            Popular Reads
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl">
            Start with the topics business owners ask about most.
          </h2>
        </div>

        <div className="space-y-3">
          {posts.slice(0, 5).map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <span className="text-3xl font-semibold text-[#0066cc]">0{index + 1}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/30">
                  {post.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
              </div>
              <ArrowUpRight size={19} className="text-white/30" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
