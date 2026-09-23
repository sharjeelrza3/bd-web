"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { ServiceData } from "./serviceData";
import VisualScene from "./VisualScene";
import ScrollLift from "../ScrollLift";

const ease = [0.16, 1, 0.3, 1] as const;

function LocalNav({ data }: { data: ServiceData }) {
  return (
    <div className="sticky top-[64px] z-40 border-b border-black/[.075] bg-white/88 backdrop-blur-2xl">
      <div className="mx-auto flex h-[48px] max-w-[1180px] items-center justify-between gap-5 px-5 md:px-8">
        <Link href="/services" className="truncate text-[14px] font-semibold tracking-[-0.025em] md:text-[15px]">{data.title}</Link>
        <div className="flex shrink-0 items-center gap-5 text-[12px] font-medium text-black/52">
          <a href="#highlights" className="hidden transition-colors hover:text-black sm:block">Highlights</a>
          <a href="#details" className="hidden transition-colors hover:text-black md:block">Details</a>
          <a href="#capabilities" className="hidden transition-colors hover:text-black md:block">What&apos;s included</a>
          <Link href="/contact" className="rounded-full bg-[#0071e3] px-4 py-2 font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed]">Start</Link>
        </div>
      </div>
    </div>
  );
}

function Hero({ data }: { data: ServiceData }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });
  const textY = useTransform(progress, [0, 0.65], [0, -72]);
  const textOpacity = useTransform(progress, [0, 0.48, 0.72], [1, 1, 0]);
  const scale = useTransform(progress, [0, 0.72], [0.86, 1.03]);
  const y = useTransform(progress, [0, 0.72], [90, -8]);

  return (
    <section ref={ref} className="relative h-[145svh] bg-white">
      <div className="sticky top-[112px] h-[calc(100svh-112px)] overflow-hidden px-4 md:px-8">
        <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center pt-[6vh] md:pt-[7vh]">
          <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="relative z-20 mx-auto max-w-[1100px] px-1 text-center">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[15px] font-semibold tracking-[-0.02em] text-[#6e6e73] md:text-[17px]">{data.eyebrow}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.04, ease }} className="mx-auto mt-2 text-balance text-[clamp(3.7rem,8.3vw,8.8rem)] font-semibold leading-[.89] tracking-[-.073em] text-[#1d1d1f]">{data.headline}</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.72, delay: 0.18 }} className="mx-auto mt-6 max-w-3xl text-[17px] font-semibold leading-[1.5] tracking-[-0.02em] text-[#6e6e73] md:text-[21px]">{data.intro}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.68, delay: 0.28 }} className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full bg-[#0071e3] px-5 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed] md:text-[15px]">{data.primary}</Link>
              <Link href="/portfolio" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#0066cc] hover:underline md:text-[17px]">See our work <ChevronRight size={17} /></Link>
            </motion.div>
          </motion.div>

          <motion.div style={reduce ? undefined : { scale, y }} className="absolute inset-x-4 bottom-[-19vh] z-10 mx-auto max-w-[1320px] will-change-transform md:inset-x-8 md:bottom-[-24vh]">
            <VisualScene kind={data.key} image={data.visual} title={data.title} mode="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Highlights({ data }: { data: ServiceData }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.7, 840), behavior: "smooth" });

  return (
    <section id="highlights" className="bd-defer overflow-hidden bg-[#f5f5f7] py-24 md:py-36">
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8 px-5 md:px-8">
        <ScrollLift>
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">Get the highlights.</p>
          <h2 className="mt-3 max-w-4xl text-[clamp(3.3rem,6.5vw,6.8rem)] font-semibold leading-[.92] tracking-[-.065em]">The parts you&apos;ll notice first.</h2>
        </ScrollLift>
        <div className="hidden gap-2 pb-1 sm:flex">
          <button onClick={() => move(-1)} aria-label="Previous highlight" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[.07] transition hover:bg-black/[.12] focus-visible:ring-2 focus-visible:ring-black"><ArrowLeft size={18} /></button>
          <button onClick={() => move(1)} aria-label="Next highlight" className="flex h-12 w-12 items-center justify-center rounded-full bg-black/[.07] transition hover:bg-black/[.12] focus-visible:ring-2 focus-visible:ring-black"><ArrowRight size={18} /></button>
        </div>
      </div>

      <div ref={rail} className="bd-rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(20px,calc((100vw-1440px)/2+32px))] pb-5 md:mt-16 md:gap-6">
        {data.highlights.map((item, index) => (
          <article key={item.title} className="group relative min-h-[610px] w-[86vw] max-w-[760px] shrink-0 snap-center overflow-hidden rounded-[34px] bg-white md:min-h-[690px] md:w-[58vw] md:rounded-[42px]">
            <div className="relative z-20 p-7 pb-5 md:p-10 md:pb-7">
              <p className="text-[13px] font-semibold text-[#0071e3]">0{index + 1} · {item.kicker}</p>
              <h3 className="mt-2 max-w-[650px] text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[.94] tracking-[-.06em]">{item.title}</h3>
              <p className="mt-4 max-w-xl text-[16px] font-medium leading-[1.5] text-black/46 md:text-[17px]">{item.text}</p>
            </div>
            <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4">
              <VisualScene kind={data.key} image={item.visual} title={item.title} mode="card" />
            </div>
          </article>
        ))}
        <div className="w-[4vw] shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

function FeatureLayer({ progress, data, index }: { progress: MotionValue<number>; data: ServiceData; index: number }) {
  const start = index / data.highlights.length;
  const end = (index + 1) / data.highlights.length;
  const midA = start + (end - start) * 0.2;
  const midB = end - (end - start) * 0.2;
  const opacity = useTransform(progress, [Math.max(0, start - 0.06), midA, midB, Math.min(1, end + 0.06)], index === 0 ? [1, 1, 1, 0] : index === data.highlights.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [42, -38]);
  const scale = useTransform(progress, [start, end], [0.94, 1]);
  const item = data.highlights[index];

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute inset-0 flex items-center will-change-transform">
      <VisualScene kind={data.key} image={item.visual} title={item.title} mode="wide" />
    </motion.div>
  );
}

function CopyLayer({ progress, data, index }: { progress: MotionValue<number>; data: ServiceData; index: number }) {
  const start = index / data.highlights.length;
  const end = (index + 1) / data.highlights.length;
  const enter = start + 0.035;
  const leave = end - 0.035;
  const opacity = useTransform(progress, [Math.max(0, start - 0.025), enter, leave, Math.min(1, end + 0.025)], index === 0 ? [1, 1, 1, 0] : index === data.highlights.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [28, -26]);
  const item = data.highlights[index];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <p className="text-[13px] font-semibold text-white/38">0{index + 1} · {item.kicker}</p>
      <h3 className="mt-4 text-balance text-[clamp(3rem,5.5vw,6rem)] font-semibold leading-[.92] tracking-[-.064em]">{item.title}</h3>
      <p className="mt-6 max-w-lg text-[17px] font-medium leading-[1.55] text-white/48 md:text-[19px]">{item.text}</p>
    </motion.div>
  );
}


function ProgressSegment({ progress, index, total, reduce }: { progress: MotionValue<number>; index: number; total: number; reduce: boolean | null }) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleX = useTransform(progress, [start, end], [0, 1]);
  return (
    <span className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/14">
      <motion.span style={reduce ? { scaleX: 1 } : { scaleX }} className="absolute inset-0 origin-left bg-white" />
    </span>
  );
}

