"use client";

import {
  BookOpen,
  FileArchive,
  ImageIcon,
  Layers,
  Palette,
  PenTool,
  Share2,
  Type,
} from "lucide-react";

const deliverables = [
  { title: "Primary Logo", icon: PenTool },
  { title: "Alternate Logo", icon: Layers },
  { title: "Icon Mark", icon: ImageIcon },
  { title: "Color Palette", icon: Palette },
  { title: "Typography System", icon: Type },
  { title: "Social Templates", icon: Share2 },
  { title: "Brand Guidelines", icon: BookOpen },
  { title: "Source Files", icon: FileArchive },
];

export default function DeliverablesSection() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              What You Receive
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Everything needed to use your brand confidently.
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-black/50">
              Final files are organized for digital, print, social media and future use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.7rem] border border-black/10 bg-white p-5 shadow-[0_14px_55px_rgba(0,0,0,.045)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
