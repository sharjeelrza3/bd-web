import Image from "next/image";
import { clientLogos } from "./reviewsData";

export default function ClientLogos() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-black/35">
          Trusted by growing businesses
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="group flex min-h-[140px] items-center justify-center rounded-[1.8rem] border border-black/10 bg-[#f5f5f7] p-6"
            >
              <div className="relative h-16 w-full grayscale transition duration-300 group-hover:grayscale-0">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
