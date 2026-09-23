"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import ScaleIn from "@/components/animations/ScaleIn";

const heroStats = [
  { value: 120, suffix: "+", label: "Projects" },
  { value: 40, suffix: "+", label: "Businesses" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 6, suffix: "+", label: "Years" },
];

const services = [
  "Website Development",
  "Business Software",
  "SEO & Digital Growth",
];

function CountUp({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const start = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * eased));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f7] px-5 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-260px] top-0 h-[680px] w-[680px] rounded-full bg-[#0066cc]/20 blur-[160px]" />

        <div className="absolute bottom-[-300px] left-[-240px] h-[600px] w-[600px] rounded-full bg-[#1d1d1f]/10 blur-[160px]" />

        <div className="absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-white/80 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 xl:gap-20">
        {/* Left content */}
        <div className="relative z-10">
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#0066cc] shadow-[0_10px_35px_rgba(0,0,0,.06)] sm:text-sm">
              <Sparkles size={15} />
              Where great ideas become digital
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h1 className="mt-7 max-w-[900px] text-[48px] font-semibold leading-[0.89] tracking-[-0.065em] text-[#101010] sm:text-[60px] md:text-[76px] lg:text-[82px] xl:text-[94px]">
              We build digital systems
              <span className="block text-[#0066cc]">
                 that grow businesses.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-black/55 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              Being Digitals helps ambitious businesses grow through
              high-performance websites, custom software, SEO, paid advertising,
              branding and intelligent automation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] px-7 py-4 font-semibold text-white shadow-[0_20px_55px_rgba(16,35,31,.18)] transition hover:-translate-y-1 hover:bg-[#0066cc] hover:text-[#000000] sm:w-auto"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/showreel"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-6 py-4 font-semibold text-[#101010] shadow-[0_15px_45px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:border-[#0066cc] sm:w-auto"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0066cc]/40 text-[#0066cc]">
                  <Play size={14} fill="currentColor" />
                </span>

                Watch Showreel
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-x-5 sm:gap-y-3">
              {services.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/75 px-3 py-2 text-xs font-bold text-black/55 shadow-[0_8px_25px_rgba(0,0,0,.035)] sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm sm:shadow-none"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#0066cc]"
                  />

                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right visual */}
        <ScaleIn delay={0.18} className="relative w-full">
          <div className="absolute -inset-4 rounded-[2.8rem] bg-[#0066cc]/18 blur-3xl sm:-inset-6 sm:rounded-[3.4rem]" />

          <div className="relative overflow-hidden rounded-[2.1rem] border border-black/10 bg-white p-2.5 shadow-[0_45px_130px_rgba(0,0,0,.16)] sm:rounded-[2.8rem] sm:p-4">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#000000] sm:rounded-[2.25rem]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/portfolio/websites.webp"
                className="aspect-[4/3] min-h-[300px] w-full object-cover opacity-95 sm:aspect-[16/11] sm:min-h-[420px] lg:min-h-[500px] xl:min-h-[550px]"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/5" />

              <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 sm:text-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0066cc]" />
                Agency Showreel
              </div>

              
            </div>
          </div>

          {/* Stats */}
          <div className="relative mx-auto mt-4 grid w-full grid-cols-2 gap-2.5 rounded-[1.8rem] border border-black/10 bg-white p-3 shadow-[0_25px_90px_rgba(0,0,0,.12)] sm:-mt-10 sm:max-w-[92%] sm:gap-3 sm:rounded-[2.2rem] sm:p-4 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.2rem] bg-[#f5f5f7] px-2 py-4 text-center sm:rounded-[1.4rem] sm:p-4"
              >
                <p className="text-[27px] font-semibold leading-none tracking-[-0.055em] text-[#1d1d1f] sm:text-3xl lg:text-[34px]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-black/40 sm:text-[10px] lg:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScaleIn>
      </div>

      <Reveal delay={0.5}>
        <div className="mx-auto mt-12 hidden max-w-7xl items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/30 md:flex">
          <span>Scroll</span>

          <span className="relative h-10 w-6 rounded-full border border-black/20">
            <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0066cc] animate-[heroScroll_1.4s_ease-in-out_infinite]" />
          </span>
        </div>
      </Reveal>
    </section>
  );
}