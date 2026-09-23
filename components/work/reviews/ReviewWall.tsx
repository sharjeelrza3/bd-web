import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { reviews } from "./reviewsData";

export default function ReviewWall() {
  return (
    <section className="bg-[#f5f5f7] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0066cc]">
              Review Wall
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Real feedback from real projects.
            </h2>
          </div>

          <p className="max-w-xl text-lg font-semibold leading-8 text-black/50">
            Every review reflects a different business challenge, industry and digital outcome.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-5 md:columns-2 xl:columns-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.company}-${index}`}
              className="mb-5 break-inside-avoid rounded-[2.2rem] border border-black/10 bg-white p-7 shadow-[0_18px_70px_rgba(0,0,0,.05)] transition hover:-translate-y-1 hover:border-[#0066cc]/35 hover:shadow-[0_28px_100px_rgba(0,0,0,.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f7]">
                  <Image src={review.logo} alt={review.company} fill className="object-contain p-2" />
                </div>

                <Quote size={24} className="text-[#0066cc]" />
              </div>

              <div className="mt-6 flex gap-1">
                {Array.from({ length: review.rating }).map((_, star) => (
                  <Star key={star} size={15} fill="currentColor" className="text-[#0066cc]" />
                ))}
              </div>

              <p className="mt-6 text-xl font-semibold leading-8 tracking-[-0.03em]">
                “{review.quote}”
              </p>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="font-semibold">{review.company}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0066cc]">
                  {review.project}
                </p>
                <p className="mt-2 text-sm font-semibold text-black/40">
                  {review.client}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
