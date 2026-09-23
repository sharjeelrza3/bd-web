import { Clock3, Film, PlayCircle, Sparkles } from "lucide-react";
const stats=[["50+","Videos Produced",Film],["2M+","Content Views",PlayCircle],["15+","Industries Covered",Sparkles],["100%","Custom Direction",Clock3]];
export default function Stats(){
 return <section className="bg-[#f5f5f7] px-5 py-24 text-[#101010]"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">{stats.map(([v,l,I])=>{const Icon=I as typeof Film;return <article key={l as string} className="rounded-[2rem] border border-black/10 bg-white p-7"><Icon size={22} className="text-[#0066cc]"/><p className="mt-10 text-5xl font-semibold">{v as string}</p><p className="mt-2 text-sm font-bold text-black/40">{l as string}</p></article>})}</div></section>
}
