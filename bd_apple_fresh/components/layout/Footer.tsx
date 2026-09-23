import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const groups = [
  { title: "Build", links: [["Website Development", "/services/website-development"], ["Business Software", "/services/business-software"], ["AI Automation", "/services/ai-automation"], ["Website Maintenance", "/services/maintenance"]] },
  { title: "Grow", links: [["SEO", "/services/seo"], ["Google Ads", "/services/google-ads"], ["Meta Ads", "/services/meta-ads"], ["Social Media", "/services/social-media"]] },
  { title: "Company", links: [["About", "/about"], ["Process", "/process"], ["Work / Portfolio", "/portfolio"], ["Case Studies", "/case-studies"], ["Client Reviews", "/reviews"]] },
  { title: "Insights", links: [["Latest Insights", "/blog"], ["SEO Guides", "/seo-guides"], ["Marketing Tips", "/marketing-tips"], ["Free Resources", "/free-resources"], ["Industries", "/industries"]] },
] as const;

export default function Footer() {
  const socialLinks = [
    ["Instagram", process.env.NEXT_PUBLIC_INSTAGRAM_URL],
    ["LinkedIn", process.env.NEXT_PUBLIC_LINKEDIN_URL],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <footer className="border-t border-black/[.07] bg-[#f5f5f7] px-5 pb-7 pt-12 text-[#1d1d1f] md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-9 border-b border-black/[.09] pb-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <Link href="/" className="inline-flex rounded-md focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-4">
              <Image src="/images/brand-logo-dark.png" alt="Being Digitals" width={999} height={399} sizes="132px" className="h-[42px] w-auto object-contain" />
            </Link>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.2rem,4.4vw,4.3rem)] font-semibold leading-[.96] tracking-[-.06em]">Digital work should move the business forward.</h2>
            <p className="mt-4 max-w-xl text-[13px] font-medium leading-5 text-black/44">Websites, software, search, growth, brand and automation — designed as one connected system.</p>
          </div>
          <div className="lg:justify-self-end">
            <p className="text-[11px] font-semibold text-black/38">Start a conversation</p>
            <a href="mailto:hello@beingdigitals.com" className="bd-arrow-shift mt-3 flex items-center gap-2 text-[15px] font-semibold text-[#0066cc]"><Mail size={16}/> hello@beingdigitals.com</a>
            <p className="mt-3 text-[11px] font-medium text-black/38">Karachi, Pakistan · Working worldwide</p>
            <Link href="/contact" className="bd-cta-primary bd-arrow-shift mt-5">Start a project <ArrowUpRight size={15}/></Link>
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-9 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-semibold text-black/76">{group.title}</p>
              <div className="mt-3.5 space-y-2.5">
                {group.links.map(([label, href]) => <Link key={href} href={href} className="block w-fit text-[11px] text-black/48 transition-colors hover:text-black">{label}</Link>)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-black/[.09] pt-5 text-[10px] text-black/38 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <p>© 2026 Being Digitals. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:text-black">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-black">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-black">Cookies</Link>
          </div>
          {socialLinks.length > 0 && <div className="flex gap-4">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="hover:text-black">{label}</a>)}</div>}
        </div>
      </div>
    </footer>
  );
}
