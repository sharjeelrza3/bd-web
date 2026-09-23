import { ArrowDownToLine, CheckCircle2, FileText } from "lucide-react";

export default function FeaturedDownload() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <article className="grid overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_28px_100px_rgba(0,0,0,.07)] lg:grid-cols-[1fr_.9fr]">
          <div className="bg-[#1d1d1f] p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0066cc]">
              Featured Resource
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Complete SEO Audit Checklist
            </h2>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-white/50">
              Review technical SEO, content, local visibility, indexing and conversion essentials.
            </p>

            <div className="mt-8 space-y-3">
              {["Technical checks", "On-page review", "Local SEO", "Performance review"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#0066cc]" />
                  <span className="font-semibold text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#0066cc] p-8 text-[#000000] md:p-12">
            <div className="w-full rounded-[2rem] bg-white/45 p-8">
              <FileText size={42} />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em]">PDF Checklist</p>
              <h3 className="mt-3 text-3xl font-semibold">Free SEO Audit Checklist</h3>
              <a
                href="/resources/seo-audit-checklist.pdf"
                download
                className="mt-8 flex items-center justify-between rounded-full bg-[#000000] px-6 py-4 font-semibold text-white"
              >
                Download Free
                <ArrowDownToLine size={18} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
