"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Search, Sparkles, Zap } from "lucide-react";
import RailControls from "@/components/ui/RailControls";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { ServiceData, ServiceKey } from "@/components/apple/services/serviceData";

const toneMap: Record<ServiceKey, { hero: string; accent: string; wash: string; label: string }> = {
  website: { hero: "bg-[#050507]", accent: "#2997ff", wash: "bg-[#eaf3ff]", label: "Web" },
  software: { hero: "bg-[#f5f5f7]", accent: "#0071e3", wash: "bg-[#eef0f3]", label: "Systems" },
  seo: { hero: "bg-[#f5f5f7]", accent: "#167a47", wash: "bg-[#eaf6ef]", label: "Search" },
  social: { hero: "bg-[#08080a]", accent: "#d95a9a", wash: "bg-[#f8edf3]", label: "Social" },
  google: { hero: "bg-[#f5f5f7]", accent: "#0071e3", wash: "bg-[#eaf3ff]", label: "Ads" },
  meta: { hero: "bg-[#070709]", accent: "#7b6cff", wash: "bg-[#efedff]", label: "Meta" },
  branding: { hero: "bg-[#eee8e2]", accent: "#8e5b3e", wash: "bg-[#f4eee8]", label: "Brand" },
  ai: { hero: "bg-[#030305]", accent: "#8b76ff", wash: "bg-[#eeebff]", label: "AI" },
  maintenance: { hero: "bg-[#eef3f8]", accent: "#0071e3", wash: "bg-[#eef3f8]", label: "Care" },
};

function BrowserShell({ image, dark = false, className = "", priority = false }: { image: string; dark?: boolean; className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[24px] border ${dark ? "border-white/12 bg-white/[.07]" : "border-black/[.08] bg-white"} p-1.5 shadow-[0_45px_130px_rgba(0,0,0,.2)] ${className}`}>
      <div className={`flex h-7 items-center gap-1.5 px-2 ${dark ? "text-white" : "text-black"}`}>
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/13"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/13"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/13"}`} />
        <span className={`mx-auto h-2 w-[38%] rounded-full ${dark ? "bg-white/[.08]" : "bg-black/[.05]"}`} />
      </div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[18px]">
        <Image src={image} alt="Being Digitals project visual" fill priority={priority} quality={80} sizes="(max-width: 768px) 92vw, 70vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Phone({ image, className = "", priority = false }: { image: string; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[34px] border-[5px] border-black bg-black shadow-[0_45px_120px_rgba(0,0,0,.32)] ${className}`}>
      <div className="absolute left-1/2 top-2 z-20 h-4 w-[30%] -translate-x-1/2 rounded-full bg-black" />
      <Image src={image} alt="Being Digitals social media creative" fill priority={priority} quality={80} sizes="(max-width: 768px) 34vw, 320px" className="object-cover object-top" />
    </div>
  );
}

