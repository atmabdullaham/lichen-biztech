"use client";

import Image from "next/image";

const LOGO_URL = "/focus-coaching-green.png";

// Repeat 5 logos, then duplicate the set for seamless infinite loop
const logos = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  src: LOGO_URL,
  alt: "Focus Coaching",
}));

export default function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      className="relative overflow-hidden py-14 sm:py-16"
      style={{ backgroundColor: "var(--color-brand-surface)" }}
    >
      {/* Subtle top/bottom dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#85C441]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#85C441]/30 to-transparent" />

      {/* Section header */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full border border-[#85C441]/25 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#4A7A30]">
          Our Clients
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-3xl">
          Trusted by Thousands of Users
        </h2>
        <p className="mt-2 text-sm text-[#7A8B95] dark:text-white/60">
          Brands that grow with Lichen
        </p>
      </div>

      {/* Marquee wrapper — fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-brand-surface)] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-brand-surface)] to-transparent" />

        {/*
          Tailwind v4 marquee pattern:
          - Two identical sets of logos concatenated side-by-side
          - animate-[marquee_20s_linear_infinite] scrolls the container
            from translateX(0) → translateX(-50%) so the duplicate
            picks up seamlessly.
        */}
        <div
          className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-16"
          aria-label="Trusted client logos"
        >
          {/* First set */}
          {logos.map((logo) => (
            <LogoCard key={`a-${logo.id}`} logo={logo} />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <LogoCard key={`b-${logo.id}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ logo }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-2xl border border-[#85C441]/10 dark:border-white/5 bg-white/70 dark:bg-white/5 px-8 py-5 shadow-sm backdrop-blur-sm">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={160}
        height={48}
        className="h-10 w-auto object-contain opacity-80 dark:opacity-70 dark:brightness-0 dark:invert transition-all duration-300"
      />
    </div>
  );
}
