"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Browser ko initial empty state render karne do,
    // phir animation start hogi.
    const startFrame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setStarted(true);
      });
    });

    const finishTimer = window.setTimeout(() => {
      setHide(true);
    }, 1800);

    const removeTimer = window.setTimeout(() => {
      setLoading(false);
    }, 2350);

    return () => {
      cancelAnimationFrame(startFrame);
      window.clearTimeout(finishTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      role="status"
      aria-label="Loading Being Digitals"
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f5f5f7] transition-all duration-500 ease-out ${
        hide
          ? "pointer-events-none scale-[1.02] opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#0066cc]/18 blur-[130px]" />

        <div className="absolute bottom-[-220px] left-[-180px] h-[540px] w-[540px] rounded-full bg-[#1d1d1f]/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(16,35,31,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(16,35,31,.5)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0066cc]/10" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/[0.05]" />
      </div>

      {/* Loader card */}
      <div className="relative flex w-full max-w-md flex-col items-center px-5 text-center">
        <div className="relative w-full overflow-hidden rounded-[2.2rem] border border-black/[0.08] bg-white/85 px-6 py-8 shadow-[0_35px_120px_rgba(16,35,31,.12)] backdrop-blur-xl sm:px-10 sm:py-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0066cc]/70 to-transparent" />

          {/* Animated ring */}
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-black/[0.06]" />

            <div className="bd-loader-orbit absolute inset-0 rounded-full border-2 border-transparent border-r-[#0066cc]/30 border-t-[#0066cc]" />

            <div className="absolute inset-[10px] rounded-full bg-[#f5f5f7] shadow-inner" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_15px_45px_rgba(0,0,0,.08)]">
              <span className="bd-loader-dot h-2.5 w-2.5 rounded-full bg-[#0066cc]" />
            </div>
          </div>

          {/* Logo */}
          <div
            className={`mt-7 transition-all duration-700 ease-out ${
              started
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-95 opacity-0"
            }`}
          >
            <Image
              src="/images/being-digitals-logo.png"
              alt="Being Digitals"
              width={260}
              height={90}
              priority
              className="mx-auto h-14 w-auto object-contain sm:h-16"
            />
          </div>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0066cc] sm:text-xs">
            Digital experiences in motion
          </p>

          <p className="mx-auto mt-3 max-w-xs text-sm font-semibold leading-6 text-black/40">
            Preparing a faster, smarter and more polished experience.
          </p>

          {/* Animated progress bar */}
          <div className="mx-auto mt-7 h-[6px] w-full max-w-[290px] overflow-hidden rounded-full bg-black/[0.07]">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-[#0066cc] to-[#0066cc] transition-[width] duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                started ? "w-full" : "w-0"
              }`}
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/30">
            <span className="bd-loader-dot h-1.5 w-1.5 rounded-full bg-[#0066cc]" />
            Loading Being Digitals
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bd-loader-orbit {
          animation: bdLoaderOrbit 1.4s linear infinite;
          will-change: transform;
        }

        .bd-loader-dot {
          animation: bdLoaderPulse 0.9s ease-in-out infinite;
        }

        @keyframes bdLoaderOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bdLoaderPulse {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.75);
          }

          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bd-loader-orbit,
          .bd-loader-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}