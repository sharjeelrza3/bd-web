"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "Website Development", short: "Websites", href: "/services/website-development", image: "/images/services/projects/business-website.webp", bg: "bg-[#eaf3ff]", type: "browser" },
  { title: "Business Software", short: "Software", href: "/services/business-software", image: "/images/services/softwares/restaurant-pos.png", bg: "bg-[#eef0f3]", type: "browser" },
  { title: "SEO", short: "Search", href: "/services/seo", image: "/images/services/seo/search.png", bg: "bg-[#eaf6ef]", type: "browser" },
  { title: "Social Media", short: "Social", href: "/services/social-media", image: "/images/services/social-media/hero-reel.png", bg: "bg-[#f7edf3]", type: "phone" },
  { title: "Google Ads", short: "Google Ads", href: "/services/google-ads", image: "/images/services/seo/search-ad.jpg", bg: "bg-[#edf4ff]", type: "browser" },
  { title: "Meta Ads", short: "Meta Ads", href: "/services/meta-ads", image: "/images/services/social-media/creative-3.webp", bg: "bg-[#f0edff]", type: "phone" },
  { title: "Branding & Design", short: "Brand", href: "/services/branding", image: "/images/services/branding/project-sarss.webp", bg: "bg-[#f3ece6]", type: "brand" },
  { title: "AI Automation", short: "AI", href: "/services/ai-automation", image: "/images/portfolio/ai.jpg", bg: "bg-[#ebe9fa]", type: "ai" },
  { title: "Website Maintenance", short: "Care", href: "/services/maintenance", image: "/images/portfolio/websites.webp", bg: "bg-[#eef3f8]", type: "browser" },
] as const;

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: .35 });
  const scale = useTransform(p, [0, .5, 1], [.9, 1, .96]);
  const rotate = useTransform(p, [0, 1], [-4, 4]);

  return (
    <div ref={ref} className="relative mx-auto mt-14 h-[54vw] max-h-[700px] min-h-[430px] max-w-[1200px]">
      <motion.div style={reduce ? undefined : { scale, rotate }} className="absolute left-1/2 top-[4%] z-20 w-[68%] -translate-x-1/2 overflow-hidden rounded-[34px] border border-white/14 bg-white/[.08] p-2 shadow-[0_60px_180px_rgba(0,0,0,.65)] backdrop-blur-xl">
        <Image src="/images/services/softwares/restaurant-pos.png" alt="Business software" width={1883} height={948} priority sizes="72vw" className="rounded-[27px]" />
      </motion.div>
      <div className="absolute bottom-[6%] left-[2%] z-10 w-[43%] -rotate-[7deg] overflow-hidden rounded-[27px] border border-white/12 bg-white/[.07] p-1.5 shadow-[0_45px_130px_rgba(0,0,0,.58)]"><Image src="/images/services/projects/business-website.webp" alt="Website design" width={1672} height={941} priority sizes="44vw" className="rounded-[21px]" /></div>
      <div className="absolute bottom-[2%] right-[2%] z-10 w-[38%] rotate-[7deg] overflow-hidden rounded-[27px] border border-white/12 bg-white/[.07] p-1.5 shadow-[0_45px_130px_rgba(0,0,0,.58)]"><Image src="/images/services/branding/project-sarss.webp" alt="Brand design" width={1586} height={992} priority sizes="40vw" className="rounded-[21px]" /></div>
    </div>
  );
}