function FeatureStory({ data }: { data: ServiceData }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 30, mass: 0.34 });

  return (
    <section id="details" ref={ref} className="relative bg-black text-white lg:h-[310svh]">
      <div className="hidden lg:sticky lg:top-[112px] lg:grid lg:h-[calc(100svh-112px)] lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:gap-14 lg:overflow-hidden lg:px-8">
        <div className="relative ml-auto h-[70%] w-full max-w-[500px]">
          {data.highlights.map((_, index) => <CopyLayer key={index} progress={progress} data={data} index={index} />)}
          <div className="absolute bottom-0 left-0 flex w-full gap-2 pr-10">
            {data.highlights.map((_, index) => <ProgressSegment key={index} progress={progress} index={index} total={data.highlights.length} reduce={reduce} />)}
          </div>
        </div>
        <div className="relative h-[78%] w-full max-w-[860px]">
          {data.highlights.map((_, index) => <FeatureLayer key={index} progress={progress} data={data} index={index} />)}
        </div>
      </div>

      <div className="space-y-0 lg:hidden">
        {data.highlights.map((item, index) => (
          <div key={item.title} className="border-b border-white/[.08] px-4 py-20">
            <ScrollLift className="mx-auto max-w-xl text-center">
              <p className="text-[12px] font-semibold text-white/38">0{index + 1} · {item.kicker}</p>
              <h3 className="mt-3 text-[clamp(3rem,12vw,5rem)] font-semibold leading-[.92] tracking-[-.064em]">{item.title}</h3>
              <p className="mx-auto mt-5 max-w-lg text-[16px] font-medium leading-[1.55] text-white/46">{item.text}</p>
            </ScrollLift>
            <div className="mx-auto mt-10 max-w-[760px]"><VisualScene kind={data.key} image={item.visual} title={item.title} mode="wide" /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities({ data }: { data: ServiceData }) {
  return (
    <section id="capabilities" className="bd-defer bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <ScrollLift>
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">What&apos;s inside.</p>
          <h2 className="mt-3 max-w-5xl text-[clamp(3.3rem,6.8vw,7rem)] font-semibold leading-[.93] tracking-[-.065em]">Everything the experience needs. Nothing it doesn&apos;t.</h2>
        </ScrollLift>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {data.capabilities.map((item, i) => (
            <ScrollLift key={item} distance={22} className={i === 0 || i === 7 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="group h-full rounded-[28px] bg-[#f5f5f7] p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1d1d1f] text-white"><Check size={16} /></div>
                <p className="mt-14 text-[20px] font-semibold leading-[1.15] tracking-[-.035em] md:text-[22px]">{item}</p>
                <div className="mt-5 h-[2px] w-6 rounded-full bg-[#0071e3] transition-all duration-300 group-hover:w-12" />
              </div>
            </ScrollLift>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats({ data }: { data: ServiceData }) {
  return (
    <section className="bd-defer border-y border-black/[.07] bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <ScrollLift className="text-center">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">The standard.</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-semibold leading-[.93] tracking-[-.062em]">Premium is something you can feel in the details.</h2>
        </ScrollLift>
        <div className="mt-16 grid divide-y divide-black/[.09] md:grid-cols-3 md:divide-x md:divide-y-0">
          {data.stats.map((stat) => (
            <ScrollLift key={stat.label} distance={26} className="px-4 py-9 text-center md:px-8 md:py-5">
              <p className="text-[clamp(3.8rem,7vw,7rem)] font-semibold leading-none tracking-[-.075em]">{stat.value}</p>
              <p className="mt-4 text-[14px] font-semibold text-black/38 md:text-[15px]">{stat.label}</p>
            </ScrollLift>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ data }: { data: ServiceData }) {
  return (
    <section className="bd-defer bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <ScrollLift>
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">How it comes together.</p>
          <h2 className="mt-3 max-w-4xl text-[clamp(3.3rem,6.6vw,6.7rem)] font-semibold leading-[.93] tracking-[-.063em]">A clear path from idea to impact.</h2>
        </ScrollLift>
        <div className="mt-14 overflow-hidden rounded-[34px] bg-[#f5f5f7] md:mt-16">
          {data.process.map((step) => (
            <ScrollLift key={step.n} distance={18}>
              <div className="group grid gap-5 border-b border-black/[.08] px-6 py-7 last:border-b-0 md:grid-cols-[72px_1fr_1fr] md:items-center md:px-9 md:py-9">
                <p className="text-[12px] font-semibold text-black/28">{step.n}</p>
                <p className="text-[clamp(1.9rem,3.2vw,3.2rem)] font-semibold tracking-[-.047em] transition-transform duration-300 group-hover:translate-x-1">{step.title}</p>
                <p className="max-w-lg text-[15px] font-medium leading-[1.55] text-black/44 md:text-[16px]">{step.text}</p>
              </div>
            </ScrollLift>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ data }: { data: ServiceData }) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 text-white md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(28,94,255,.32),transparent_34%)]" />
      <div className="bd-noise absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1120px] text-center">
        <ScrollLift>
          <p className="text-[16px] font-semibold text-white/42 md:text-[17px]">Being Digitals</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-[clamp(3.7rem,8vw,8.2rem)] font-semibold leading-[.89] tracking-[-.071em]">Ready to make {data.title.toLowerCase()} feel this considered?</h2>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-white/46 md:text-[18px]">Tell us what you&apos;re trying to build. We&apos;ll shape the experience, system and execution around it.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-black transition-transform hover:-translate-y-px">Start a project <ArrowRight size={16} /></Link>
            <Link href="/services" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">Explore all services <ChevronRight size={18} /></Link>
          </div>
        </ScrollLift>
      </div>
    </section>
  );
}

export default function ServiceExperience({ data }: { data: ServiceData }) {
  return (
    <main className="overflow-clip bg-white pt-[64px] text-[#1d1d1f]">
      <LocalNav data={data} />
      <Hero data={data} />
      <Highlights data={data} />
      <FeatureStory data={data} />
      <Capabilities data={data} />
      <Stats data={data} />
      <Process data={data} />
      <FinalCTA data={data} />
    </main>
  );
}
