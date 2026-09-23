"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Play,
  Sparkles,
  SwatchBook,
  Type,
  Shapes,
} from "lucide-react";

const benefits = [
  "Brand Strategy",
  "Logo Systems",
  "Social Design",
  "Packaging",
];

const brandAssets = {
  board: "/images/services/branding/brand-g.jpg",
  packaging: "/images/services/branding/packaging.png",
  social: "/images/services/branding/socialmediaposts.png",
  identity: "/images/services/branding/logo.jpg",
  visual: "/images/services/branding/visual.jpg",
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f5f5f7] px-5 pb-20 pt-10 text-[#101010] sm:px-6 md:pb-24 md:pt-12 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-280px] h-[760px] w-[1120px] -translate-x-1/2 rounded-full bg-[#0066cc]/14 blur-[160px]" />
        <div className="absolute bottom-[-280px] right-[-260px] h-[680px] w-[680px] rounded-full bg-[#1d1d1f]/8 blur-[165px]" />
        <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-[0_10px_35px_rgba(0,0,0,.05)]">
          <Palette size={14} className="text-[#0066cc]" />
          <span>/ Services / Branding &amp; Design</span>
        </div>

        {/* Copy */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-[#e7fbff] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0066cc] sm:text-xs">
            <Sparkles size={14} />
            Strategic Branding &amp; Creative Design
          </p>

          <h1 className="mt-6 text-[48px] font-semibold leading-[0.9] tracking-[-0.07em] sm:text-[62px] md:text-[88px] lg:text-[104px] xl:text-[112px]">
            Brands that look distinct,
            <span className="block text-[#0066cc]">feel premium</span>
            and stay memorable.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-black/58 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            We create logos, visual systems, social media identities and brand assets
            that give businesses a clear, consistent and professional presence.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000] sm:w-auto"
            >
              Start Branding Project
              <ArrowRight
                size={18}
                className="-rotate-45 transition duration-300 group-hover:rotate-0"
              />
            </a>

            <a
              href="#branding-work"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold shadow-[0_15px_55px_rgba(0,0,0,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0066cc] sm:w-auto"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0066cc]/35 text-[#0066cc]">
                <Play size={14} fill="currentColor" />
              </span>
              View Branding Work
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-xs font-semibold text-black/48 sm:flex sm:flex-wrap sm:justify-center sm:gap-5 sm:text-sm">
            {benefits.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-[#0066cc]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Behance-style branding workspace */}
        <div
          id="branding-work"
          className="relative mx-auto mt-14 max-w-[1180px] md:mt-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-[48%] h-[540px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#0066cc]/12 blur-[95px]" />
          <div className="pointer-events-none absolute left-1/2 top-[52%] h-[430px] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#0066cc]/18" />

          {/* Desktop */}
          <div className="relative hidden min-h-[690px] lg:block">
            {/* Main design board */}
            <div className="absolute left-1/2 top-0 z-20 w-[660px] -translate-x-1/2">
              <div className="rounded-[2rem] border border-black/10 bg-[#151515] p-3 shadow-[0_50px_150px_rgba(0,0,0,.22)]">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="ml-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Brand Identity Workspace
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-white">
                  <Image
                    src={brandAssets.board}
                    alt="Brand identity workspace"
                    fill
                    priority
                    sizes="660px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
                </div>
              </div>
            </div>

            {/* Packaging mockup */}
            <div className="absolute bottom-8 left-[2%] z-30 w-[260px] -rotate-[8deg] transition duration-500 hover:z-50 hover:-translate-y-4 hover:rotate-0">
              <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_35px_100px_rgba(0,0,0,.16)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#1d1d1f]">
                  <Image
                    src={brandAssets.packaging}
                    alt="Packaging design"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                    Packaging
                  </p>
                </div>
              </div>
            </div>

            {/* Social design card */}
            <div className="absolute bottom-0 right-[3%] z-30 w-[280px] rotate-[7deg] transition duration-500 hover:z-50 hover:-translate-y-4 hover:rotate-0">
              <div className="rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_35px_100px_rgba(0,0,0,.16)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#1d1d1f]">
                  <Image
                    src={brandAssets.social}
                    alt="Social media branding"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                    Social Design
                  </p>
                </div>
              </div>
            </div>

            {/* Logo sheet */}
            <div className="absolute left-[13%] top-[145px] z-10 w-[215px] -rotate-[4deg] rounded-[1.7rem] border border-black/10 bg-white p-3 shadow-[0_26px_80px_rgba(0,0,0,.12)] transition duration-500 hover:z-50 hover:-translate-y-3 hover:rotate-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white">
                <Image
                  src={brandAssets.identity}
                  alt="Logo identity system"
                  fill
                  sizes="215px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Shapes size={16} className="text-[#0066cc]" />
                <p className="text-xs font-semibold text-[#1d1d1f]">Logo System</p>
              </div>
            </div>

            {/* Visual system card */}
            <div className="absolute right-[14%] top-[125px] z-10 w-[220px] rotate-[4deg] rounded-[1.7rem] border border-black/10 bg-white p-3 shadow-[0_26px_80px_rgba(0,0,0,.12)] transition duration-500 hover:z-50 hover:-translate-y-3 hover:rotate-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white">
                <Image
                  src={brandAssets.visual}
                  alt="Visual brand system"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <SwatchBook size={16} className="text-[#0066cc]" />
                <p className="text-xs font-semibold text-[#1d1d1f]">Visual System</p>
              </div>
            </div>

            {/* Color palette */}
            <div className="absolute bottom-[118px] left-1/2 z-40 w-[310px] -translate-x-1/2 rounded-[1.7rem] border border-black/10 bg-white/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,.11)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0066cc]/12 text-[#0066cc]">
                    <Palette size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      Cohesive Visual Language
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-black/40">
                      Logo, type, color and application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-5 gap-2">
                {["#1d1d1f", "#0066cc", "#f5f5f7", "#1d1d1f", "#d8f7fb"].map(
                  (color) => (
                    <span
                      key={color}
                      className="h-8 rounded-xl border border-black/10"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Typography chip */}
            <div className="absolute bottom-[82px] right-[28%] z-40 flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 shadow-[0_18px_55px_rgba(0,0,0,.1)]">
              <Type size={17} className="text-[#0066cc]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">
                Typography System
              </span>
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-2xl rounded-[2rem] border border-black/10 bg-white/80 p-4 shadow-[0_28px_90px_rgba(0,0,0,.1)] backdrop-blur sm:p-6">
              {/* Main board */}
              <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#151515] p-2.5">
                <div className="mb-2 flex items-center gap-1.5 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-white">
                  <Image
                    src={brandAssets.board}
                    alt="Brand identity workspace"
                    fill
                    priority
                    sizes="92vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Feature cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { image: brandAssets.packaging, label: "Packaging" },
                  { image: brandAssets.social, label: "Social Design" },
                  { image: brandAssets.identity, label: "Logo System" },
                  { image: brandAssets.visual, label: "Visual System" },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="overflow-hidden rounded-[1.45rem] border border-black/10 bg-white p-2.5 shadow-sm"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[#1d1d1f]">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="46vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <p className="absolute bottom-3 left-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                        {item.label}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Brand system info */}
              <div className="mt-4 rounded-[1.4rem] border border-black/10 bg-[#f5f5f7] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0066cc]/12 text-[#0066cc]">
                    <Palette size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      One complete brand system
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-black/40">
                      Strategy, identity, packaging and social design working together.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {["#1d1d1f", "#0066cc", "#f5f5f7", "#1d1d1f", "#d8f7fb"].map(
                    (color) => (
                      <span
                        key={color}
                        className="h-8 rounded-xl border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}