function ServiceTile({ item, index }: { item: typeof services[number]; index: number }) {
  return (
    <Link href={item.href} className={`group relative overflow-hidden rounded-[30px] ${item.bg} ${index === 0 || index === 7 ? "min-h-[610px] md:col-span-2" : "min-h-[500px]"}`}>
      <div className="relative z-20 p-7 md:p-9">
        <p className="text-[13px] font-semibold text-black/42">Being Digitals</p>
        <div className="mt-1 flex items-start justify-between gap-5">
          <div>
            <h2 className={`font-semibold leading-[.94] tracking-[-.057em] ${index === 0 || index === 7 ? "text-[clamp(3rem,5.5vw,5.8rem)]" : "text-[clamp(2.5rem,4vw,4.1rem)]"}`}>{item.title}</h2>
            <p className="mt-3 text-[15px] font-semibold text-black/42">Explore {item.short.toLowerCase()} <ChevronRight size={16} className="inline" /></p>
          </div>
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110"><ChevronRight size={19} /></span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[65%] items-end justify-center overflow-hidden px-7 md:px-10">
        {item.type === "phone" ? (
          <div className="relative h-[94%] w-[44%] translate-y-[7%] overflow-hidden rounded-t-[34px] border-[5px] border-black bg-black shadow-[0_35px_95px_rgba(0,0,0,.25)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-[1%]">
            <Image src={item.image} alt={item.title} fill sizes="320px" className="object-cover object-top" />
          </div>
        ) : item.type === "brand" ? (
          <div className="relative h-[90%] w-[80%] translate-y-[8%] rotate-[3deg] overflow-hidden rounded-[27px] shadow-[0_35px_95px_rgba(78,49,32,.18)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-0 group-hover:translate-y-[1%]"><Image src={item.image} alt={item.title} fill sizes="55vw" className="object-cover" /></div>
        ) : item.type === "ai" ? (
          <div className="relative h-[87%] w-[84%] translate-y-[8%] overflow-hidden rounded-[28px] border border-black/[.07] bg-[#0a0a0d] p-2 shadow-[0_35px_95px_rgba(0,0,0,.18)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-[1%] group-hover:scale-[1.015]"><Image src={item.image} alt={item.title} fill sizes="70vw" className="object-cover" /></div>
        ) : (
          <div className="w-full translate-y-[14%] overflow-hidden rounded-[25px] border border-black/[.07] bg-white p-1.5 shadow-[0_35px_95px_rgba(0,0,0,.16)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-[4%] group-hover:scale-[1.015]">
            <div className="flex h-6 items-center gap-1.5 px-2"><span className="h-1.5 w-1.5 rounded-full bg-black/12" /><span className="h-1.5 w-1.5 rounded-full bg-black/12" /><span className="h-1.5 w-1.5 rounded-full bg-black/12" /></div>
            <Image src={item.image} alt={item.title} width={1672} height={941} sizes="70vw" className="aspect-[16/9] rounded-[19px] object-cover object-top" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default function AppleServicesIndex() {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <section className="relative overflow-hidden bg-black px-5 pb-0 pt-24 text-white md:px-8 md:pt-32">
        <div className="bd-noise absolute inset-0 opacity-[.18]" />
        <div className="absolute left-1/2 top-[58%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,102,255,.3),transparent_67%)] blur-xl" />
        <div className="relative mx-auto max-w-[1260px] text-center">
          <p className="text-[15px] font-semibold text-white/46 md:text-[17px]">Being Digitals Services</p>
          <h1 className="mx-auto mt-3 max-w-[1200px] text-[clamp(4.3rem,10vw,10.5rem)] font-semibold leading-[.83] tracking-[-.076em]">Everything digital. Designed as one system.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-[19px] font-semibold leading-[1.48] text-white/43 md:text-[22px]">Build the experience. Run the operation. Grow demand. Strengthen the brand.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="bg-white px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1260px]">
          <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Choose what moves the business.</p>
          <h2 className="mt-2 max-w-5xl text-[clamp(3.5rem,6.8vw,7.2rem)] font-semibold leading-[.9] tracking-[-.068em]">From first impression to everyday operation.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
            {services.map((item, i) => <ServiceTile key={item.href} item={item} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1080px] text-center">
          <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Not sure where to start?</p>
          <h2 className="mt-3 text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.072em]">Start with the outcome.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] font-semibold leading-[1.5] text-black/42">Tell us what needs to improve — leads, operations, brand, conversion or visibility. We&apos;ll recommend the right system.</p>
          <Link href="/contact" className="bd-cta-primary bd-arrow-shift mt-8">Talk to Being Digitals <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
