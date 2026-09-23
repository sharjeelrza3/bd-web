"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, type RefObject } from "react";

type RailControlsProps = {
  railRef: RefObject<HTMLDivElement | null>;
  dark?: boolean;
  className?: string;
};

export default function RailControls({ railRef, dark = false, className = "" }: RailControlsProps) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const update = () => {
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft < max - 8);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [railRef]);

  const move = (direction: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const itemWidth = first?.getBoundingClientRect().width ?? el.clientWidth * 0.82;
    const gap = Number.parseFloat(getComputedStyle(el).gap || "0") || 0;
    el.scrollBy({ left: direction * Math.min(itemWidth + gap, el.clientWidth * 0.92), behavior: "smooth" });
  };

  const base = dark
    ? "border-white/14 bg-white/[.09] text-white hover:bg-white hover:text-black disabled:text-white/20"
    : "border-black/[.08] bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,.06)] hover:bg-black hover:text-white disabled:text-black/20";

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Slider controls">
      <button
        type="button"
        onClick={() => move(-1)}
        disabled={!canPrev}
        aria-label="Previous slide"
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 disabled:cursor-default disabled:opacity-45 ${base}`}
      >
        <ChevronLeft size={20} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        disabled={!canNext}
        aria-label="Next slide"
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 disabled:cursor-default disabled:opacity-45 ${base}`}
      >
        <ChevronRight size={20} strokeWidth={1.8} />
      </button>
    </div>
  );
}
