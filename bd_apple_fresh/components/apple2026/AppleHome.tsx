"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, ChevronRight, MoveRight, Play, Search, Sparkles, Star, Workflow } from "lucide-react";
import RailControls from "@/components/ui/RailControls";
import { FaGoogle } from "react-icons/fa";
import { reviews } from "@/components/work/reviews/reviewsData";
import { caseStudies } from "@/components/work/case-studies/data";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const homeStories = [
  {
    id: "web",
    eyebrow: "Websites",
    title: "A first impression that keeps moving.",
    line: "Design, speed and conversion in one experience.",
    href: "/services/website-development",
    image: "/images/services/projects/business-website.webp",
    image2: "/images/services/projects/restaurant-website.webp",
    tone: "light" as const,
  },
  {
    id: "software",
    eyebrow: "Business software",
    title: "The whole operation. Finally clear.",
    line: "Custom systems shaped around how your team actually works.",
    href: "/services/business-software",
    image: "/images/services/softwares/restaurant-pos.png",
    image2: "/images/services/softwares/reports.png",
    tone: "dark" as const,
  },
  {
    id: "growth",
    eyebrow: "Search & growth",
    title: "Be there when intent becomes action.",
    line: "SEO and paid growth built around measurable demand.",
    href: "/services/seo",
    image: "/images/services/seo/search.png",
    image2: "/images/services/seo/organic-traffic.jpg",
    tone: "light" as const,
  },
  {
    id: "brand",
    eyebrow: "Brand & social",
    title: "Make the business recognizable at a glance.",
    line: "A visual language designed to travel across every screen.",
    href: "/services/branding",
    image: "/images/services/branding/project-sarss.webp",
    image2: "/images/services/social-media/creative-3.webp",
    tone: "warm" as const,
  },
  {
    id: "ai",
    eyebrow: "AI automation",
    title: "Let the repetitive work disappear.",
    line: "Connected workflows that keep people focused on judgment.",
    href: "/services/ai-automation",
    image: "/images/portfolio/ai.jpg",
    image2: "/images/portfolio/softwares.webp",
    tone: "dark" as const,
  },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 92, damping: 28, mass: .38 });

  const titleY = useTransform(p, [0, .24, .5], [0, -22, -112]);
  const titleScale = useTransform(p, [0, .38], [1, .9]);
  const titleOpacity = useTransform(p, [0, .28, .5], [1, 1, 0]);
  const stageScale = useTransform(p, [0, .5, .88], [.76, .96, 1.055]);
  const stageY = useTransform(p, [0, .54, .9], [118, 22, -18]);
  const stageRotateX = useTransform(p, [0, .58], [9, 0]);
  const leftX = useTransform(p, [0, .64], [-104, -12]);
  const rightX = useTransform(p, [0, .64], [104, 12]);
  const leftRotate = useTransform(p, [0, .64], [-10, -4]);
  const rightRotate = useTransform(p, [0, .64], [10, 4]);
  const auraScale = useTransform(p, [0, .9], [.72, 1.16]);
  const captionOpacity = useTransform(p, [.42, .64, .92], [0, 1, 1]);
  const captionY = useTransform(p, [.42, .78], [18, 0]);

  return (
    <section ref={ref} className="relative h-[150svh] bg-black text-white md:h-[190svh]">
      <div className="sticky top-0 h-svh overflow-hidden pt-[64px]">
        <motion.div
          style={reduce ? undefined : { scale: auraScale }}
          className="absolute left-1/2 top-[60%] h-[92vw] max-h-[900px] w-[92vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,113,255,.36)_0%,rgba(113,67,255,.14)_37%,transparent_69%)] blur-[12px] md:h-[70vw] md:w-[70vw]"
        />
        <div className="bd-noise absolute inset-0 opacity-[.18]" />

        <motion.div
          style={reduce ? undefined : { y: titleY, scale: titleScale, opacity: titleOpacity }}
          className="absolute inset-x-0 top-[10svh] z-30 px-5 text-center sm:top-[11svh] md:top-[12svh]"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55, ease }}
            className="mx-auto max-w-[360px] text-[13px] font-semibold tracking-[-.018em] text-white/58 sm:text-[14px] md:max-w-none md:text-[17px]"
          >
            Where great ideas become digital
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, delay: .04, ease }}
            className="mx-auto mt-2 max-w-[390px] text-[clamp(3.15rem,14.4vw,5.35rem)] font-semibold leading-[.86] tracking-[-.072em] sm:max-w-[560px] md:max-w-[1320px] md:text-[clamp(5.4rem,10.2vw,11.2rem)] md:leading-[.82] md:tracking-[-.078em]"
          >
            Build what moves business.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7, delay: .25 }}
            className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2.5 md:mt-7 md:gap-x-7"
          >
            <Link href="/services" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#2997ff] hover:underline md:text-[19px]">
              Explore services <ChevronRight size={18} />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-[15px] font-medium text-[#2997ff] hover:underline md:text-[19px]">
              See the work <ChevronRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={reduce ? undefined : { scale: stageScale, y: stageY, rotateX: stageRotateX }}
          className="absolute inset-x-0 bottom-[1vh] z-20 mx-auto h-[44vh] max-w-[1460px] origin-bottom [perspective:1600px] [transform-style:preserve-3d] md:bottom-[-3vh] md:h-[62vh]"
        >
          <motion.div
            style={reduce ? undefined : { x: leftX, rotate: leftRotate }}
            className="absolute left-[-10%] top-[28%] z-10 w-[58%] overflow-hidden rounded-[19px] border border-white/12 bg-white/[.08] p-1 shadow-[0_55px_150px_rgba(0,0,0,.68)] backdrop-blur-xl sm:left-[-4%] sm:w-[52%] md:left-[4%] md:top-[22%] md:w-[39%] md:rounded-[32px] md:p-2"
          >
            <Image
              src="/images/services/projects/restaurant-website.webp"
              alt="Website experience created by Being Digitals"
              width={1536}
              height={1024}
              priority
              quality={78}
              sizes="(max-width: 768px) 62vw, 42vw"
              className="aspect-[16/10] w-full rounded-[15px] object-cover object-top md:rounded-[25px]"
            />
          </motion.div>

          <div className="absolute left-1/2 top-[2%] z-30 w-[82%] -translate-x-1/2 overflow-hidden rounded-[22px] border border-white/14 bg-white/[.085] p-1.5 shadow-[0_75px_200px_rgba(0,0,0,.8)] backdrop-blur-2xl sm:w-[74%] md:top-[1%] md:w-[55%] md:rounded-[38px] md:p-2.5">
            <div className="mb-1 flex h-4 items-center gap-1 px-1.5 md:mb-1.5 md:h-6 md:px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/22" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/22" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/22" />
              <span className="mx-auto h-1.5 w-[38%] rounded-full bg-white/10" />
            </div>
            <Image
              src="/images/services/softwares/restaurant-pos.png"
              alt="Custom software by Being Digitals"
              width={1883}
              height={948}
              priority
              quality={82}
              sizes="(max-width: 768px) 82vw, 60vw"
              className="aspect-[16/9] w-full rounded-[16px] object-cover object-top md:rounded-[29px]"
            />
          </div>

          <motion.div
            style={reduce ? undefined : { x: rightX, rotate: rightRotate }}
            className="absolute right-[-9%] top-[31%] z-20 w-[54%] overflow-hidden rounded-[19px] border border-white/12 bg-white/[.08] p-1 shadow-[0_55px_150px_rgba(0,0,0,.68)] backdrop-blur-xl sm:right-[-3%] sm:w-[48%] md:right-[4%] md:top-[25%] md:w-[35%] md:rounded-[32px] md:p-2"
          >
            <Image
              src="/images/services/branding/project-sarss.webp"
              alt="Brand identity by Being Digitals"
              width={1586}
              height={992}
              priority
              quality={78}
              sizes="(max-width: 768px) 58vw, 38vw"
              className="aspect-[16/10] w-full rounded-[15px] object-cover md:rounded-[25px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={reduce ? undefined : { opacity: captionOpacity, y: captionY }}
          className="pointer-events-none absolute inset-x-0 bottom-[13vh] z-40 hidden justify-center gap-3 md:flex"
        >
          {["Web experiences", "Business software", "Brand systems", "Growth"].map((label) => (
            <span key={label} className="rounded-full border border-white/12 bg-white/[.07] px-4 py-2 text-[11px] font-semibold text-white/58 backdrop-blur-xl">
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          style={reduce ? undefined : { opacity: captionOpacity, y: captionY }}
          className="absolute inset-x-0 bottom-[3.4vh] z-50 px-5 text-center md:bottom-[5vh]"
        >
          <p className="text-[11px] font-semibold text-white/48 sm:text-[12px] md:text-[15px]">Websites · Software · Growth · Brand · AI</p>
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-t from-black via-black/72 to-transparent md:h-28" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-44">
      <div className="mx-auto max-w-[1120px] text-center">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">One digital partner.</p>
        <h2 className="mt-4 text-[clamp(3.5rem,7.5vw,8rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#1d1d1f]">
          Less noise. More impact.
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-[20px] font-semibold leading-[1.42] tracking-[-.026em] text-black/44 md:text-[25px]">
          Strategy, design, engineering and growth — considered together, so the whole experience feels intentional.
        </p>
      </div>
    </section>
  );
}

function HighlightRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const highlights = [
    { eyebrow: "Website", title: "Designed for the first second.", image: "/images/services/projects/e-commerce.webp", href: "/services/website-development", dark: true },
    { eyebrow: "Software", title: "Complex work. Simple screens.", image: "/images/services/softwares/reports.png", href: "/services/business-software", dark: false },
    { eyebrow: "Brand", title: "Recognizable before readable.", image: "/images/services/branding/project-mehran.webp", href: "/services/branding", dark: true },
    { eyebrow: "Social", title: "Built for the pause.", image: "/images/services/social-media/after.png", href: "/services/social-media", dark: false },
  ];

  return (
    <section className="bd-content-auto bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1260px] px-5 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Highlights</p>
            <h2 className="mt-2 text-[clamp(2.9rem,5vw,5.5rem)] font-semibold leading-[.92] tracking-[-.062em]">Designed to be felt.</h2>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-4">
            <Link href="/portfolio" className="hidden items-center gap-1 text-[16px] font-medium text-[#0066cc] hover:underline sm:inline-flex">View work <ChevronRight size={17} /></Link>
            <RailControls railRef={railRef} />
          </div>
        </div>
      </div>

      <div ref={railRef} className="bd-rail mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(20px,calc((100vw-1260px)/2+24px))] pb-3 md:mt-12 md:gap-6">
        {highlights.map((item, i) => (
          <Link key={item.title} href={item.href} className={`group relative h-[510px] min-w-[84vw] snap-start overflow-hidden rounded-[30px] md:h-[610px] md:min-w-[570px] ${item.dark ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className="absolute inset-x-0 top-0 z-20 p-7 md:p-9">
              <p className={`text-[13px] font-semibold ${item.dark ? "text-white/52" : "text-black/45"}`}>{item.eyebrow}</p>
              <h3 className={`mt-2 max-w-[470px] text-[clamp(2.15rem,4vw,3.45rem)] font-semibold leading-[.96] tracking-[-.052em] ${item.dark ? "text-white" : "text-[#1d1d1f]"}`}>{item.title}</h3>
              <span className={`mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.dark ? "bg-white text-black" : "bg-black text-white"}`}><ChevronRight size={18} /></span>
            </div>
            <div className={`absolute inset-x-0 bottom-0 flex h-[66%] items-end justify-center overflow-hidden ${i === 3 ? "px-12" : "px-5 md:px-8"}`}>
              {i === 3 ? (
                <div className="relative h-[95%] w-[55%] translate-y-[8%] overflow-hidden rounded-t-[38px] border-[5px] border-black bg-black shadow-[0_35px_80px_rgba(0,0,0,.18)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-[1%]">
                  <Image src={item.image} alt="Social media creative" fill sizes="320px" className="object-cover object-top" />
                </div>
              ) : (
                <div className="relative h-[88%] w-full translate-y-[10%] overflow-hidden rounded-t-[28px] shadow-[0_25px_80px_rgba(0,0,0,.18)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-[3%] group-hover:scale-[1.015]">
                  <Image src={item.image} alt={`${item.eyebrow} visual`} fill sizes="600px" className="object-cover object-top" />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function StoryVisual({ story, progress, index, total }: { story: typeof homeStories[number]; progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const fadeStart = Math.max(0, start - .03);
  const enter = start + .045;
  const leave = end - .045;
  const fadeEnd = Math.min(1, end + .03);
  const opacity = useTransform(progress, [fadeStart, enter, leave, fadeEnd], index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [.92, 1.035]);
  const y = useTransform(progress, [start, end], [52, -26]);

  const bg = story.tone === "dark" ? "bg-[#050507]" : story.tone === "warm" ? "bg-[#eee7df]" : "bg-[#f5f5f7]";

  return (
    <motion.div style={{ opacity }} className={`absolute inset-0 overflow-hidden rounded-[34px] ${bg}`}>
      <motion.div style={{ scale, y }} className="absolute inset-0">
        {story.id === "software" ? (
          <div className="absolute inset-0 flex items-center justify-center p-7 md:p-12">
            <div className="relative w-[94%] max-w-[970px] overflow-hidden rounded-[25px] border border-white/12 bg-white/10 p-2 shadow-[0_55px_140px_rgba(0,0,0,.55)] backdrop-blur-xl">
              <Image src={story.image} alt={story.title} width={1883} height={948} sizes="70vw" className="w-full rounded-[19px] object-cover" />
            </div>
            <div className="absolute bottom-[12%] right-[8%] hidden w-[34%] max-w-[360px] overflow-hidden rounded-[20px] border border-white/12 bg-black/70 p-1.5 shadow-2xl md:block">
              <Image src={story.image2} alt="Software reporting interface" width={1894} height={963} sizes="30vw" className="rounded-[15px]" />
            </div>
          </div>
        ) : story.id === "brand" ? (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid h-[78%] w-[86%] max-w-[920px] grid-cols-[1.3fr_.7fr] gap-4 rotate-[-2deg]">
              <div className="relative overflow-hidden rounded-[26px] shadow-[0_35px_90px_rgba(77,53,32,.18)]"><Image src={story.image} alt={story.title} fill sizes="50vw" className="object-cover" /></div>
              <div className="relative mt-[16%] overflow-hidden rounded-[26px] shadow-[0_35px_90px_rgba(77,53,32,.18)]"><Image src={story.image2} alt="Social design" fill sizes="25vw" className="object-cover" /></div>
            </div>
          </div>
        ) : story.id === "ai" ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-[68%] w-[68%] rounded-full border border-white/10" />
            <div className="absolute h-[48%] w-[48%] rounded-full border border-white/10" />
            <div className="absolute h-[30%] w-[30%] rounded-full bg-[radial-gradient(circle,rgba(49,109,255,.42),rgba(49,109,255,.06)_55%,transparent_70%)] blur-sm" />
            <div className="relative w-[70%] max-w-[720px] overflow-hidden rounded-[30px] border border-white/12 bg-white/[.07] p-2 shadow-[0_60px_170px_rgba(0,0,0,.58)] backdrop-blur-xl">
              <Image src={story.image} alt={story.title} width={1080} height={770} sizes="60vw" className="rounded-[23px]" />
            </div>
          </div>
        ) : story.id === "growth" ? (
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="relative w-[88%] max-w-[920px] overflow-hidden rounded-[30px] border border-black/[.06] bg-white p-2 shadow-[0_40px_120px_rgba(0,0,0,.12)]">
              <Image src={story.image} alt={story.title} width={1672} height={941} sizes="70vw" className="rounded-[23px]" />
            </div>
            <div className="absolute bottom-[11%] left-[10%] hidden h-[170px] w-[170px] overflow-hidden rounded-[28px] border-[7px] border-white bg-white shadow-[0_25px_70px_rgba(0,0,0,.14)] md:block">
              <Image src={story.image2} alt="Organic growth" fill sizes="170px" className="object-cover" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-7 pt-10">
            <div className="relative w-[86%] max-w-[900px] overflow-hidden rounded-[26px] border border-black/[.07] bg-white p-2 shadow-[0_42px_130px_rgba(0,0,0,.16)]">
              <div className="flex h-7 items-center gap-1.5 px-2"><span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" /><span className="h-2 w-2 rounded-full bg-black/15" /><span className="mx-auto h-2 w-[38%] rounded-full bg-black/[.06]" /></div>
              <Image src={story.image} alt={story.title} width={1672} height={941} sizes="70vw" className="rounded-[19px]" />
            </div>
            <div className="absolute bottom-[9%] right-[9%] hidden w-[35%] max-w-[340px] rotate-[5deg] overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_30px_85px_rgba(0,0,0,.2)] md:block">
              <Image src={story.image2} alt="Website project" width={1536} height={1024} sizes="28vw" className="aspect-[16/10] object-cover object-top" />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function StoryCopy({ story, progress, index, total }: { story: typeof homeStories[number]; progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const enter = start + .045;
  const leave = end - .045;
  const opacity = useTransform(progress, [Math.max(0, start - .025), enter, leave, Math.min(1, end + .025)], index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [26, -24]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="text-[14px] font-semibold text-white/42 md:text-[16px]">{story.eyebrow}</p>
      <h3 className="mt-3 max-w-[520px] text-[clamp(3.1rem,5.4vw,6rem)] font-semibold leading-[.9] tracking-[-.067em]">{story.title}</h3>
      <p className="mt-6 max-w-[460px] text-[17px] font-semibold leading-[1.5] text-white/44 md:text-[19px]">{story.line}</p>
      <Link href={story.href} className="mt-6 inline-flex w-fit items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">Learn more <ChevronRight size={18} /></Link>
    </motion.div>
  );
}

function StoryProgress({ progress, index, total, reduce }: { progress: MotionValue<number>; index: number; total: number; reduce: boolean | null }) {
  const scaleX = useTransform(progress, [index / total, (index + 1) / total], [0, 1]);
  return (
    <span className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/12">
      <motion.span style={reduce ? { scaleX: 1 } : { scaleX }} className="absolute inset-0 origin-left bg-white" />
    </span>
  );
}

function ProductStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 82, damping: 28, mass: .38 });

  return (
    <section ref={ref} className="relative bg-black text-white lg:h-[520svh]">
      <div className="hidden lg:sticky lg:top-[64px] lg:grid lg:h-[calc(100svh-64px)] lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:gap-12 lg:overflow-hidden lg:px-8">
        <div className="relative ml-auto h-[68%] w-full max-w-[520px]">
          {homeStories.map((story, i) => <StoryCopy key={story.id} story={story} progress={p} index={i} total={homeStories.length} />)}
          <div className="absolute bottom-0 left-0 flex w-[88%] gap-2">
            {homeStories.map((story, i) => <StoryProgress key={story.id} progress={p} index={i} total={homeStories.length} reduce={reduce} />)}
          </div>
        </div>
        <div className="relative h-[79%] w-full max-w-[900px]">
          {homeStories.map((story, i) => <StoryVisual key={story.id} story={story} progress={p} index={i} total={homeStories.length} />)}
        </div>
      </div>

      <div className="lg:hidden">
        {homeStories.map((story) => (
          <article key={story.id} className="border-b border-white/[.08] px-5 py-20 last:border-b-0">
            <p className="text-[13px] font-semibold text-white/42">{story.eyebrow}</p>
            <h3 className="mt-3 text-[clamp(3.3rem,13vw,5.5rem)] font-semibold leading-[.88] tracking-[-.07em]">{story.title}</h3>
            <p className="mt-5 max-w-xl text-[17px] font-semibold leading-[1.5] text-white/42">{story.line}</p>
            <Link href={story.href} className="mt-5 inline-flex items-center gap-1 text-[17px] text-[#2997ff]">Learn more <ChevronRight size={17} /></Link>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[28px] bg-[#111]">
              <Image src={story.image} alt={story.title} fill sizes="100vw" className="object-cover object-top" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesLineup() {
  const services = [
    ["Website Development", "/services/website-development", "/images/portfolio/websites.webp", "bg-[#e8f2ff]"],
    ["Business Software", "/services/business-software", "/images/portfolio/softwares.webp", "bg-[#eef0f3]"],
    ["SEO", "/services/seo", "/images/portfolio/seo-growth.png", "bg-[#eaf5ed]"],
    ["Social Media", "/services/social-media", "/images/services/social-media/creative-2.webp", "bg-[#f4e9ee]"],
    ["Branding", "/services/branding", "/images/portfolio/branding-social.png", "bg-[#f4eee8]"],
    ["AI Automation", "/services/ai-automation", "/images/portfolio/ai.jpg", "bg-[#eceaf7]"],
  ] as const;

  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Everything we build</p>
            <h2 className="mt-2 max-w-4xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[.91] tracking-[-.067em]">One studio. A complete digital system.</h2>
          </div>
          <Link href="/services" className="mb-1 inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">All services <ChevronRight size={18} /></Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
          {services.map(([title, href, image, bg], i) => (
            <Link key={title} href={href} className={`group relative min-h-[480px] overflow-hidden rounded-[30px] ${bg} ${i === 0 || i === 5 ? "md:col-span-2 md:min-h-[610px]" : ""}`}>
              <div className="relative z-20 p-7 md:p-9">
                <p className="text-[13px] font-semibold text-black/44">Being Digitals</p>
                <div className="mt-1 flex items-start justify-between gap-5">
                  <h3 className={`font-semibold leading-[.94] tracking-[-.056em] ${i === 0 || i === 5 ? "max-w-3xl text-[clamp(2.8rem,5.5vw,5.7rem)]" : "max-w-xl text-[clamp(2.5rem,4vw,4rem)]"}`}>{title}</h3>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110"><ChevronRight size={19} /></span>
                </div>
              </div>
              <div className={`absolute inset-x-0 bottom-0 flex h-[66%] items-end justify-center ${i === 3 ? "px-16" : "px-7 md:px-12"}`}>
                <div className={`relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,.15)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.015] ${i === 3 ? "h-[94%] w-[45%] rounded-t-[34px] border-[5px] border-black bg-black" : i === 4 ? "h-[92%] w-[72%] rotate-[3deg] rounded-[24px]" : "h-[90%] w-[90%] translate-y-[10%] rounded-t-[25px]"}`}>
                  <Image src={image} alt={`${title} by Being Digitals`} fill sizes={i === 0 || i === 5 ? "80vw" : "45vw"} className="object-cover object-top" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


function IntentSpotlight() {
  const nodes = [
    { label: "Search", icon: Search, pos: "left-[17%] top-[54%] md:left-[25%] md:top-[58%]" },
    { label: "Google", icon: FaGoogle, pos: "left-[28%] top-[28%] md:left-[34%] md:top-[31%]" },
    { label: "AI", icon: Bot, pos: "left-1/2 top-[18%] -translate-x-1/2 md:top-[20%]" },
    { label: "Content", icon: Sparkles, pos: "right-[28%] top-[28%] md:right-[34%] md:top-[31%]" },
    { label: "Analytics", icon: BarChart3, pos: "right-[17%] top-[54%] md:right-[25%] md:top-[58%]" },
  ] as const;

  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1260px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-[clamp(3.8rem,7.6vw,8rem)] font-semibold leading-[.88] tracking-[-.071em]">Be there when intent appears.</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
            <Link href="/services/seo" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">Learn more <ChevronRight size={17}/></Link>
            <Link href="/contact" className="bd-arrow-shift inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">Start a project <ChevronRight size={17}/></Link>
          </div>
        </div>

        <div className="relative mx-auto mt-14 min-h-[540px] max-w-[1080px] overflow-hidden rounded-[34px] bg-[linear-gradient(145deg,#eff6ff,#f8fbff_55%,#dcecff)] p-5 shadow-[inset_0_0_0_1px_rgba(0,73,160,.04)] md:min-h-[680px] md:p-8">
          <div className="absolute inset-x-[8%] top-[11%] z-20 flex h-14 items-center gap-3 rounded-full border border-black/[.07] bg-white/92 px-5 shadow-[0_18px_55px_rgba(40,95,160,.12)] backdrop-blur-xl md:inset-x-[15%] md:h-16 md:px-7">
            <Search size={18} className="text-black/34"/>
            <span className="truncate text-[13px] font-medium text-black/52 md:text-[16px]">best digital agency for growth</span>
            <span className="ml-auto hidden rounded-full bg-[#0071e3] px-3 py-1.5 text-[10px] font-semibold text-white sm:block">Search</span>
          </div>

          <div className="absolute inset-x-[8%] bottom-[-12%] top-[27%] overflow-hidden rounded-t-[28px] border border-black/[.06] bg-white/68 shadow-[0_35px_90px_rgba(49,95,155,.10)] backdrop-blur-xl md:inset-x-[16%] md:top-[30%]">
            <div className="flex h-9 items-center gap-1.5 border-b border-black/[.05] px-4">
              <span className="h-2 w-2 rounded-full bg-black/10"/>
              <span className="h-2 w-2 rounded-full bg-black/10"/>
              <span className="h-2 w-2 rounded-full bg-black/10"/>
              <span className="mx-auto h-2 w-[36%] rounded-full bg-black/[.05]"/>
            </div>

            <div className="absolute left-1/2 top-[55%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(87,106,255,.30),rgba(111,162,255,.10)_48%,transparent_70%)] blur-sm md:h-[310px] md:w-[310px]"/>
            <div className="absolute left-1/2 top-[55%] h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7a8dff]/20 md:h-[205px] md:w-[205px]"/>
            <div className="absolute left-1/2 top-[55%] h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7a8dff]/25 bg-white shadow-[0_18px_55px_rgba(81,101,255,.22)] md:h-[104px] md:w-[104px]">
              <div className="absolute inset-0 flex items-center justify-center"><Sparkles size={30} className="text-[#5b61ff] md:h-9 md:w-9"/></div>
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" fill="none" aria-hidden="true">
              <path d="M500 330 C410 250 330 220 230 250" stroke="rgba(83,107,255,.20)" strokeWidth="2" strokeDasharray="6 8"/>
              <path d="M500 330 C455 215 445 160 500 115" stroke="rgba(83,107,255,.20)" strokeWidth="2" strokeDasharray="6 8"/>
              <path d="M500 330 C590 250 675 220 775 250" stroke="rgba(83,107,255,.20)" strokeWidth="2" strokeDasharray="6 8"/>
              <path d="M500 330 C385 345 300 390 205 455" stroke="rgba(83,107,255,.20)" strokeWidth="2" strokeDasharray="6 8"/>
              <path d="M500 330 C620 345 705 390 805 455" stroke="rgba(83,107,255,.20)" strokeWidth="2" strokeDasharray="6 8"/>
            </svg>

            {nodes.map(({label, icon: Icon, pos}) => (
              <div key={label} className={`absolute z-20 ${pos}`}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/[.05] bg-white text-[#1d1d1f] shadow-[0_16px_46px_rgba(40,73,128,.12)] md:h-20 md:w-20">
                  <Icon className={`${label === "Google" ? "text-[#4285F4]" : "text-[#5b61ff]"} h-5 w-5 md:h-7 md:w-7`} aria-hidden="true"/>
                </div>
                <span className="mt-2 hidden text-center text-[10px] font-semibold text-black/35 md:block">{label}</span>
              </div>
            ))}
          </div>

          <span className="absolute bottom-[14%] left-[6%] z-30 rounded-[16px] border border-white/60 bg-white/82 px-4 py-3 text-[11px] font-semibold text-black/55 shadow-[0_18px_50px_rgba(38,70,120,.10)] backdrop-blur-xl md:left-[10%]">Page 1 visibility</span>
          <span className="absolute right-[5%] top-[31%] z-30 rounded-[16px] border border-white/60 bg-white/82 px-4 py-3 text-[11px] font-semibold text-black/55 shadow-[0_18px_50px_rgba(38,70,120,.10)] backdrop-blur-xl md:right-[9%]">Qualified intent ↑</span>
          <span className="absolute bottom-[6%] right-[7%] hidden items-center gap-2 rounded-[16px] border border-white/60 bg-white/82 px-4 py-3 text-[11px] font-semibold text-black/55 shadow-[0_18px_50px_rgba(38,70,120,.10)] backdrop-blur-xl md:flex"><Workflow size={13}/> Search → action</span>
        </div>
      </div>
    </section>
  );
}

function WorkShowcase() {
  const railRef = useRef<HTMLDivElement>(null);
  const projects = caseStudies.slice(0, 4);

  return (
    <section className="bd-content-auto bg-[#f5f5f7] py-28 md:py-40">
      <div className="mx-auto max-w-[1260px] px-5 md:px-6">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Selected work</p>
        <div className="mt-2 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="max-w-4xl text-[clamp(3.3rem,6.4vw,6.8rem)] font-semibold leading-[.91] tracking-[-.067em]">Built around outcomes.</h2>
            <p className="mt-5 max-w-2xl text-[17px] font-semibold leading-[1.5] text-black/42 md:text-[19px]">Every project starts with a business problem, not a visual trend.</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-4">
            <Link href="/case-studies" className="bd-arrow-shift hidden items-center gap-1 text-[17px] text-[#0066cc] hover:underline md:inline-flex">Explore case studies <ChevronRight size={18} /></Link>
            <RailControls railRef={railRef} />
          </div>
        </div>
      </div>
      <div ref={railRef} className="bd-rail mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1260px)/2+24px))] pb-3">
        {projects.map((study) => {
          const result = study.results[0];
          return (
            <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group min-w-[88vw] snap-start md:min-w-[760px]">
              <article className="bd-lift-card overflow-hidden rounded-[32px] bg-white">
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <Image src={study.cover} alt={`${study.client} case study`} fill sizes="(max-width: 768px) 88vw, 760px" className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.018]" />
                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-black shadow-sm backdrop-blur-xl transition-transform duration-300 group-hover:scale-110"><MoveRight size={18} /></span>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_.9fr] md:p-8">
                  <div>
                    <p className="text-[12px] font-semibold text-black/38">{study.category}</p>
                    <h3 className="mt-2 text-[clamp(2rem,3.2vw,3.1rem)] font-semibold leading-[.96] tracking-[-.052em]">{study.client}</h3>
                    <p className="mt-4 line-clamp-2 text-[14px] font-medium leading-[1.55] text-black/46"><span className="font-semibold text-black/62">Problem:</span> {study.challenge}</p>
                  </div>
                  <div className="flex items-end justify-between gap-5 rounded-[22px] bg-[#f5f5f7] p-5">
                    <div><p className="text-[11px] font-semibold text-black/34">Outcome</p><p className="mt-2 text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-none tracking-[-.07em]">{result.value}</p><p className="mt-2 text-[13px] font-semibold text-black/44">{result.label}</p></div>
                    <span className="text-[12px] font-semibold text-[#0066cc]">View case study</span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Ecosystem() {
  const reduce = useReducedMotion();
  const engines = [
    {
      n: "01",
      label: "Web experiences",
      note: "Attention into action",
      image: "/images/services/projects/restaurant-website.webp",
    },
    {
      n: "02",
      label: "Business software",
      note: "Operations made clear",
      image: "/images/services/softwares/reports.png",
    },
    {
      n: "03",
      label: "Brand systems",
      note: "Recognition everywhere",
      image: "/images/services/branding/project-sarss.webp",
    },
    {
      n: "04",
      label: "Growth engine",
      note: "Demand that compounds",
      image: "/images/services/seo/search.png",
    },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-24 lg:py-28">
      <div className="bd-noise absolute inset-0 opacity-[.1]" />
      <div className="pointer-events-none absolute left-[58%] top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(35,104,255,.18),rgba(83,57,255,.07)_43%,transparent_72%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-[1260px] gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .35 }}
          transition={{ duration: .75, ease }}
          className="max-w-[490px] lg:justify-self-end"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] md:text-[14px]">The Being Digitals system</p>
          <h2 className="mt-3 max-w-[470px] text-[clamp(3.6rem,5.5vw,6.1rem)] font-semibold leading-[.89] tracking-[-.07em]">
            One system. Four engines.
          </h2>
          <p className="mt-5 max-w-[430px] text-[16px] font-semibold leading-[1.5] text-white/48 md:text-[17px]">
            Web, software, brand and growth work together as one connected system — so every part strengthens the next.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-4">
            {[
              ["01", "Web", "Convert"],
              ["02", "Software", "Operate"],
              ["03", "Brand", "Recognize"],
              ["04", "Growth", "Compound"],
            ].map(([n, label, outcome]) => (
              <div key={n} className="border-t border-white/12 pt-3">
                <p className="text-[10px] font-semibold text-white/28">{n}</p>
                <p className="mt-1 text-[14px] font-semibold text-white/86">{label}</p>
                <p className="mt-0.5 text-[11px] font-medium text-white/36">{outcome}</p>
              </div>
            ))}
          </div>

          <Link href="/services" className="bd-arrow-shift mt-7 inline-flex items-center gap-1 text-[16px] font-medium text-[#2997ff]">
            Explore the system <ChevronRight size={17}/>
          </Link>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[720px]">
          <div className="pointer-events-none absolute inset-[20%] rounded-full border border-white/[.08]" />
          <div className="pointer-events-none absolute inset-[34%] rounded-full border border-white/[.09]" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {engines.map((engine, index) => (
              <motion.article
                key={engine.n}
                initial={reduce ? false : { opacity: 0, y: 22, scale: .97 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: .3 }}
                transition={{ duration: .65, delay: index * .07, ease }}
                className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0c0f]/95 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,.38)] backdrop-blur-xl md:rounded-[26px]"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[17px] bg-white/[.04] md:rounded-[20px]">
                  <Image
                    src={engine.image}
                    alt={engine.label}
                    fill
                    sizes="(max-width: 1024px) 46vw, 330px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/72 to-transparent" />
                </div>
                <div className="flex items-end justify-between gap-3 px-3 pb-3 pt-3">
                  <div>
                    <p className="text-[9px] font-semibold text-white/28">{engine.n}</p>
                    <p className="mt-1 text-[12px] font-semibold text-white/88 md:text-[13px]">{engine.label}</p>
                  </div>
                  <p className="hidden text-right text-[9px] font-semibold text-white/32 sm:block md:text-[10px]">{engine.note}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: .88 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: .4 }}
            transition={{ duration: .7, delay: .2, ease }}
            className="absolute left-1/2 top-1/2 z-20 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-[#111521]/95 shadow-[0_0_90px_rgba(45,108,255,.34)] backdrop-blur-2xl md:h-[116px] md:w-[116px]"
          >
            <Image
              src="/images/brand-logo-light.png"
              alt="Being Digitals"
              width={999}
              height={399}
              sizes="120px"
              className="w-[72%] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustedCompanies() {
  const clients = [
    { name: "M-One Targets", logo: "/images/clients/M-ONE-LOGO-1112024.webp" },
    { name: "The Pest Zone", logo: "/images/clients/the-pest-zones.png" },
    { name: "Mehran Royale", logo: "/images/clients/mehran-royalee.png" },
    { name: "Taste of Karachi", logo: "/images/clients/taste-of-karachi.png" },
    { name: "Brandealss", logo: "/images/clients/brandealss.png" },
    { name: "Pioneer", logo: "/images/clients/pioneerexp.png" },
    { name: "Vice City Farms", logo: "/images/clients/vice-city-farms.png" },
    { name: "NatureSynch", logo: "/images/clients/naturesynch.png" },
  ];

  return (
    <section className="bd-content-auto overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[14px] font-semibold text-[#6e6e73] md:text-[16px]">Trusted by companies</p>
            <h2 className="mt-3 max-w-[720px] text-[clamp(3.1rem,5.7vw,6rem)] font-semibold leading-[.91] tracking-[-.065em] text-[#1d1d1f]">
              Built for businesses that expect more.
            </h2>
          </div>
          <p className="max-w-[560px] text-[16px] font-semibold leading-[1.55] text-black/42 lg:justify-self-end md:text-[18px]">
            From growing local brands to operational teams, our work is designed to earn trust before the first meeting — and keep it after launch.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[30px] border border-black/[.07] bg-[#f5f5f7] sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex min-h-[122px] items-center justify-center border-b border-r border-black/[.06] p-5 transition-colors duration-300 hover:bg-white md:min-h-[150px]"
            >
              <div className="relative h-14 w-full max-w-[150px] opacity-[.48] grayscale transition-all duration-300 group-hover:opacity-90 group-hover:grayscale-0 md:h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold text-black/34">
          <p>Selected client relationships across web, software, brand and growth.</p>
          <Link href="/portfolio" className="bd-arrow-shift inline-flex items-center gap-1 text-[#0066cc]">
            See selected work <ChevronRight size={14}/>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StudioFilm() {
  return (
    <section className="bd-content-auto bg-[#f5f5f7] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1260px] gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-14">
        <div className="max-w-[520px]">
          <p className="text-[14px] font-semibold text-[#6e6e73] md:text-[16px]">Inside Being Digitals</p>
          <h2 className="mt-3 text-[clamp(3.15rem,5.1vw,5.7rem)] font-semibold leading-[.91] tracking-[-.066em] text-[#1d1d1f]">
            See the work behind the work.
          </h2>
          <p className="mt-5 max-w-[470px] text-[15px] font-semibold leading-[1.55] text-black/42 md:text-[17px]">
            A closer look at how strategy, design, development and growth come together inside the studio.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/showreel" className="bd-arrow-shift inline-flex items-center gap-1 text-[16px] font-medium text-[#0066cc]">
              Explore the studio <ChevronRight size={17}/>
            </Link>
            <a
              href="https://youtu.be/gt8SMTYUfjI"
              target="_blank"
              rel="noreferrer"
              className="bd-arrow-shift inline-flex items-center gap-1 text-[15px] font-medium text-black/60"
            >
              Watch on YouTube <ArrowRight size={14}/>
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-black/[.07] bg-black p-1.5 shadow-[0_28px_90px_rgba(0,0,0,.15)] md:rounded-[34px] md:p-2">
          <div className="relative aspect-video overflow-hidden rounded-[23px] bg-[#09090b] md:rounded-[28px]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/gt8SMTYUfjI?rel=0&modestbranding=1&playsinline=1"
              title="Being Digitals — studio film"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-[1260px] flex-wrap items-center gap-x-5 gap-y-2 border-t border-black/[.07] pt-5 text-[11px] font-semibold text-black/36">
        <span>Strategy</span><span>Design</span><span>Development</span><span>Growth</span><span>Automation</span>
      </div>
    </section>
  );
}

function Proof() {
  const railRef = useRef<HTMLDivElement>(null);
  const googleReviews = reviews.slice(0, 5);
  const reviewCount = reviews.length;

  return (
    <section className="bd-content-auto overflow-hidden bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[900px]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7] text-[20px] text-[#4285F4]"><FaGoogle aria-hidden="true" /></span>
              <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Google Reviews</p>
            </div>
            <h2 className="mt-5 text-[clamp(3.4rem,6.7vw,7rem)] font-semibold leading-[.91] tracking-[-.068em] text-[#1d1d1f]">Trust is part of the product.</h2>
          </div>
          <RailControls railRef={railRef} />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[24px] bg-[#f5f5f7] p-5 md:p-6"><div className="flex gap-1" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" className="text-[#f9ab00]" />)}</div><p className="mt-4 text-[36px] font-semibold leading-none tracking-[-.06em]">5.0</p><p className="mt-2 text-[12px] font-semibold text-black/42">Average featured rating</p></div>
          <div className="rounded-[24px] bg-[#f5f5f7] p-5 md:p-6"><p className="text-[36px] font-semibold leading-none tracking-[-.06em]">{reviewCount}</p><p className="mt-2 text-[12px] font-semibold text-black/42">Featured client reviews</p></div>
          <div className="rounded-[24px] bg-black p-5 text-white md:p-6"><p className="text-[36px] font-semibold leading-none tracking-[-.06em]">120+</p><p className="mt-2 text-[12px] font-semibold text-white/42">Projects delivered</p></div>
        </div>
      </div>

      <div ref={railRef} className="bd-rail mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(20px,calc((100vw-1260px)/2+24px))] pb-4">
        {googleReviews.map((review) => (
          <article key={review.company} className="bd-lift-card flex min-h-[390px] w-[86vw] max-w-[520px] shrink-0 snap-start flex-col rounded-[34px] bg-[#f5f5f7] p-7 md:min-h-[420px] md:p-9">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[17px] text-[#4285F4] shadow-[0_1px_0_rgba(0,0,0,.04)]"><FaGoogle aria-hidden="true" /></span><span className="text-[13px] font-semibold text-black/46">Client review</span></div>
              <div className="flex gap-0.5" aria-hidden="true">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={13} fill="currentColor" className="text-[#f9ab00]" />)}</div>
            </div>
            <blockquote className="mt-9 text-[clamp(1.8rem,2.7vw,2.65rem)] font-semibold leading-[1.08] tracking-[-.047em] text-[#1d1d1f]">“{review.quote}”</blockquote>
            <div className="mt-auto pt-10"><p className="text-[15px] font-semibold text-[#1d1d1f]">{review.company}</p><p className="mt-1 text-[13px] font-medium text-black/42">{review.project}</p></div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1260px] flex-wrap items-center gap-3 px-5 md:px-8">
        <Link href="/reviews" className="bd-cta-primary bd-arrow-shift">View all reviews <ChevronRight size={17} /></Link>
        <Link href="/case-studies" className="bd-cta-secondary bd-arrow-shift">See client outcomes <ChevronRight size={17} /></Link>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bd-content-auto bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="relative mx-auto max-w-[1260px] overflow-hidden rounded-[36px] bg-black px-6 py-20 text-white shadow-[0_35px_120px_rgba(0,0,0,.16)] md:rounded-[48px] md:px-12 md:py-28">
        <div className="bd-noise absolute inset-0 opacity-[.16]" />
        <div className="absolute left-1/2 top-[78%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,113,227,.34),rgba(88,57,255,.13)_38%,transparent_70%)] blur-2xl" />
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/[.06]" />
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/[.07]" />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <p className="text-[14px] font-semibold text-white/44 md:text-[16px]">The next move starts here.</p>
          <h2 className="mx-auto mt-4 max-w-[980px] text-[clamp(3.8rem,8.2vw,8.6rem)] font-semibold leading-[.87] tracking-[-.074em]">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-[clamp(1.8rem,3.4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-.045em] text-white/48">
            Let&apos;s make it real.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="bd-cta-primary bd-arrow-shift">
              Start a project <ArrowRight size={16}/>
            </Link>
            <Link href="/portfolio" className="bd-cta-secondary bd-cta-secondary-dark bd-arrow-shift">
              See our work <ChevronRight size={16}/>
            </Link>
          </div>

          <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-2 gap-3 border-t border-white/10 pt-7 sm:grid-cols-4">
            {[
              ["Web", "Experiences"],
              ["Software", "Systems"],
              ["Brand", "Identity"],
              ["Growth", "Demand"],
            ].map(([label, sub]) => (
              <div key={label}>
                <p className="text-[12px] font-semibold text-white/82">{label}</p>
                <p className="mt-1 text-[10px] font-medium text-white/30">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AppleHome() {
  return (
    <main className="overflow-clip bg-white pt-0 text-[#1d1d1f]">
      <Hero />
      <Intro />
      <HighlightRail />
      <ProductStory />
      <ServicesLineup />
      <IntentSpotlight />
      <WorkShowcase />
      <TrustedCompanies />
      <Ecosystem />
      <StudioFilm />
      <Proof />
      <FinalCTA />
    </main>
  );
}
