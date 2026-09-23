import Image from "next/image";
import { UserRound } from "lucide-react";
import type { Article } from "@/data/articles";

export default function AuthorBox({
  author,
}: {
  author: Article["author"];
}) {
  return (
    <section className="bg-[#f5f5f7] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 rounded-[2.5rem] border border-black/10 bg-white p-7 shadow-[0_22px_80px_rgba(0,0,0,.05)] md:grid-cols-[auto_1fr] md:items-center md:p-10">
          <div className="relative h-28 w-28 overflow-hidden rounded-[2rem] bg-[#1d1d1f]">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#0066cc]">
              <UserRound size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                About the Author
              </p>
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              {author.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-black/35">
              {author.role}
            </p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-black/50">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
