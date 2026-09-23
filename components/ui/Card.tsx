export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-glow transition hover:-translate-y-1 hover:bg-white/[0.07] ${className}`}>{children}</div>;
}
