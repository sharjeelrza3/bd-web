"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-[#0066cc] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
