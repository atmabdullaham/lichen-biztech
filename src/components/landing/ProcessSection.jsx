"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, ClipboardList, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Place Your Order",
    description:
      "Tell us what you need. Share your requirements, vision, and goals — we're all ears. Whether it's a quick chat, a form, or a detailed brief.",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "We Review & Plan",
    description:
      "Our experts analyze your requirements, create a tailored strategy, and present a clear roadmap with timelines and milestones.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Timely Delivery",
    description:
      "We execute with precision and deliver on time, every time. You get regular updates throughout the process and full support after delivery.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  // Track the scroll position relative to the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 35%"],
  });

  // Apply spring physics for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Timeline path length (complete at 0.7 scroll progress to avoid spilling into other sections)
  const pathLength = useTransform(smoothProgress, [0.05, 0.7], [0, 1], { clamp: true });

  // Motion transformations for Step 1 (Show initially)
  const step1Opacity = useTransform(smoothProgress, [0, 0.15], [1, 1], { clamp: true });
  const step1Scale = useTransform(smoothProgress, [0, 0.15], [1, 1], { clamp: true });
  const step1GlowOpacity = useTransform(smoothProgress, [0, 0.15], [0.8, 1], { clamp: true });

  // Motion transformations for Step 2
  const step2Opacity = useTransform(smoothProgress, [0.15, 0.4], [0, 1], { clamp: true });
  const step2Y = useTransform(smoothProgress, [0.15, 0.4], [40, 0], { clamp: true });
  const step2Scale = useTransform(smoothProgress, [0.15, 0.4], [0.95, 1], { clamp: true });
  const step2GlowOpacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1], { clamp: true });

  // Motion transformations for Step 3
  const step3Opacity = useTransform(smoothProgress, [0.4, 0.65], [0, 1], { clamp: true });
  const step3Y = useTransform(smoothProgress, [0.4, 0.65], [40, 0], { clamp: true });
  const step3Scale = useTransform(smoothProgress, [0.4, 0.65], [0.95, 1], { clamp: true });
  const step3GlowOpacity = useTransform(smoothProgress, [0.6, 0.7], [0, 1], { clamp: true });

  const stepsMotion = [
    { opacity: step1Opacity, y: 0, scale: step1Scale, glow: step1GlowOpacity },
    { opacity: step2Opacity, y: step2Y, scale: step2Scale, glow: step2GlowOpacity },
    { opacity: step3Opacity, y: step3Y, scale: step3Scale, glow: step3GlowOpacity },
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative overflow-hidden py-24 sm:py-32 transition-colors duration-300"
      style={{ background: isDark ? "var(--gradient-hero)" : "#F1F8EC" }}
    >
      {/* Decorative backdrop glow elements */}
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl pointer-events-none select-none"
        style={{ background: "rgba(133, 196, 65, 0.25)" }}
      />
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl pointer-events-none select-none"
        style={{ background: "rgba(30, 80, 40, 0.4)" }}
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
            Our Process
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-white/60">
            A seamless 3-step collaboration process designed to bring your vision to life.
          </p>
        </motion.div>

        {/* Desktop Process Flow (Staggered layout + curved dashed timeline) */}
        <div className="relative w-full h-[520px] hidden md:block select-none">
          {/* SVG Curved Dashed Timeline Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Dynamic glowing gradient for active path */}
              <linearGradient id="active-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3A6E2A" />
                <stop offset="50%" stopColor="#85C441" />
                <stop offset="100%" stopColor="#85C441" />
              </linearGradient>

              {/* Mask for animated path drawing */}
              <mask id="draw-mask-desktop">
                <motion.path
                  d="M 150 68 C 320 68, 320 268, 500 268 C 680 268, 680 68, 850 68"
                  fill="none"
                  stroke="white"
                  strokeWidth="12"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
              </mask>
            </defs>

            {/* Base timeline path (Faint grey dashed track) */}
            <path
              d="M 150 68 C 320 68, 320 268, 500 268 C 680 268, 680 68, 850 68"
              fill="none"
              stroke={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(30, 80, 40, 0.1)"}
              strokeWidth="4"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />

            {/* Glow Aura Layer for Active path (Only displays where scrolled) */}
            <path
              d="M 150 68 C 320 68, 320 268, 500 268 C 680 268, 680 68, 850 68"
              fill="none"
              stroke="#85C441"
              strokeWidth="10"
              opacity="0.35"
              filter="blur(4px)"
              strokeLinecap="round"
              mask="url(#draw-mask-desktop)"
            />

            {/* Active Drawing Line (Dashed & Glowing green) */}
            <path
              d="M 150 68 C 320 68, 320 268, 500 268 C 680 268, 680 68, 850 68"
              fill="none"
              stroke="url(#active-line-grad)"
              strokeWidth="4"
              strokeDasharray="12 12"
              strokeLinecap="round"
              mask="url(#draw-mask-desktop)"
            />
          </svg>

          {/* Step 1 Card (Desktop - Left & Top-aligned) */}
          <motion.div
            style={{ opacity: stepsMotion[0].opacity, scale: stepsMotion[0].scale }}
            className="absolute left-0 top-[20px] w-[30%] text-center group cursor-default"
          >
            {/* Step circle container */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center select-none z-10">
              {/* Outer faint glow rings */}
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Inactive state circle (with dark text for light mode, light text for dark mode) */}
              <div className="absolute inset-0 rounded-full border-2 border-[#85C441] bg-white dark:bg-[#0A1F10]/80 shadow-[0_0_15px_rgba(133,196,65,0.15)] flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center text-[#1E5028] dark:text-white">
                  <ClipboardList className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-80 mt-0.5">STEP 01</span>
                </div>
              </div>
              
              {/* Solid filled active circle */}
              <motion.div 
                style={{ opacity: stepsMotion[0].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] shadow-[0_0_25px_rgba(133,196,65,0.5)] flex items-center justify-center"
              >
                <div className="relative flex flex-col items-center justify-center text-white">
                  <ClipboardList className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-90 mt-0.5">STEP 01</span>
                </div>
              </motion.div>
            </div>

            {/* Content box */}
            <div className="relative rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-lg group-hover:-translate-y-2 group-hover:border-[#85C441]/35 group-hover:shadow-[0_15px_30px_rgba(133,196,65,0.08)] transition-all duration-300">
              {/* Decorative side glow bar */}
              <div className="absolute top-4 left-0 bottom-4 w-[3px] rounded-r-md bg-gradient-to-b from-[#85C441] to-transparent opacity-40" />
              
              <h3 className="mb-2 text-lg font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[0].title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[0].description}
              </p>
            </div>
          </motion.div>

          {/* Step 2 Card (Desktop - Middle & Bottom-aligned) */}
          <motion.div
            style={{ 
              opacity: stepsMotion[1].opacity, 
              y: stepsMotion[1].y, 
              scale: stepsMotion[1].scale 
            }}
            className="absolute left-[35%] top-[220px] w-[30%] text-center group cursor-default"
          >
            {/* Step circle container */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center select-none z-10">
              {/* Outer faint glow rings */}
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Inactive state outline */}
              <div className="absolute inset-0 rounded-full border-2 border-black/15 dark:border-white/15 bg-white dark:bg-[#0A1F10]/60 flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center text-[#1E5028] dark:text-white">
                  <CheckCircle2 className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-80 mt-0.5">STEP 02</span>
                </div>
              </div>
              
              {/* Solid filled active circle */}
              <motion.div 
                style={{ opacity: stepsMotion[1].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] shadow-[0_0_25px_rgba(133,196,65,0.5)] flex items-center justify-center"
              >
                <div className="relative flex flex-col items-center justify-center text-white">
                  <CheckCircle2 className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-90 mt-0.5">STEP 02</span>
                </div>
              </motion.div>
            </div>

            {/* Content box */}
            <div className="relative rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-lg group-hover:-translate-y-2 group-hover:border-[#85C441]/35 group-hover:shadow-[0_15px_30px_rgba(133,196,65,0.08)] transition-all duration-300">
              {/* Dynamic bottom glow that fades in when active */}
              <motion.div
                style={{ opacity: stepsMotion[1].glow }}
                className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#85C441] to-transparent pointer-events-none"
              />
              
              <h3 className="mb-2 text-lg font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[1].title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[1].description}
              </p>
            </div>
          </motion.div>

          {/* Step 3 Card (Desktop - Right & Top-aligned) */}
          <motion.div
            style={{ 
              opacity: stepsMotion[2].opacity, 
              y: stepsMotion[2].y, 
              scale: stepsMotion[2].scale 
            }}
            className="absolute left-[70%] top-[20px] w-[30%] text-center group cursor-default"
          >
            {/* Step circle container */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center select-none z-10">
              {/* Outer faint glow rings */}
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Inactive state outline */}
              <div className="absolute inset-0 rounded-full border-2 border-black/15 dark:border-white/15 bg-white dark:bg-[#0A1F10]/60 flex items-center justify-center">
                <div className="relative flex flex-col items-center justify-center text-[#1E5028] dark:text-white">
                  <Truck className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-80 mt-0.5">STEP 03</span>
                </div>
              </div>
              
              {/* Solid filled active circle */}
              <motion.div 
                style={{ opacity: stepsMotion[2].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] shadow-[0_0_25px_rgba(133,196,65,0.5)] flex items-center justify-center"
              >
                <div className="relative flex flex-col items-center justify-center text-white">
                  <Truck className="h-6 w-6 text-current" />
                  <span className="text-[9px] font-extrabold tracking-wider opacity-90 mt-0.5">STEP 03</span>
                </div>
              </motion.div>
            </div>

            {/* Content box */}
            <div className="relative rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-lg group-hover:-translate-y-2 group-hover:border-[#85C441]/35 group-hover:shadow-[0_15px_30px_rgba(133,196,65,0.08)] transition-all duration-300">
              {/* Decorative side glow bar */}
              <div className="absolute top-4 right-0 bottom-4 w-[3px] rounded-l-md bg-gradient-to-b from-[#85C441] to-transparent opacity-40" />

              <h3 className="mb-2 text-lg font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[2].title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[2].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Process Flow (Vertical stack + vertical curved dashed timeline) */}
        <div className="relative flex flex-col gap-14 md:hidden pl-16 py-4">
          {/* Vertical SVG curved timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none select-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Mask for animated path drawing */}
                <mask id="draw-mask-mobile">
                  <motion.path
                    d="M 50 20 C 80 150, 20 250, 50 350 C 80 450, 20 550, 50 780"
                    fill="none"
                    stroke="white"
                    strokeWidth="12"
                    strokeLinecap="round"
                    style={{ pathLength }}
                  />
                </mask>
              </defs>

              {/* Base line track (Faint dashed grey) */}
              <path
                d="M 50 20 C 80 150, 20 250, 50 350 C 80 450, 20 550, 50 780"
                fill="none"
                stroke={isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(30, 80, 40, 0.1)"}
                strokeWidth="4"
                strokeDasharray="10 10"
                strokeLinecap="round"
              />

              {/* Glowing active layer (Dashed green) */}
              <path
                d="M 50 20 C 80 150, 20 250, 50 350 C 80 450, 20 550, 50 780"
                fill="none"
                stroke="url(#active-line-grad)"
                strokeWidth="4"
                strokeDasharray="10 10"
                strokeLinecap="round"
                mask="url(#draw-mask-mobile)"
              />
            </svg>
          </div>

          {/* Step 1 Card (Mobile) */}
          <motion.div
            style={{ opacity: stepsMotion[0].opacity, scale: stepsMotion[0].scale }}
            className="relative flex flex-col items-start gap-4 group cursor-default"
          >
            {/* Step Circle overlaying line */}
            <div className="absolute -left-[56px] top-1 flex h-12 w-12 items-center justify-center select-none z-10">
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-[#85C441] bg-white dark:bg-[#0A1F10]/80 flex items-center justify-center shadow-[0_0_10px_rgba(133,196,65,0.15)]">
                <ClipboardList className="h-5 w-5 text-[#1E5028] dark:text-white" />
              </div>
              <motion.div 
                style={{ opacity: stepsMotion[0].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] flex items-center justify-center shadow-[0_0_15px_rgba(133,196,65,0.4)]"
              >
                <ClipboardList className="h-5 w-5 text-white" />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-md group-hover:border-[#85C441]/25 transition-all duration-300">
              <span className="text-[10px] font-extrabold tracking-wider text-[#4A7A30] dark:text-[#85C441] mb-1 block">STEP 01</span>
              <h3 className="mb-2 text-base font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[0].title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[0].description}
              </p>
            </div>
          </motion.div>

          {/* Step 2 Card (Mobile) */}
          <motion.div
            style={{ 
              opacity: stepsMotion[1].opacity, 
              y: stepsMotion[1].y, 
              scale: stepsMotion[1].scale 
            }}
            className="relative flex flex-col items-start gap-4 group cursor-default"
          >
            {/* Step Circle overlaying line */}
            <div className="absolute -left-[56px] top-1 flex h-12 w-12 items-center justify-center select-none z-10">
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-black/15 dark:border-white/15 bg-white dark:bg-[#0A1F10]/60 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-[#1E5028] dark:text-white" />
              </div>
              <motion.div 
                style={{ opacity: stepsMotion[1].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] flex items-center justify-center shadow-[0_0_15px_rgba(133,196,65,0.4)]"
              >
                <CheckCircle2 className="h-5 w-5 text-white" />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-md group-hover:border-[#85C441]/25 transition-all duration-300">
              <span className="text-[10px] font-extrabold tracking-wider text-[#4A7A30] dark:text-[#85C441] mb-1 block">STEP 02</span>
              <h3 className="mb-2 text-base font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[1].title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[1].description}
              </p>
            </div>
          </motion.div>

          {/* Step 3 Card (Mobile) */}
          <motion.div
            style={{ 
              opacity: stepsMotion[2].opacity, 
              y: stepsMotion[2].y, 
              scale: stepsMotion[2].scale 
            }}
            className="relative flex flex-col items-start gap-4 group cursor-default"
          >
            {/* Step Circle overlaying line */}
            <div className="absolute -left-[56px] top-1 flex h-12 w-12 items-center justify-center select-none z-10">
              <div className="absolute inset-0 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-black/15 dark:border-white/15 bg-white dark:bg-[#0A1F10]/60 flex items-center justify-center">
                <Truck className="h-5 w-5 text-[#1E5028] dark:text-white" />
              </div>
              <motion.div 
                style={{ opacity: stepsMotion[2].glow }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#85C441] to-[#3A6E2A] flex items-center justify-center shadow-[0_0_15px_rgba(133,196,65,0.4)]"
              >
                <Truck className="h-5 w-5 text-white" />
              </motion.div>
            </div>

            {/* Content Card */}
            <div className="w-full rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-black/20 p-5 backdrop-blur-md shadow-md group-hover:border-[#85C441]/25 transition-all duration-300">
              <span className="text-[10px] font-extrabold tracking-wider text-[#4A7A30] dark:text-[#85C441] mb-1 block">STEP 03</span>
              <h3 className="mb-2 text-base font-bold text-[#1E5028] dark:text-white group-hover:text-[#85C441] transition-colors duration-200">
                {steps[2].title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-white/50 group-hover:text-neutral-800 dark:group-hover:text-white/70 transition-colors duration-200">
                {steps[2].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
