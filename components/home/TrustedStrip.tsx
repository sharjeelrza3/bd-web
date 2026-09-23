export default function TrustedStrip() {
  return (
    <section className="border-y border-black/10 bg-white px-5 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <p className="font-semibold text-black/35">Trusted for</p>
        {["Websites", "SEO", "Meta Ads", "Branding", "Software", "Automation"].map((item) => (
          <p key={item} className="font-semibold text-black/70">{item}</p>
        ))}
      </div>
    </section>
  );
}