function HeroVisual({ data, progress }: { data: ServiceData; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const key = data.key;
  const scale = useTransform(progress, [0, .72], [.82, 1.04]);
  const y = useTransform(progress, [0, .72], [120, -10]);
  const rotate = useTransform(progress, [0, .72], key === "branding" ? [-5, 0] : [5, 0]);
  const side = useTransform(progress, [0, .7], [90, 10]);
  const leftX = useTransform(progress, [0, .72], [-110, -16]);
  const leftRotate = useTransform(progress, [0, .72], [-10, -4]);
  const rightRotate = useTransform(progress, [0, .72], [10, 4]);
  const softwareLeftX = useTransform(progress, [0, .7], [-90, -5]);
  const searchCardX = useTransform(progress, [0, .7], [-80, 0]);
  const searchCardY = useTransform(progress, [0, .7], [40, 0]);
  const socialLeftY = useTransform(progress, [0, .7], [70, 10]);
  const socialLeftRotate = useTransform(progress, [0, .7], [-9, -5]);
  const socialRightY = useTransform(progress, [0, .7], [85, 16]);
  const socialRightRotate = useTransform(progress, [0, .7], [9, 5]);
  const ringRotateOuter = useTransform(progress, [0, 1], [-12, 18]);
  const ringRotateInner = useTransform(progress, [0, 1], [14, -20]);

  if (key === "website") {
    return (
      <motion.div style={reduce ? undefined : { scale, y }} className="relative h-full w-full [perspective:1800px]">
        <motion.div style={reduce ? undefined : { x: leftX, rotate: leftRotate }} className="absolute left-[0%] top-[23%] w-[53%]"><BrowserShell image="/images/services/projects/restaurant-website.webp" dark /></motion.div>
        <div className="absolute left-1/2 top-[4%] z-20 w-[69%] -translate-x-1/2"><BrowserShell image="/images/services/projects/business-website.webp" dark priority /></div>
        <motion.div style={reduce ? undefined : { x: side, rotate: rightRotate }} className="absolute right-[0%] top-[27%] z-10 w-[48%]"><BrowserShell image="/images/services/projects/e-commerce.webp" dark /></motion.div>
      </motion.div>
    );
  }

  if (key === "software") {
    return (
      <motion.div style={reduce ? undefined : { scale, y }} className="relative h-full w-full">
        <div className="absolute left-1/2 top-[8%] w-[82%] -translate-x-1/2"><BrowserShell image="/images/services/softwares/restaurant-pos.png" priority /></div>
        <motion.div style={reduce ? undefined : { x: softwareLeftX }} className="absolute bottom-[4%] left-[2%] w-[44%]"><BrowserShell image="/images/services/softwares/stock.png" /></motion.div>
        <motion.div style={reduce ? undefined : { x: side }} className="absolute bottom-[2%] right-[2%] w-[42%]"><BrowserShell image="/images/services/softwares/reports.png" /></motion.div>
      </motion.div>
    );
  }

  if (key === "seo" || key === "google") {
    const searchImage = key === "seo" ? "/images/services/seo/search.png" : "/images/services/seo/search-ad.jpg";
    return (
      <motion.div style={reduce ? undefined : { scale, y }} className="relative h-full w-full">
        <div className="absolute inset-x-[7%] top-[10%] rounded-[34px] border border-black/[.06] bg-white p-5 shadow-[0_45px_130px_rgba(0,0,0,.14)] md:p-8">
          <div className="flex h-14 items-center gap-3 rounded-full border border-black/[.09] bg-white px-5 text-[14px] font-medium text-black/52 shadow-sm md:h-16 md:text-[16px]"><Search size={19} /> {key === "seo" ? "best digital agency for growing businesses" : "website development agency"}</div>
          <div className="relative mt-5 aspect-[16/8] overflow-hidden rounded-[20px] bg-[#f5f5f7]"><Image src={searchImage} alt="Search experience" fill priority quality={80} sizes="(max-width: 768px) 88vw, 70vw" className="object-cover object-top" /></div>
        </div>
        <motion.div style={reduce ? undefined : { x: searchCardX, y: searchCardY }} className="absolute bottom-[4%] left-[2%] hidden w-[30%] rounded-[24px] bg-white p-5 shadow-[0_35px_90px_rgba(0,0,0,.13)] md:block">
          <p className="text-[11px] font-semibold text-black/38">Search visibility</p><p className="mt-2 text-[42px] font-semibold tracking-[-.07em]">+184%</p><div className="mt-3 h-16 rounded-xl bg-[linear-gradient(150deg,rgba(22,122,71,.18),transparent)]" />
        </motion.div>
      </motion.div>
    );
  }

  if (key === "social" || key === "meta") {
    const imgs = key === "social" ? ["/images/services/social-media/reel-cover.webp", "/images/services/social-media/hero-reel.png", "/images/services/social-media/after.png"] : ["/images/services/social-media/creative-3.webp", "/images/services/social-media/creative-4.webp", "/images/services/social-media/creatives-6.webp"];
    return (
      <motion.div style={reduce ? undefined : { scale, y }} className="relative flex h-full w-full items-center justify-center gap-3 md:gap-7">
        <motion.div style={reduce ? undefined : { y: socialLeftY, rotate: socialLeftRotate }} className="relative h-[68%] w-[23%]"><Phone image={imgs[0]} className="h-full w-full" /></motion.div>
        <div className="relative z-20 h-[82%] w-[28%]"><Phone image={imgs[1]} className="h-full w-full" priority /></div>
        <motion.div style={reduce ? undefined : { y: socialRightY, rotate: socialRightRotate }} className="relative h-[68%] w-[23%]"><Phone image={imgs[2]} className="h-full w-full" /></motion.div>
        {key === "meta" && <div className="absolute bottom-[7%] right-[7%] z-30 hidden rounded-[20px] border border-white/12 bg-white/[.1] px-5 py-4 text-white shadow-xl backdrop-blur-2xl md:block"><p className="text-[10px] font-semibold text-white/45">Creative signal</p><p className="mt-1 text-[25px] font-semibold tracking-[-.05em]">3.8× ROAS</p></div>}
      </motion.div>
    );
  }

  if (key === "branding") {
    return (
      <motion.div style={reduce ? undefined : { scale, y, rotate }} className="relative h-full w-full">
        <div className="absolute left-[6%] top-[6%] h-[68%] w-[59%] overflow-hidden rounded-[28px] shadow-[0_45px_110px_rgba(91,64,42,.2)]"><Image src="/images/services/branding/project-sarss.webp" alt="Brand identity" fill priority quality={80} sizes="(max-width: 768px) 78vw, 55vw" className="object-cover" /></div>
        <motion.div style={reduce ? undefined : { x: side }} className="absolute right-[5%] top-[18%] h-[57%] w-[34%] overflow-hidden rounded-[28px] shadow-[0_45px_110px_rgba(91,64,42,.18)]"><Image src="/images/services/branding/brand-g.jpg" alt="Brand system" fill sizes="30vw" className="object-cover" /></motion.div>
        <div className="absolute bottom-[4%] left-[27%] h-[34%] w-[43%] overflow-hidden rounded-[24px] border-[7px] border-[#f7f3ee] shadow-[0_35px_90px_rgba(91,64,42,.18)]"><Image src="/images/services/branding/socialmediaposts.png" alt="Brand social system" fill sizes="38vw" className="object-cover" /></div>
      </motion.div>
    );
  }

  if (key === "ai") {
    return (
      <motion.div style={reduce ? undefined : { scale, y }} className="relative h-full w-full">
        <motion.div style={reduce ? undefined : { rotate: ringRotateOuter }} className="absolute inset-[8%] rounded-full border border-white/10" />
        <motion.div style={reduce ? undefined : { rotate: ringRotateInner }} className="absolute inset-[21%] rounded-full border border-white/10" />
        <div className="absolute inset-[31%] rounded-full bg-[radial-gradient(circle,rgba(112,81,255,.55),rgba(44,81,255,.1)_48%,transparent_70%)] blur-lg" />
        <div className="absolute left-1/2 top-1/2 w-[61%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/13 bg-white/[.07] p-2 shadow-[0_55px_160px_rgba(0,0,0,.6)] backdrop-blur-xl"><Image src="/images/portfolio/ai.jpg" alt="AI automation" width={1080} height={770} priority quality={80} sizes="(max-width: 768px) 70vw, 55vw" className="rounded-[23px]" /></div>
        {[["Lead", "left-[4%] top-[31%]"], ["CRM", "right-[4%] top-[31%]"], ["Report", "left-[14%] bottom-[14%]"], ["Follow-up", "right-[10%] bottom-[14%]"]].map(([label, cls]) => <div key={label} className={`absolute ${cls} hidden rounded-full border border-white/12 bg-white/[.08] px-4 py-2 text-[11px] font-semibold text-white/62 backdrop-blur-xl md:block`}>{label}</div>)}
      </motion.div>
    );
  }

  return (
    <motion.div style={reduce ? undefined : { scale, y }} className="relative h-full w-full">
      <div className="absolute left-1/2 top-[10%] w-[80%] -translate-x-1/2"><BrowserShell image="/images/services/projects/business-website.webp" /></div>
      <div className="absolute bottom-[8%] left-[9%] rounded-[22px] bg-white px-6 py-5 shadow-[0_30px_90px_rgba(0,0,0,.15)]"><p className="text-[11px] font-semibold text-black/35">System status</p><p className="mt-1 text-[27px] font-semibold tracking-[-.05em]">All healthy</p><div className="mt-2 h-2 w-28 rounded-full bg-[#34c759]" /></div>
      <div className="absolute bottom-[7%] right-[9%] rounded-[22px] bg-white px-6 py-5 shadow-[0_30px_90px_rgba(0,0,0,.15)]"><p className="text-[11px] font-semibold text-black/35">Performance</p><p className="mt-1 text-[27px] font-semibold tracking-[-.05em]">Fast</p><p className="mt-1 text-[11px] font-medium text-black/38">Monitored continuously</p></div>
    </motion.div>
  );
}

function Hero({ data }: { data: ServiceData }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 92, damping: 29, mass: .35 });
  const titleY = useTransform(p, [0, .35, .58], [0, -42, -118]);
  const titleOpacity = useTransform(p, [0, .34, .58], [1, 1, 0]);
  const isDark = ["website", "social", "meta", "ai"].includes(data.key);
  const tone = toneMap[data.key];

  return (
    <section ref={ref} className={`relative h-[165svh] md:h-[190svh] ${tone.hero} ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>
      <div className="sticky top-[64px] h-[calc(100svh-64px)] overflow-hidden">
        <div className={`absolute inset-0 ${data.key === "website" ? "bg-[radial-gradient(circle_at_50%_58%,rgba(38,102,255,.30),transparent_35%)]" : data.key === "ai" ? "bg-[radial-gradient(circle_at_50%_58%,rgba(119,78,255,.33),transparent_34%)]" : data.key === "social" || data.key === "meta" ? "bg-[radial-gradient(circle_at_50%_65%,rgba(185,65,146,.20),transparent_38%)]" : ""}`} />
        {isDark && <div className="bd-noise absolute inset-0 opacity-[.16]" />}
        <motion.div style={reduce ? undefined : { y: titleY, opacity: titleOpacity }} className="absolute inset-x-0 top-[7vh] z-30 px-5 text-center md:top-[8vh]">
          <p className={`text-[14px] font-semibold md:text-[16px] ${isDark ? "text-white/48" : "text-black/45"}`}>{data.eyebrow}</p>
          <h1 className="mx-auto mt-3 max-w-[1080px] text-balance text-[clamp(3.55rem,7.4vw,7.7rem)] font-semibold leading-[.89] tracking-[-.068em]">{data.headline}</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/contact" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">{data.primary} <ChevronRight size={18} /></Link>
            <a href="#highlights" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">See highlights <ChevronRight size={18} /></a>
          </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-[-2%] z-20 mx-auto h-[61%] max-w-[1280px] px-4 md:px-8"><HeroVisual data={data} progress={p} /></div>
      </div>
    </section>
  );
}

function ServiceArtwork({ data, image, index = 0, className = "" }: { data: ServiceData; image: string; index?: number; className?: string }) {
  const alt = data.highlights[(index + 1) % data.highlights.length]?.visual || data.visual;

  if (data.key === "website") {
    return (
      <div className={`relative h-full w-full [perspective:1600px] ${className}`}>
        <div className="absolute left-[5%] top-[10%] w-[82%]"><BrowserShell image={image} dark /></div>
        <div className="absolute bottom-[4%] right-[3%] w-[45%] rotate-[4deg] scale-[.88]"><BrowserShell image={alt} dark /></div>
      </div>
    );
  }

  if (data.key === "software") {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <div className="absolute inset-x-[5%] top-[9%]"><BrowserShell image={image} /></div>
        <div className="absolute bottom-[7%] left-[4%] rounded-[20px] bg-[#111827] px-5 py-4 text-white shadow-[0_28px_75px_rgba(0,0,0,.2)]">
          <p className="text-[10px] font-semibold text-white/45">Live operations</p><p className="mt-1 text-[24px] font-semibold tracking-[-.05em]">Everything in view.</p>
        </div>
        <div className="absolute bottom-[8%] right-[5%] hidden w-[34%] md:block"><BrowserShell image={alt} /></div>
      </div>
    );
  }

  if (data.key === "seo" || data.key === "google") {
    const blue = data.key === "google";
    return (
      <div className={`relative h-full w-full ${className}`}>
        <div className="absolute inset-x-[6%] top-[8%] rounded-[30px] border border-black/[.07] bg-white p-5 shadow-[0_35px_100px_rgba(0,0,0,.12)] md:p-7">
          <div className="flex h-12 items-center gap-3 rounded-full border border-black/[.09] px-4 text-[12px] font-semibold text-black/45 md:h-14 md:text-[14px]"><Search size={17}/>{blue ? "website development agency" : "best digital agency for growing businesses"}</div>
          <div className="relative mt-4 aspect-[16/8] overflow-hidden rounded-[18px] bg-[#f5f5f7]"><Image src={image} alt={`${data.title} visual`} fill sizes="70vw" className="object-cover object-top" /></div>
        </div>
        <div className="absolute bottom-[4%] left-[4%] rounded-[20px] bg-white px-5 py-4 shadow-[0_24px_70px_rgba(0,0,0,.12)]">
          <p className="text-[10px] font-semibold text-black/35">{blue ? "Conversion signal" : "Organic visibility"}</p><p className="mt-1 text-[30px] font-semibold tracking-[-.065em]">{blue ? "+42%" : "+184%"}</p>
        </div>
      </div>
    );
  }

  if (data.key === "social" || data.key === "meta") {
    return (
      <div className={`relative flex h-full w-full items-center justify-center gap-3 md:gap-5 ${className}`}>
        <div className="relative h-[72%] w-[25%] -rotate-[5deg] translate-y-[7%]"><Phone image={alt} className="h-full w-full" /></div>
        <div className="relative z-20 h-[86%] w-[30%]"><Phone image={image} className="h-full w-full" /></div>
        <div className="relative h-[70%] w-[24%] rotate-[5deg] translate-y-[9%]"><Phone image={data.highlights[(index + 2) % data.highlights.length]?.visual || data.visual} className="h-full w-full" /></div>
        <div className="absolute bottom-[7%] right-[6%] hidden rounded-[18px] border border-white/12 bg-black/65 px-5 py-4 text-white shadow-xl backdrop-blur-xl md:block"><p className="text-[10px] font-semibold text-white/42">{data.key === "meta" ? "Creative performance" : "Content system"}</p><p className="mt-1 text-[24px] font-semibold tracking-[-.05em]">{data.key === "meta" ? "3.8× ROAS" : "Built to stop."}</p></div>
      </div>
    );
  }

  if (data.key === "branding") {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <div className="absolute left-[4%] top-[5%] h-[68%] w-[60%] overflow-hidden rounded-[25px] shadow-[0_36px_100px_rgba(80,54,37,.18)]"><Image src={image} alt="Brand identity system" fill sizes="55vw" className="object-cover" /></div>
        <div className="absolute right-[5%] top-[17%] h-[52%] w-[34%] rotate-[3deg] overflow-hidden rounded-[23px] shadow-[0_30px_85px_rgba(80,54,37,.18)]"><Image src={alt} alt="Brand application" fill sizes="32vw" className="object-cover" /></div>
        <div className="absolute bottom-[3%] left-[24%] flex h-[31%] w-[48%] items-end overflow-hidden rounded-[22px] border-[7px] border-[#f8f4ef] bg-[#f8f4ef] shadow-[0_30px_85px_rgba(80,54,37,.18)]"><Image src="/images/services/branding/socialmediaposts.png" alt="Brand social applications" fill sizes="42vw" className="object-cover" /></div>
      </div>
    );
  }

  if (data.key === "ai") {
    return (
      <div className={`relative h-full w-full ${className}`}>
        <div className="absolute inset-[7%] rounded-full border border-white/10" />
        <div className="absolute inset-[20%] rounded-full border border-white/10" />
        <div className="absolute inset-[29%] rounded-full bg-[radial-gradient(circle,rgba(116,84,255,.5),rgba(60,74,255,.08)_52%,transparent_72%)] blur-lg" />
        <div className="absolute left-1/2 top-1/2 w-[63%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/12 bg-white/[.06] p-2 shadow-[0_45px_140px_rgba(0,0,0,.55)] backdrop-blur-xl"><Image src={image} alt="AI workflow" width={1080} height={770} sizes="55vw" className="rounded-[21px]" /></div>
        {["Lead", "CRM", "Email", "Report"].map((label, i) => <span key={label} className={`absolute hidden rounded-full border border-white/12 bg-white/[.08] px-4 py-2 text-[11px] font-semibold text-white/62 backdrop-blur-xl md:block ${i===0?"left-[3%] top-[31%]":i===1?"right-[3%] top-[30%]":i===2?"left-[13%] bottom-[12%]":"right-[10%] bottom-[13%]"}`}>{label}</span>)}
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="absolute inset-x-[6%] top-[8%]"><BrowserShell image={image} /></div>
      <div className="absolute bottom-[7%] left-[6%] rounded-[20px] bg-white px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,.12)]"><p className="text-[10px] font-semibold text-black/34">System health</p><p className="mt-1 text-[24px] font-semibold tracking-[-.05em]">All systems healthy</p><div className="mt-3 h-2 w-28 rounded-full bg-[#34c759]" /></div>
      <div className="absolute bottom-[7%] right-[6%] hidden rounded-[20px] bg-white px-5 py-4 shadow-[0_25px_70px_rgba(0,0,0,.12)] md:block"><p className="text-[10px] font-semibold text-black/34">Monitoring</p><p className="mt-1 text-[24px] font-semibold tracking-[-.05em]">Always on</p></div>
    </div>
  );
}

function Signature({ data }: { data: ServiceData }) {
  const isDark = data.key === "social" || data.key === "meta" || data.key === "ai";
  const surface = data.key === "branding" ? "bg-[#f1ebe5]" : isDark ? "bg-[#08080b]" : toneMap[data.key].wash;

  const signatureHeading: Record<ServiceKey, string> = {
    website: "One website. Every detail working together.",
    software: "Complex operations, made easy to read.",
    seo: "Search visibility, built from the ground up.",
    social: "A social presence with a recognizable rhythm.",
    google: "Search intent, shaped into a clear conversion path.",
    meta: "Creative, audience and action in one system.",
    branding: "A visual system people can recognize anywhere.",
    ai: "Connected workflows that handle the repetitive work.",
    maintenance: "Quiet technical care that keeps the site healthy.",
  };

  return (
    <section className={`bd-content-auto relative overflow-hidden px-5 py-20 md:px-8 md:py-28 ${surface} ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>
      {isDark && <div className="bd-noise absolute inset-0 opacity-[.11]" />}
      <div className="relative mx-auto max-w-[1260px]">
        <div className="mx-auto max-w-[930px] text-center">
          <p className={`text-[13px] font-semibold md:text-[15px] ${isDark ? "text-white/42" : "text-black/42"}`}>{toneMap[data.key].label}, by Being Digitals.</p>
          <h2 className="mt-3 text-balance text-[clamp(2.75rem,5.1vw,5.2rem)] font-semibold leading-[.94] tracking-[-.062em]">{signatureHeading[data.key]}</h2>
          <p className={`mx-auto mt-5 max-w-[760px] text-balance text-[17px] font-medium leading-[1.5] md:text-[19px] ${isDark ? "text-white/48" : "text-black/48"}`}>{data.intro}</p>
        </div>
        <div className={`relative mx-auto mt-10 h-[clamp(390px,58vw,700px)] max-w-[1180px] overflow-hidden rounded-[34px] border ${isDark ? "border-white/[.08] bg-[#0d0d12]" : data.key === "branding" ? "border-black/[.06] bg-[#f8f4ef]" : "border-black/[.06] bg-white/72"} shadow-[0_35px_110px_rgba(0,0,0,.10)]`}>
          <ServiceArtwork data={data} image={data.visual} index={0} />
        </div>
      </div>
    </section>
  );
}


