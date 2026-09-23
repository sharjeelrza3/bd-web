"use client";

import { useMemo, useState } from "react";
import Hero from "./Hero";
import FeaturedTip from "./FeaturedTip";
import Categories from "./Categories";
import TipsGrid from "./TipsGrid";
import CampaignFramework from "./CampaignFramework";
import PlatformCards from "./PlatformCards";
import Resources from "./Resources";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import CTA from "./CTA";
import { categories, tips } from "./data";

export default function MarketingTipsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return tips.filter((tip) => {
      const categoryMatch = active === "All" || tip.category === active;
      const searchMatch =
        tip.title.toLowerCase().includes(search.toLowerCase()) ||
        tip.excerpt.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [active, search]);

  return (
    <main className="bg-[#f5f5f7] pt-[64px] text-[#101010]">
      <Hero search={search} onSearch={setSearch} />
      <FeaturedTip />
      <Categories items={categories} active={active} onChange={setActive} />
      <TipsGrid tips={filtered} />
      <CampaignFramework />
      <PlatformCards />
      <Resources />
      <FAQ />
      <Newsletter />
      <CTA />
    </main>
  );
}
