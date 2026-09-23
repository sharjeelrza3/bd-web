import Link from "next/link";

export default function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  const styles = variant === "primary"
    ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
    : "border border-white/15 text-white hover:bg-white/10";
  return <Link href={href} className={`inline-flex rounded-full px-7 py-4 font-semibold transition ${styles}`}>{children}</Link>;
}