function ServiceSpotlight({ data }: { data: ServiceData }) {
  if (data.key === "ai") {
    return (
      <section className="bd-content-auto bg-white px-5 py-28 text-[#1d1d1f] md:px-8 md:py-40">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[920px] text-center">
            <h2 className="text-[clamp(3.8rem,7.6vw,8rem)] font-semibold leading-[.88] tracking-[-.071em]">Make repetitive work disappear.</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
              <a href="#details" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">Learn more <ChevronRight size={17}/></a>
              <Link href="/contact" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">Start a project <ChevronRight size={17}/></Link>
            </div>
          </div>

          <div className="relative mx-auto mt-14 min-h-[520px] overflow-hidden rounded-[34px] bg-[#050507] shadow-[0_35px_120px_rgba(0,0,0,.22)] md:min-h-[650px]">
            <div className="bd-noise absolute inset-0 opacity-[.22]" />
            <div className="absolute inset-0 opacity-[.16] [background-image:radial-gradient(circle,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute left-1/2 top-1/2 h-[410px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,91,255,.30),rgba(0,188,255,.10)_40%,transparent_68%)] blur-md md:h-[500px] md:w-[760px]" />

            <div className="absolute left-1/2 top-1/2 h-[210px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/[.12] bg-white/[.035] shadow-[0_0_100px_rgba(61,88,255,.18)] backdrop-blur-xl md:h-[250px] md:w-[520px]">
              <div className="absolute inset-[14%] rounded-[999px] border border-white/[.14] bg-white/[.035]" />
              <div className="absolute inset-[35%_31%] flex items-center justify-center rounded-[999px] bg-white shadow-[0_0_48px_rgba(255,255,255,.7)]">
                <Zap size={26} className="text-[#4b4dff]" />
              </div>
            </div>

            {[
              ["left-[13%] top-[16%]", "Lead qualified"],
              ["right-[12%] bottom-[13%]", "Workflow automated"],
            ].map(([pos,label]) => (
              <span key={label} className={`absolute z-20 rounded-[16px] border border-white/12 bg-white/92 px-4 py-3 text-[11px] font-semibold text-black/65 shadow-[0_20px_65px_rgba(0,0,0,.28)] ${pos}`}>{label}</span>
            ))}
            {[
              "left-[16%] top-[31%]",
              "left-[17%] bottom-[22%]",
              "left-1/2 top-[10%]",
              "right-[18%] top-[22%]",
              "right-[18%] bottom-[27%]",
              "left-1/2 bottom-[10%]",
            ].map((pos, i) => <span key={i} className={`absolute h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_22px_white] ${pos}`} />)}
          </div>
        </div>
      </section>
    );
  }

  if (data.key === "branding") {
    return (
      <section className="bd-content-auto bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[34px] bg-[#111112] shadow-[0_35px_130px_rgba(0,0,0,.42)]">
          <div className="flex items-start justify-between gap-6 px-7 py-7 md:px-10 md:py-9">
            <div>
              <p className="text-[11px] font-semibold text-white/32">06 · Identity + social</p>
              <h2 className="mt-2 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[.9] tracking-[-.067em]">Brand Systems</h2>
            </div>
            <Link href="/portfolio" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-110 md:h-12 md:w-12" aria-label="View branding work"><ArrowRight size={19}/></Link>
          </div>
          <div className="relative aspect-[16/10] min-h-[460px] overflow-hidden bg-[#070707] md:min-h-[660px]">
            <Image src="/images/services/branding/project-sarss.webp" alt="Being Digitals brand system project" fill sizes="(max-width:768px) 100vw, 1180px" className="object-cover object-center" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent" />
          </div>
        </div>
      </section>
    );
  }

  return null;
}

