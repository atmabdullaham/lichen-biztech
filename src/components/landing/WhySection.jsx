"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Globe2,
  BarChart3,
  Laptop,
  Palette,
  Target,
  LineChart,
  TrendingUp,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: Layers3,
    title: "360° Solution",
    description:
      "Everything under one roof — software, design, marketing, and strategy. No need to juggle multiple vendors. We handle it all, seamlessly.",
    highlight: "All-in-One",
  },
  {
    icon: Globe2,
    title: "Local Expertise",
    description:
      "Deep understanding of the Bangladesh market and Chittagong business landscape. We speak your language, understand your culture, and know your audience.",
    highlight: "Chittagong-Based",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description:
      "Every strategy is backed by research and analytics. We don't guess — we measure, analyze, and optimize for maximum ROI and growth.",
    highlight: "Results-Focused",
  },
];

export default function WhySection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  // Framer Motion Animation Variants for orbiting network
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    },
  };

  const counterOrbitVariants = {
    animate: {
      rotate: -360,
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    },
  };

  // Dynamically set background styling for coordinate grids
  const gridStyle = {
    backgroundImage: isDark
      ? "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
      : "radial-gradient(rgba(30, 80, 40, 0.07) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  };

  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 sm:py-32 transition-colors duration-300 bg-white dark:bg-neutral-950"
    >
      {/* Decorative radial glows */}
      <div
        className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl pointer-events-none select-none"
        style={{ background: "rgba(133, 196, 65, 0.2)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none select-none"
        style={{ background: "rgba(30, 80, 40, 0.3)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-black/10 dark:border-white/10 bg-[#85C441]/10 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:text-[#85C441]">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            Why Lichen?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-white/60">
            We merge technology and creative execution to deliver a comprehensive 360° growth strategy for your business.
          </p>
        </motion.div>

        {/* Redesigned Grid: Left sticky visual showcase, right active text cards */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sticky Visual Showcase Container */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex items-center justify-center select-none">
            <div 
              style={gridStyle}
              className="relative overflow-hidden w-full max-w-[420px] aspect-square rounded-3xl border border-black/5 dark:border-white/5 bg-[#F1F8EC]/50 dark:bg-black/20 backdrop-blur-md shadow-xl flex items-center justify-center p-6 transition-all duration-300"
            >
              {/* Inner card glow border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-white/5 pointer-events-none" />

              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="tab-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Orbit track circle */}
                    <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-[#85C441]/25 flex items-center justify-center" />

                    {/* Orbiting children network */}
                    <motion.div
                      variants={orbitVariants}
                      animate="animate"
                      className="absolute w-[220px] h-[220px] flex items-center justify-center"
                    >
                      {/* Node 1: Software */}
                      <motion.div
                        variants={counterOrbitVariants}
                        animate="animate"
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#0E2A14] shadow-md">
                          <Laptop className="h-5 w-5 text-[#85C441]" />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-neutral-500 dark:text-white/50 uppercase">CODE</span>
                      </motion.div>

                      {/* Node 2: Design */}
                      <motion.div
                        variants={counterOrbitVariants}
                        animate="animate"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1.5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#0E2A14] shadow-md">
                          <Palette className="h-5 w-5 text-[#85C441]" />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-neutral-500 dark:text-white/50 uppercase">CREATIVE</span>
                      </motion.div>

                      {/* Node 3: Marketing */}
                      <motion.div
                        variants={counterOrbitVariants}
                        animate="animate"
                        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#0E2A14] shadow-md">
                          <Target className="h-5 w-5 text-[#85C441]" />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-neutral-500 dark:text-white/50 uppercase">MARKETING</span>
                      </motion.div>

                      {/* Node 4: Strategy */}
                      <motion.div
                        variants={counterOrbitVariants}
                        animate="animate"
                        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-[#0E2A14] shadow-md">
                          <LineChart className="h-5 w-5 text-[#85C441]" />
                        </div>
                        <span className="text-[10px] font-extrabold tracking-wider text-neutral-500 dark:text-white/50 uppercase">GROWTH</span>
                      </motion.div>
                    </motion.div>

                    {/* Central Node */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#85C441]/35 bg-white dark:bg-[#0A1F10] shadow-[0_0_20px_rgba(133,196,65,0.15)] z-10">
                      <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] opacity-90 shadow-inner" />
                      <span className="relative text-xs font-black tracking-widest text-white uppercase text-center leading-none">360°<br/>BTS</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="tab-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* SVG coordinate rings */}
                    <svg className="absolute w-[240px] h-[240px] opacity-35" viewBox="0 0 300 300">
                      <circle cx="150" cy="150" r="40" stroke="#85C441" strokeWidth="1.5" />
                      <circle cx="150" cy="150" r="80" stroke="#85C441" strokeWidth="1.5" strokeDasharray="6 6" />
                      <circle cx="150" cy="150" r="120" stroke="#85C441" strokeWidth="1.5" />
                    </svg>

                    {/* Scanning radar conic sweep overlay */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                      className="absolute w-[240px] h-[240px] rounded-full border-r border-[#85C441]/25 pointer-events-none"
                      style={{
                        transformOrigin: "center center",
                        background: "conic-gradient(from 0deg, rgba(133, 196, 65, 0.12) 0deg, transparent 120deg)",
                        left: "calc(50% - 120px)",
                        top: "calc(50% - 120px)"
                      }}
                    />

                    {/* Central location hotspot (Chittagong) */}
                    <div className="absolute flex flex-col items-center z-10">
                      <div className="relative flex h-12 w-12 items-center justify-center">
                        {/* Pulser beacon wave */}
                        <div className="absolute inset-0 rounded-full bg-[#85C441]/25 animate-ping" />
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] border-2 border-white dark:border-[#0A1F10] shadow-lg">
                          <MapPin className="h-4.5 w-4.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Corner coordinates HUD details */}
                    <div className="absolute top-4 left-4 flex flex-col gap-0.5 text-left select-none pointer-events-none font-mono">
                      <span className="text-[10px] font-bold text-[#85C441] uppercase tracking-widest">LOCAL PRESTIGE</span>
                      <span className="text-[9px] text-neutral-400 dark:text-white/40">LAT: 22.3569° N</span>
                      <span className="text-[9px] text-neutral-400 dark:text-white/40">LON: 91.7832° E</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#85C441]/10 dark:bg-white/5 px-2 py-1 rounded border border-black/5 dark:border-white/10 font-mono">
                      <span className="text-[9px] font-bold text-[#4A7A30] dark:text-[#85C441] tracking-wider uppercase">HQ: CHITTAGONG</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="tab-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full flex flex-col justify-center px-4"
                  >
                    {/* SVG Trend Graph */}
                    <div className="relative w-full h-[180px] mt-6 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                        <defs>
                          <linearGradient id="graph-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#85C441" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#85C441" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Grid Lines */}
                        <line x1="50" y1="30" x2="350" y2="30" stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(30, 80, 40, 0.05)"} strokeDasharray="3 3" />
                        <line x1="50" y1="80" x2="350" y2="80" stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(30, 80, 40, 0.05)"} strokeDasharray="3 3" />
                        <line x1="50" y1="130" x2="350" y2="130" stroke={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(30, 80, 40, 0.05)"} strokeDasharray="3 3" />
                        <line x1="50" y1="170" x2="350" y2="170" stroke={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(30, 80, 40, 0.1)"} />

                        {/* Area Shading under Graph */}
                        <motion.path
                          d="M 50 170 Q 120 140, 180 100 T 320 40 L 320 170 L 50 170 Z"
                          fill="url(#graph-fill)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        />

                        {/* Rising Growth Line */}
                        <motion.path
                          d="M 50 170 Q 120 140, 180 100 T 320 40"
                          stroke="#85C441"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />

                        {/* Target cursor pin at final node */}
                        <motion.circle
                          cx="320"
                          cy="40"
                          r="5"
                          fill="#85C441"
                          stroke="white"
                          strokeWidth="1.5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1, duration: 0.3 }}
                        />
                      </svg>

                      {/* Tooltip Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        className="absolute right-10 top-2 bg-[#1E5028] dark:bg-[#0A1F10] text-white text-[10px] font-extrabold py-1 px-2.5 rounded-lg border border-[#85C441]/35 shadow-md flex items-center gap-1 font-mono"
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-[#85C441]" />
                        <span>+240% ROI</span>
                      </motion.div>
                    </div>

                    {/* Dashboard mini bar graph inputs */}
                    <div className="absolute bottom-4 left-6 flex gap-2 items-end">
                      {[1, 2, 3, 4].map((bar, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: i === 0 ? [15, 30, 10, 15] : i === 1 ? [30, 12, 45, 30] : i === 2 ? [10, 25, 8, 10] : [25, 40, 15, 25] }}
                          transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, ease: "easeInOut" }}
                          className="w-2.5 rounded-t bg-[#85C441]/25 border border-[#85C441]/10"
                        />
                      ))}
                      <span className="text-[8px] font-bold text-neutral-400 dark:text-white/30 ml-1 tracking-widest uppercase font-mono">LIVE OPTIMIZATION</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Reasons Info Stack */}
          <div className="lg:col-span-7 space-y-6">
            {reasons.map((reason, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={reason.title}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-[#85C441]/40 bg-[#F1F8EC]/60 dark:bg-[#0A1F10]/20 shadow-md shadow-[#85C441]/5"
                      : "border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/10 hover:border-black/10 dark:hover:border-white/10"
                  }`}
                >
                  {/* Subtle radial gradient on active/hover */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none ${
                      isActive ? "opacity-100" : ""
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(133,196,65,0.06) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative flex gap-5 items-start">
                    {/* Left: Tab Icon */}
                    <div
                      className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#85C441] to-[#3A6E2A] text-white scale-110 shadow-md"
                          : "bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441]"
                      }`}
                    >
                      <reason.icon className="h-6 w-6 text-current" />
                    </div>

                    {/* Right: Info */}
                    <div className="flex-1 text-left">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3
                          className={`text-lg font-bold transition-colors duration-200 ${
                            isActive
                              ? "text-[#1E5028] dark:text-white"
                              : "text-neutral-800 dark:text-white/80 group-hover:text-neutral-900 dark:group-hover:text-white"
                          }`}
                        >
                          {reason.title}
                        </h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#85C441]/20 to-[#3A6E2A]/20 text-[#3A6E2A] dark:text-[#85C441] border border-[#85C441]/30"
                              : "bg-[#85C441]/5 text-neutral-500 dark:text-white/40 border border-transparent"
                          }`}
                        >
                          {reason.highlight}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-200 ${
                          isActive
                            ? "text-neutral-700 dark:text-white/70"
                            : "text-neutral-500 dark:text-white/45"
                        }`}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
