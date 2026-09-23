"use client";

import { useMemo, useState } from "react";
import Hero from "./Hero";
import FeaturedGuide from "./FeaturedGuide";
import Categories from "./Categories";
import GuideGrid from "./GuideGrid";
import LearningRoadmap from "./LearningRoadmap";
import DownloadCenter from "./DownloadCenter";
import ToolsSection from "./ToolsSection";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import CTA from "./CTA";
import { categories, guides } from "./data";

export default function SeoGuidesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredGuides = useMemo(() => {
    return guides.filter((guide) => {
      const matchesCategory =
        activeCategory === "All" || guide.category === activeCategory;
      const matchesSearch =
        guide.title.toLowerCase().includes(search.toLowerCase()) ||
        guide.excerpt.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-[#f5f5f7] pt-[64px] text-[#101010]">
      <Hero search={search} onSearch={setSearch} />
      <FeaturedGuide />
      <Categories
        items={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <GuideGrid guides={filteredGuides} />
      <LearningRoadmap />
      <DownloadCenter />
      <ToolsSection />
      <FAQ />
      <Newsletter />
      <CTA />
    </main>
  );
}
