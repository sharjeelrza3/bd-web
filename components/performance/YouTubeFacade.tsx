"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  poster?: string;
};

export default function YouTubeFacade({ videoId, title, poster = "/images/og-image.jpg" }: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group absolute inset-0 w-full overflow-hidden text-left"
      aria-label={`Play ${title}`}
    >
      <Image src={poster} alt="" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.015]" />
      <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.64),rgba(0,0,0,.08)_60%)]" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_12px_50px_rgba(0,0,0,.35)] transition-transform duration-300 group-hover:scale-105">
        <Play size={23} fill="currentColor" className="ml-1" />
      </span>
      <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/28 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">Click to play</span>
    </button>
  );
}
