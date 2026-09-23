import Image from "next/image";
const imgs=[["/images/services/social-media/reel-cover.webp","Motion frame","md:col-span-2 md:row-span-2"],["/images/portfolio/websites.webp","Brand animation",""],["/images/services/softwares/restaurant-pos.png","Website motion",""],["/images/services/branding/project-sarss.webp","Social reel","md:col-span-2"],["/images/services/social-media/reel-cover.webp","Software demo",""],["/images/portfolio/websites.webp","Campaign visual",""]];
export default function Gallery(){
 return <section className="bg-[#f5f5f7] px-5 py-28 text-[#101010]"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase tracking-[.28em] text-[#0066cc]">Motion Gallery</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.06em] md:text-7xl">Frames designed to stop the scroll.</h2></div><p className="max-w-xl text-lg font-semibold leading-8 text-black/50">Campaign moments, interface motion and creative direction.</p></div>
 <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">{imgs.map(([src,alt,span])=><div key={src} className={`relative overflow-hidden rounded-[2rem] border border-black/10 bg-black ${span}`}><Image src={src} alt={alt} fill className="object-cover transition duration-700 hover:scale-[1.05]"/></div>)}</div>
 </div></section>
}
