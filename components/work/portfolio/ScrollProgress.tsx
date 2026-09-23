"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setValue(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[90] h-[3px] w-full">
      <div className="h-full bg-[#0066cc]" style={{ width: `${value}%` }} />
    </div>
  );
}
