import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MoveRight, Star } from "lucide-react";
import { caseStudies } from "@/components/work/case-studies/data";
import { reviews } from "@/components/work/reviews/reviewsData";
import PerformanceRail from "@/components/performance/PerformanceRail";
import YouTubeFacade from "@/components/performance/YouTubeFacade";

const highlights = [
  { eyebrow: "Website", title: "Designed for the first second.", image: "/images/services/projects/e-commerce.webp", href: "/services/website-development", dark: true },
  { eyebrow: "Software", title: "Complex work. Simple screens.", image: "/images/services/softwares/reports.png", href: "/services/business-software", dark: false },
  { eyebrow: "Brand", title: "Recognizable before readable.", image: "/images/services/branding/project-mehran.webp", href: "/services/branding", dark: true },
  { eyebrow: "Social", title: "Built for the pause.", image: "/images/services/social-media/after.png", href: "/services/social-media", dark: false },
] as const;

const stories = [
  { eyebrow: "Websites", title: "A first impression that keeps moving.", line: "Design, speed and conversion in one experience.", href: "/services/website-development", image: "/images/services/projects/business-website.webp", tone: "bg-[#f5f5f7] text-black" },
  { eyebrow: "Business software", title: "The whole operation. Finally clear.", line: "Custom systems shaped around how your team actually works.", href: "/services/business-software", image: "/images/services/softwares/restaurant-pos.png", tone: "bg-black text-white" },
  { eyebrow: "Search & growth", title: "Be there when intent becomes action.", line: "SEO and paid growth built around measurable demand.", href: "/services/seo", image: "/images/services/seo/search.png", tone: "bg-[#eef5ff] text-black" },
  { eyebrow: "Brand & social", title: "Make the business recognizable at a glance.", line: "A visual language designed to travel across every screen.", href: "/services/branding", image: "/images/services/branding/project-sarss.webp", tone: "bg-[#eee7df] text-black" },
  { eyebrow: "AI automation", title: "Let the repetitive work disappear.", line: "Connected workflows that keep people focused on judgment.", href: "/services/ai-automation", image: "/images/portfolio/ai.jpg", tone: "bg-[#050507] text-white" },
] as const;

const services = [
  ["Website Development", "/services/website-development", "/images/portfolio/websites.webp", "bg-[#e8f2ff]"],
  ["Business Software", "/services/business-software", "/images/portfolio/softwares.webp", "bg-[#eef0f3]"],
  ["SEO", "/services/seo", "/images/portfolio/seo-growth.png", "bg-[#eaf5ed]"],
  ["Social Media", "/services/social-media", "/images/services/social-media/creative-2.webp", "bg-[#f4e9ee]"],
  ["Branding", "/services/branding", "/images/portfolio/branding-social.png", "bg-[#f4eee8]"],
  ["AI Automation", "/services/ai-automation", "/images/portfolio/ai.jpg", "bg-[#eceaf7]"],
] as const;

