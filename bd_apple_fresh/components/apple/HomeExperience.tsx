"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import VisualScene from "./services/VisualScene";
import ScrollLift from "./ScrollLift";
import { serviceData, type ServiceKey } from "./services/serviceData";

const ease = [0.16, 1, 0.3, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 28, mass: 0.32 });

  const headlineY = useTransform(progress, [0, 0.48], [0, -86]);
  const headlineOpacity = useTransform(progress, [0, 0.35, 0.58], [1, 1, 0]);
  const stageScale = useTransform(progress, [0, 0.68], [0.78, 1.04]);
  const stageY = useTransform(progress, [0, 0.7], [150, 0]);
  const sideLeftX = useTransform(progress, [0, 0.7], [-120, -32]);
  const sideRightX = useTransform(progress, [0, 0.7], [120, 32]);
  const sideOpacity = useTransform(progress, [0, 0.28, 0.74], [0.36, 0.78, 1]);
  const glowScale = useTransform(progress, [0, 0.75], [0.75, 1.22]);

  return (
    <section ref={ref} className="relative h-[175svh] bg-black text-white">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={reduce ? undefined : { scale: glowScale }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(40,98,255,.45),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(85,49,255,.20),transparent_30%),linear-gradient(#050507,#000)]" />
        <div className="bd-noise absolute inset-0 opacity-30" />

        <motion.div style={reduce ? undefined : { y: headlineY, opacity: headlineOpacity }} className="absolute inset-x-0 top-[14vh] z-30 px-5 text-center md:top-[13vh]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[14px] font-semibold tracking-[-0.02em] text-white/58 md:text-[16px]">
            Being Digitals
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.04, ease }} className="mx-auto mt-2 max-w-[1200px] text-balance text-[clamp(4.1rem,10vw,10.6rem)] font-semibold leading-[.84] tracking-[-.078em]">
            Digital, made remarkable.
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.22 }} className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/services" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#8fc7ff] hover:underline md:text-[18px]">Explore services <ChevronRight size={18} /></Link>
            <Link href="/portfolio" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#8fc7ff] hover:underline md:text-[18px]">View work <ChevronRight size={18} /></Link>
          </motion.div>
        </motion.div>

        <motion.div style={reduce ? undefined : { scale: stageScale, y: stageY }} className="absolute inset-x-0 bottom-[-2vh] z-20 mx-auto h-[58vh] max-w-[1550px] [perspective:1900px] md:h-[61vh]">
          <motion.div style={reduce ? undefined : { x: sideLeftX, opacity: sideOpacity }} className="absolute left-[0%] top-[21%] w-[47%] -rotate-[7deg] overflow-hidden rounded-[22px] border border-white/12 bg-white/[.07] p-1.5 shadow-[0_55px_150px_rgba(0,0,0,.62)] backdrop-blur-xl md:left-[3%] md:w-[41%] md:rounded-[30px] md:p-2">
            <Image src="/images/services/projects/restaurant-website.webp" alt="Website designed by Being Digitals" width={1600} height={900} priority sizes="45vw" className="aspect-[16/9] w-full rounded-[17px] object-cover object-top md:rounded-[23px]" />
          </motion.div>

          <div className="absolute left-1/2 top-[1%] z-20 w-[64%] -translate-x-1/2 overflow-hidden rounded-[25px] border border-white/14 bg-white/[.085] p-1.5 shadow-[0_65px_190px_rgba(0,0,0,.72)] backdrop-blur-xl md:w-[52%] md:rounded-[35px] md:p-2">
            <Image src="/images/services/softwares/restaurant-pos.png" alt="Business software by Being Digitals" width={1700} height={960} priority sizes="60vw" className="aspect-[16/9] w-full rounded-[19px] object-cover object-top md:rounded-[27px]" />
          </div>

          <motion.div style={reduce ? undefined : { x: sideRightX, opacity: sideOpacity }} className="absolute right-[0%] top-[23%] w-[44%] rotate-[7deg] overflow-hidden rounded-[22px] border border-white/12 bg-white/[.07] p-1.5 shadow-[0_55px_150px_rgba(0,0,0,.62)] backdrop-blur-xl md:right-[3%] md:w-[38%] md:rounded-[30px] md:p-2">
            <Image src="/images/services/branding/project-sarss.webp" alt="Branding by Being Digitals" width={1500} height={950} priority sizes="42vw" className="aspect-[16/10] w-full rounded-[17px] object-cover md:rounded-[23px]" />
          </motion.div>

          <div className="absolute bottom-[5%] left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/14 bg-black/28 px-5 py-2.5 text-[11px] font-semibold text-white/72 backdrop-blur-2xl md:text-[12px]">
            Web · Software · Brand · Growth · AI
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}

