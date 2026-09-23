"use client";

import Image from "next/image";
import Link from "next/link";
import RailControls from "@/components/ui/RailControls";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Mail, Play, Search, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { caseStudies } from "@/components/work/case-studies/data";
import { reviews } from "@/components/work/reviews/reviewsData";
import StickyTimeline from "@/components/studio/process/StickyTimeline";
import Comparison from "@/components/studio/about/Comparison";
import { articles } from "@/data/articles";


const ease = [0.16, 1, 0.3, 1] as const;

function PageHero({ eyebrow, title, sub, dark = false, children }: { eyebrow: string; title: string; sub?: string; dark?: boolean; children?: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 95, damping: 30, mass: .34 });
  const y = useTransform(p, [0, .75], [0, -72]);
  const opacity = useTransform(p, [0, .55, .9], [1, 1, .15]);
  return (
    <section ref={ref} className={`relative overflow-hidden px-5 pb-24 pt-[132px] md:px-8 md:pb-32 md:pt-[158px] ${dark ? "bg-black text-white" : "bg-white text-[#1d1d1f]"}`}>
      {dark && <><div className="bd-noise absolute inset-0 opacity-[.15]" /><div className="absolute left-1/2 top-[70%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(38,94,255,.28),transparent_68%)] blur-xl" /></>}
      <motion.div style={reduce ? undefined : { y, opacity }} className="relative mx-auto max-w-[1260px] text-center">
        <p className={`text-[15px] font-semibold md:text-[17px] ${dark ? "text-white/44" : "text-[#6e6e73]"}`}>{eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-[1200px] text-[clamp(4rem,9.4vw,9.8rem)] font-semibold leading-[.84] tracking-[-.075em]">{title}</h1>
        {sub && <p className={`mx-auto mt-7 max-w-3xl text-[18px] font-semibold leading-[1.5] md:text-[21px] ${dark ? "text-white/42" : "text-black/43"}`}>{sub}</p>}
      </motion.div>
      {children && <div className="relative mx-auto mt-14 max-w-[1260px]">{children}</div>}
    </section>
  );
}

