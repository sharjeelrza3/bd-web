"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Layers3,
  MonitorCog,
  Palette,
  PenTool,
  Search,
  Smartphone,
} from "lucide-react";

const showcaseItems = [
  {
    key: "websites",
    label: "Websites",
    subtitle: "High-converting business websites",
    title: "Website Development",
    count: "48+ Projects",
    desc: "Modern websites that look premium, load fast, rank on Google and convert visitors into customers.",
    icon: Layers3,
    image: "/images/portfolio/websites.webp",
    href: "/portfolio",
    cta: "View Website Projects",
    tags: [
      "Restaurant Websites",
      "Corporate Websites",
      "Luxury Brands",
      "Landing Pages",
      "Ecommerce",
    ],
  },
  {
    key: "software",
    label: "Software",
    subtitle: "Custom systems that save hours",
    title: "Business Software",
    count: "18+ Systems",
    desc: "Custom software that removes manual work, improves daily operations and gives your business complete control.",
    icon: MonitorCog,
    image: "/images/portfolio/softwares.webp",
    href: "/portfolio",
    cta: "View Software Projects",
    tags: [
      "Restaurant POS",
      "Clinic OPD",
      "Inventory",
      "CRM",
      "Admin Panels",
    ],
  },
  {
    key: "seo",
    label: "SEO",
    subtitle: "Rank higher. Generate leads.",
    title: "SEO & Growth",
    count: "32+ Campaigns",
    desc: "SEO strategies focused on stronger rankings, qualified traffic, local visibility and measurable business growth.",
    icon: Search,
    image: "/images/portfolio/seo-growth.png",
    href: "/portfolio",
    cta: "View SEO Campaigns",
    tags: [
      "Local SEO",
      "Technical SEO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
    ],
  },
  {
    key: "branding",
    label: "Branding",
    subtitle: "Look premium everywhere",
    title: "Branding & Social",
    count: "90+ Creatives",
    desc: "Brand identities and marketing creatives that make businesses look professional, consistent and instantly recognizable.",
    icon: Palette,
    image: "/images/portfolio/branding-social.png",
    href: "/portfolio",
    cta: "View Branding Work",
    tags: [
      "Brand Identity",
      "Social Media",
      "Ad Creatives",
      "Campaigns",
      "Reels",
    ],
  },
  {
    key: "uiux",
    label: "UI/UX",
    subtitle: "Designed for better conversions",
    title: "UI / UX Design",
    count: "22+ Projects",
    desc: "Clean interfaces, dashboards and design systems created for usability, clarity and stronger conversion performance.",
    icon: PenTool,
    image: "/images/portfolio/uiux.jpg",
    href: "/portfolio",
    cta: "View UI/UX Projects",
    tags: [
      "Web Applications",
      "Dashboards",
      "Mobile Apps",
      "Wireframes",
      "Design Systems",
    ],
  },
  {
    key: "ai",
    label: "AI",
    subtitle: "Automate repetitive work",
    title: "AI Automation",
    count: "12+ Projects",
    desc: "AI systems that automate repetitive tasks, qualify leads and improve customer service around the clock.",
    icon: Bot,
    image: "/images/portfolio/ai.jpg",
    href: "/portfolio",
    cta: "View AI Projects",
    tags: [
      "AI Chatbots",
      "OpenAI",
      "WhatsApp AI",
      "Automation",
      "Smart Assistants",
    ],
  },
  {
    key: "mobile",
    label: "Mobile Apps",
    subtitle: "Your business in every pocket",
    title: "Mobile App Development",
    count: "15+ Apps",
    desc: "Fast, responsive mobile applications for Android, iOS and cross-platform business experiences.",
    icon: Smartphone,
    image: "/images/portfolio/mobile.jpg",
    href: "/portfolio",
    cta: "View Mobile Apps",
    tags: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "Progressive Web Apps",
    ],
  },
];

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = showcaseItems[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f5f5f7] px-5 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-240px] top-28 h-[580px] w-[580px] rounded-full blur-[160px] transition-colors duration-700"
          style={{
            background:
              activeIndex % 2 === 0
                ? "rgba(16,191,227,.16)"
                : "rgba(16,35,31,.13)",
          }}
        />

        <div className="absolute bottom-[-180px] left-[-280px] h-[540px] w-[540px] rounded-full bg-[#1d1d1f]/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(0,0,0,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.45fr] lg:items-end md:mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
              Everything We Build
            </p>

            <h2 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.9] tracking-[-0.06em] text-[#101010] sm:text-5xl md:text-6xl lg:text-[72px]">
              One digital partner.
              <span className="block text-[#0066cc]">
                Every solution your business needs.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base font-semibold leading-7 text-black/50 md:text-lg md:leading-8">
              From websites and software to SEO, branding and AI automation,
              every solution is built around a real business goal.
            </p>

            <Link
              href="/portfolio"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#1d1d1f] px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000]"
            >
              View Full Portfolio

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Main showcase */}
        <div className="rounded-[2.2rem] border border-black/10 bg-white p-2.5 shadow-[0_35px_130px_rgba(0,0,0,.09)] sm:rounded-[3rem] sm:p-4">
          <div className="grid min-h-[720px] gap-4 overflow-hidden rounded-[1.8rem] bg-[#1d1d1f] p-4 text-white sm:rounded-[2.5rem] sm:p-5 lg:grid-cols-[250px_minmax(0,1fr)_350px] lg:p-6 xl:grid-cols-[270px_minmax(0,1fr)_370px]">
            {/* Left menu */}
            <div className="order-2 grid content-start gap-2 lg:order-1">
              {showcaseItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group relative flex h-[82px] w-full items-center justify-between overflow-hidden rounded-[1.4rem] border px-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#0066cc]/50 bg-white/[0.1] text-white shadow-[inset_4px_0_0_#0066cc]"
                        : "border-transparent bg-white/[0.045] text-white/55 hover:border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0066cc]/10 to-transparent" />
                    )}

                    <span className="relative flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${
                          isActive
                            ? "bg-[#0066cc] text-[#000000]"
                            : "bg-white/[0.07] text-[#0066cc]"
                        }`}
                      >
                        <Icon size={20} />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate text-base font-semibold tracking-[-0.03em]">
                          {item.label}
                        </span>

                        <span
                          className={`mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.13em] ${
                            isActive ? "text-[#0066cc]" : "text-white/25"
                          }`}
                        >
                          {item.count}
                        </span>
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className={`relative shrink-0 -rotate-45 transition duration-300 ${
                        isActive
                          ? "text-[#0066cc]"
                          : "text-white/20 group-hover:text-white/70"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Center preview */}
            <div className="order-1 flex min-h-[420px] items-center justify-center lg:order-2 lg:min-h-[640px]">
              <div className="relative w-full max-w-[760px]">
                <div className="absolute -inset-8 rounded-full bg-[#0066cc]/15 blur-3xl" />

                <div className="relative rounded-[1.8rem] border border-white/15 bg-[#000000] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,.4)] sm:rounded-[2.2rem] sm:p-3">
                  <div className="flex h-11 items-center justify-between px-3">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0066cc]" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 sm:text-xs">
                      Interactive Preview
                    </span>
                  </div>

                  <div
                    key={active.key}
                    className="group relative aspect-[16/10] overflow-hidden rounded-[1.35rem] bg-black animate-[portfolioReveal_.45s_ease-out]"
                  >
                    <Image
                      src={active.image}
                      alt={`${active.title} portfolio preview`}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/5" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                      Live Project
                    </div>

                    <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:right-5 sm:top-5 sm:text-xs">
                      2026
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0066cc] sm:text-xs">
                          {active.count}
                        </p>

                        <p className="mt-1 text-lg font-semibold text-white sm:text-2xl">
                          {active.title}
                        </p>
                      </div>

                      <Link
                        href={active.href}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#000000] opacity-0 transition duration-300 group-hover:opacity-100"
                        aria-label={active.cta}
                      >
                        <ArrowRight size={17} className="-rotate-45" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mx-auto h-5 w-[72%] rounded-b-[2rem] bg-[#000000] shadow-[0_25px_50px_rgba(0,0,0,.25)]" />
              </div>
            </div>

            {/* Right information */}
            <div className="order-3 flex min-h-[620px] flex-col rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066cc] text-[#000000] shadow-[0_14px_40px_rgba(16,191,227,.18)]">
                  <ActiveIcon size={24} />
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(showcaseItems.length).padStart(2, "0")}
                </span>
              </div>

              <div
                key={active.key}
                className="flex flex-1 flex-col animate-[portfolioReveal_.45s_ease-out]"
              >


                <h3 className="mt-3 min-h-[104px] text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-[46px]">
                  {active.title}
                </h3>

                <p className="mt-3 min-h-[112px] text-base font-semibold leading-7 text-white/55">
                  {active.desc}
                </p>

                <div className="mt-3 min-h-[190px] space-y-3">
                  {active.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-3 border-b border-white/[0.07] pb-3 last:border-b-0"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#0066cc]"
                      />

                      <span className="text-sm font-semibold text-white/60">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={active.href}
                  className="group mt-auto flex items-center justify-between rounded-full bg-white px-6 py-4 font-semibold text-[#000000] transition hover:bg-[#0066cc]"
                >
                  {active.cta}

                  <ArrowRight
                    size={18}
                    className="-rotate-45 transition group-hover:rotate-0"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes portfolioReveal {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}