const stories: { key: ServiceKey; href: string; eyebrow: string; headline: string; supporting: string; dark: boolean }[] = [
  { key: "website", href: "/services/website-development", eyebrow: "Website Development", headline: "Make the first screen impossible to ignore.", supporting: "Design, motion and performance working as one.", dark: false },
  { key: "software", href: "/services/business-software", eyebrow: "Business Software", headline: "Run the business from one clear view.", supporting: "Purpose-built workflows without the operational noise.", dark: true },
  { key: "seo", href: "/services/seo", eyebrow: "SEO & Search", headline: "Show up when intent is highest.", supporting: "Technical foundations and content built to compound.", dark: false },
  { key: "social", href: "/services/social-media", eyebrow: "Social & Creative", headline: "Give the scroll a reason to stop.", supporting: "A recognizable content system, not random posts.", dark: true },
  { key: "ai", href: "/services/ai-automation", eyebrow: "AI Automation", headline: "Let routine work happen in the background.", supporting: "Connected automations that keep people focused on judgment.", dark: true },
];

function StorySection({ story, index }: { story: (typeof stories)[number]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.3 });
  const visualScale = useTransform(progress, [0.08, 0.46, 0.88], [0.9, 1, 0.96]);
  const visualY = useTransform(progress, [0.08, 0.9], [72, -32]);
  const textY = useTransform(progress, [0.12, 0.8], [38, -30]);
  const textOpacity = useTransform(progress, [0.06, 0.22, 0.72, 0.93], [0, 1, 1, 0.32]);

  return (
    <section ref={ref} className={`relative lg:h-[148svh] ${story.dark ? "bg-black text-white" : index % 2 ? "bg-[#f5f5f7] text-[#1d1d1f]" : "bg-white text-[#1d1d1f]"}`}>
      <div className="px-4 py-24 md:px-8 lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center lg:overflow-hidden lg:py-0 lg:pt-[64px]">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-12 lg:py-8">
          <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="relative z-20 mx-auto max-w-xl text-center lg:mx-0 lg:pl-8 lg:text-left">
            <p className={`text-[14px] font-semibold md:text-[16px] ${story.dark ? "text-white/48" : "text-[#6e6e73]"}`}>{story.eyebrow}</p>
            <h2 className="mt-3 text-balance text-[clamp(3.3rem,6.3vw,7rem)] font-semibold leading-[.9] tracking-[-.069em]">{story.headline}</h2>
            <p className={`mx-auto mt-5 max-w-lg text-[16px] font-semibold leading-[1.5] md:text-[18px] lg:mx-0 ${story.dark ? "text-white/48" : "text-black/45"}`}>{story.supporting}</p>
            <Link href={story.href} className={`mt-6 inline-flex items-center gap-1 text-[16px] font-medium hover:underline md:text-[17px] ${story.dark ? "text-[#2997ff]" : "text-[#0066cc]"}`}>Learn more <ChevronRight size={17} /></Link>
          </motion.div>

          <div className="relative z-10 min-w-0 lg:hidden">
            <VisualScene kind={story.key} image={serviceData[story.key].visual} title={serviceData[story.key].title} mode="card" />
          </div>
          <motion.div style={reduce ? undefined : { scale: visualScale, y: visualY }} className="relative z-10 hidden min-w-0 will-change-transform lg:block">
            <VisualScene kind={story.key} image={serviceData[story.key].visual} title={serviceData[story.key].title} mode="wide" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="bd-defer bg-[#f5f5f7] px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <ScrollLift className="mx-auto mb-12 max-w-[1180px] md:mb-16">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">One connected studio.</p>
          <h2 className="mt-3 max-w-5xl text-[clamp(3.4rem,7.2vw,7.5rem)] font-semibold leading-[.91] tracking-[-.069em]">Every touchpoint speaks the same language.</h2>
        </ScrollLift>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[370px_370px]">
          <div className="group relative overflow-hidden rounded-[34px] bg-black lg:col-span-7 lg:row-span-2">
            <Image src="/images/portfolio/websites.webp" alt="Website experiences" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
              <p className="text-[13px] font-semibold text-white/52">Experience</p>
              <h3 className="mt-2 max-w-2xl text-[clamp(2.7rem,5vw,5.6rem)] font-semibold leading-[.93] tracking-[-.06em]">Built beautifully. Built to convert.</h3>
            </div>
          </div>

          <div className="group relative min-h-[360px] overflow-hidden rounded-[34px] bg-[#09090b] lg:col-span-5">
            <Image src="/images/portfolio/softwares.webp" alt="Business software" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover opacity-82 transition-transform duration-1000 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
              <p className="text-[13px] font-semibold text-white/48">Operations</p>
              <h3 className="mt-1 text-[clamp(2.3rem,4vw,4.2rem)] font-semibold leading-[.95] tracking-[-.055em]">Clarity behind the scenes.</h3>
            </div>
          </div>

          <div className="group relative min-h-[360px] overflow-hidden rounded-[34px] bg-white lg:col-span-5">
            <Image src="/images/portfolio/branding-social.png" alt="Brand and social creative" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
              <p className="text-[13px] font-semibold text-white/60">Brand & Growth</p>
              <h3 className="mt-1 text-[clamp(2.3rem,4vw,4.2rem)] font-semibold leading-[.95] tracking-[-.055em]">Recognizable everywhere.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  { name: "Taste of Karachi", image: "/images/portfolio/tasteofkarachi-wm.webp", type: "Website experience" },
  { name: "Nature Synch", image: "/images/portfolio/naturesynch-wm.webp", type: "Digital product" },
  { name: "The Pest Zone", image: "/images/portfolio/pestzone-wm.webp", type: "Website + growth" },
  { name: "Brand Deals", image: "/images/portfolio/brandeals-wm.webp", type: "Commerce experience" },
];

