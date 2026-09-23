"use client";

import { useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const floatingLabels = [
  { label: "Website", className: "left-5 top-8 md:left-8 md:top-10" },
  { label: "SEO", className: "right-5 top-16 md:right-12 md:top-14" },
  // { label: "Software", className: "bottom-8 left-7 md:bottom-10 md:left-12" },
  { label: "Branding", className: "bottom-16 right-5 md:bottom-12 md:right-12" },
];

export default function Showreel() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="showreel"
      className="relative overflow-hidden bg-[#1d1d1f] px-5 py-24 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-[-180px] h-[560px] w-[560px] rounded-full bg-[#0066cc]/18 blur-[150px]" />
        <div className="absolute bottom-[-260px] right-[-180px] h-[620px] w-[620px] rounded-full bg-white/10 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/8 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
            <Sparkles size={15} />
            Agency Showreel
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-none tracking-[-0.055em] md:text-7xl">
            See our digital work in motion.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
            A quick look at the type of websites, campaigns, software systems and
            creative assets we build for modern businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-6 py-4 font-semibold text-[#000000] transition hover:-translate-y-1"
            >
              Explore Work
              <ArrowRight size={18} className="-rotate-45 transition group-hover:rotate-0" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#000000]"
            >
              Start Project
            </a>
          </div>
        </div>

        <div
          className="group relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-[#0066cc]/20 blur-3xl transition duration-500 group-hover:bg-[#0066cc]/30" />

          <div className="relative overflow-hidden rounded-[2.7rem] border border-white/12 bg-white/[0.08] p-3 shadow-[0_45px_140px_rgba(0,0,0,.32)] backdrop-blur md:p-4">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="aspect-video w-full object-cover opacity-88 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />

              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-sm" />
              </div>

              {floatingLabels.map((item) => (
                <span
                  key={item.label}
                  className={`pointer-events-none absolute ${item.className} rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur transition duration-500 group-hover:-translate-y-1 group-hover:border-[#0066cc]/45 group-hover:text-white`}
                >
                  {item.label}
                </span>
              ))}

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
                <a
                  href="/videos/hero.mp4"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#0066cc] shadow-[0_20px_80px_rgba(0,0,0,.32)] transition duration-300 hover:scale-110 md:h-24 md:w-24"
                  aria-label="Watch showreel"
                >
                  <Play
                    size={isHovering ? 38 : 32}
                    fill="currentColor"
                    className="ml-1 transition-all duration-300"
                  />
                </a>

                <span className="rounded-full bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
                  Watch Showreel
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">

                <div className="flex gap-2">
                  {["Plan", "Build", "Grow"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 rounded-3xl bg-white px-6 py-4 text-[#000000] shadow-[0_20px_70px_rgba(0,0,0,.22)]">
            <p className="text-sm font-bold text-black/40">Creative Direction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
