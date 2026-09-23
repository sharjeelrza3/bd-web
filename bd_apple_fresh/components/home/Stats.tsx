"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/trust";

function AnimatedNumber({
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
        const duration = 1300;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
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

export default function Stats() {
  return (
    <section id="numbers" className="bg-[#f5f5f7] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_25px_90px_rgba(0,0,0,.06)] md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="group relative border-b border-black/10 p-8 transition hover:bg-[#1d1d1f] hover:text-white md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-[#0066cc]/0 blur-3xl transition group-hover:bg-[#0066cc]/25" />

              <p className="relative text-6xl font-semibold tracking-[-0.075em] text-[#1d1d1f] transition group-hover:text-[#0066cc] md:text-7xl">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
              </p>

              <p className="relative mt-5 max-w-[170px] text-sm font-semibold uppercase tracking-[0.18em] text-black/45 transition group-hover:text-white/55">
                {item.label}
              </p>

              <p className="relative mt-10 text-xs font-semibold text-black/25 transition group-hover:text-white/25">
                0{index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
