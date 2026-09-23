"use client";

import Image from "next/image";
import { Check, Search, Sparkles, Zap } from "lucide-react";
import type { ServiceKey } from "./serviceData";

function BrowserChrome({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_45px_120px_rgba(0,0,0,.22)] md:rounded-[32px] ${className}`}>
      <div className="flex h-9 items-center border-b border-black/[.07] bg-[#f5f5f7] px-3.5 md:h-11 md:px-5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
        </div>
        <div className="mx-auto h-5 w-[44%] rounded-full border border-black/[.04] bg-white md:h-6" />
        <div className="w-[30px]" />
      </div>
      <Image src={image} alt={alt} width={1700} height={1000} sizes="(max-width: 768px) 92vw, 1100px" className="aspect-[16/9] w-full object-cover object-top" />
    </div>
  );
}

function Phone({ image, alt = "Being Digitals mobile experience", className = "" }: { image: string; alt?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[34px] border-[5px] border-[#09090a] bg-black shadow-[0_32px_80px_rgba(0,0,0,.36)] ${className}`}>
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[27px] bg-[#111]">
        <div className="absolute left-1/2 top-2 z-20 h-4 w-[34%] -translate-x-1/2 rounded-full bg-black" />
        <Image src={image} alt={alt} fill sizes="260px" className="object-cover" />
      </div>
    </div>
  );
}

function GlassLabel({ children, className = "", dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={`absolute z-30 rounded-[18px] border px-4 py-3 text-[11px] font-semibold tracking-[-0.015em] shadow-[0_22px_65px_rgba(0,0,0,.15)] backdrop-blur-2xl md:text-[12px] ${dark ? "border-white/14 bg-black/36 text-white" : "border-white/55 bg-white/78 text-black"} ${className}`}>
      {children}
    </div>
  );
}

