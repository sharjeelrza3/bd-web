"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Home,
  MonitorSmartphone,
  Play,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

type HeroCard = {
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
};

type ServiceHeroProps = {
  eyebrow: string;
  breadcrumb: string;
  titleTop: string;
  titleAccent: string;
  titleBottom: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  benefits: string[];
  cards: HeroCard[];
};

const defaultCards: HeroCard[] = [
  {
    title: "Jewelry Brand",
    subtitle: "Premium E-Commerce",
    image: "/images/services/projects/e-commerce.webp",
    tag: "Luxury",
  },
  {
    title: "Food Delivery",
    subtitle: "High Conversions",
    image: "/images/portfolio/brandeals-wm.webp",
    tag: "Conversion",
  },
  {
    title: "Fashion Store",
    subtitle: "Modern Shopping Experience",
    image: "/images/services/projects/restaurant-website.webp",
    tag: "E-Commerce",
  },
  {
    title: "Fintech Platform",
    subtitle: "Clean Digital Product",
    image: "/images/services/projects/business-website.webp",
    tag: "Product",
  },
  {
    title: "Landscaping",
    subtitle: "Professional Service Website",
    image: "/images/services/projects/e-commerce.webp",
    tag: "Service",
  },
];

const projectStats = [
  {
    value: "120+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
    iconClass: "bg-[#e7f4ff] text-[#159ec2]",
  },
  {
    value: "40+",
    label: "Happy Businesses",
    icon: Users,
    iconClass: "bg-[#edf9ec] text-[#37a73d]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: BadgeCheck,
    iconClass: "bg-[#f3ecff] text-[#7c3aed]",
  },
  {
    value: "5+",
    label: "Years Experience",
    icon: Rocket,
    iconClass: "bg-[#fff1e8] text-[#f97316]",
  },
];

