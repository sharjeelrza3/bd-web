import { ArrowDownToLine, FileText, Sheet, ClipboardCheck } from "lucide-react";
import { resources } from "./data";

const icons = [ClipboardCheck, FileText, Sheet, FileText];

export default function DownloadCenter() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Download Center
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Practical resources for real SEO work.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Checklists, templates and planning tools designed to make execution
            easier.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => {
            const Icon = icons[index];

            return (
              <a
                key={resource.title}
                href={resource.href}
                download
                className="group rounded-[2rem] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#0066cc]/40 hover:shadow-[0_22px_80px_rgba(0,0,0,.07)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0066cc]">
                    <Icon size={21} />
                  </span>
                  <ArrowDownToLine size={19} className="text-black/20" />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                  {resource.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {resource.title}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
