"use client";

import { useMemo, useState } from "react";
import Hero from "./Hero";
import FeaturedDownload from "./FeaturedDownload";
import ResourceCategories from "./ResourceCategories";
import ResourceGrid from "./ResourceGrid";
import ToolkitSection from "./ToolkitSection";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import CTA from "./CTA";
import { categories, resources } from "./data";

export default function FreeResourcesPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return resources.filter((item) => {
      const matchesCategory = active === "All" || item.category === active;
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <main className="bg-[#f5f5f7] pt-[64px] text-[#101010]">
      <Hero search={search} onSearch={setSearch} />
      <FeaturedDownload />
      <ResourceCategories items={categories} active={active} onChange={setActive} />
      <ResourceGrid items={filtered} />
      <ToolkitSection />
      <FAQ />
      <Newsletter />
      <CTA />
    </main>
  );
}
