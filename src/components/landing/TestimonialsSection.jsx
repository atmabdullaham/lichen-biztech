"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, TrendingUp, Sparkles, ChevronRight, Terminal, Cpu } from "lucide-react";
import { useTheme } from "next-themes";

const testimonials = [
  {
    name: "Rafiul Islam",
    company: "GreenTech Solutions Ltd.",
    role: "Managing Director",
    quote:
      "Lichen transformed our online presence completely. Their software team built us a custom ERP that saved us 40% in operational costs. The best tech partner in Chittagong!",
    rating: 5,
    metric: "40% Cost Savings",
    metricLabel: "Saved in operational costs via custom ERP",
    progressValue: 40,
    gradientDir: "225deg",
    accentColor: "#85C441",
    matchScore: "98.7%",
    category: "ERP Network",
    telemetryLog: "SYSTEM_REPORT >> Core ERP deployed successfully. Data synched across local warehouses. Operational overhead reduced by 40.2%. Direct margin improvement registered.",
  },
  {
    name: "Taslima Begum",
    company: "Flavours Restaurant Chain",
    role: "Marketing Head",
    quote:
      "From our brand identity redesign to ongoing social media management, Lichen handles everything. Our customer engagement has tripled since we started working with them.",
    rating: 5,
    metric: "3x Engagement",
    metricLabel: "Customer interaction & digital engagement growth",
    progressValue: 75,
    gradientDir: "135deg",
    accentColor: "#C5765D",
    matchScore: "99.1%",
    category: "Ad Core",
    telemetryLog: "TELEMETRY_LOG >> Brand redesign launched. Social virality coefficient spike +200%. Organic conversion pipelines optimized. 3x growth in daily customer touchpoints.",
  },
  {
    name: "Mohammad Karim",
    company: "Karim Textiles",
    role: "CEO",
    quote:
      "We needed everything — website, product catalogs, packaging design, and marketing. Lichen delivered it all under one roof with incredible quality and on-time delivery.",
    rating: 5,
    metric: "360° Delivery",
    metricLabel: "Full service execution with zero delay",
    progressValue: 100,
    gradientDir: "315deg",
    accentColor: "#3A6E2A",
    matchScore: "99.8%",
    category: "SLA Pipeline",
    telemetryLog: "LOGISTICS_REPORT >> 360° asset bundle deployed. Packaging design integrated with physical print queue. Pipeline latency 0.0ms. Delivery milestone 100% met.",
  },
];

// Typewriter component for AI Telemetry logs
function TypewriterLog({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let interval;
    const delayTimer = setTimeout(() => {
      setDisplayedText("");
      let i = 0;
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 15);
    }, 0);

    return () => {
      clearTimeout(delayTimer);
      if (interval) clearInterval(interval);
    };
  }, [text]);

  return (
    <span className="font-mono text-[10px] md:text-xs text-[#85C441] leading-relaxed block break-words">
      {displayedText}
      <span className="animate-[pulse_1s_infinite] font-extrabold text-[#85C441] ml-0.5">▋</span>
    </span>
  );
}