export default function ServiceHero({
  eyebrow,
  breadcrumb,
  titleTop,
  titleAccent,
  titleBottom,
  description,
  primaryCta,
  secondaryCta,
  benefits,
  cards = defaultCards,
}: ServiceHeroProps) {
  const safeCards = cards?.length ? cards : defaultCards;
  const featured = safeCards[0] ?? defaultCards[0];
  const phoneCard = safeCards[1] ?? safeCards[0] ?? defaultCards[1];
  const tabletCard = safeCards[2] ?? safeCards[0] ?? defaultCards[2];

  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f5f5f7] px-5 pb-20 pt-8 text-[#101010] sm:px-6 md:pb-24 md:pt-10 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[780px] w-[1180px] -translate-x-1/2 rounded-full bg-[#0066cc]/12 blur-[175px]" />
        <div className="absolute left-[-260px] top-[410px] h-[600px] w-[600px] rounded-full bg-[#0066cc]/10 blur-[155px]" />
        <div className="absolute right-[-260px] top-[390px] h-[620px] w-[620px] rounded-full bg-[#0066cc]/10 blur-[155px]" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(0,0,0,.38)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.38)_1px,transparent_1px)] [background-size:54px_54px]" />
      </div>

      <div className="mx-auto max-w-[1380px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-[0_10px_35px_rgba(0,0,0,.05)]">
            <Home size={14} className="text-[#0066cc]" />
            <span>{breadcrumb}</span>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/35 shadow-sm md:inline-flex">
            <span className="h-2 w-2 rounded-full bg-[#0066cc]" />
            Explore Website Solutions
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/25 bg-[#e7fbff] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0066cc] sm:text-xs">
            <Sparkles size={14} />
            {eyebrow || "Premium Website Development"}
          </p>

          <h1 className="mx-auto mt-6 max-w-6xl text-[46px] font-semibold leading-[0.9] tracking-[-0.07em] sm:text-[62px] md:text-[82px] lg:text-[96px] xl:text-[106px]">
            {titleTop || "Websites that"}{" "}
            <span className="relative inline-block text-[#0066cc]">
              {titleAccent || "impress."}
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#0066cc]/16" />
            </span>{" "}
            {titleBottom || "Websites that convert."}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-black/55 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            {description ||
              "We build fast, modern and SEO-ready websites designed to turn visitors into real business inquiries."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000] sm:w-auto"
            >
              {primaryCta || "Get Your Website"}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0066cc]">
                <ArrowRight size={16} className="-rotate-45 transition group-hover:rotate-0" />
              </span>
            </a>

            <a
              href="#website-work"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#101010] shadow-[0_15px_55px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:border-[#0066cc] sm:w-auto"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8faff] text-[#0066cc]">
                <Play size={14} fill="currentColor" />
              </span>
              {secondaryCta || "View Our Work"}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6">
            {(benefits?.length
              ? benefits
              : ["Modern UI/UX", "SEO Optimized", "Mobile First", "Lightning Fast"]
            ).map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-xs font-semibold text-black/55 sm:text-sm"
              >
                <CheckCircle2 size={16} className="text-[#0066cc]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div id="website-work" className="relative mx-auto mt-14 max-w-[1180px] md:mt-16">
          <div className="pointer-events-none absolute left-1/2 top-[50%] h-[520px] w-[960px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#0066cc]/25" />
          <div className="pointer-events-none absolute left-1/2 top-[54%] h-[430px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#0066cc]/15" />
          <div className="pointer-events-none absolute left-1/2 top-[58%] h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#0066cc]/12 blur-[70px]" />

          <div className="relative hidden min-h-[700px] lg:block">
            <div className="absolute left-1/2 top-0 z-20 w-[640px] -translate-x-1/2 xl:w-[700px]">
              <div className="rounded-[1.4rem] border-[11px] border-[#111] bg-[#111] shadow-[0_45px_130px_rgba(0,0,0,.22)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[0.45rem] bg-white">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width:1280px) 700px, 640px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="mx-auto h-20 w-28 bg-gradient-to-b from-[#d8d8d6] to-[#b7b7b5]" />
              <div className="mx-auto h-4 w-56 rounded-full bg-[#c9c9c7] shadow-[0_16px_45px_rgba(0,0,0,.14)]" />
            </div>

            <div className="absolute bottom-8 left-[2%] z-30 w-[200px] -rotate-[7deg] transition duration-500 hover:-translate-y-3 hover:rotate-0">
              <div className="rounded-[2.5rem] border-[10px] border-[#111] bg-[#111] p-1 shadow-[0_36px_90px_rgba(0,0,0,.2)]">
                <div className="relative aspect-[9/18] overflow-hidden rounded-[1.7rem] bg-white">
                  <Image
                    src={phoneCard.image}
                    alt={phoneCard.title}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-[1%] z-30 w-[315px] rotate-[6deg] transition duration-500 hover:-translate-y-3 hover:rotate-0">
              <div className="rounded-[1.8rem] border-[10px] border-[#111] bg-[#111] p-1 shadow-[0_34px_88px_rgba(0,0,0,.18)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-white">
                  <Image
                    src={tabletCard.image}
                    alt={tabletCard.title}
                    fill
                    sizes="315px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[10px] left-1/2 z-40 w-[390px] -translate-x-1/2 rounded-[1.5rem] border border-black/10 bg-white/95 px-5 py-4 shadow-[0_22px_70px_rgba(0,0,0,.1)] backdrop-blur">
              <div className="flex items-center justify-center gap-3 text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8faff] text-[#0066cc]">
                  <MonitorSmartphone size={20} />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1d1d1f]">Designed for every screen</p>
                  <p className="mt-1 text-xs font-semibold text-black/40">
                    Desktop, tablet and mobile—all from one polished system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white/80 p-3 shadow-[0_28px_90px_rgba(0,0,0,.1)] backdrop-blur sm:p-5">
              <div className="rounded-[1.45rem] border-[7px] border-[#111] bg-[#111] p-1 shadow-[0_22px_65px_rgba(0,0,0,.16)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[0.8rem] bg-white">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="92vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[0.72fr_1.28fr] items-end gap-3 sm:gap-4">
                <div className="min-w-0 rounded-[1.7rem] border-[6px] border-[#111] bg-[#111] p-1 shadow-[0_18px_48px_rgba(0,0,0,.14)]">
                  <div className="relative aspect-[9/18] overflow-hidden rounded-[1.05rem] bg-white">
                    <Image
                      src={phoneCard.image}
                      alt={phoneCard.title}
                      fill
                      sizes="34vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="min-w-0 rounded-[1.45rem] border-[6px] border-[#111] bg-[#111] p-1 shadow-[0_18px_48px_rgba(0,0,0,.14)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem] bg-white">
                    <Image
                      src={tabletCard.image}
                      alt={tabletCard.title}
                      fill
                      sizes="58vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.35rem] border border-black/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8faff] text-[#0066cc]">
                    <MonitorSmartphone size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1d1d1f]">Designed for every screen</p>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-black/40">
                      Desktop, tablet and mobile—all from one polished system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-2 gap-3 rounded-[2rem] border border-black/10 bg-white/90 p-3 shadow-[0_24px_80px_rgba(0,0,0,.08)] backdrop-blur sm:grid-cols-4 sm:p-4">
          {projectStats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex min-h-[118px] items-center gap-3 rounded-[1.35rem] bg-white px-4 py-4 sm:min-h-[126px]">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconClass}`}>
                  <Icon size={21} />
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.06em] text-[#1d1d1f] sm:text-4xl">{item.value}</p>
                  <p className="mt-1 text-[11px] font-semibold leading-5 text-black/40 sm:text-xs">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-[1180px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0066cc]">Our Work Speaks</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#1d1d1f] sm:text-4xl">Recent Website Projects</h2>
            </div>

            <a
              href="#portfolio"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:-translate-y-1 hover:border-[#0066cc]"
            >
              View All Projects
              <ArrowRight size={17} className="-rotate-45 transition group-hover:rotate-0" />
            </a>
          </div>

          <div className="-mx-5 mt-6 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 lg:grid lg:grid-cols-5">
              {safeCards.slice(0, 5).map((card) => (
                <article
                  key={card.title}
                  className="min-w-[76%] rounded-[1.35rem] border border-black/10 bg-white p-3 shadow-[0_16px_55px_rgba(0,0,0,.06)] sm:min-w-[44%] lg:min-w-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[0.95rem] bg-white">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width:640px) 76vw, (max-width:1024px) 44vw, 220px"
                      className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#1d1d1f]">{card.title}</p>
                  <p className="mt-1 text-[11px] font-semibold text-black/40">{card.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}