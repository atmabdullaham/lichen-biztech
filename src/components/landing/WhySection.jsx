"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { BarChart3, Globe, Layers } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../re_use_able/SectionHeader";

// ----------------------------------------------------
// Data Constants
// ----------------------------------------------------

const whyChooseUsData = [
  {
    badge: "CHITTAGONG-BASED",
    icon: Globe,
    title: "Local Expertise",
    desc: "Deep understanding of the Bangladesh market and Chittagong business landscape. We speak your language, understand your culture, and know your audience.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    badge: "ALL-IN-ONE",
    icon: Layers,
    title: "360° Solution",
    desc: "Everything under one roof — software, design, marketing, and strategy. No need to juggle multiple vendors. We handle it all, seamlessly.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    badge: "RESULTS-FOCUSED",
    icon: BarChart3,
    title: "Data-Driven",
    desc: "Every strategy is backed by research and analytics. We don't guess — we measure, analyze, and optimize for maximum ROI and growth.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonialsData = [
  {
    quote:
      "Lichen transformed our online presence completely. Their software team built us a custom ERP that saved us 40% in operational costs. The best tech partner in Chittagong!",
    name: "Rafiul Islam",
    designation: "Managing Director, GreenTech Solutions Ltd.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    quote:
      "From our brand identity redesign to ongoing social media management, Lichen handles everything. Our customer engagement has tripled since we started working with them.",
    name: "Taslima Begum",
    designation: "Marketing Head, Flavours Restaurant Chain",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=600&q=80",
  },
  {
    quote:
      "We needed everything — website, product catalogs, packaging design, and marketing. Lichen delivered it all under one roof with incredible quality and on-time delivery.",
    name: "Mohammad Karim",
    designation: "CEO, Karim Textiles",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80",
  },
];

// ----------------------------------------------------
// Sub-Components
// ----------------------------------------------------

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

function CircularTestimonials({ testimonials, isDark }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerRef = useRef(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials],
  );

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered, testimonialsLength]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength,
    );
  }, [testimonialsLength]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset =
      (index - activeIndex + testimonialsLength) % testimonialsLength;
    const isActive = index === activeIndex;
    const isLeft =
      (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const colorName = isDark ? "#ffffff" : "#1E5028";
  const colorDesignation = isDark ? "rgba(255, 255, 255, 0.6)" : "#7A8B95";
  const colorTestimony = isDark ? "rgba(255, 255, 255, 0.85)" : "#4b5563";
  const colorArrowBg = isDark ? "#141414" : "#f1f1f7";
  const colorArrowFg = isDark ? "#ffffff" : "#141414";
  const colorArrowHoverBg = "#85C441";

  return (
    <div
      className="w-full max-w-4xl p-6 md:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Images */}
        <div
          className="relative w-full h-[18rem] sm:h-[22rem] md:h-[26rem] [perspective:1000px]"
          ref={imageContainerRef}
        >
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="absolute w-full h-full object-cover rounded-[2rem] shadow-xl dark:shadow-black/50 border border-neutral-200/10"
              style={getImageStyle(index)}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between h-full min-h-[18rem] py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3
                className="font-extrabold tracking-tight"
                style={{ color: colorName, fontSize: "1.5rem" }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="mt-1 font-medium"
                style={{ color: colorDesignation, fontSize: "0.925rem" }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="mt-6 leading-relaxed italic font-medium"
                style={{ color: colorTestimony, fontSize: "1.125rem" }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 pt-10 md:pt-0">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 border-none outline-none focus:ring-2 focus:ring-[#85C441]"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft
                size={20}
                color={hoverPrev ? "#000000" : colorArrowFg}
              />
            </button>
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 border-none outline-none focus:ring-2 focus:ring-[#85C441]"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <FaArrowRight
                size={20}
                color={hoverNext ? "#000000" : colorArrowFg}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Main Component
// ----------------------------------------------------

export default function WhySection() {
  const containerRef = useRef(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Track scroll position of the sticky container manually for 100% reliability
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // The parent container has a scroll height track, but we only calculate progress
      // over the vertical area where the sticky container is pinned.
      // Since Testimonials is rendered below, the scroll track is h-[300vh].
      // The sticky block container takes h-screen (100vh).
      // Thus, the scroll range of the sticky block is exactly (300vh - 100vh = 200vh).
      const scrollRange = containerHeight - viewportHeight;

      if (scrollRange <= 0) return;

      const progress = -rect.top / scrollRange;
      const clampedProgress = Math.max(0, Math.min(1, progress));
      scrollProgress.set(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress]);

  // Framer Motion transforms for the middle column animation on desktop (bottom drawer system)
  const middleOpacity = useTransform(
    scrollProgress,
    [0.0, 0.05, 0.7, 1.0],
    [0, 0, 1, 1],
  );
  const middleY = useTransform(
    scrollProgress,
    [0.0, 0.05, 0.7, 1.0],
    [380, 380, 0, 0],
  );
  const middleScale = useTransform(
    scrollProgress,
    [0.0, 0.05, 0.7, 1.0],
    [0.96, 0.96, 1, 1],
  );

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  return (
    <>
      {/* ==================================================== */}
      {/* 1. DESKTOP STICKY SCROLL TRACK (Visible on MD and above) */}
      {/* ==================================================== */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[300vh] bg-background text-foreground select-none overflow-visible transition-colors duration-300"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Soft background grid & glows */}
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#85C441]/[0.03] dark:bg-[#85C441]/[0.012] rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-8 md:px-12 h-full flex flex-col justify-center py-[6vh] lg:py-[8vh]">
            {/* Section Header */}
            <SectionHeader
              badge="Why Choose Us"
              title="A Growth Partner, Not Just a Vendor"
              description="We combine end-to-end expertise with local insights and data-backed strategies to help your business excel in today's digital landscape."
            />

            {/* Cards Grid */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 items-stretch">
              {/* Column 1: 360° Solution */}
              <div className="bg-white dark:bg-[#060f08] border border-[#1E5028]/10 dark:border-[#85C441]/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.03)] rounded-3xl p-6 md:p-8 flex flex-col justify-start hover:border-[#4A7A30]/30 dark:hover:border-[#85C441]/25 hover:shadow-[0_15px_30px_rgba(30,80,40,0.05),_inset_0_2px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_30px_-5px_rgba(133,196,65,0.05),_inset_0_2px_8px_rgba(255,255,255,0.03)] transition-all duration-500">
                <div className="flex items-center justify-between">
                  <span className="bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] border border-[#85C441]/20 text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase font-sans">
                    {whyChooseUsData[0].badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] flex items-center justify-center border border-[#85C441]/20">
                    {(() => {
                      const Icon = whyChooseUsData[0].icon;
                      return <Icon className="w-5 h-5 shadow-xl" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1E5028] dark:text-white mt-6 tracking-tight font-sans">
                  {whyChooseUsData[0].title}
                </h3>
                <p className="text-xs md:text-[13px] text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed font-sans">
                  {whyChooseUsData[0].desc}
                </p>
              </div>

              {/* Column 2: Local Expertise (Animated Bottom Drawer System) */}
              <div className="relative">
                <motion.div
                  style={{
                    opacity: middleOpacity,
                    y: middleY,
                    scale: middleScale,
                  }}
                  className="w-full h-full"
                >
                  <div className="bg-white dark:bg-[#060f08] border border-[#1E5028]/10 dark:border-[#85C441]/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.03)] rounded-3xl p-6 md:p-8 flex flex-col justify-start h-full hover:border-[#4A7A30]/30 dark:hover:border-[#85C441]/25 hover:shadow-[0_15px_30px_rgba(30,80,40,0.05),_inset_0_2px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_30px_-5px_rgba(133,196,65,0.05),_inset_0_2px_8px_rgba(255,255,255,0.03)] transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] border border-[#85C441]/20 text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase font-sans">
                        {whyChooseUsData[1].badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] flex items-center justify-center border border-[#85C441]/20">
                        {(() => {
                          const IconComp = whyChooseUsData[1].icon;
                          return <IconComp className="w-5 h-5" />;
                        })()}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E5028] dark:text-white mt-6 tracking-tight font-sans">
                      {whyChooseUsData[1].title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed font-sans">
                      {whyChooseUsData[1].desc}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Column 3: Data-Driven */}
              <div className="bg-white dark:bg-[#060f08] border border-[#1E5028]/10 dark:border-[#85C441]/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.03)] rounded-3xl p-6 md:p-8 flex flex-col justify-start hover:border-[#4A7A30]/30 dark:hover:border-[#85C441]/25 hover:shadow-[0_15px_30px_rgba(30,80,40,0.05),_inset_0_2px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_30px_-5px_rgba(133,196,65,0.05),_inset_0_2px_8px_rgba(255,255,255,0.03)] transition-all duration-500">
                <div className="flex items-center justify-between">
                  <span className="bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] border border-[#85C441]/20 text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase font-sans">
                    {whyChooseUsData[2].badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] flex items-center justify-center border border-[#85C441]/20">
                    {(() => {
                      const Icon = whyChooseUsData[2].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1E5028] dark:text-white mt-6 tracking-tight font-sans">
                  {whyChooseUsData[2].title}
                </h3>
                <p className="text-xs md:text-[13px] text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed font-sans">
                  {whyChooseUsData[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 2. MOBILE WHY CHOOSE US LAYOUT (Visible on Mobile/Tablet) */}
      {/* ==================================================== */}
      <div className="md:hidden bg-background py-24 sm:py-32 px-6 w-full relative z-10 text-left transition-colors duration-300">
        {/* Section Header */}
        <div className="text-left mb-20">
          <span className="mb-4 inline-block rounded-full border border-black/10 dark:border-white/10 bg-[#85C441]/10 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:text-[#85C441]">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-[#1E5028] dark:text-white tracking-tight">
            A Growth Partner, Not Just a Vendor
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            We combine end-to-end expertise with local insights and data-backed
            strategies to help your business excel in today's digital landscape.
          </p>
        </div>

        {/* Vertical Stack Cards */}
        <div className="space-y-8">
          {whyChooseUsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.badge}
                className="bg-white dark:bg-[#060f08] border border-[#1E5028]/10 dark:border-[#85C441]/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_2px_8px_rgba(255,255,255,0.03)] rounded-3xl p-6 flex flex-col justify-start"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] border border-[#85C441]/20 text-[9px] font-extrabold tracking-widest px-2.5 py-1 rounded-full uppercase font-sans">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441] flex items-center justify-center border border-[#85C441]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1E5028] dark:text-white mt-6 tracking-tight font-sans">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