export default function TestimonialsSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10s rotation for log reading
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32 transition-colors duration-300 bg-white dark:bg-neutral-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Neural Connection Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-85">
        <svg
          className="absolute inset-0 w-full h-full stroke-neutral-200 dark:stroke-neutral-800/60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
          pointerEvents="none"
        >
          <defs>
            <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Decorative Orbs */}
      <div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-10 dark:opacity-20 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.2)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-10 dark:opacity-15 blur-3xl pointer-events-none"
        style={{ background: "rgba(30, 80, 40, 0.25)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-white/5 dark:text-[#85C441]">
            <Cpu className="h-3.5 w-3.5 text-[#85C441] animate-pulse" />
            Impact Verification
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            AI Verified Business Growth
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#7A8B95] dark:text-white/60">
            Real client cases parsed by our optimization engines. Dynamic feedback loops mapping symbiotic partnership metrics.
          </p>
        </motion.div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-4 pb-4 lg:pb-0 scrollbar-none select-none">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={testimonial.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 text-left min-w-[300px] lg:min-w-0 w-80 lg:w-full rounded-2xl border p-5 transition-all duration-300 relative overflow-hidden focus:outline-none cursor-pointer ${
                    isActive
                      ? "border-[#85C441]/40 bg-[#F2F9EE]/80 dark:bg-[#0E2A14]/30 shadow-md shadow-[#85C441]/5"
                      : "border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/10 hover:border-black/10 dark:hover:border-white/10"
                  }`}
                >
                  {/* Subtle active glow indicator */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top right, ${testimonial.accentColor} 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  <div className="flex gap-4 items-center">
                    {/* Avatar Initials Bubble */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md transition-transform duration-300"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${testimonial.accentColor} 0%, #1E5028 100%)`
                          : "linear-gradient(135deg, #7A8B95 0%, #4A5568 100%)",
                        transform: isActive ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    {/* Metadata & Label */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-sm font-bold text-[#1E5028] dark:text-white truncate">
                          {testimonial.name}
                        </span>
                        {isActive && (
                          <ChevronRight className="hidden lg:block h-4 w-4 text-[#85C441] animate-pulse" />
                        )}
                      </div>
                      <div className="text-xs text-[#7A8B95] dark:text-white/55 truncate">
                        {testimonial.role}, {testimonial.company}
                      </div>

                      {/* AI Match Score and Category */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                        <span
                          className={`rounded-md px-2 py-0.5 text-[9px] font-extrabold tracking-wider uppercase border flex items-center gap-1 ${
                            isActive
                              ? "bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] border-[#85C441]/20"
                              : "bg-black/5 dark:bg-white/5 text-neutral-500 dark:text-white/40 border-transparent"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#85C441] animate-ping" />
                          {testimonial.matchScore} AI Match
                        </span>
                        <span className="text-[9px] font-bold text-neutral-400 dark:text-white/30 uppercase tracking-widest font-mono">
                          {testimonial.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display spotlight Panel */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  border: "5px solid transparent",
                  background: isDark
                    ? `linear-gradient(to bottom, #0A140B, #020603) padding-box, linear-gradient(${activeTestimonial.gradientDir}, ${activeTestimonial.accentColor} 0%, rgba(133, 196, 65, 0.15) 50%, transparent 100%) border-box`
                    : `linear-gradient(to bottom, #ffffff, #fdfdfd) padding-box, linear-gradient(${activeTestimonial.gradientDir}, ${activeTestimonial.accentColor} 0%, rgba(133, 196, 65, 0.15) 50%, transparent 100%) border-box`,
                }}
                className="relative flex flex-col justify-between rounded-3xl p-8 md:p-10 shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-md flex-grow"
              >
                {/* Quote symbol in top corner */}
                <Quote
                  className="absolute top-6 right-8 h-20 w-20 opacity-[0.03] dark:opacity-[0.06] select-none pointer-events-none"
                  style={{ color: activeTestimonial.accentColor }}
                />

                <div>
                  {/* Rating Stars */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#85C441] text-[#85C441] filter drop-shadow-[0_0_4px_rgba(133,196,65,0.4)]"
                      />
                    ))}
                  </div>

                  {/* Main Quote Text */}
                  <p className="text-lg md:text-xl md:leading-relaxed text-[#1E5028]/90 dark:text-white/95 italic font-medium mb-8">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>

                {/* AI Analyst Terminal Log */}
                <div className="mb-8 rounded-xl bg-black/95 dark:bg-black/90 p-4 border border-white/10 dark:border-white/5 relative shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 select-none">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-[#85C441]" />
                      <span className="font-mono text-[9px] text-white/50 uppercase tracking-wider font-extrabold">
                        AI telemetry Analyst --live
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  <div className="min-h-[48px] flex items-start">
                    <TypewriterLog text={activeTestimonial.telemetryLog} />
                  </div>
                </div>

                {/* Footer Metric Board */}
                <div className="border-t border-[#85C441]/10 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Left: Metric Data description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <TrendingUp className="h-4.5 w-4.5 text-[#85C441] shrink-0" />
                        <span className="text-sm font-extrabold tracking-wider uppercase text-[#1E5028] dark:text-[#85C441]">
                          Metric Growth
                        </span>
                      </div>
                      <span className="text-xl md:text-2xl font-black text-[#1E5028] dark:text-white tracking-tight">
                        {activeTestimonial.metric}
                      </span>
                      <p className="text-xs text-[#7A8B95] dark:text-white/60 mt-1">
                        {activeTestimonial.metricLabel}
                      </p>
                    </div>

                    {/* Right: Graphic Progress bar */}
                    <div className="w-full md:w-48 shrink-0 flex flex-col justify-end">
                      <div className="flex justify-between text-[10px] font-extrabold text-neutral-400 dark:text-white/40 mb-1.5 uppercase tracking-widest font-mono">
                        <span>Optimization Scale</span>
                        <span>{activeTestimonial.progressValue}%</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden border border-black/5 dark:border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${activeTestimonial.progressValue}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${activeTestimonial.accentColor}, #1E5028)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
