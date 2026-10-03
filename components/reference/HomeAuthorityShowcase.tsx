import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, Layers3, Search, Sparkles, Workflow } from "lucide-react";
import styles from "./ReferenceShowcase.module.css";

const logos = [
  ["M-One Targets", "/images/clients/M-ONE-LOGO-1112024.webp"],
  ["Mehran Royale", "/images/clients/mehran-royalee.png"],
  ["Taste of Karachi", "/images/clients/taste-of-karachi.png"],
  ["The Pest Zone", "/images/clients/the-pest-zones.png"],
  ["NatureSynch", "/images/clients/naturesynch.png"],
  ["Pioneer Express", "/images/clients/pioneerexp.png"],
  ["Brandealss", "/images/clients/brandealss.png"],
  ["Vice City Farms", "/images/clients/vice-city-farms.png"],
] as const;

const duplicated = [...logos, ...logos];

const capabilities = [
  ["Web", Code2],
  ["Software", Workflow],
  ["Search", Search],
  ["Brand", Layers3],
  ["AI", Sparkles],
] as const;

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`${styles.marqueeMask} w-full`}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.marqueeReverse : ""} items-center gap-3 pr-3 md:gap-4 md:pr-4`}>
        {duplicated.map(([name, src], index) => (
          <div
            key={`${name}-${index}`}
            className="flex h-[76px] w-[190px] shrink-0 items-center justify-center rounded-[22px] border border-white/[.08] bg-white/[.045] px-7 backdrop-blur-xl md:h-[88px] md:w-[230px]"
          >
            <Image
              src={src}
              alt={name}
              width={260}
              height={100}
              sizes="230px"
              className="max-h-[42px] w-auto max-w-[150px] object-contain brightness-0 invert opacity-80 md:max-h-[48px] md:max-w-[175px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeAuthorityShowcase() {
  return (
    <section className="overflow-hidden">
      <div className="bg-[#050505] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[13px] font-semibold tracking-[-.01em] text-white/38 md:text-[15px]">Trusted by businesses that keep moving</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[.91] tracking-[-.065em]">
            Built with teams that expect more from digital.
          </h2>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1500px] flex-col gap-3 md:mt-16 md:gap-4">
          <LogoRow />
          <LogoRow reverse />
        </div>
      </div>

      <div className="bg-[#f3f2ef] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-4xl md:mb-14">
            <p className="text-[14px] font-semibold text-black/42 md:text-[16px]">Proof, not pitch decks.</p>
            <h2 className="mt-2 text-[clamp(2.9rem,5.8vw,5.8rem)] font-semibold leading-[.92] tracking-[-.062em] text-[#1d1d1f]">
              One digital partner. Multiple growth engines.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-[.92fr_1fr_.92fr] lg:grid-rows-[240px_190px]">
            <div className="relative overflow-hidden rounded-[30px] bg-white p-7 shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)] md:p-8 lg:row-span-2">
              <div className="grid grid-cols-3 gap-3">
                {logos.slice(0, 6).map(([name, src], index) => (
                  <div key={name} className={`flex aspect-square items-center justify-center rounded-[20px] border border-black/[.06] bg-[#f8f8f8] p-3 ${index === 1 || index === 4 ? "translate-y-4" : ""}`}>
                    <Image src={src} alt={name} width={120} height={70} sizes="90px" className="max-h-10 w-auto max-w-full object-contain" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-7 bottom-7 md:inset-x-8 md:bottom-8">
                <p className="text-[13px] font-semibold text-black/38">Work that travels across industries.</p>
                <Link href="/portfolio" className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#0066cc] hover:underline">
                  Explore selected work <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] bg-white p-7 shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)] md:p-8">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.12),transparent_68%)]" />
              <p className="text-[clamp(4.6rem,8vw,7.6rem)] font-semibold leading-none tracking-[-.075em] text-black">120+</p>
              <p className="mt-2 text-[15px] font-semibold text-black/42">projects delivered across websites, software and growth.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Strategy", "Design", "Engineering", "Growth"].map((item) => (
                  <span key={item} className="rounded-full bg-black/[.045] px-3 py-1.5 text-[11px] font-semibold text-black/48">{item}</span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-7 shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)] md:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[.12em] text-black/34">A connected system</p>
              <p className="mt-5 max-w-sm text-[21px] font-semibold leading-[1.35] tracking-[-.025em] text-black/70">
                Design, build and growth decisions made together — not handed off between disconnected teams.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-black/42"><Check size={15} /> Clear ownership from brief to launch</div>
            </div>

            <div className="rounded-[30px] bg-[#101010] px-6 py-6 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.05)] md:px-7 lg:col-span-2">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-white/34">Capabilities that work together</p>
                  <p className="mt-1 text-[22px] font-semibold tracking-[-.03em]">From first impression to daily operations.</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {capabilities.map(([label, Icon]) => (
                    <div key={label} className="flex h-12 items-center gap-2 rounded-[16px] border border-white/[.08] bg-white/[.055] px-4 text-[12px] font-semibold text-white/72">
                      <Icon size={16} className="text-[#2997ff]" /> {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
