"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string; menu?: boolean };
type ServiceColumn = { title: string; links: Array<readonly [string, string]> };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", menu: true },
  { label: "Work / Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
];

const serviceColumns: ServiceColumn[] = [
  { title: "Build", links: [["Website Development", "/services/website-development"], ["Business Software", "/services/business-software"], ["AI Automation", "/services/ai-automation"], ["Website Maintenance", "/services/maintenance"]] },
  { title: "Grow", links: [["SEO", "/services/seo"], ["Google Ads", "/services/google-ads"], ["Meta Ads", "/services/meta-ads"], ["Social Media", "/services/social-media"]] },
  { title: "Create", links: [["Branding & Design", "/services/branding"], ["View all services", "/services"], ["Case Studies", "/case-studies"], ["Client Reviews", "/reviews"]] },
];

const darkInitialPaths = [
  "/", "/portfolio", "/process", "/services", "/services/website-development",
  "/services/social-media", "/services/meta-ads", "/services/ai-automation",
  "/case-studies", "/free-resources", "/showreel",
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const evaluate = () => {
      rafRef.current = null;
      const homeThreshold = window.innerHeight * (window.innerWidth < 768 ? 0.48 : 0.86);
      const threshold = pathname === "/" ? homeThreshold : 18;
      const next = window.scrollY > threshold;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };
    const schedule = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(evaluate);
    };
    evaluate();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const darkInitial = darkInitialPaths.includes(pathname) && !scrolled && !mobileOpen && !servicesOpen;
  const navTone = () => darkInitial ? "text-white/72 hover:text-white" : "text-black/62 hover:text-black";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className={`transition-[background,box-shadow,color] duration-300 ${scrolled || mobileOpen || servicesOpen ? "bg-white/[.9] text-black shadow-[0_1px_12px_rgba(0,0,0,.035)] backdrop-blur-xl" : darkInitial ? "bg-black/[.12] text-white backdrop-blur-md" : "bg-white/[.78] text-black backdrop-blur-md"}`}>
          <div className="mx-auto grid h-[64px] max-w-[1400px] grid-cols-[180px_1fr_180px] items-center px-4 sm:px-6 lg:px-8">
            <Link href="/" aria-label="Being Digitals home" className="relative z-20 flex h-12 w-fit items-center rounded-md pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]">
              <Image src={darkInitial ? "/images/brand-logo-light.png" : "/images/brand-logo-dark.png"} alt="Being Digitals" width={999} height={399} priority sizes="132px" className="h-[42px] w-auto object-contain" />
            </Link>

            <nav className="hidden h-full items-center justify-center gap-0.5 lg:flex" aria-label="Primary navigation">
              {nav.map((item) => item.menu ? (
                <button key={item.label} type="button" onClick={() => setServicesOpen((v) => !v)} aria-expanded={servicesOpen} className={`group flex h-full items-center gap-1 rounded-md px-2.5 text-[12px] font-medium tracking-[-.012em] transition-colors xl:px-3 ${navTone()}`}>
                  {item.label}<ChevronDown size={12} strokeWidth={1.8} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link key={item.label} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`flex h-full items-center rounded-md px-2.5 text-[12px] font-medium tracking-[-.012em] transition-colors xl:px-3 ${navTone()}`}>{item.label}</Link>
              ))}
            </nav>

            <div className="hidden justify-end lg:flex">
              <Link href="/contact" style={{ color: darkInitial ? "#111111" : "#ffffff", backgroundColor: darkInitial ? "#ffffff" : "#1d1d1f" }} className="inline-flex h-9 items-center rounded-full px-4 text-[12px] font-semibold shadow-[0_1px_0_rgba(0,0,0,.16)] transition-transform duration-300 hover:scale-[1.02] active:scale-[.98]">Start a project</Link>
            </div>

            <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} className="relative z-20 col-start-3 ml-auto flex h-10 w-10 items-center justify-center rounded-full lg:hidden">
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <div className={`hidden origin-top overflow-hidden bg-white/[.98] shadow-[0_18px_55px_rgba(0,0,0,.08)] backdrop-blur-xl transition-all duration-200 lg:block ${servicesOpen ? "max-h-[340px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-1 opacity-0"}`} aria-hidden={!servicesOpen}>
          <div className="mx-auto grid max-w-[1280px] grid-cols-[1.35fr_1fr_1fr] gap-12 px-8 py-9">
            {serviceColumns.map((column) => (
              <div key={column.title}>
                <p className="mb-4 text-[12px] font-bold tracking-[-.012em] text-black/58">{column.title}</p>
                <div className="space-y-1.5">{column.links.map(([label, href]) => <Link key={href} href={href} className="flex w-fit items-center gap-2 rounded-sm py-1 text-[14px] font-medium text-black transition-colors hover:text-[#0071e3]">{label}</Link>)}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[90] overflow-y-auto bg-white px-6 pb-12 pt-[92px] transition-[opacity,visibility] duration-200 lg:hidden ${mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`} aria-hidden={!mobileOpen}>
        <div className={`mx-auto max-w-xl transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "translate-y-3"}`}>
          <div className="border-b border-black/[.08] pb-8">
            {nav.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="flex items-center justify-between py-2.5 text-[34px] font-semibold leading-[1.05] tracking-[-.055em] sm:text-[38px]">{item.label}<ArrowUpRight size={18} className="text-black/25" /></Link>)}
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 py-8 text-[14px] font-medium text-black/55">{serviceColumns.flatMap((c) => c.links).slice(0, 9).map(([label, href]) => <Link key={`${href}-${label}`} href={href} className="py-1.5">{label}</Link>)}</div>
          <Link href="/contact" className="flex h-12 items-center justify-center rounded-full bg-black text-[14px] font-semibold text-white">Start a project</Link>
        </div>
      </div>
    </>
  );
}
