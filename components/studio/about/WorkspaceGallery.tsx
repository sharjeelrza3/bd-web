"use client";
import Image from "next/image";

const images = [
  { src: "/images/portfolio/branding-social.png", alt: "Creative team workspace", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/services/branding/project-mehran.webp", alt: "Design process", span: "" },
  { src: "/images/services/softwares/restaurant-pos.png", alt: "Development work", span: "" },
  { src: "/images/portfolio/websites.webp", alt: "Agency collaboration", span: "md:col-span-2" },
];

export default function WorkspaceGallery() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">Inside the Studio</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">Ideas become systems through collaboration.</h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Strategy, design, code and growth thinking come together throughout every project.</p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {images.map((image) => (
            <div key={image.src} className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-black ${image.span}`}>
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
