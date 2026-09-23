"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-white px-5 py-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.8rem] bg-[#0066cc] text-[#000000] lg:grid-cols-[1fr_.8fr]">
        <div className="p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em]">New Resources</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
            Get useful tools when we publish them.
          </h2>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex items-center bg-[#1d1d1f] p-8 text-white md:p-12"
        >
          <div className="w-full">
            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-4">
              <Mail size={18} className="text-[#0066cc]" />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-white/30"
              />
            </label>
            <button className="mt-4 flex w-full items-center justify-between rounded-full bg-[#0066cc] px-6 py-4 font-semibold text-[#000000]">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