function BrowserCard({ src, alt, className = "", dark = false }: { src: string; alt: string; className?: string; dark?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[28px] border p-1.5 shadow-[0_40px_120px_rgba(0,0,0,.18)] ${dark ? "border-white/12 bg-white/[.07]" : "border-black/[.07] bg-white"} ${className}`}>
      <div className="flex h-7 items-center gap-1.5 px-2"><span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/12"}`} /><span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/12"}`} /><span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/12"}`} /></div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[21px]"><Image src={src} alt={alt} fill sizes="70vw" className="object-cover object-top" /></div>
    </div>
  );
}

export function ApplePortfolio() {
  const studies = caseStudies;
  const otherWork = [
    { name: "Brand Systems", type: "Identity & Creative", image: "/images/services/branding/project-sarss.webp", href: "/services/branding" },
    { name: "Search Growth", type: "SEO & Content", image: "/images/portfolio/seo-growth.png", href: "/services/seo" },
  ];

  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <PageHero eyebrow="Selected Work" title="Work built around what changed." sub="Not just what we made — the problem we solved, the system we built and the outcome it created." dark>
        <div className="relative mx-auto h-[56vw] max-h-[650px] min-h-[390px] max-w-[1100px]">
          <div className="absolute left-[4%] top-[18%] w-[45%] -rotate-[6deg]"><BrowserCard src="/images/services/projects/restaurant-website.webp" alt="Website project" dark /></div>
          <div className="absolute left-1/2 top-0 z-20 w-[58%] -translate-x-1/2"><BrowserCard src="/images/services/softwares/restaurant-pos.png" alt="Software project" dark /></div>
          <div className="absolute right-[2%] top-[23%] w-[41%] rotate-[6deg]"><BrowserCard src="/images/services/branding/project-sarss.webp" alt="Brand project" dark /></div>
        </div>
      </PageHero>

      <section className="bd-content-auto px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1260px]">
          <div className="mb-12 max-w-4xl"><p className="text-[15px] font-semibold text-[#6e6e73]">Case studies</p><h2 className="mt-2 text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.065em]">Problem → solution → result.</h2></div>
          <div className="grid gap-6">
            {studies.map((study, i) => {
              const result = study.results[0];
              return (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group grid overflow-hidden rounded-[32px] bg-[#f5f5f7] lg:grid-cols-[1.15fr_.85fr]">
                  <div className={`relative min-h-[360px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                    <Image src={study.cover} alt={`${study.client} case study`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.018]" />
                    <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-black shadow-sm backdrop-blur-xl transition-transform group-hover:scale-110"><ArrowUpRight size={18}/></span>
                  </div>
                  <div className={`flex min-h-[360px] flex-col justify-between p-7 md:p-10 ${i % 2 ? "lg:order-1" : ""}`}>
                    <div>
                      <p className="text-[12px] font-semibold text-black/38">{study.category}</p>
                      <h2 className="mt-3 text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[.92] tracking-[-.064em]">{study.client}</h2>
                      <div className="mt-7 space-y-4 text-[14px] font-medium leading-[1.55] text-black/48">
                        <p><span className="font-semibold text-black/66">Problem:</span> {study.challenge}</p>
                        <p><span className="font-semibold text-black/66">Solution:</span> {study.solution.slice(0,2).join(" · ")}</p>
                      </div>
                    </div>
                    <div className="mt-10 flex items-end justify-between gap-5 border-t border-black/[.08] pt-6">
                      <div><p className="text-[11px] font-semibold text-black/34">Primary outcome</p><p className="mt-2 text-[clamp(3rem,5vw,5.3rem)] font-semibold leading-none tracking-[-.07em]">{result.value}</p><p className="mt-2 text-[13px] font-semibold text-black/44">{result.label}</p></div>
                      <span className="bd-arrow-shift inline-flex items-center gap-1 text-[13px] font-semibold text-[#0066cc]">Read case study <ChevronRight size={15}/></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bd-content-auto bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1260px]"><p className="text-[15px] font-semibold text-[#6e6e73]">More disciplines</p><h2 className="mt-2 max-w-4xl text-[clamp(3rem,5.5vw,5.7rem)] font-semibold leading-[.93] tracking-[-.063em]">The work continues beyond the case study.</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{otherWork.map((p)=><Link key={p.name} href={p.href} className="group"><div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-white"><Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 100vw, 48vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"/></div><div className="mt-4 flex items-center justify-between"><div><h3 className="text-[22px] font-semibold tracking-[-.035em]">{p.name}</h3><p className="mt-1 text-[13px] font-medium text-black/42">{p.type}</p></div><ArrowUpRight size={18} className="text-black/32"/></div></Link>)}</div></div>
      </section>
      <LargeCTA />
    </main>
  );
}

export function AppleAbout() {
  const capabilities = ["Strategy", "UI/UX", "Engineering", "SEO", "Paid Growth", "Branding", "Automation", "Support"];
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <PageHero eyebrow="About Being Digitals" title="Small studio. Serious digital work." sub="We bring strategy, design, development and growth together so clients don’t have to stitch the experience together themselves.">
        <div className="relative mx-auto aspect-[16/8] max-w-[1100px] overflow-hidden rounded-[34px] bg-black">
          <Image src="/images/og-image.jpg" alt="Being Digitals" fill priority sizes="90vw" className="object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white md:bottom-10 md:left-10">
            <p className="text-[13px] font-semibold text-white/50">Karachi · Working worldwide</p>
            <p className="mt-2 max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[.98] tracking-[-.055em]">Built around clarity, craft and measurable outcomes.</p>
          </div>
        </div>
      </PageHero>

      <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto grid max-w-[1120px] gap-12 md:grid-cols-[.62fr_1.38fr]">
          <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">The idea</p>
          <div>
            <h2 className="text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.065em]">Digital work should feel connected.</h2>
            <p className="mt-7 max-w-2xl text-[19px] font-semibold leading-[1.52] text-black/43 md:text-[22px]">A beautiful website with weak strategy is incomplete. Great ads with a poor landing page are incomplete. Good software with confusing UX is incomplete. We design the system around the whole business problem.</p>
          </div>
        </div>
      </section>

      <Comparison />

      <section className="px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[15px] font-semibold text-[#6e6e73]">Capabilities</p>
          <h2 className="mt-2 max-w-4xl text-[clamp(3.2rem,6vw,6.4rem)] font-semibold leading-[.92] tracking-[-.065em]">Many disciplines. One standard.</h2>
          <div className="mt-12 border-t border-black/[.09]">
            {capabilities.map((x,i)=><div key={x} className="grid min-h-[94px] grid-cols-[60px_1fr] items-center border-b border-black/[.08]"><span className="text-[11px] font-semibold text-black/28">0{i+1}</span><p className="text-[clamp(2rem,4vw,3.8rem)] font-semibold tracking-[-.055em]">{x}</p></div>)}
          </div>
        </div>
      </section>
      <LargeCTA />
    </main>
  );
}

