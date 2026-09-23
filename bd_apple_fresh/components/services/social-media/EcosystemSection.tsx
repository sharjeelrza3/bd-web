"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import {
  MessageCircle,
  PlayCircle,
  Send,
  Sparkles,
} from "lucide-react";

const platforms = [
  {
    label: "Instagram",
    sublabel: "Reels & visual storytelling",
    icon: FaInstagram,
    position: "left-[4%] top-[10%] lg:left-[8%] lg:top-[12%]",
    delay: "0s",
  },
  {
    label: "TikTok",
    sublabel: "Short-form discovery",
    icon: FaTiktok,
    position: "right-[4%] top-[8%] lg:right-[8%] lg:top-[12%]",
    delay: "-0.8s",
  },
  {
    label: "LinkedIn",
    sublabel: "Authority & B2B growth",
    icon: FaLinkedinIn,
    position: "left-[0%] top-[42%] lg:left-[2%] lg:top-[44%]",
    delay: "-1.6s",
  },
  {
    label: "Facebook",
    sublabel: "Community & campaigns",
    icon: FaFacebookF,
    position: "right-[0%] top-[40%] lg:right-[2%] lg:top-[44%]",
    delay: "-2.4s",
  },
  {
    label: "YouTube",
    sublabel: "Long-form trust building",
    icon: FaYoutube,
    position: "left-[10%] bottom-[6%] lg:left-[13%] lg:bottom-[8%]",
    delay: "-3.2s",
  },
  {
    label: "Community",
    sublabel: "Conversations that convert",
    icon: MessageCircle,
    position: "right-[10%] bottom-[6%] lg:right-[13%] lg:bottom-[8%]",
    delay: "-4s",
  },
];

const channels = [
  { label: "Reels", icon: PlayCircle },
  { label: "Stories", icon: Send },
  { label: "Community", icon: MessageCircle },
];

export default function EcosystemSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f7] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[58%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066cc]/10 blur-[140px] sm:h-[760px] sm:w-[760px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_center,rgba(16,35,31,.75)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/75 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
            Social Media Ecosystem
          </p>

          <h2 className="mt-4 text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-[#101010] sm:text-5xl md:text-7xl">
            One brand. Multiple platforms.
            <span className="block text-[#0066cc]">
              One connected strategy.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-7 text-black/50 sm:text-lg sm:leading-8">
            Every platform plays a different role, but all content works around
            one consistent brand system.
          </p>
        </div>

        <div className="relative mx-auto mt-14 hidden h-[620px] max-w-[980px] md:block">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 980 620"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0066cc" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#0066cc" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1d1d1f" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <path d="M490 310 L165 120" stroke="url(#lineGlow)" strokeWidth="1.5" />
            <path d="M490 310 L815 115" stroke="url(#lineGlow)" strokeWidth="1.5" />
            <path d="M490 310 L105 305" stroke="url(#lineGlow)" strokeWidth="1.5" />
            <path d="M490 310 L875 305" stroke="url(#lineGlow)" strokeWidth="1.5" />
            <path d="M490 310 L205 520" stroke="url(#lineGlow)" strokeWidth="1.5" />
            <path d="M490 310 L775 520" stroke="url(#lineGlow)" strokeWidth="1.5" />
          </svg>

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0066cc]/15 bg-white/40 shadow-[0_30px_120px_rgba(16,191,227,.08)] backdrop-blur-[2px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0066cc]/25" />

          {platforms.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`absolute ${item.position} w-[230px] animate-[ecosystemFloat_6s_ease-in-out_infinite]`}
                style={{ animationDelay: item.delay }}
              >
                <div className="group rounded-[1.8rem] border border-black/10 bg-white/95 p-4 shadow-[0_20px_70px_rgba(16,35,31,.1)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#0066cc]/35 hover:shadow-[0_28px_90px_rgba(16,191,227,.16)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0066cc]/10 text-[#0066cc] transition duration-300 group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                      <Icon className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-[#1d1d1f]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-black/40">
                        {item.sublabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#1d1d1f] text-center text-white shadow-[0_35px_120px_rgba(16,35,31,.28)]">
            <span className="absolute inset-[-14px] animate-[pulseRing_3.8s_ease-in-out_infinite] rounded-full border border-[#0066cc]/20" />
            <span className="absolute inset-[-28px] animate-[pulseRing_3.8s_ease-in-out_infinite_1s] rounded-full border border-[#0066cc]/10" />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <Sparkles size={26} className="text-[#0066cc]" />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Core
            </p>

            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
              Your Brand
            </h3>

            <p className="mt-2 max-w-[150px] text-xs font-semibold leading-5 text-white/45">
              One identity powering every channel.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-md md:hidden">
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-4 shadow-[0_24px_80px_rgba(16,35,31,.1)] backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#1d1d1f] px-5 py-7 text-center text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,191,227,.18),transparent_40%)]" />

              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <Sparkles size={23} className="text-[#0066cc]" />
              </div>

              <p className="relative mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Core
              </p>

              <h3 className="relative mt-1 text-2xl font-semibold tracking-[-0.05em]">
                Your Brand
              </h3>

              <p className="relative mx-auto mt-2 max-w-[240px] text-xs font-semibold leading-5 text-white/45">
                One identity powering every platform, campaign and content format.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {platforms.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-black/10 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0066cc]/10 text-[#0066cc]">
                      <Icon className="text-xl" />
                    </div>

                    <p className="mt-3 text-sm font-semibold text-[#1d1d1f]">
                      {item.label}
                    </p>

                    <p className="mt-1 text-[11px] font-semibold leading-5 text-black/40">
                      {item.sublabel}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {channels.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex min-h-[74px] flex-col items-center justify-center rounded-[1.2rem] border border-black/10 bg-[#f5f5f7] px-2 text-center"
                  >
                    <Icon className="text-lg text-[#0066cc]" />
                    <p className="mt-2 text-[10px] font-semibold text-[#1d1d1f]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ecosystemFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulseRing {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.03);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-["] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}