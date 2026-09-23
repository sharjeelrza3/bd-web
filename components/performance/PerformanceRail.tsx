"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
};

export default function PerformanceRail({
  children,
  dark = false,
  className = "",
  itemClassName = "",
  ariaLabel = "Content slider",
}: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const prev = el.scrollLeft > 8;
    const next = el.scrollLeft < max - 8;
    setCanPrev((current) => (current === prev ? current : prev));
    setCanNext((current) => (current === next ? current : next));
  }, []);

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
  }, [scheduleUpdate, update]);

  const move = (direction: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const width = first?.getBoundingClientRect().width ?? el.clientWidth * 0.86;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "0") || 0;
    el.scrollBy({ left: direction * Math.min(width + gap, el.clientWidth * 0.94), behavior: "smooth" });
  };

  const buttonTone = dark
    ? "border-white/14 bg-white/[.09] text-white hover:bg-white hover:text-black disabled:text-white/20"
    : "border-black/[.08] bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,.06)] hover:bg-black hover:text-white disabled:text-black/20";

  return (
    <div className={className}>
      <div className="mb-5 flex justify-end gap-2" aria-label={`${ariaLabel} controls`}>
        <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Previous slide" className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:cursor-default disabled:opacity-45 ${buttonTone}`}>
          <ChevronLeft size={20} strokeWidth={1.8} />
        </button>
        <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Next slide" className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 disabled:cursor-default disabled:opacity-45 ${buttonTone}`}>
          <ChevronRight size={20} strokeWidth={1.8} />
        </button>
      </div>
      <div ref={railRef} className={`bd-rail flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 ${itemClassName}`} aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  );
}
