"use client";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Target, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f5f5f7] px-5 pb-24 pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-240px] top-[-180px] h-[720px] w-[720px] rounded-full bg-[#0066cc]/16 blur-[160px]" />
        <div className="absolute bottom-[-260px] left-[-260px] h-[620px] w-[620px] rounded-full bg-[#1d1d1f]/6 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/45 shadow-sm">
          <Sparkles size={14} className="text-[#0066cc]" />
          <span>/ Studio / About Being Digitals</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0066cc]">
              Independent Digital Studio
            </p>

            <h1 className="mt-7 max-w-5xl text-[58px] font-semibold leading-[0.86] tracking-[-0.08em] md:text-[94px] lg:text-[106px]">
              We don&apos;t just build websites.
              <span className="block text-[#0066cc]">We build digital companies.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/55 md:text-xl">
              Being Digitals brings design, development, marketing and automation
              together to help ambitious businesses look better, operate smarter
              and grow with clarity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_22px_70px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000]">
                Start a Project
                <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
              </a>
              <a href="#story" className="rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#101010] shadow-sm transition hover:-translate-y-1 hover:border-[#0066cc]">
                Explore Our Story
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-black/45">
              {["Strategy-led", "Custom-built", "Growth-focused", "AI-ready"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0066cc]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[650px]">
            <div className="absolute left-0 top-8 h-[470px] w-[62%] overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-[0_35px_120px_rgba(0,0,0,.12)]">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-black">
                <Image src="/images/portfolio/branding-social.png" alt="Being Digitals studio" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute right-0 top-32 h-[400px] w-[45%] overflow-hidden rounded-[2.3rem] border border-black/10 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,.1)]">
              <div className="relative h-full overflow-hidden rounded-[1.8rem] bg-black">
                <Image src="/images/services/branding/project-mehran.webp" alt="Being Digitals creative workspace" fill className="object-cover" />
              </div>
            </div>

            <div className="absolute bottom-0 left-[10%] grid w-[75%] gap-3 rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_25px_90px_rgba(0,0,0,.12)] sm:grid-cols-3">
              {[["120+", "Projects"], ["40+", "Businesses"], ["98%", "Client Satisfaction"]].map(([value, label]) => (
                <div key={label} className="rounded-[1.3rem] bg-[#f5f5f7] p-4 text-center">
                  <p className="text-3xl font-semibold tracking-[-0.06em]">{value}</p>
                  <p className="mt-1 text-xs font-bold text-black/40">{label}</p>
                </div>
              ))}
            </div>

            <div className="absolute -right-4 top-8 hidden rounded-[1.5rem] border border-black/10 bg-[#0066cc] p-5 text-[#000000] shadow-[0_25px_80px_rgba(0,0,0,.12)] xl:block">
              <TrendingUp size={21} />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em]">Built for growth</p>
            </div>

            <div className="absolute -left-4 top-[48%] hidden rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,.12)] md:block">
              <Target size={20} className="text-[#0066cc]" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Strategy first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
