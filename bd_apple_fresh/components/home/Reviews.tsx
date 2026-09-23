"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  Quote,
  Star,
  X,
} from "lucide-react";

import { reviews, videoReviews } from "@/data/home";

const reviewStats = [
  { value: "5.0", label: "Average Rating" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "120+", label: "Projects Delivered" },
];

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isReviewHovered, setIsReviewHovered] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const currentReview = reviews[reviewIndex];
  const activeVideo =
    activeVideoIndex !== null ? videoReviews[activeVideoIndex] : null;

  useEffect(() => {
    if (!reviews.length || isReviewHovered) return;

    const reviewTimer = window.setInterval(() => {
      setReviewIndex((previousIndex) =>
        (previousIndex + 1) % reviews.length
      );
    }, 6000);

    return () => window.clearInterval(reviewTimer);
  }, [isReviewHovered]);

  useEffect(() => {
    if (activeVideoIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideoIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoIndex]);

  const previousReview = () => {
    setReviewIndex((previousIndex) =>
      previousIndex === 0 ? reviews.length - 1 : previousIndex - 1
    );
  };

  const nextReview = () => {
    setReviewIndex((previousIndex) =>
      (previousIndex + 1) % reviews.length
    );
  };

  if (!reviews.length) return null;

  return (
    <>
      <section
        id="reviews"
        className="relative overflow-hidden bg-[#f5f5f7] px-5 py-20 sm:px-6 md:py-28 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-260px] top-20 h-[580px] w-[580px] rounded-full bg-[#0066cc]/12 blur-[160px]" />
          <div className="absolute bottom-[-250px] left-[-280px] h-[540px] w-[540px] rounded-full bg-[#1d1d1f]/8 blur-[160px]" />
          <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(0,0,0,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.5)_1px,transparent_1px)] [background-size:52px_52px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-9 md:mb-16 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0066cc] sm:text-sm">
                Client Experiences
              </p>

              <h2 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.9] tracking-[-0.06em] text-[#101010] sm:text-5xl md:text-6xl lg:text-[72px]">
                Trusted by businesses.
                <span className="block text-[#0066cc]">
                  Backed by real results.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base font-semibold leading-7 text-black/50 md:text-lg md:leading-8">
                Real feedback from businesses that trusted Being Digitals with
                their websites, software, branding, marketing and digital growth.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 rounded-[1.7rem] border border-black/[0.07] bg-white p-2.5 shadow-[0_18px_65px_rgba(0,0,0,.05)]">
                {reviewStats.map((stat) => (
                  <article
                    key={stat.label}
                    className="flex min-h-[86px] flex-col items-center justify-center rounded-[1.25rem] bg-[#f5f5f7] px-2 py-4 text-center"
                  >
                    <p className="text-lg font-semibold tracking-[-0.045em] text-[#1d1d1f] sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[8px] font-semibold uppercase leading-4 tracking-[0.12em] text-black/35 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid items-stretch gap-5 sm:grid-cols-2">
              {videoReviews.slice(0, 2).map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group h-[380px] overflow-hidden rounded-[2rem] border border-[#1d1d1f]/10 bg-[#1d1d1f] p-3 shadow-[0_30px_90px_rgba(16,35,31,.16)] sm:h-[430px] sm:rounded-[2.2rem] lg:h-[500px]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveVideoIndex(index)}
                    className="relative block h-full w-full overflow-hidden rounded-[1.65rem] bg-[#020706] text-left sm:rounded-[1.8rem]"
                    aria-label={`Open ${item.title} video review`}
                  >
                    <video
                      muted
                      playsInline
                      preload="metadata"
                      className="pointer-events-none h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-95"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/20" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:text-[10px]">
                      <CheckCircle2 size={13} className="text-[#0066cc]" />
                      Verified Client
                    </div>

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition group-hover:bg-[#0066cc] group-hover:text-[#000000]">
                      <Maximize2 size={15} />
                    </div>

                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0066cc] text-[#000000] shadow-[0_20px_70px_rgba(16,191,227,.3)] transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Play size={22} fill="currentColor" className="translate-x-0.5" />
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] sm:text-[10px]">
                            Video Review
                          </p>
                          <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs font-bold text-white/45 sm:text-sm">
                            {item.type}
                          </p>
                        </div>

                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-[10px] font-semibold text-white/65 backdrop-blur-md">
                          <Star size={12} fill="currentColor" className="text-[#0066cc]" />
                          5.0
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>

            <article
              onMouseEnter={() => setIsReviewHovered(true)}
              onMouseLeave={() => setIsReviewHovered(false)}
              className="flex min-h-[500px] flex-col rounded-[2.2rem] border border-black/10 bg-white/90 p-5 shadow-[0_35px_110px_rgba(16,35,31,.11)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-6 lg:h-[500px] lg:min-h-0"
            >
              <div className="flex shrink-0 items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0066cc] sm:text-sm">
                    Written Reviews
                  </p>
                  <h3 className="mt-2 max-w-lg text-2xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-3xl lg:text-[32px]">
                    What clients say after the work goes live.
                  </h3>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={previousReview}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] transition hover:border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={nextReview}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] transition hover:border-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white"
                    aria-label="Next review"
                  >
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-[#f5f5f7] p-5 sm:p-6">
                <div className="flex shrink-0 items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Quote size={20} />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e7fbff] px-3 py-2 text-xs font-semibold text-[#0066cc]">
                    <Star size={14} fill="currentColor" />
                    5.0 Verified
                  </span>
                </div>

                <div className="mt-5 shrink-0">
                  <h4 className="text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#101010]">
                    {currentReview.name}
                  </h4>
                  
                </div>

                <div className="mt-4 min-h-0 flex-1 overflow-hidden">
                  <p className="line-clamp-5 text-base font-medium leading-7 text-black/65 sm:text-lg sm:leading-8">
                    “{currentReview.quote}”
                  </p>
                </div>

                <div className="mt-5 flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-black/[0.08] pt-4">
                  <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-semibold text-black/50 sm:text-xs">
                    {currentReview.tag}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#0066cc] sm:text-[10px]">
                    <CheckCircle2 size={14} />
                    Verified feedback
                  </span>
                </div>
              </div>

              <div className="mt-4 flex shrink-0 items-center justify-between">
                <div className="flex items-center gap-2">
                  {reviews.map((review, index) => (
                    <button
                      key={`${review.name}-${index}`}
                      type="button"
                      onClick={() => setReviewIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        reviewIndex === index
                          ? "w-9 bg-[#0066cc]"
                          : "w-2.5 bg-black/15 hover:bg-black/30"
                      }`}
                      aria-label={`Show review ${index + 1}`}
                    />
                  ))}
                </div>

                <p className="text-xs font-semibold text-black/35 sm:text-sm">
                  {String(reviewIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.title} video review`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveVideoIndex(null);
            }
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setActiveVideoIndex(null)}
              className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-[#0066cc] hover:text-[#000000]"
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-black p-2 shadow-[0_45px_150px_rgba(0,0,0,.65)] sm:rounded-[2rem] sm:p-3">
              <div className="relative overflow-hidden rounded-[1.1rem] bg-black sm:rounded-[1.5rem]">
                <video
                  key={activeVideo.video}
                  autoPlay
                  controls
                  playsInline
                  preload="auto"
                  className="max-h-[78vh] w-full bg-black object-contain"
                >
                  <source src={activeVideo.video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>

              <div className="flex flex-col gap-3 px-3 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0066cc]">
                    Verified Video Review
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white/45">
                    {activeVideo.type}
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/70">
                  <Star size={14} fill="currentColor" className="text-[#0066cc]" />
                  5.0 Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}