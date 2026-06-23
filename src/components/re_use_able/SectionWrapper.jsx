// components/re_use_able/SectionWrapper.jsx

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`relative overflow-hidden py-10 md:py-16 bg-background text-foreground transition-colors duration-300 z-10 border-t border-black/5 dark:border-white/5 select-none ${className}`}
    >
      {/* Soft background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-85">
        <svg
          className="absolute inset-0 w-full h-full stroke-neutral-200 dark:stroke-neutral-800/40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
          pointerEvents="none"
        >
          <defs>
            <pattern
              id="neural-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 h-96 w-96 rounded-full opacity-10 dark:opacity-20 blur-3xl pointer-events-none bg-[#85C441]/[0.15]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full opacity-5 dark:opacity-10 blur-3xl pointer-events-none bg-[#1E5028]/[0.2]" />

      {/* Content passed into the wrapper */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