function WorkRail() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.72, 900), behavior: "smooth" });

  return (
    <section className="bd-defer overflow-hidden bg-black py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex items-end justify-between gap-8">
          <ScrollLift>
            <p className="text-[16px] font-semibold text-white/42 md:text-[17px]">Selected work.</p>
            <h2 className="mt-3 max-w-4xl text-[clamp(3.5rem,7.3vw,7.4rem)] font-semibold leading-[.9] tracking-[-.069em]">The details add up.</h2>
          </ScrollLift>
          <div className="hidden gap-2 pb-2 sm:flex">
            <button onClick={() => move(-1)} aria-label="Previous project" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/18 focus-visible:ring-2 focus-visible:ring-white"><ArrowLeft size={19} /></button>
            <button onClick={() => move(1)} aria-label="Next project" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/18 focus-visible:ring-2 focus-visible:ring-white"><ArrowRight size={19} /></button>
          </div>
        </div>
      </div>

      <div ref={rail} className="bd-rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(20px,calc((100vw-1440px)/2+32px))] pb-5 md:mt-16 md:gap-6">
        {projects.map((project, index) => (
          <Link key={project.name} href="/portfolio" className="group relative h-[65svh] min-h-[520px] w-[86vw] max-w-[980px] shrink-0 snap-center overflow-hidden rounded-[34px] bg-[#111] md:w-[72vw] md:rounded-[42px]">
            <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 86vw, 72vw" className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.018]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/8" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 md:p-10">
              <div>
                <p className="text-[12px] font-semibold text-white/48">0{index + 1} · {project.type}</p>
                <h3 className="mt-2 text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-none tracking-[-.06em]">{project.name}</h3>
              </div>
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1 sm:flex"><ArrowRight size={18} /></span>
            </div>
          </Link>
        ))}
        <div className="w-[4vw] shrink-0" aria-hidden="true" />
      </div>

      <div className="mx-auto mt-7 max-w-[1440px] px-5 md:px-8">
        <Link href="/portfolio" className="inline-flex items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">Explore all work <ChevronRight size={18} /></Link>
      </div>
    </section>
  );
}

function TrustStrip() {
  const logos = [
    "/images/clients/taste-of-karachi.png",
    "/images/clients/the-pest-zones.png",
    "/images/clients/naturesynch.png",
    "/images/clients/mehran-royalee.png",
    "/images/clients/m-one-target.png",
    "/images/clients/pioneerexp.png",
  ];
  return (
    <section className="border-y border-black/[.07] bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className="text-[13px] font-semibold text-black/34">Trusted across different kinds of business.</p>
        <div className="mt-9 grid grid-cols-3 items-center gap-x-7 gap-y-9 md:grid-cols-6 md:gap-10">
          {logos.map((logo) => (
            <div key={logo} className="relative mx-auto h-11 w-full max-w-[130px] opacity-48 grayscale transition duration-300 hover:opacity-80 hover:grayscale-0">
              <Image src={logo} alt="Client logo" fill sizes="130px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeExperience() {
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <Hero />

      <section className="bg-white px-5 py-28 md:px-8 md:py-44">
        <ScrollLift className="mx-auto max-w-[1180px] text-center">
          <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">One team. One standard.</p>
          <h2 className="mx-auto mt-3 max-w-[1080px] text-balance text-[clamp(3.7rem,8.4vw,8.7rem)] font-semibold leading-[.88] tracking-[-.073em]">Don’t just put your business online. Make it feel considered.</h2>
        </ScrollLift>
      </section>

      <Ecosystem />
      {stories.map((story, index) => <StorySection key={story.key} story={story} index={index} />)}
      <WorkRail />
      <TrustStrip />

      <section className="bg-[#f5f5f7] px-5 py-28 md:px-8 md:py-44">
        <div className="mx-auto max-w-[1120px] text-center">
          <ScrollLift>
            <p className="text-[16px] font-semibold text-[#6e6e73] md:text-[17px]">From idea to launch. And after.</p>
            <h2 className="mx-auto mt-3 max-w-5xl text-[clamp(3.7rem,8vw,8.1rem)] font-semibold leading-[.89] tracking-[-.072em]">Build something people want to experience.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] font-medium leading-[1.55] text-black/46 md:text-[18px]">Web, software, brand, growth and automation — shaped around the same business objective.</p>
            <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-px hover:bg-[#0077ed]">Start a project <ArrowRight size={16} /></Link>
          </ScrollLift>
        </div>
      </section>
    </main>
  );
}
