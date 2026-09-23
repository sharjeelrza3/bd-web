import { ArrowRight, MessageCircle } from "lucide-react";

export default function ArticleCTA({ category }: { category: string }) {
  return (
    <section className="bg-[#f5f5f7] px-5 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.8rem] bg-[#0066cc] text-[#000000] lg:grid-cols-[1fr_.72fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Need help with {category}?
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
              Turn this insight into a practical growth plan.
            </h2>
          </div>

          <div className="flex items-center bg-[#1d1d1f] p-8 text-white md:p-12">
            <div className="w-full space-y-3">
              <a
                href="/contact"
                className="flex items-center justify-between rounded-full bg-[#0066cc] px-6 py-4 font-semibold text-[#000000]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/"
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold"
              >
                <MessageCircle size={18} />
                Discuss on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
