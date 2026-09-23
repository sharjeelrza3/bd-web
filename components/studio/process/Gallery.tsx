"use client";

import Image from "next/image";

const images = [
  { src: "/images/services/seo/search.png", alt: "Project discovery meeting", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/services/projects/business-website.webp", alt: "UI design process", span: "" },
  { src: "/images/services/branding/project-sarss.webp", alt: "Website development process", span: "" },
  { src: "/images/services/softwares/restaurant-pos.png", alt: "Quality assurance and testing", span: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Behind the Scenes
            </p>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Good work is shaped through review and refinement.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Research, design reviews, development checks and testing happen
            continuously throughout the project.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-black ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