export default function VisualScene({
  kind,
  image,
  title,
  mode = "hero",
}: {
  kind: ServiceKey;
  image: string;
  title: string;
  mode?: "hero" | "card" | "wide";
}) {
  const card = mode === "card";
  const shell = card
    ? "h-[410px] rounded-[28px] sm:h-[460px]"
    : "min-h-[560px] rounded-[34px] md:min-h-[720px] md:rounded-[46px]";

  if (kind === "social" || kind === "meta") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[#07070a]`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(106,77,255,.68),transparent_34%),radial-gradient(circle_at_13%_82%,rgba(0,127,255,.24),transparent_27%)]" />
        <div className="bd-noise absolute inset-0 opacity-30" />
        <div className={`absolute left-1/2 top-1/2 flex w-[86%] -translate-x-1/2 -translate-y-[43%] items-end justify-center ${card ? "gap-3" : "gap-5 md:w-[72%] md:gap-9"}`}>
          <div className={`${card ? "w-[29%] -rotate-6" : "w-[25%] -rotate-6 md:w-[22%]"}`}><Phone image="/images/services/social-media/creative-2.webp" /></div>
          <div className={`${card ? "z-10 w-[35%] -translate-y-5" : "z-10 w-[30%] -translate-y-8 md:w-[25%]"}`}><Phone image={image} /></div>
          <div className={`${card ? "w-[29%] rotate-6" : "w-[25%] rotate-6 md:w-[22%]"}`}><Phone image="/images/services/social-media/creative-4.webp" /></div>
        </div>
        {!card && <GlassLabel dark className="left-[7%] top-[9%]">Creative system</GlassLabel>}
        {!card && <GlassLabel dark className="bottom-[8%] right-[7%]">Attention → action</GlassLabel>}
      </div>
    );
  }

  if (kind === "branding") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[#f0f0f2]`}>
        <div className="absolute left-[5%] top-[2%] text-[clamp(6rem,18vw,18rem)] font-semibold leading-none tracking-[-0.09em] text-black/[.045]">Aa</div>
        <div className={`absolute left-[11%] top-[14%] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_42px_100px_rgba(0,0,0,.18)] ${card ? "w-[78%] rotate-2" : "w-[69%] rotate-[2deg] md:left-[16%] md:w-[60%]"}`}>
          <Image src={image} alt={title} width={1500} height={950} sizes="(max-width: 768px) 80vw, 900px" className="aspect-[16/10] w-full rounded-[18px] object-cover" />
        </div>
        <div className={`absolute bottom-[8%] left-[8%] rounded-[22px] border border-black/[.07] bg-white/86 p-4 shadow-[0_22px_65px_rgba(0,0,0,.12)] backdrop-blur-xl ${card ? "scale-90 origin-bottom-left" : "md:left-[12%] md:p-5"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-black/35">Visual system</p>
          <div className="mt-3 flex gap-2.5">
            {["#111114", "#0071e3", "#f5f5f7", "#ffffff"].map((color) => <span key={color} style={{ backgroundColor: color }} className="h-8 w-8 rounded-full border border-black/10 md:h-10 md:w-10" />)}
          </div>
        </div>
        {!card && <GlassLabel className="right-[7%] top-[11%]">One identity. Every touchpoint.</GlassLabel>}
      </div>
    );
  }

  if (kind === "ai") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[#050507]`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(83,91,255,.58),transparent_27%),radial-gradient(circle_at_44%_67%,rgba(0,189,255,.18),transparent_29%)]" />
        <div className="absolute inset-0 opacity-18 [background-image:radial-gradient(circle,rgba(255,255,255,.75)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${card ? "h-[42%] w-[42%]" : "h-[46%] w-[46%] md:h-[48%] md:w-[48%]"}`}>
          <div className="bd-orbit absolute inset-0 rounded-full border border-white/15" />
          <div className="bd-orbit-reverse absolute inset-[16%] rounded-full border border-white/16" />
          <div className="absolute inset-[29%] rounded-full border border-white/15 bg-white/[.08] shadow-[0_0_100px_rgba(88,114,255,.55)] backdrop-blur-xl" />
          <div className="absolute inset-[41%] flex items-center justify-center rounded-full bg-white shadow-[0_0_55px_rgba(255,255,255,.7)]"><Sparkles className="h-[45%] w-[45%] text-[#3737ff]" /></div>
        </div>
        {!card && <GlassLabel dark className="left-[7%] top-[12%]"><Zap size={13} className="mr-1.5 inline" /> Lead qualified</GlassLabel>}
        {!card && <GlassLabel dark className="bottom-[11%] right-[7%]"><Check size={13} className="mr-1.5 inline" /> Workflow completed</GlassLabel>}
        {["left-[17%] top-[29%]", "right-[17%] top-[25%]", "left-[19%] bottom-[25%]", "right-[18%] bottom-[24%]"].map((pos, i) => <span key={i} className={`absolute h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_24px_white] ${pos}`} />)}
      </div>
    );
  }

  if (kind === "seo" || kind === "google") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[linear-gradient(145deg,#eef6ff,#fbfdff_58%,#dcecff)]`}>
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(circle_at_50%_0%,rgba(59,137,255,.20),transparent_54%)]" />
        <div className={`absolute left-1/2 top-[10%] -translate-x-1/2 ${card ? "w-[82%]" : "w-[78%] md:w-[66%]"}`}>
          <div className="flex items-center gap-3 rounded-full border border-black/[.08] bg-white/92 px-5 py-4 shadow-[0_20px_70px_rgba(0,91,194,.12)] backdrop-blur-2xl md:px-7 md:py-5">
            <Search size={18} className="shrink-0 text-black/36" />
            <span className="truncate text-[13px] font-medium text-black/56 md:text-[16px]">best digital agency for growth</span>
            <span className="ml-auto hidden rounded-full bg-[#0071e3] px-3 py-1.5 text-[10px] font-semibold text-white sm:block">Search</span>
          </div>
        </div>
        <div className={`absolute left-1/2 -translate-x-1/2 ${card ? "top-[28%] w-[84%]" : "top-[28%] w-[82%] md:w-[69%]"}`}>
          <BrowserChrome image={image} alt={title} />
        </div>
        {!card && <GlassLabel className="bottom-[8%] left-[7%]">Qualified visibility ↑</GlassLabel>}
        {!card && <GlassLabel className="right-[6%] top-[24%]">Intent, captured.</GlassLabel>}
      </div>
    );
  }

  if (kind === "software") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[#070708]`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-5%,rgba(110,115,130,.35),transparent_46%),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:auto,56px_56px,56px_56px]" />
        <div className={`absolute left-1/2 -translate-x-1/2 ${card ? "top-[17%] w-[87%]" : "top-[17%] w-[86%] md:w-[77%]"}`}>
          <BrowserChrome image={image} alt={title} />
        </div>
        {!card && <GlassLabel dark className="left-[6%] top-[10%]">Live operations</GlassLabel>}
        {!card && <GlassLabel dark className="bottom-[8%] right-[7%]">Sales · Stock · Reports</GlassLabel>}
        {!card && <div className="absolute bottom-[9%] left-[8%] hidden gap-2 md:flex"><span className="h-2 w-14 rounded-full bg-emerald-400" /><span className="h-2 w-8 rounded-full bg-white/18" /><span className="h-2 w-5 rounded-full bg-white/18" /></div>}
      </div>
    );
  }

  if (kind === "maintenance") {
    return (
      <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[linear-gradient(145deg,#edf7ff,#ffffff_56%,#dfefff)]`}>
        <div className={`absolute left-1/2 -translate-x-1/2 ${card ? "top-[20%] w-[84%]" : "top-[18%] w-[82%] md:w-[72%]"}`}><BrowserChrome image={image} alt={title} /></div>
        <GlassLabel className="left-[6%] top-[9%] md:left-[9%]"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />All systems healthy</GlassLabel>
        {!card && <GlassLabel className="bottom-[9%] right-[7%]">Protected · Updated · Fast</GlassLabel>}
      </div>
    );
  }

  return (
    <div className={`bd-scene relative isolate overflow-hidden ${shell} bg-[#050506]`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(153,166,200,.26),transparent_53%),radial-gradient(circle_at_82%_86%,rgba(25,85,255,.18),transparent_28%)]" />
      <div className={`absolute left-1/2 origin-bottom -translate-x-1/2 [perspective:1800px] ${card ? "top-[18%] w-[88%]" : "top-[17%] w-[88%] md:w-[79%]"}`}>
        <div className="rotate-x-[2deg]"><BrowserChrome image={image} alt={title} /></div>
      </div>
      {!card && <GlassLabel dark className="left-[6%] top-[9%]">Designed by Being Digitals</GlassLabel>}
      {!card && <GlassLabel dark className="bottom-[8%] right-[7%]">Fast on every screen</GlassLabel>}
      {!card && <div className="absolute bottom-[7%] left-1/2 h-[1px] w-[48%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />}
    </div>
  );
}
