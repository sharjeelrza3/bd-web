"use client";

import {
  BookOpenCheck,
  Box,
  Brush,
  LayoutTemplate,
  Megaphone,
  Palette,
  PenTool,
  Share2,
} from "lucide-react";

const services = [
  {
    title: "Logo Design",
    desc: "Distinctive logo marks, wordmarks and flexible logo systems.",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    desc: "Colors, typography, iconography and complete visual direction.",
    icon: Palette,
  },
  {
    title: "Social Media Design",
    desc: "Branded post systems, campaign creatives and content templates.",
    icon: Share2,
  },
  {
    title: "Packaging Design",
    desc: "Product labels, boxes and packaging that feel polished and premium.",
    icon: Box,
  },
  {
    title: "Marketing Collateral",
    desc: "Brochures, flyers, menus, profiles, pitch decks and print material.",
    icon: Megaphone,
  },
  {
    title: "Campaign Creatives",
    desc: "Ad creatives, launch visuals and seasonal campaign concepts.",
    icon: Brush,
  },
  {
    title: "Brand Guidelines",
    desc: "A clear usage guide to keep your brand consistent everywhere.",
    icon: BookOpenCheck,
  },
  {
    title: "Visual Direction",
    desc: "Creative direction for websites, content, photography and campaigns.",
    icon: LayoutTemplate,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              What We Design
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              A complete visual system for every place your brand appears.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            From the first logo idea to daily social media content, every asset is
            designed to feel connected, recognizable and professional.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-black/10 bg-white p-5 shadow-[0_30px_110px_rgba(0,0,0,.06)]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] p-5 transition hover:bg-[#e7fbff]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-black/48">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
