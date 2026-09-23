"use client";

import { useMemo, useState } from "react";
import Hero from "./Hero";
import FeaturedArticle from "./FeaturedArticle";
import LatestArticles from "./LatestArticles";
import PopularPosts from "./PopularPosts";
import Newsletter from "./Newsletter";
import CTA from "./CTA";
import { posts, categories } from "./blogData";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = category === "All" || post.category === category;
      const searchMatch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [search, category]);

  return (
    <main className="bg-[#f5f5f7] pt-[64px] text-[#101010]">
      <Hero search={search} setSearch={setSearch} />
      <FeaturedArticle />
      <section className="bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-3 text-sm font-semibold ${
                category === item
                  ? "bg-[#1d1d1f] text-white"
                  : "border border-black/10 bg-[#f5f5f7] text-black/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      <LatestArticles posts={filtered} />
      <PopularPosts />
      <Newsletter />
      <CTA />
    </main>
  );
}
