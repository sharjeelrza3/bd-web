"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Play,
  Sparkles,
} from "lucide-react";

const creatives = [
  {
    label: "UGC Video",
    category: "Testimonial Creative",
    description:
      "Authentic customer-style content designed to build trust and stop the scroll.",
    url: "https://www.instagram.com/reel/DU_VhM_DRx-/",
  },
  {
    label: "Product Ad",
    category: "Product Campaign",
    description:
      "A clear product-focused creative built around benefits, offer and visual appeal.",
    url: "https://www.instagram.com/reel/DUa8s6BkT0T/",
  },
  {
    label: "Lead Campaign",
    category: "Lead Generation",
    description:
      "A direct-response creative designed to attract qualified enquiries.",
    url: "https://www.instagram.com/reel/DaV0cY5gsE2/",
  },
  {
    label: "Retargeting",
    category: "Conversion Campaign",
    description:
      "A reminder-style creative built to convert warm audiences and previous visitors.",
    url: "https://www.instagram.com/reel/Dam9G1hCluj/",
  },
];

function getInstagramEmbedUrl(url: string) {
  const cleanUrl = url.split("?")[0].replace(/\/$/, "");
  return `${cleanUrl}/embed/`;
}

export default function CreativeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCreative = creatives[activeIndex];
  const embedUrl = getInstagramEmbedUrl(activeCreative.url);

  return (
    <section className="relative overflow-hidden bg-[#1d1d1f] px-5 py-20 text-white sm:px-6 md:py-24 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-56 top-[-120px] h-[600px] w-[600px] rounded-full bg-[#0066cc]/10 blur-[170px]" />

        <div className="absolute -left-52 bottom-[-240px] h-[540px] w-[540px] rounded-full bg-white/[0.04] blur-[170px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:54px_54px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
              <Sparkles size={16} />
              Creative Showcase
            </p>

            <h2 className="mt-4 max-w-3xl text-[42px] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
              Creatives that stop the scroll and earn the click.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base font-semibold leading-7 text-white/50 sm:text-lg sm:leading-8">
              Explore real campaign creatives designed around stronger hooks,
              better offers and audience-focused messaging.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0066cc] transition hover:gap-3"
            >
              Plan my creative testing
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main showcase */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          {/* Featured Reel */}
          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_35px_110px_rgba(0,0,0,.28)]">
            <div className="flex items-center justify-between gap-4 px-2 pb-4 pt-1">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                  Featured Instagram Creative
                </p>

                <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em]">
                  {activeCreative.label}
                </h3>
              </div>

              <a
                href={activeCreative.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${activeCreative.label} on Instagram`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:bg-[#0066cc] hover:text-[#000000]"
              >
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mx-auto h-[500px] max-w-[350px] overflow-hidden rounded-[1.5rem] bg-white sm:h-[540px] lg:h-[560px]">
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={`${activeCreative.label} Instagram Reel`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0 bg-white"
              />
            </div>
          </article>

          {/* Selection panel */}
          <div className="flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-[#000000]/45 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000]">
                  <Play size={18} fill="currentColor" />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                    Currently Viewing
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">
                    {activeCreative.label}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-white/50">
                {activeCreative.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/60">
                  <CheckCircle2 size={14} className="text-[#0066cc]" />
                  Real Creative
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/60">
                  Instagram Reel
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {creatives.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex min-h-[105px] items-center justify-between gap-4 rounded-[1.5rem] border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[#0066cc]/55 bg-[#0066cc] text-[#000000] shadow-[0_20px_60px_rgba(16,191,227,.18)]"
                        : "border-white/10 bg-white/[0.04] text-white hover:-translate-y-1 hover:border-[#0066cc]/35 hover:bg-white/[0.07]"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
                          isActive
                            ? "text-[#000000]/55"
                            : "text-[#0066cc]"
                        }`}
                      >
                        {item.category}
                      </p>

                      <h4 className="mt-2 text-lg font-semibold tracking-[-0.035em]">
                        {item.label}
                      </h4>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                        isActive
                          ? "border-[#000000]/15 bg-[#000000] text-white"
                          : "border-white/10 bg-white/[0.05] text-white group-hover:bg-[#0066cc] group-hover:text-[#000000]"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href={activeCreative.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-4 font-semibold text-white transition hover:border-[#0066cc] hover:bg-[#0066cc] hover:text-[#000000]"
            >
              View Reel on Instagram
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}