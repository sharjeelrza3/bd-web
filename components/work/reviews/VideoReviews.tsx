"use client";

import Image from "next/image";
import { Play, Video } from "lucide-react";
import { videoReviews } from "./reviewsData";

export default function VideoReviews() {
  const playVideo = (src: string) => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-[#1d1d1f] px-5 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Video Testimonials
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Hear directly from the businesses we worked with.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-white/50">
            Short client stories covering the experience, process and result.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {videoReviews.map((review) => (
            <button
              key={review.client}
              onClick={() => playVideo(review.video)}
              className="group overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.06] text-left"
            >
              <div className="relative h-[330px] overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0066cc] text-[#000000] shadow-[0_24px_80px_rgba(0,0,0,.35)] transition group-hover:scale-110">
                  <Play size={26} fill="currentColor" />
                </span>

                <span className="absolute right-5 top-5 rounded-full bg-black/40 px-3 py-2 text-xs font-semibold backdrop-blur">
                  {review.duration}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[#0066cc]">
                  <Video size={17} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    {review.industry}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">{review.client}</h3>
                <p className="mt-2 text-sm font-semibold text-white/40">{review.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
