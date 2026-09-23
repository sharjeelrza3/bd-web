"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import type { ArticleSection } from "@/data/articles";

export default function TableOfContents({
  sections,
}: {
  sections: ArticleSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[1.8rem] border border-black/10 bg-[#f5f5f7] p-5">
        <div className="flex items-center gap-2 text-[#0066cc]">
          <List size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">
            Table of Contents
          </p>
        </div>

        <nav className="mt-5 space-y-2">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
                activeId === section.id
                  ? "bg-[#1d1d1f] text-white"
                  : "text-black/45 hover:bg-white hover:text-black"
              }`}
            >
              <span className="mr-2 text-[#0066cc]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
