"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  MessageCircle,
  Play,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stats = [
  ["2.1M", "Monthly Reach"],
  ["14.8%", "Engagement"],
  ["12K", "Followers Added"],
  ["842", "Qualified Leads"],
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000000] px-5 pb-28 pt-12 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-220px] top-[-180px] h-[760px] w-[760px] rounded-full bg-[#0066cc]/20 blur-[160px]" />

        <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-white/5 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/55">
          <Sparkles size={14} className="text-[#0066cc]" />
          <span>/ Grow / Social Media Marketing</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Content */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0066cc]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              Flagship Growth Service
            </p>

            <h1 className="mt-6 max-w-3xl text-[48px] font-semibold leading-[0.88] tracking-[-0.07em] sm:text-[64px] md:text-[78px] lg:text-[82px]">
              Turn content
              <span className="block text-[#0066cc]">
                into Leads.
              </span>
              <span className="block">Not just followers.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/55 md:text-xl">
              Strategy, content, reels, design, community and paid amplification —
              managed as one connected growth system.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] px-7 py-4 font-semibold text-[#000000] transition hover:-translate-y-1"
              >
                Start Social Media Growth

                <ArrowRight
                  size={18}
                  className="-rotate-45 transition group-hover:rotate-0"
                />
              </a>

            
            </div>

            {/* Services */}
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white/45">
              {[
                "Content Strategy",
                "Reels",
                "Creative Design",
                "Community Growth",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[670px]">
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/14 blur-[110px]" />

            {/* Phone */}
            <div className="absolute left-1/2 top-0 h-[620px] w-[330px] -translate-x-1/2 rounded-[3rem] border border-white/10 bg-white p-3 shadow-[0_45px_140px_rgba(0,0,0,.38)]">
              <div className="relative h-full overflow-hidden rounded-[2.45rem] bg-black">
                <Image
                  src="/images/services/social-media/hero-reel.png"
                  alt="Social media reel preview"
                  fill
                  priority
                  sizes="330px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                <div className="absolute left-5 top-5 rounded-full bg-black/35 px-4 py-2 text-xs font-semibold backdrop-blur">
                  Being Digitals
                </div>

                {/* Reel Icons */}
                <div className="absolute bottom-24 right-4 grid gap-4">
                  {[Heart, MessageCircle, Share2].map((Icon, index) => (
                    <span
                      key={index}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur"
                    >
                      <Icon size={20} />
                    </span>
                  ))}
                </div>
                
              </div>
            </div>

            {/* Performance Card */}
            <div className="absolute left-0 top-24 hidden w-[245px] rounded-[2rem] border border-white/10 bg-white p-4 text-[#101010] shadow-[0_30px_100px_rgba(0,0,0,.24)] md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                Content Performance
              </p>

              <p className="mt-3 text-4xl font-semibold tracking-[-0.06em]">
                +286%
              </p>

              <p className="mt-1 text-sm font-semibold text-black/45">
                Engagement growth
              </p>

              <div className="mt-5 flex h-20 items-end gap-2">
                {[35, 44, 52, 48, 67, 74, 88, 100].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-full bg-[#0066cc]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Reach Card */}
            <div className="absolute right-0 top-40 hidden w-[220px] rounded-[2rem] border border-white/10 bg-[#0066cc] p-5 text-[#000000] shadow-[0_30px_100px_rgba(0,0,0,.24)] lg:block">
              <TrendingUp size={22} />

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em]">
                Reach
              </p>

              <p className="mt-2 text-4xl font-semibold tracking-[-0.06em]">
                2.1M
              </p>

              <p className="mt-1 text-sm font-semibold">This month</p>
            </div>

            {/* Stats */}
            <div className="absolute bottom-0 left-8 right-8 grid grid-cols-2 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur md:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.3rem] bg-white p-4 text-center text-[#101010]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em]">
                    {value}
                  </p>

                  <p className="mt-1 text-xs font-bold text-black/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
