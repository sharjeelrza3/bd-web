import { ArrowDownToLine, FileText } from "lucide-react";
import type { ResourceItem } from "./data";

export default function ResourceGrid({ items }: { items: ResourceItem[] }) {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Resource Library
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Practical tools you can use immediately.
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Download planning documents, checklists and templates for websites, SEO, branding and marketing.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              download
              className="group rounded-[2rem] border border-black/10 bg-[#f5f5f7] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_80px_rgba(0,0,0,.07)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0066cc]">
                  <FileText size={21} />
                </span>
                <ArrowDownToLine size={19} className="text-black/20" />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                {item.category} · {item.type}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-black/45">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
