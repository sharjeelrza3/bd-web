import Image from "next/image";
import { Quote, Star } from "lucide-react";

export default function FeaturedReview() {
  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.9rem] bg-[#1d1d1f] text-white lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-between p-8 md:p-12">
            <div>
              <Quote size={34} className="text-[#0066cc]" />

              <div className="mt-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" className="text-[#0066cc]" />
                ))}
              </div>

              <p className="mt-6 text-3xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-5xl">
                “Being Digitals completely transformed how our business looks online.”
              </p>

              <p className="mt-6 text-base font-semibold leading-7 text-white/45">
                The website now feels premium, loads fast and makes it easier for
                customers to understand our offering.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-semibold">Taste of Karachi</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#0066cc]">
                Restaurant Website
              </p>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#0066cc] p-7 md:p-10">
            <div className="absolute left-[4%] top-[8%] h-[76%] w-[78%] rotate-[-3deg] overflow-hidden rounded-[2.2rem] border border-black/10 bg-white p-3 shadow-[0_35px_120px_rgba(0,0,0,.2)]">
              <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-black">
                <Image
                  src="/images/portfolio/branding-social.png"
                  alt="Featured project desktop preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-[4%] right-[4%] h-[60%] w-[30%] rotate-[5deg] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_28px_100px_rgba(0,0,0,.25)]">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-black">
                <Image
                  src="/images/portfolio/branding-social.png"
                  alt="Featured project mobile preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