const clients = [
  { name: "M-One Targets", logo: "/images/clients/M-ONE-LOGO-1112024.webp" },
  { name: "The Pest Zone", logo: "/images/clients/the-pest-zones.png" },
  { name: "Mehran Royale", logo: "/images/clients/mehran-royalee.png" },
  { name: "Taste of Karachi", logo: "/images/clients/taste-of-karachi.png" },
  { name: "Brandealss", logo: "/images/clients/brandealss.png" },
  { name: "Pioneer", logo: "/images/clients/pioneerexp.png" },
  { name: "Vice City Farms", logo: "/images/clients/vice-city-farms.png" },
  { name: "NatureSynch", logo: "/images/clients/naturesynch.png" },
] as const;

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.2c1.9-1.8 3.1-4.4 3.1-7.5Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.3l-3.2-2.6c-.9.6-2 1-3.5 1-2.6 0-4.8-1.8-5.6-4.2H3.1v2.7A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.4H3.1a10 10 0 0 0 0 9.2l3.3-2.7Z" />
      <path fill="#EA4335" d="M12 5.9c1.6 0 3 .5 4.1 1.6l3-3A10 10 0 0 0 3.1 7.4l3.3 2.7C7.2 7.7 9.4 5.9 12 5.9Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-0px)] overflow-hidden bg-black px-5 pb-12 pt-[118px] text-white md:px-8 md:pb-16 md:pt-[132px]">
      <div className="bd-noise absolute inset-0 opacity-[.12]" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[78vw] max-h-[900px] w-[78vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,113,255,.34)_0%,rgba(113,67,255,.12)_38%,transparent_70%)] blur-xl" />
      <div className="relative mx-auto max-w-[1400px] text-center">
        <p className="bd-fade-up text-[13px] font-semibold text-white/58 md:text-[17px]">Where great ideas become digital</p>
        <h1 className="bd-fade-up bd-delay-1 mx-auto mt-2 max-w-[1280px] text-[clamp(3.5rem,10.2vw,10.8rem)] font-semibold leading-[.84] tracking-[-.078em]">Build what moves business.</h1>
        <div className="bd-fade-up bd-delay-2 mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3 md:mt-8">
          <Link href="/services" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#2997ff] hover:underline md:text-[19px]">Explore services <ChevronRight size={18}/></Link>
          <Link href="/portfolio" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#2997ff] hover:underline md:text-[19px]">See the work <ChevronRight size={18}/></Link>
        </div>

        <div className="relative mx-auto mt-12 h-[46vw] min-h-[300px] max-h-[650px] max-w-[1180px] [perspective:1600px] md:mt-14">
          <div className="bd-float-card absolute left-[-7%] top-[25%] z-10 w-[52%] -rotate-[5deg] overflow-hidden rounded-[20px] border border-white/12 bg-white/[.07] p-1 shadow-[0_45px_120px_rgba(0,0,0,.55)] md:left-[1%] md:w-[40%] md:rounded-[30px] md:p-2">
            <Image src="/images/services/projects/restaurant-website.webp" alt="Website experience created by Being Digitals" width={1536} height={1024} quality={78} sizes="(max-width:768px) 58vw, 42vw" className="aspect-[16/10] w-full rounded-[16px] object-cover object-top md:rounded-[23px]" />
          </div>
          <div className="absolute left-1/2 top-0 z-30 w-[80%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/14 bg-white/[.08] p-1.5 shadow-[0_60px_170px_rgba(0,0,0,.7)] md:w-[58%] md:rounded-[36px] md:p-2.5">
            <div className="mb-1 flex h-4 items-center gap-1 px-1.5 md:h-6"><span className="h-1.5 w-1.5 rounded-full bg-white/22"/><span className="h-1.5 w-1.5 rounded-full bg-white/22"/><span className="h-1.5 w-1.5 rounded-full bg-white/22"/><span className="mx-auto h-1.5 w-[38%] rounded-full bg-white/10"/></div>
            <Image src="/images/services/softwares/restaurant-pos.png" alt="Custom software by Being Digitals" width={1883} height={948} priority fetchPriority="high" quality={82} sizes="(max-width:768px) 80vw, 60vw" className="aspect-[16/9] w-full rounded-[17px] object-cover object-top md:rounded-[27px]" />
          </div>
          <div className="bd-float-card bd-float-card-reverse absolute right-[-6%] top-[30%] z-20 w-[48%] rotate-[5deg] overflow-hidden rounded-[20px] border border-white/12 bg-white/[.07] p-1 shadow-[0_45px_120px_rgba(0,0,0,.55)] md:right-[2%] md:w-[36%] md:rounded-[30px] md:p-2">
            <Image src="/images/services/branding/project-sarss.webp" alt="Brand identity by Being Digitals" width={1586} height={992} quality={78} sizes="(max-width:768px) 54vw, 38vw" className="aspect-[16/10] w-full rounded-[16px] object-cover md:rounded-[23px]" />
          </div>
        </div>
        <p className="mt-2 text-[11px] font-semibold text-white/42 md:text-[14px]">Websites · Software · Growth · Brand · AI</p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-44">
      <div className="mx-auto max-w-[1120px] text-center">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">One digital partner.</p>
        <h2 className="mt-4 text-[clamp(3.5rem,7.5vw,8rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#1d1d1f]">Less noise. More impact.</h2>
        <p className="mx-auto mt-7 max-w-3xl text-[20px] font-semibold leading-[1.42] tracking-[-.026em] text-black/44 md:text-[25px]">Strategy, design, engineering and growth — considered together, so the whole experience feels intentional.</p>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="bd-content-auto bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Highlights</p>
        <h2 className="mt-2 text-[clamp(2.9rem,5vw,5.5rem)] font-semibold leading-[.92] tracking-[-.062em]">Designed to be felt.</h2>
        <PerformanceRail className="mt-8" ariaLabel="Homepage highlights">
          {highlights.map((item, i) => (
            <Link key={item.title} href={item.href} className={`group relative h-[500px] min-w-[84vw] snap-start overflow-hidden rounded-[30px] md:h-[590px] md:min-w-[560px] ${item.dark ? "bg-black text-white" : "bg-white text-black"}`}>
              <div className="absolute inset-x-0 top-0 z-20 p-7 md:p-9">
                <p className={`text-[13px] font-semibold ${item.dark ? "text-white/52" : "text-black/45"}`}>{item.eyebrow}</p>
                <h3 className="mt-2 max-w-[470px] text-[clamp(2.2rem,4vw,3.45rem)] font-semibold leading-[.96] tracking-[-.052em]">{item.title}</h3>
                <span className={`mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.dark ? "bg-white text-black" : "bg-black text-white"}`}><ChevronRight size={18}/></span>
              </div>
              <div className={`absolute inset-x-0 bottom-0 flex h-[65%] items-end justify-center overflow-hidden ${i === 3 ? "px-12" : "px-5 md:px-8"}`}>
                <div className={`relative w-full translate-y-[9%] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,.18)] transition-transform duration-700 group-hover:translate-y-[3%] ${i === 3 ? "h-[96%] max-w-[270px] rounded-t-[38px] border-[5px] border-black bg-black" : "h-[88%] rounded-t-[28px]"}`}>
                  <Image src={item.image} alt={`${item.eyebrow} visual`} fill sizes="(max-width:768px) 84vw, 560px" className="object-cover object-top" />
                </div>
              </div>
            </Link>
          ))}
        </PerformanceRail>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="bg-black px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-[1260px] space-y-5">
        {stories.map((story, index) => (
          <article key={story.title} className={`grid overflow-hidden rounded-[34px] ${story.tone} lg:grid-cols-[.72fr_1.28fr] ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="flex min-h-[360px] flex-col justify-center p-7 md:p-11 lg:min-h-[540px]">
              <p className={`text-[14px] font-semibold ${story.tone.includes("text-white") ? "text-white/42" : "text-black/42"}`}>{story.eyebrow}</p>
              <h3 className="mt-3 text-[clamp(3rem,5vw,5.8rem)] font-semibold leading-[.9] tracking-[-.067em]">{story.title}</h3>
              <p className={`mt-5 max-w-[460px] text-[17px] font-semibold leading-[1.5] ${story.tone.includes("text-white") ? "text-white/44" : "text-black/45"}`}>{story.line}</p>
              <Link href={story.href} className="mt-6 inline-flex w-fit items-center gap-1 text-[17px] font-medium text-[#2997ff] hover:underline">Learn more <ChevronRight size={18}/></Link>
            </div>
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[540px]">
              <div className="absolute inset-[7%] overflow-hidden rounded-[28px] border border-black/[.06] bg-white p-1.5 shadow-[0_40px_120px_rgba(0,0,0,.16)]">
                <Image src={story.image} alt={story.title} fill sizes="(max-width:1024px) 100vw, 58vw" className="rounded-[22px] object-cover object-top" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesLineup() {
  return (
    <section className="bd-content-auto bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div><p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Everything we build</p><h2 className="mt-2 max-w-4xl text-[clamp(3.3rem,6.5vw,7rem)] font-semibold leading-[.91] tracking-[-.067em]">One studio. A complete digital system.</h2></div>
          <Link href="/services" className="mb-1 inline-flex items-center gap-1 text-[17px] font-medium text-[#0066cc] hover:underline">All services <ChevronRight size={18}/></Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, href, image, bg]) => (
            <Link href={href} key={name} className={`group overflow-hidden rounded-[30px] ${bg}`}>
              <div className="p-7"><p className="text-[13px] font-semibold text-black/42">Service</p><div className="mt-2 flex items-center justify-between gap-4"><h3 className="text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[.95] tracking-[-.055em]">{name}</h3><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-110"><ChevronRight size={17}/></span></div></div>
              <div className="relative mx-5 mb-0 aspect-[16/10] translate-y-[8%] overflow-hidden rounded-t-[24px] bg-white shadow-[0_24px_70px_rgba(0,0,0,.12)] transition-transform duration-500 group-hover:translate-y-[3%]"><Image src={image} alt={name} fill sizes="(max-width:1024px) 90vw, 380px" className="object-cover object-top"/></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkShowcase() {
  const projects = caseStudies.slice(0, 4);
  return (
    <section className="bd-content-auto bg-[#f5f5f7] py-28 md:py-40">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Selected work</p>
        <h2 className="mt-2 max-w-4xl text-[clamp(3.3rem,6.4vw,6.8rem)] font-semibold leading-[.91] tracking-[-.067em]">Built around outcomes.</h2>
        <p className="mt-5 max-w-2xl text-[17px] font-semibold leading-[1.5] text-black/42 md:text-[19px]">Every project starts with a business problem, not a visual trend.</p>
        <PerformanceRail className="mt-8" ariaLabel="Selected work">
          {projects.map((study) => {
            const result = study.results[0];
            return (
              <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group min-w-[88vw] snap-start md:min-w-[760px]">
                <article className="bd-lift-card overflow-hidden rounded-[32px] bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-black"><Image src={study.cover} alt={`${study.client} case study`} fill sizes="(max-width:768px) 88vw, 760px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"/><span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-black shadow-sm"><MoveRight size={18}/></span></div>
                  <div className="grid gap-6 p-6 md:grid-cols-[1fr_.9fr] md:p-8"><div><p className="text-[12px] font-semibold text-black/38">{study.category}</p><h3 className="mt-2 text-[clamp(2rem,3.2vw,3.1rem)] font-semibold leading-[.96] tracking-[-.052em]">{study.client}</h3><p className="mt-4 line-clamp-2 text-[14px] font-medium leading-[1.55] text-black/46"><span className="font-semibold text-black/62">Problem:</span> {study.challenge}</p></div><div className="flex items-end justify-between gap-5 rounded-[22px] bg-[#f5f5f7] p-5"><div><p className="text-[11px] font-semibold text-black/34">Outcome</p><p className="mt-2 text-[clamp(2.5rem,4vw,4.4rem)] font-semibold leading-none tracking-[-.07em]">{result.value}</p><p className="mt-2 text-[13px] font-semibold text-black/44">{result.label}</p></div><span className="text-[12px] font-semibold text-[#0066cc]">View case study</span></div></div>
                </article>
              </Link>
            );
          })}
        </PerformanceRail>
      </div>
    </section>
  );
}

function TrustedCompanies() {
  return (
    <section className="bd-content-auto overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="text-[14px] font-semibold text-[#6e6e73] md:text-[16px]">Trusted by companies</p><h2 className="mt-3 max-w-[720px] text-[clamp(3.1rem,5.7vw,6rem)] font-semibold leading-[.91] tracking-[-.065em]">Built for businesses that expect more.</h2></div><p className="max-w-[560px] text-[16px] font-semibold leading-[1.55] text-black/42 lg:justify-self-end md:text-[18px]">From growing local brands to operational teams, our work is designed to earn trust before the first meeting — and keep it after launch.</p></div>
        <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[30px] border border-black/[.07] bg-[#f5f5f7] sm:grid-cols-4">
          {clients.map((client) => <div key={client.name} className="group relative flex min-h-[122px] items-center justify-center border-b border-r border-black/[.06] p-5 transition-colors hover:bg-white md:min-h-[150px]"><div className="relative h-14 w-full max-w-[150px] opacity-[.5] grayscale transition-all group-hover:opacity-90 group-hover:grayscale-0 md:h-16"><Image src={client.logo} alt={client.name} fill sizes="150px" className="object-contain"/></div></div>)}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const engines = [
    ["01", "Web experiences", "Attention into action", "/images/services/projects/restaurant-website.webp"],
    ["02", "Business software", "Operations made clear", "/images/services/softwares/reports.png"],
    ["03", "Brand systems", "Recognition everywhere", "/images/services/branding/project-sarss.webp"],
    ["04", "Growth engine", "Demand that compounds", "/images/services/seo/search.png"],
  ] as const;
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
      <div className="bd-noise absolute inset-0 opacity-[.08]"/>
      <div className="relative mx-auto grid max-w-[1260px] gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-14">
        <div><p className="text-[14px] font-semibold text-[#2997ff]">The Being Digitals system</p><h2 className="mt-3 max-w-[470px] text-[clamp(3.6rem,5.5vw,6.1rem)] font-semibold leading-[.89] tracking-[-.07em]">One system. Four engines.</h2><p className="mt-5 max-w-[430px] text-[16px] font-semibold leading-[1.5] text-white/48 md:text-[17px]">Web, software, brand and growth work together as one connected system — so every part strengthens the next.</p><Link href="/services" className="mt-7 inline-flex items-center gap-1 text-[16px] font-medium text-[#2997ff]">Explore the system <ChevronRight size={17}/></Link></div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">{engines.map(([n,label,note,image]) => <article key={n} className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0c0f] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,.35)]"><div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-white/[.04]"><Image src={image} alt={label} fill sizes="(max-width:1024px) 46vw, 330px" className="object-cover object-top"/></div><div className="px-3 pb-3 pt-3"><p className="text-[9px] font-semibold text-white/28">{n}</p><p className="mt-1 text-[13px] font-semibold text-white/88">{label}</p><p className="mt-1 text-[10px] font-semibold text-white/32">{note}</p></div></article>)}</div>
      </div>
    </section>
  );
}

function StudioFilm() {
  return (
    <section className="bd-content-auto bg-[#f5f5f7] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1260px] gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-14">
        <div className="max-w-[520px]"><p className="text-[14px] font-semibold text-[#6e6e73] md:text-[16px]">Inside Being Digitals</p><h2 className="mt-3 text-[clamp(3.15rem,5.1vw,5.7rem)] font-semibold leading-[.91] tracking-[-.066em]">See the work behind the work.</h2><p className="mt-5 max-w-[470px] text-[15px] font-semibold leading-[1.55] text-black/42 md:text-[17px]">A closer look at how strategy, design, development and growth come together inside the studio.</p><div className="mt-7 flex flex-wrap gap-4"><Link href="/showreel" className="inline-flex items-center gap-1 text-[16px] font-medium text-[#0066cc]">Explore the studio <ChevronRight size={17}/></Link><a href="https://youtu.be/gt8SMTYUfjI" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[15px] font-medium text-black/60">Watch on YouTube <ArrowRight size={14}/></a></div></div>
        <div className="overflow-hidden rounded-[28px] border border-black/[.07] bg-black p-1.5 shadow-[0_28px_90px_rgba(0,0,0,.15)] md:rounded-[34px] md:p-2"><div className="relative aspect-video overflow-hidden rounded-[23px] bg-[#09090b] md:rounded-[28px]"><YouTubeFacade videoId="gt8SMTYUfjI" title="Being Digitals — studio film" poster="/images/services/projects/business-website.webp"/></div></div>
      </div>
    </section>
  );
}

function Proof() {
  const featured = reviews.slice(0, 5);
  return (
    <section className="bd-content-auto overflow-hidden bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1260px] px-5 md:px-8">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7]"><GoogleMark/></span><p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">Google Reviews</p></div>
        <h2 className="mt-5 max-w-[1000px] text-[clamp(3.4rem,6.7vw,7rem)] font-semibold leading-[.91] tracking-[-.068em]">Trust is part of the product.</h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-[24px] bg-[#f5f5f7] p-5 md:p-6"><div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} fill="currentColor" className="text-[#f9ab00]"/>)}</div><p className="mt-4 text-[36px] font-semibold leading-none tracking-[-.06em]">5.0</p><p className="mt-2 text-[12px] font-semibold text-black/42">Average featured rating</p></div><div className="rounded-[24px] bg-[#f5f5f7] p-5 md:p-6"><p className="text-[36px] font-semibold leading-none tracking-[-.06em]">{reviews.length}</p><p className="mt-2 text-[12px] font-semibold text-black/42">Featured client reviews</p></div><div className="rounded-[24px] bg-black p-5 text-white md:p-6"><p className="text-[36px] font-semibold leading-none tracking-[-.06em]">120+</p><p className="mt-2 text-[12px] font-semibold text-white/42">Projects delivered</p></div></div>
        <PerformanceRail className="mt-8" ariaLabel="Client reviews">
          {featured.map((review) => <article key={review.company} className="bd-lift-card flex min-h-[390px] w-[86vw] max-w-[520px] shrink-0 snap-start flex-col rounded-[34px] bg-[#f5f5f7] p-7 md:min-h-[420px] md:p-9"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white"><GoogleMark/></span><span className="text-[13px] font-semibold text-black/46">Client review</span></div><div className="flex gap-0.5">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={13} fill="currentColor" className="text-[#f9ab00]"/>)}</div></div><blockquote className="mt-9 text-[clamp(1.8rem,2.7vw,2.65rem)] font-semibold leading-[1.08] tracking-[-.047em]">“{review.quote}”</blockquote><div className="mt-auto pt-10"><p className="text-[15px] font-semibold">{review.company}</p><p className="mt-1 text-[13px] font-medium text-black/42">{review.project}</p></div></article>)}
        </PerformanceRail>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bd-content-auto bg-white px-5 py-24 md:px-8 md:py-36"><div className="relative mx-auto max-w-[1260px] overflow-hidden rounded-[36px] bg-black px-6 py-20 text-white shadow-[0_35px_120px_rgba(0,0,0,.16)] md:rounded-[48px] md:px-12 md:py-28"><div className="bd-noise absolute inset-0 opacity-[.1]"/><div className="relative mx-auto max-w-[1000px] text-center"><p className="text-[14px] font-semibold text-white/44 md:text-[16px]">The next move starts here.</p><h2 className="mx-auto mt-4 max-w-[980px] text-[clamp(3.8rem,8.2vw,8.6rem)] font-semibold leading-[.87] tracking-[-.074em]">Have an idea worth building?</h2><p className="mx-auto mt-5 max-w-[720px] text-[clamp(1.8rem,3.4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-.045em] text-white/48">Let&apos;s make it real.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/contact" className="bd-cta-primary bd-arrow-shift">Start a project <ArrowRight size={16}/></Link><Link href="/portfolio" className="bd-cta-secondary bd-cta-secondary-dark bd-arrow-shift">See our work <ChevronRight size={16}/></Link></div></div></div></section>
  );
}

export default function PerformanceHomePage() {
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <Hero />
      <Intro />
      <Highlights />
      <Stories />
      <ServicesLineup />
      <WorkShowcase />
      <TrustedCompanies />
      <Ecosystem />
      <StudioFilm />
      <Proof />
      <FinalCTA />
    </main>
  );
}
