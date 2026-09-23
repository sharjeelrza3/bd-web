"use client";
const items = ["Restaurants","Healthcare","Real Estate","Education","Ecommerce","Retail","Manufacturing","Logistics","Automotive","Hospitality","Finance","Corporate"];

export default function IndustriesLogo() {
  return (
    <section className="overflow-hidden bg-[#1d1d1f] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Building across industries</p>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] py-5">
          <div className="flex min-w-max animate-[industryMarquee_28s_linear_infinite] items-center gap-4 px-4">
            {[...items,...items].map((item,index) => (
              <div key={`${item}-${index}`} className="rounded-full border border-white/10 bg-[#0d201b] px-6 py-3 text-sm font-semibold text-white/65">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes industryMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