function HighlightCard({ data, item, index }: { data: ServiceData; item: ServiceData["highlights"][number]; index: number }) {
  const dark = data.key === "social" || data.key === "meta" || data.key === "ai" || (data.key === "website" && index !== 1);
  const backgrounds: Record<ServiceKey, string> = {
    website: index === 1 ? "bg-[#eaf3ff]" : "bg-[#050507]",
    software: index === 1 ? "bg-white" : "bg-[#eef0f3]",
    seo: index === 1 ? "bg-white" : "bg-[#eaf6ef]",
    social: index === 1 ? "bg-[#171118]" : "bg-[#08080a]",
    google: index === 1 ? "bg-white" : "bg-[#eaf3ff]",
    meta: index === 1 ? "bg-[#141018]" : "bg-[#070709]",
    branding: index === 1 ? "bg-[#f7f2ec]" : "bg-[#eee8e2]",
    ai: index === 1 ? "bg-[#12101b]" : "bg-[#030305]",
    maintenance: index === 1 ? "bg-white" : "bg-[#eef3f8]",
  };

  return (
    <article className={`relative h-[560px] min-w-[86vw] snap-start overflow-hidden rounded-[30px] md:h-[640px] md:min-w-[590px] ${backgrounds[data.key]} ${dark ? "text-white" : "text-black"}`}>
      <div className="absolute inset-x-0 top-0 z-20 p-7 md:p-9">
        <p className={`text-[13px] font-semibold ${dark ? "text-white/45" : "text-black/40"}`}>{item.kicker}</p>
        <h3 className="mt-2 max-w-[485px] text-[clamp(2.25rem,4vw,3.8rem)] font-semibold leading-[.95] tracking-[-.056em]">{item.title}</h3>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[66%] overflow-hidden px-4 pb-1 md:px-7">
        <ServiceArtwork data={data} image={item.visual} index={index} />
      </div>
    </article>
  );
}

