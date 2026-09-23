"use client";
const clients = ["Taste of Karachi", "Vice City Farmhouse", "Mehran Royale", "The Pest Zone", "Nehal Jewels", "SARSS Fragrance", "M-One Targets", "Nazar Medical Center"];

export default function Clients() {
  return (
    <section className="overflow-hidden bg-[#f5f5f7] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-black/35">Trusted across different industries</p>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-white py-5">
          <div className="flex min-w-max animate-[clientMarquee_28s_linear_infinite] items-center gap-4 px-4">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client}-${index}`} className="rounded-full border border-black/10 bg-[#f5f5f7] px-6 py-3 text-sm font-semibold text-black/55">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes clientMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