export function AppleProcess() {
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <PageHero eyebrow="Our Process" title="From first thought to finished system." sub="A structured process keeps ambitious work clear without making it rigid." dark />
      <StickyTimeline />
      <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-[1050px] text-center">
          <p className="text-[15px] font-semibold text-[#6e6e73]">The principle</p>
          <h2 className="mt-3 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-.069em]">Move fast where it’s safe. Slow down where it matters.</h2>
        </div>
      </section>
      <LargeCTA />
    </main>
  );
}

export function AppleReviews() {
  const railRef = useRef<HTMLDivElement>(null);
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <PageHero eyebrow="Client Reviews" title="The work ends. The relationship doesn’t." sub="Feedback from businesses that trusted Being Digitals with websites, software, marketing and brand work." />
      <section className="bd-content-auto px-5 pb-24 md:px-8 md:pb-32"><div className="mx-auto max-w-[1180px]"><div className="grid gap-5 md:grid-cols-2">{["/videos/reviews/review-1.mp4","/videos/reviews/review-2.mp4"].map((video,i)=><div key={video} className="overflow-hidden rounded-[32px] bg-black"><div className="mx-auto aspect-[4/5] max-h-[720px]"><video src={video} controls playsInline preload="none" className="h-full w-full object-contain" /></div><div className="border-t border-white/10 p-6 text-white"><p className="text-[12px] font-semibold text-white/38">Client story · 0{i+1}</p><h2 className="mt-2 text-[25px] font-semibold tracking-[-.04em]">Experience in their own words.</h2></div></div>)}</div></div></section>
      <section className="bd-content-auto overflow-hidden bg-[#f5f5f7] py-24 md:py-32"><div className="mx-auto max-w-[1180px] px-5 md:px-8"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[15px] font-semibold text-[#6e6e73]">Review highlights</p><h2 className="mt-2 max-w-4xl text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[.92] tracking-[-.065em]">What clients remember after launch.</h2></div><RailControls railRef={railRef}/></div><div className="mt-9 grid gap-3 sm:grid-cols-3"><div className="rounded-[24px] bg-white p-6"><div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} fill="currentColor" className="text-[#f9ab00]"/>)}</div><p className="mt-4 text-[38px] font-semibold tracking-[-.06em]">5.0</p><p className="text-[12px] font-semibold text-black/40">Average featured rating</p></div><div className="rounded-[24px] bg-white p-6"><p className="text-[38px] font-semibold tracking-[-.06em]">{reviews.length}</p><p className="mt-2 text-[12px] font-semibold text-black/40">Featured reviews</p></div><div className="rounded-[24px] bg-black p-6 text-white"><p className="text-[38px] font-semibold tracking-[-.06em]">120+</p><p className="mt-2 text-[12px] font-semibold text-white/40">Projects delivered</p></div></div></div><div ref={railRef} className="bd-rail mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1180px)/2+24px))] pb-3">{reviews.map((review)=><article key={review.company} className="flex min-h-[360px] w-[86vw] max-w-[500px] shrink-0 snap-start flex-col rounded-[30px] bg-white p-7 md:p-8"><div className="flex gap-1">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={13} fill="currentColor" className="text-[#f9ab00]"/>)}</div><blockquote className="mt-7 text-[clamp(1.7rem,2.7vw,2.5rem)] font-semibold leading-[1.09] tracking-[-.046em]">“{review.quote}”</blockquote><div className="mt-auto pt-8"><p className="text-[15px] font-semibold">{review.company}</p><p className="mt-1 text-[12px] font-medium text-black/40">{review.project}</p></div></article>)}</div></section>
      <LargeCTA />
    </main>
  );
}