function Highlights({ data }: { data: ServiceData }) {
  const railRef = useRef<HTMLDivElement>(null);
  return (
    <section id="highlights" className="bd-content-auto bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto flex max-w-[1260px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-end md:px-6">
        <div>
          <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Get the highlights.</p>
          <h2 className="mt-2 max-w-4xl text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.064em]">Three ideas. Three different ways to feel the difference.</h2>
        </div>
        <RailControls railRef={railRef} className="shrink-0" />
      </div>
      <div ref={railRef} className="bd-rail mt-11 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1260px)/2+24px))] pb-3">
        {data.highlights.map((item, i) => <HighlightCard key={item.title} data={data} item={item} index={i} />)}
      </div>
    </section>
  );
}

function DetailVisual({ data, item, progress, index }: { data: ServiceData; item: ServiceData["highlights"][number]; progress: MotionValue<number>; index: number }) {
  const n = data.highlights.length;
  const start = index / n;
  const end = (index + 1) / n;
  const opacity = useTransform(progress, [Math.max(0, start - .035), start + .05, end - .05, Math.min(1, end + .035)], index === 0 ? [1,1,1,0] : index === n - 1 ? [0,1,1,1] : [0,1,1,0]);
  const scale = useTransform(progress, [start, end], [.94, 1.025]);
  const y = useTransform(progress, [start, end], [34, -18]);
  const dark = data.key === "website" || data.key === "social" || data.key === "meta" || data.key === "ai";

  return (
    <motion.div style={{ opacity }} className={`absolute inset-0 overflow-hidden rounded-[34px] ${dark ? "bg-[#08080b]" : data.key === "branding" ? "bg-[#eee8e2]" : toneMap[data.key].wash}`}>
      <motion.div style={{ scale, y }} className="absolute inset-0 p-4 md:p-7">
        <ServiceArtwork data={data} image={item.visual} index={index} />
      </motion.div>
    </motion.div>
  );
}

