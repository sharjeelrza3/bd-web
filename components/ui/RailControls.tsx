"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

type RailControlsProps = {
  railRef: RefObject<HTMLDivElement | null>;
  dark?: boolean;
  className?: string;
};

export default function RailControls({ railRef, dark = false, className = "" }: RailControlsProps) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const frameRef = useRef<number | null>(null);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const prev = el.scrollLeft > 8;
    const next = el.scrollLeft < max - 8;
    setCanPrev((current) => current === prev ? current : prev);
    setCanNext((current) => current === next ? current : next);
  }, [railRef]);

  const scheduleUpdate = useCallback(() => {
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      update();
    });
  }, [update]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", scheduleUpdate, { passive: true });
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", scheduleUpdate);
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [railRef, scheduleUpdate, update]);

  const move = (direction: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const itemWidth = first?.getBoundingClientRect().width ?? el.clientWidth * 0.82;
    const computed = getComputedStyle(el);
    const gap = Number.parseFloat(computed.columnGap || computed.gap || "0") || 0;
    el.scrollBy({ left: direction * Math.min(itemWidth + gap, el.clientWidth * 0.92), behavior: "smooth" });
  };

  const base = dark
    ? "border-white/14 bg-white/[.09] text-white hover:bg-white hover:text-black disabled:text-white/20"
    : "border-black/[.08] bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,.06)] hover:bg-black hover:text-white disabled:text-black/20";

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Slider controls">
      <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Previous slide" className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 disabled:cursor-default disabled:opacity-45 ${base}`}>
        <ChevronLeft size={20} strokeWidth={1.8} />
      </button>
      <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Next slide" className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 disabled:cursor-default disabled:opacity-45 ${base}`}>
        <ChevronRight size={20} strokeWidth={1.8} />
      </button>
    </div>
  );
}
