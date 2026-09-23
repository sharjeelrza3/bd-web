import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ServiceData, ServiceKey } from "@/components/apple/services/serviceData";

const toneMap: Record<ServiceKey, { hero: string; text: string; muted: string; accent: string; wash: string }> = {
  website: { hero: "bg-[#050507]", text: "text-white", muted: "text-white/48", accent: "#2997ff", wash: "bg-[#eaf3ff]" },
  software: { hero: "bg-[#f5f5f7]", text: "text-[#1d1d1f]", muted: "text-black/44", accent: "#0071e3", wash: "bg-[#eef0f3]" },
  seo: { hero: "bg-[#f5f5f7]", text: "text-[#1d1d1f]", muted: "text-black/44", accent: "#167a47", wash: "bg-[#eaf6ef]" },
  social: { hero: "bg-[#08080a]", text: "text-white", muted: "text-white/48", accent: "#d95a9a", wash: "bg-[#f8edf3]" },
  google: { hero: "bg-[#f5f5f7]", text: "text-[#1d1d1f]", muted: "text-black/44", accent: "#0071e3", wash: "bg-[#eaf3ff]" },
  meta: { hero: "bg-[#070709]", text: "text-white", muted: "text-white/48", accent: "#7b6cff", wash: "bg-[#efedff]" },
  branding: { hero: "bg-[#eee8e2]", text: "text-[#1d1d1f]", muted: "text-black/46", accent: "#8e5b3e", wash: "bg-[#f4eee8]" },
  ai: { hero: "bg-[#030305]", text: "text-white", muted: "text-white/48", accent: "#8b76ff", wash: "bg-[#eeebff]" },
  maintenance: { hero: "bg-[#eef3f8]", text: "text-[#1d1d1f]", muted: "text-black/44", accent: "#0071e3", wash: "bg-[#eef3f8]" },
};

function Visual({ data }: { data: ServiceData }) {
  const dark = ["website", "social", "meta", "ai"].includes(data.key);
  return (
    <div className={`relative mx-auto aspect-[16/10] w-full max-w-[900px] overflow-hidden rounded-[34px] border p-2 shadow-[0_45px_140px_rgba(0,0,0,.2)] ${dark ? "border-white/12 bg-white/[.07]" : "border-black/[.07] bg-white"}`}>
      <div className={`flex h-7 items-center gap-1.5 px-2 ${dark ? "text-white" : "text-black"}`}>
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/14"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/14"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/18" : "bg-black/14"}`} />
        <span className={`mx-auto h-2 w-[38%] rounded-full ${dark ? "bg-white/[.08]" : "bg-black/[.05]"}`} />
      </div>
      <div className="relative h-[calc(100%-28px)] overflow-hidden rounded-[25px]">
        <Image src={data.visual} alt={`${data.title} by Being Digitals`} fill priority fetchPriority="high" quality={82} sizes="(max-width:768px) 92vw, 70vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function PerformanceServicePage({ data }: { data: ServiceData }) {
  const tone = toneMap[data.key];
  return (
    <main className="overflow-clip bg-white text-[#1d1d1f]">
      <section className={`relative overflow-hidden px-5 pb-20 pt-[128px] md:px-8 md:pb-28 md:pt-[150px] ${tone.hero} ${tone.text}`}>
        <div className="bd-noise absolute inset-0 opacity-[.08]" />
        <div className="relative mx-auto max-w-[1260px]">
          <div className="mx-auto max-w-[1060px] text-center">
            <p className={`text-[14px] font-semibold md:text-[16px] ${tone.muted}`}>{data.eyebrow}</p>
            <h1 className="mx-auto mt-3 text-[clamp(4rem,9vw,9.4rem)] font-semibold leading-[.84] tracking-[-.075em]">{data.headline}</h1>
            <p className={`mx-auto mt-7 max-w-3xl text-[18px] font-semibold leading-[1.5] md:text-[21px] ${tone.muted}`}>{data.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="bd-cta-primary bd-arrow-shift">{data.primary} <ArrowRight size={16}/></Link>
              <Link href="/portfolio" className={`bd-cta-secondary bd-arrow-shift ${tone.text === "text-white" ? "bd-cta-secondary-dark" : ""}`}>See our work <ChevronRight size={16}/></Link>
            </div>
          </div>
          <div className="mt-14 md:mt-16"><Visual data={data} /></div>
        </div>
      </section>

      <section className="bd-content-auto px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-6 lg:grid-cols-3">
            {data.highlights.map((item) => (
              <article key={item.title} className={`overflow-hidden rounded-[30px] ${tone.wash}`}>
                <div className="p-7 md:p-8"><p className="text-[12px] font-semibold text-black/38">{item.kicker}</p><h2 className="mt-2 text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold leading-[.94] tracking-[-.055em]">{item.title}</h2><p className="mt-4 text-[15px] font-semibold leading-[1.55] text-black/44">{item.text}</p></div>
                <div className="relative mx-5 aspect-[16/11] translate-y-[7%] overflow-hidden rounded-t-[24px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.11)]"><Image src={item.visual} alt={item.title} fill sizes="(max-width:1024px) 92vw, 390px" className="object-cover object-top"/></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bd-content-auto bg-[#f5f5f7] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div><p className="text-[14px] font-semibold text-[#6e6e73]">Capabilities</p><h2 className="mt-3 text-[clamp(3.3rem,5.8vw,6rem)] font-semibold leading-[.91] tracking-[-.065em]">Built around the work that matters.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">{data.capabilities.map((capability) => <div key={capability} className="flex min-h-[74px] items-center gap-3 rounded-[22px] bg-white px-5 py-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white"><Check size={14}/></span><span className="text-[15px] font-semibold">{capability}</span></div>)}</div>
        </div>
      </section>

      <section className="bd-content-auto px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[14px] font-semibold text-[#6e6e73]">How we work</p>
          <h2 className="mt-3 max-w-4xl text-[clamp(3.3rem,6vw,6.2rem)] font-semibold leading-[.91] tracking-[-.066em]">A clear path from idea to outcome.</h2>
          <div className="mt-12 border-t border-black/[.08]">{data.process.map((step) => <div key={step.n} className="grid min-h-[108px] grid-cols-[58px_1fr] items-center gap-4 border-b border-black/[.08] py-5 md:grid-cols-[80px_.8fr_1.2fr]"><span className="text-[11px] font-semibold text-black/28">{step.n}</span><h3 className="text-[clamp(2rem,3.2vw,3.5rem)] font-semibold tracking-[-.055em]">{step.title}</h3><p className="col-start-2 text-[14px] font-semibold leading-[1.5] text-black/42 md:col-start-auto">{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="bd-content-auto bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-4 sm:grid-cols-3">{data.stats.map((stat) => <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/[.05] p-7"><p className="text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-none tracking-[-.07em]">{stat.value}</p><p className="mt-3 text-[12px] font-semibold text-white/42">{stat.label}</p></div>)}</div>
          <div className="mt-16 text-center"><p className="text-[14px] font-semibold text-white/42">Ready when you are.</p><h2 className="mx-auto mt-3 max-w-[900px] text-[clamp(3.7rem,7.4vw,7.6rem)] font-semibold leading-[.88] tracking-[-.073em]">Build something that performs.</h2><Link href="/contact" className="bd-cta-primary bd-arrow-shift mt-8">Start a project <ArrowRight size={16}/></Link></div>
        </div>
      </section>
    </main>
  );
}
