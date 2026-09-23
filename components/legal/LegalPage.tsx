import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export type LegalSection = { id: string; title: string; paragraphs?: string[]; bullets?: string[] };
type Props = { eyebrow: string; title: string; description: string; updated: string; sections: LegalSection[] };

export default function LegalPage({ eyebrow, title, description, updated, sections }: Props) {
  return (
    <main className="bg-white pt-[58px] text-[#1d1d1f]">
      <section className="px-5 pb-20 pt-24 text-center md:px-8 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-[1050px]">
          <p className="text-[15px] font-semibold text-[#6e6e73] md:text-[17px]">{eyebrow}</p>
          <h1 className="mt-3 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.86] tracking-[-.074em]">{title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] font-semibold leading-[1.55] text-black/43 md:text-[19px]">{description}</p>
          <p className="mt-5 text-[12px] font-semibold text-black/30">Last updated · {updated}</p>
        </div>
      </section>
      <section className="bg-[#f5f5f7] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block lg:self-start lg:sticky lg:top-[90px]">
            <p className="text-[11px] font-semibold text-black/32">On this page</p>
            <nav className="mt-4 space-y-2">{sections.map((section, i)=><a key={section.id} href={`#${section.id}`} className="block text-[12px] font-semibold leading-5 text-black/46 hover:text-black"><span className="mr-2 text-black/22">0{i+1}</span>{section.title}</a>)}</nav>
          </aside>
          <div className="overflow-hidden rounded-[30px] bg-white px-6 md:px-10">
            {sections.map((section,i)=><section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/[.08] py-10 last:border-b-0 md:py-12"><p className="text-[11px] font-semibold text-black/26">0{i+1}</p><h2 className="mt-2 text-[clamp(2rem,4vw,3.8rem)] font-semibold leading-[.98] tracking-[-.052em]">{section.title}</h2>{section.paragraphs?.map(p=><p key={p} className="mt-5 text-[16px] font-medium leading-8 text-black/58">{p}</p>)}{section.bullets&&<div className="mt-6 space-y-3 rounded-[22px] bg-[#f5f5f7] p-5">{section.bullets.map(x=><p key={x} className="flex items-start gap-3 text-[14px] font-semibold leading-6 text-black/58"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white"><Check size={11}/></span>{x}</p>)}</div>}</section>)}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 text-center md:px-8 md:py-32"><div className="mx-auto max-w-[900px]"><p className="text-[15px] font-semibold text-[#6e6e73]">Questions?</p><h2 className="mt-3 text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[.91] tracking-[-.065em]">We’ll clarify anything.</h2><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0071e3] px-6 text-[15px] font-semibold text-white">Contact Being Digitals <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}