function DetailCopy({ data, item, progress, index }: { data: ServiceData; item: ServiceData["highlights"][number]; progress: MotionValue<number>; index: number }) {
  const n = data.highlights.length;
  const start = index / n;
  const end = (index + 1) / n;
  const opacity = useTransform(progress, [Math.max(0, start - .03), start + .05, end - .05, Math.min(1, end + .03)], index === 0 ? [1,1,1,0] : index === n - 1 ? [0,1,1,1] : [0,1,1,0]);
  const y = useTransform(progress, [start, end], [25, -22]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="text-[13px] font-semibold text-white/36">0{index + 1} · {item.kicker}</p>
      <h3 className="mt-4 text-[clamp(3.1rem,5.4vw,5.8rem)] font-semibold leading-[.9] tracking-[-.067em]">{item.title}</h3>
      <p className="mt-6 max-w-lg text-[17px] font-semibold leading-[1.55] text-white/44 md:text-[19px]">{item.text}</p>
    </motion.div>
  );
}

function FeatureStory({ data }: { data: ServiceData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 86, damping: 29, mass: .38 });
  return (
    <section id="details" ref={ref} className="relative bg-black text-white lg:h-[330svh]">
      <div className="hidden lg:sticky lg:top-[64px] lg:grid lg:h-[calc(100svh-64px)] lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-12 lg:overflow-hidden lg:px-8">
        <div className="relative ml-auto h-[68%] w-full max-w-[500px]">
          {data.highlights.map((item, i) => <DetailCopy key={item.title} data={data} item={item} progress={p} index={i} />)}
        </div>
        <div className="relative h-[78%] w-full max-w-[880px]">
          {data.highlights.map((item, i) => <DetailVisual key={item.title} data={data} item={item} progress={p} index={i} />)}
        </div>
      </div>
      <div className="lg:hidden">
        {data.highlights.map((item, i) => (
          <article key={item.title} className="border-b border-white/[.08] px-5 py-20">
            <p className="text-[12px] font-semibold text-white/36">0{i + 1} · {item.kicker}</p>
            <h3 className="mt-3 text-[clamp(3.2rem,13vw,5.2rem)] font-semibold leading-[.89] tracking-[-.068em]">{item.title}</h3>
            <p className="mt-5 text-[17px] font-semibold leading-[1.5] text-white/43">{item.text}</p>
            <div className={`relative mt-10 h-[440px] overflow-hidden rounded-[28px] ${data.key === "branding" ? "bg-[#eee8e2]" : data.key === "social" || data.key === "meta" || data.key === "ai" || data.key === "website" ? "bg-[#0a0a0d]" : toneMap[data.key].wash}`}><ServiceArtwork data={data} image={item.visual} index={i} /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities({ data }: { data: ServiceData }) {
  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">What&apos;s inside.</p>
        <h2 className="mt-2 max-w-5xl text-[clamp(3.3rem,6.5vw,6.8rem)] font-semibold leading-[.91] tracking-[-.066em]">Everything needed to make it work beautifully.</h2>
        <div className="mt-14 border-t border-black/[.1]">
          {data.capabilities.map((item, i) => (
            <div key={item} className="group grid min-h-[88px] grid-cols-[56px_1fr_auto] items-center border-b border-black/[.08] py-4 md:min-h-[104px] md:grid-cols-[90px_1fr_auto]">
              <span className="text-[11px] font-semibold text-black/28">0{String(i + 1).padStart(1, "0")}</span>
              <p className="text-[clamp(1.55rem,3vw,2.9rem)] font-semibold tracking-[-.046em] transition-transform duration-300 group-hover:translate-x-1.5">{item}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-black/60 transition-colors group-hover:bg-black group-hover:text-white"><Check size={16} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats({ data }: { data: ServiceData }) {
  return (
    <section className={`bd-content-auto ${toneMap[data.key].wash} px-5 py-24 md:px-8 md:py-32`}>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-3 md:grid-cols-3">
          {data.stats.map((stat, i) => (
            <div key={stat.label} className={`rounded-[28px] p-7 md:p-9 ${i === 1 ? "bg-black text-white" : "bg-white"}`}>
              <p className={`text-[13px] font-semibold ${i === 1 ? "text-white/40" : "text-black/40"}`}>{stat.label}</p>
              <p className="mt-10 text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-none tracking-[-.07em]">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ data }: { data: ServiceData }) {
  const railRef = useRef<HTMLDivElement>(null);
  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">How it comes together.</p>
            <h2 className="mt-2 max-w-4xl text-[clamp(3.3rem,6.2vw,6.5rem)] font-semibold leading-[.91] tracking-[-.066em]">A simple process for serious work.</h2>
          </div>
          <RailControls railRef={railRef} className="shrink-0" />
        </div>
        <div ref={railRef} className="bd-rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
          {data.process.map((step, i) => (
            <article key={step.n} className={`min-h-[340px] min-w-[82vw] snap-start rounded-[28px] p-7 md:min-w-[360px] md:p-9 ${i === 0 ? "bg-black text-white" : i === 1 ? toneMap[data.key].wash + " text-black" : "bg-[#f5f5f7] text-black"}`}>
              <p className={`text-[12px] font-semibold ${i === 0 ? "text-white/34" : "text-black/34"}`}>{step.n}</p>
              <h3 className="mt-20 text-[clamp(2.5rem,4vw,3.6rem)] font-semibold tracking-[-.055em]">{step.title}</h3>
              <p className={`mt-4 max-w-sm text-[16px] font-semibold leading-[1.5] ${i === 0 ? "text-white/42" : "text-black/42"}`}>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ data }: { data: ServiceData }) {
  const isDark = ["website", "social", "meta", "ai"].includes(data.key);
  const copy: Record<ServiceKey, { eyebrow: string; title: string; secondary: string }> = {
    website: { eyebrow: "Ready for a stronger website?", title: "Build a website people remember — and use.", secondary: "See website work" },
    software: { eyebrow: "Ready to simplify the operation?", title: "Turn daily complexity into one clear system.", secondary: "See software work" },
    seo: { eyebrow: "Ready to grow organic visibility?", title: "Build search growth that compounds over time.", secondary: "See SEO outcomes" },
    social: { eyebrow: "Ready to look consistent everywhere?", title: "Build a social presence worth stopping for.", secondary: "See creative work" },
    google: { eyebrow: "Ready to capture active demand?", title: "Turn high-intent searches into measurable action.", secondary: "See growth work" },
    meta: { eyebrow: "Ready to test smarter creative?", title: "Build campaigns that learn before they scale.", secondary: "See campaign work" },
    branding: { eyebrow: "Ready to become recognizable?", title: "Create a brand system people remember at a glance.", secondary: "See brand work" },
    ai: { eyebrow: "Ready to remove repetitive work?", title: "Automate the busywork without losing control.", secondary: "See automation work" },
    maintenance: { eyebrow: "Ready for quieter technical care?", title: "Keep your website fast, secure and ready for change.", secondary: "See our process" },
  };
  const item = copy[data.key];
  const secondaryHref = data.key === "maintenance" ? "/process" : data.key === "branding" || data.key === "social" ? "/portfolio" : "/case-studies";

  return (
    <section className={`bd-content-auto relative overflow-hidden px-5 py-28 md:px-8 md:py-44 ${isDark ? "bg-black text-white" : toneMap[data.key].wash}`}>
      {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(36,97,255,.25),transparent_35%)]" />}
      <div className="relative mx-auto max-w-[1060px] text-center">
        <p className={`text-[15px] font-semibold md:text-[17px] ${isDark ? "text-white/40" : "text-black/42"}`}>{item.eyebrow}</p>
        <h2 className="mt-3 text-[clamp(3.6rem,7.5vw,7.5rem)] font-semibold leading-[.89] tracking-[-.071em]">{item.title}</h2>
        <p className={`mx-auto mt-6 max-w-2xl text-[18px] font-semibold leading-[1.5] ${isDark ? "text-white/42" : "text-black/42"}`}>Tell us the goal. We&apos;ll shape the strategy, experience and execution around it.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="bd-cta-primary bd-arrow-shift">{data.primary} <ArrowRight size={16} /></Link>
          <Link href={secondaryHref} className={`bd-cta-secondary bd-arrow-shift ${isDark ? "bd-cta-secondary-dark" : ""}`}>{item.secondary} <ChevronRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

export default function AppleServicePage({ data }: { data: ServiceData }) {
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <Hero data={data} />
      <Signature data={data} />
      <ServiceSpotlight data={data} />
      <Highlights data={data} />
      <FeatureStory data={data} />
      <Capabilities data={data} />
      <Stats data={data} />
      <Process data={data} />
      <FinalCTA data={data} />
    </main>
  );
}