export function AppleCaseStudies() {
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Case Studies" title="What changed after the work shipped." sub="The business problem, the system we built and the outcome behind selected Being Digitals projects." dark />
    <section className="bd-content-auto px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1180px] space-y-8">{caseStudies.map((study,i)=>{const result=study.results[0];return <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group grid overflow-hidden rounded-[32px] bg-[#f5f5f7] lg:grid-cols-[1.12fr_.88fr]"><div className={`relative min-h-[350px] overflow-hidden ${i%2?"lg:order-2":""}`}><Image src={study.cover} alt={study.client} fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"/></div><div className={`flex min-h-[350px] flex-col justify-between p-7 md:p-9 ${i%2?"lg:order-1":""}`}><div><p className="text-[12px] font-semibold text-[#6e6e73]">{study.category}</p><h2 className="mt-3 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[.93] tracking-[-.062em]">{study.client}</h2><p className="mt-5 line-clamp-3 text-[16px] font-semibold leading-[1.5] text-black/44"><span className="text-black/66">Problem:</span> {study.challenge}</p></div><div className="mt-8 flex items-end justify-between gap-6 border-t border-black/[.08] pt-6"><div><p className="text-[11px] font-semibold text-black/34">Outcome</p><p className="mt-1 text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-none tracking-[-.07em]">{result.value}</p><p className="mt-2 text-[12px] font-semibold text-black/42">{result.label}</p></div><span className="bd-arrow-shift inline-flex items-center gap-1 text-[14px] font-semibold text-[#0066cc]">Read story <ChevronRight size={16}/></span></div></div></Link>})}</div></section><LargeCTA /></main>;
}

export function AppleIndustries() {
  const items = ["Restaurants & hospitality","Healthcare","Retail & ecommerce","Real estate","Automotive","Professional services","Lifestyle brands","Local businesses"];
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Industries" title="Different businesses. Same need for clarity." sub="We adapt the digital system to how the business sells, operates and grows." />
    <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1180px]"><div className="grid gap-4 md:grid-cols-2">{items.map((x,i)=><Link href="/contact" key={x} className={`group relative min-h-[290px] overflow-hidden rounded-[30px] p-7 md:p-9 ${i===0||i===5?"bg-black text-white":"bg-white"}`}><p className={`text-[12px] font-semibold ${i===0||i===5?"text-white/34":"text-black/30"}`}>0{i+1}</p><h2 className="mt-24 max-w-lg text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[.95] tracking-[-.055em]">{x}</h2><span className={`absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${i===0||i===5?"bg-white text-black":"bg-black text-white"}`}><ChevronRight size={17}/></span></Link>)}</div></div></section><LargeCTA /></main>;
}

export function AppleCareers() {
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Careers" title="Do work you’ll want to show." sub="We’re building a small, high-standard team across design, development, growth and creative." dark>
    <div className="mx-auto max-w-[1000px] rounded-[32px] border border-white/12 bg-white/[.06] p-8 backdrop-blur-xl md:p-12"><div className="grid gap-8 md:grid-cols-3">{[["Craft","Care about details."],["Ownership","Finish what you start."],["Curiosity","Keep learning."]].map(([a,b])=><div key={a}><h2 className="text-[27px] font-semibold tracking-[-.045em]">{a}</h2><p className="mt-2 text-[15px] font-semibold text-white/42">{b}</p></div>)}</div></div>
  </PageHero><section className="px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1060px]"><p className="text-[15px] font-semibold text-[#6e6e73]">Open roles</p><h2 className="mt-2 text-[clamp(3.3rem,6vw,6.2rem)] font-semibold leading-[.92] tracking-[-.065em]">When there’s a fit, we want to hear from you.</h2><div className="mt-12 border-t border-black/[.09]">{["UI/UX Designer","Frontend Developer","Graphic Designer","Performance Marketer"].map((r,i)=><a key={r} href="mailto:hello@beingdigitals.com" className="group grid min-h-[100px] grid-cols-[52px_1fr_auto] items-center border-b border-black/[.08]"><span className="text-[11px] font-semibold text-black/28">0{i+1}</span><span className="text-[clamp(1.7rem,3vw,3rem)] font-semibold tracking-[-.048em]">{r}</span><ArrowUpRight size={20} className="text-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></a>)}</div></div></section></main>;
}

const insights = [
  ["SEO", "How to build search visibility that compounds.", "/images/services/seo/visual-featured.png", "/seo-guides"],
  ["Marketing", "Better campaigns start before the ad account.", "/images/services/social-media/creative-4.webp", "/marketing-tips"],
  ["Web", "Performance is part of the design.", "/images/services/projects/business-website.webp", "/blog"],
] as const;

export function AppleInsights({ mode = "blog" }: { mode?: "blog" | "seo" | "marketing" }) {
  const categories = ["All", "SEO", "Marketing", "Web Design", "Software", "AI"] as const;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  if (mode !== "blog") {
    const title = mode === "seo" ? "Search, explained clearly." : "Ideas for better growth.";
    const eyebrow = mode === "seo" ? "SEO Guides" : "Marketing Tips";
    const sub = mode === "seo"
      ? "Practical guidance on technical SEO, local visibility, content and search strategy."
      : "Practical thinking on creative, paid media, content and conversion.";
    return (
      <main className="overflow-clip bg-white text-[#1d1d1f]">
        <PageHero eyebrow={eyebrow} title={title} sub={sub} />
        <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-5 md:grid-cols-2">
              {insights.map(([cat,t,img,href],i)=><Link key={t} href={href} className={`group overflow-hidden rounded-[30px] bg-white ${i===0?"md:col-span-2":""}`}><div className={`relative overflow-hidden bg-[#eee] ${i===0?"aspect-[16/7]":"aspect-[4/3]"}`}><Image src={img} alt={t} fill sizes={i===0?"90vw":"45vw"} className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"/></div><div className="p-7 md:p-9"><p className="text-[12px] font-semibold text-[#6e6e73]">{cat}</p><div className="mt-2 flex items-start justify-between gap-6"><h2 className="max-w-2xl text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[.96] tracking-[-.055em]">{t}</h2><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white"><ChevronRight size={17}/></span></div></div></Link>)}
            </div>
          </div>
        </section>
      </main>
    );
  }

  const feature = articles.find((article) => article.slug === "high-converting-business-website") ?? articles[0]!;
  const cards = [
    { category: "Web Design", title: "How to Build a High-Converting Business Website in 2026", excerpt: "A practical breakdown of structure, content and UX decisions that turn a website into a lead-generation asset.", image: "/images/portfolio/websites.webp", href: "/blog/high-converting-business-website" },
    { category: "SEO", title: "The Local SEO Guide Every Small Business Needs", excerpt: "Improve local visibility, Google Maps presence and qualified inquiries with a clear search strategy.", image: "/images/services/seo/map-pack.jpg", href: "/seo-guides/local-seo-guide" },
    { category: "Marketing", title: "How to Build Meta Ads That Generate Better Leads", excerpt: "A practical framework for creative, targeting, offers and campaign structure.", image: "/images/services/social-media/creative-3.webp", href: "/marketing-tips/meta-ads-real-leads" },
    { category: "AI", title: "Where AI Automation Actually Helps Small Businesses", excerpt: "Use automation where repetitive work slows the team down — without making the process harder to control.", image: "/images/portfolio/ai.jpg", href: "/services/ai-automation" },
    { category: "Software", title: "Custom Software or Off-the-Shelf: What Should You Choose?", excerpt: "A simple way to decide when a custom system is worth building around the way your business actually works.", image: "/images/portfolio/softwares.webp", href: "/services/business-software" },
    { category: "Web Design", title: "7 Signs Your Business Website Needs a Redesign", excerpt: "The practical signs that your website is creating friction for customers, search visibility and growth.", image: "/images/services/projects/e-commerce.webp", href: "/services/website-development" },
  ] as const;

  const visibleCards = activeCategory === "All" ? cards : cards.filter((card) => card.category === activeCategory);

  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <section className="px-5 pb-16 pt-[132px] md:px-8 md:pb-24 md:pt-[154px]">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[12px] font-semibold uppercase tracking-[.18em] text-[#0066cc]">Featured insight</p>
          <Link href={`/blog/${feature.slug}`} className="group mt-5 grid overflow-hidden rounded-[30px] border border-black/[.08] bg-[#f5f5f7] lg:grid-cols-[1.12fr_.88fr]">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[410px]">
              <Image src={feature.heroImage} alt={feature.title} fill priority sizes="(max-width:1024px) 100vw, 58vw" className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.018]" />
            </div>
            <div className="flex min-h-[320px] flex-col justify-center bg-white p-7 md:p-10 lg:min-h-[410px]">
              <p className="text-[12px] font-semibold text-[#0066cc]">{feature.category}</p>
              <h1 className="mt-4 max-w-xl text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[.9] tracking-[-.065em]">{feature.title}</h1>
              <p className="mt-5 max-w-xl text-[15px] font-semibold leading-[1.55] text-black/45 md:text-[17px]">{feature.excerpt}</p>
              <span className="bd-arrow-shift mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1d1d1f] px-5 py-3 text-[13px] font-semibold text-white">Read featured insight <ArrowRight size={15}/></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-black/[.07] bg-white px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${activeCategory === category ? "border-black bg-black text-white" : "border-black/[.1] bg-white text-black/45 hover:border-black/25 hover:text-black"}`}>
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-7 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[.18em] text-[#0066cc]">Latest articles</p>
              <h2 className="mt-3 max-w-[650px] text-[clamp(3.2rem,6vw,6.2rem)] font-semibold leading-[.9] tracking-[-.067em]">Ideas you can actually use.</h2>
            </div>
            <p className="max-w-xl pb-2 text-[15px] font-semibold leading-[1.55] text-black/43 md:text-[17px]">Actionable guidance written around real business decisions — websites, search, marketing, software and automation.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCards.map((card) => (
              <Link key={card.title} href={card.href} className="group flex min-h-full flex-col overflow-hidden rounded-[24px] border border-black/[.08] bg-white shadow-[0_1px_0_rgba(0,0,0,.02)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,.09)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f7]">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#0071e3] px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm">{card.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-[clamp(1.55rem,2.5vw,2.25rem)] font-semibold leading-[1.02] tracking-[-.045em]">{card.title}</h3>
                  <p className="mt-3 text-[13px] font-medium leading-[1.55] text-black/42">{card.excerpt}</p>
                  <span className="bd-arrow-shift mt-8 inline-flex items-center gap-1 text-[12px] font-semibold text-[#0066cc]">Read article <ChevronRight size={14}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const resources = [
  ["SEO Audit Checklist", "/resources/seo-audit-checklist.pdf"],
  ["Website Planning Sheet", "/resources/website-planning-sheet.pdf"],
  ["Social Media Calendar", "/resources/social-media-calendar.pdf"],
  ["Brand Discovery Questionnaire", "/resources/brand-discovery-questionnaire.pdf"],
  ["Ad Creative Checklist", "/resources/ad-creative-checklist.pdf"],
  ["Proposal Template", "/resources/proposal-template.pdf"],
] as const;

export function AppleResources() {
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Free Resources" title="Useful tools. No clutter." sub="Planning sheets, checklists and templates for teams that want to move with more clarity." dark />
    <section className="px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1120px]"><div className="grid gap-4 md:grid-cols-2">{resources.map(([title,href],i)=><a key={title} href={href} download className={`group relative min-h-[280px] rounded-[30px] p-7 md:p-9 ${i===0?"bg-[#eaf3ff] md:col-span-2":"bg-[#f5f5f7]"}`}><p className="text-[12px] font-semibold text-black/34">Free PDF · 0{i+1}</p><h2 className="mt-20 max-w-xl text-[clamp(2.3rem,4vw,4rem)] font-semibold leading-[.95] tracking-[-.055em]">{title}</h2><span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-110"><Download size={17}/></span></a>)}</div></div></section></main>;
}

export function ApplePricing() {
  const ways = [
    ["Focused project","A defined website, landing page, brand system or one-off build."],
    ["Custom system","Software or operational tools shaped around your workflow."],
    ["Ongoing growth","SEO, paid media, social, maintenance and continuous improvement."],
  ];
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Pricing" title="Scope first. Price second." sub="We price around the real problem, complexity and outcome — not a generic package." />
    <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1180px]"><div className="grid gap-4 lg:grid-cols-3">{ways.map(([t,c],i)=><article key={t} className={`min-h-[430px] rounded-[30px] p-8 ${i===1?"bg-black text-white":"bg-white"}`}><p className={`text-[12px] font-semibold ${i===1?"text-white/34":"text-black/30"}`}>0{i+1}</p><h2 className="mt-20 text-[clamp(2.6rem,4vw,4rem)] font-semibold leading-[.94] tracking-[-.056em]">{t}</h2><p className={`mt-5 text-[16px] font-semibold leading-[1.5] ${i===1?"text-white/42":"text-black/43"}`}>{c}</p></article>)}</div></div></section><LargeCTA /></main>;
}

export function AppleShowreel() {
  return <main className="overflow-clip bg-black text-white"><PageHero eyebrow="Showreel" title="See the work in motion." sub="A quick look at websites, interfaces, branding and digital systems built by Being Digitals." dark />
    <section className="px-5 pb-28 md:px-8 md:pb-40"><div className="mx-auto max-w-[1180px] overflow-hidden rounded-[32px] border border-white/12 bg-[#0a0a0d] shadow-[0_50px_160px_rgba(0,0,0,.65)]"><video src="/videos/hero.mp4" controls autoPlay muted loop playsInline preload="metadata" className="aspect-video w-full object-cover" /></div></section>
    <section className="bg-white px-5 py-28 text-[#1d1d1f] md:px-8 md:py-40"><div className="mx-auto max-w-[1050px] text-center"><p className="text-[15px] font-semibold text-[#6e6e73]">Like the direction?</p><h2 className="mt-3 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-.068em]">Let’s build your version.</h2><Link href="/contact" className="bd-cta-primary bd-arrow-shift mt-8">Start a project <ArrowRight size={16}/></Link></div></section></main>;
}

export function AppleContact() {
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      service: String(form.get("type") || ""),
      details: String(form.get("message") || ""),
    };
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.message || "Could not send your inquiry.");
      setStatus("Thanks — your project inquiry has been received.");
      formElement.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not send your inquiry. Please email hello@beingdigitals.com.");
    } finally {
      setSubmitting(false);
    }
  };
  return <main className="overflow-clip bg-white text-[#1d1d1f]"><PageHero eyebrow="Start a Project" title="Tell us what needs to move." sub="A short brief is enough. We’ll help shape the right website, system, campaign or brand direction." />
    <section className="bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32"><div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[.72fr_1.28fr]">
      <div className="rounded-[30px] bg-black p-8 text-white md:p-10"><p className="text-[13px] font-semibold text-white/40">Being Digitals</p><h2 className="mt-3 text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[.93] tracking-[-.06em]">Good projects start with a clear goal.</h2><div className="mt-12 space-y-5 border-t border-white/10 pt-8"><a href="mailto:hello@beingdigitals.com" className="flex items-center gap-3 text-[15px] font-semibold text-white/72"><Mail size={17}/> hello@beingdigitals.com</a><p className="text-[14px] font-semibold text-white/38">Karachi, Pakistan · Working worldwide</p></div></div>
      <form onSubmit={submit} className="rounded-[30px] bg-white p-7 md:p-10"><div className="grid gap-5 md:grid-cols-2"><Field label="Name" name="name" placeholder="Your name"/><Field label="Email" name="email" placeholder="you@company.com" type="email"/><Field label="Company" name="company" placeholder="Company name"/><Field label="Project type" name="type" placeholder="Website, software, SEO..."/></div><label className="mt-5 block"><span className="mb-2 block text-[12px] font-semibold text-black/48">What do you want to improve?</span><textarea name="message" required rows={6} placeholder="Tell us about the goal, current problem and any useful context." className="w-full resize-none rounded-[18px] border border-black/[.1] bg-[#f8f8fa] px-4 py-3.5 text-[15px] font-medium outline-none transition focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/10"/></label><button disabled={submitting} className="bd-cta-primary bd-arrow-shift mt-6 disabled:cursor-wait disabled:opacity-60">{submitting ? "Sending..." : "Send project brief"} <ArrowRight size={16}/></button>{status&&<p className="mt-4 text-[13px] font-semibold leading-5 text-black/48">{status}</p>}</form>
    </div></section></main>;
}

function Field({label,name,placeholder,type="text"}:{label:string;name:string;placeholder:string;type?:string}) { return <label className="block"><span className="mb-2 block text-[12px] font-semibold text-black/48">{label}</span><input name={name} type={type} required={name==="name"||name==="email"} placeholder={placeholder} className="h-12 w-full rounded-[16px] border border-black/[.1] bg-[#f8f8fa] px-4 text-[15px] font-medium outline-none transition focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/10"/></label>; }

function LargeCTA() {
  return <section className="bd-content-auto relative overflow-hidden bg-[#f5f5f7] px-5 py-28 text-center md:px-8 md:py-40"><div className="absolute left-1/2 top-[75%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.18),transparent_68%)] blur-2xl"/><div className="relative mx-auto max-w-[1050px]"><p className="text-[15px] font-semibold text-[#6e6e73]">Ready when you are.</p><h2 className="mt-3 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-.068em]">Build something worth noticing.</h2><Link href="/contact" className="bd-cta-primary bd-arrow-shift mt-8">Start a project <ArrowRight size={16}/></Link></div></section>;
}
