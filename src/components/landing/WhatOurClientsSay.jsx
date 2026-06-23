"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const testimonialsData = [
  {
    quote: "Lichen transformed our online presence completely. Their software team built us a custom ERP that saved us 40% in operational costs. The best tech partner in Chittagong!",
    name: "Rafiul Islam",
    designation: "Managing Director, GreenTech Solutions Ltd.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    quote: "From our brand identity redesign to ongoing social media management, Lichen handles everything. Our customer engagement has tripled since we started working with them.",
    name: "Taslima Begum",
    designation: "Marketing Head, Flavours Restaurant Chain",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=600&q=80"
  },
  {
    quote: "We needed everything — website, product catalogs, packaging design, and marketing. Lichen delivered it all under one roof with incredible quality and on-time delivery.",
    name: "Mohammad Karim",
    designation: "CEO, Karim Textiles",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=600&q=80"
  }
];

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  // Color & font config
  const colorName = colors.name ?? (isDark ? "#ffffff" : "#1E5028");
  const colorDesignation = colors.designation ?? (isDark ? "rgba(255, 255, 255, 0.6)" : "#7A8B95");
  const colorTestimony = colors.testimony ?? (isDark ? "rgba(255, 255, 255, 0.85)" : "#4b5563");
  const colorArrowBg = colors.arrowBackground ?? (isDark ? "#141414" : "#f1f1f7");
  const colorArrowFg = colors.arrowForeground ?? (isDark ? "#ffffff" : "#141414");
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#85C441";
  
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);

  const imageContainerRef = useRef(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
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

  // Autoplay (resets timer on manual change, pauses on hover)
  useEffect(() => {
    if (!autoplay || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, activeIndex, isHovered, testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
  }, [testimonialsLength]);
  
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
  }, [testimonialsLength]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
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
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div 
      className="w-full max-w-4xl p-6 md:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Images */}
        <div className="relative w-full h-[22rem] md:h-[26rem] [perspective:1000px]" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              className="absolute w-full h-full object-cover rounded-[2rem] shadow-xl dark:shadow-black/50 border border-neutral-200/10"
              data-index={index}
              style={getImageStyle(index)}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-between h-full min-h-[22rem] py-4">
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
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="mt-1 font-medium"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="mt-6 leading-relaxed italic font-medium"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
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
              <FaArrowLeft size={20} color={hoverPrev ? "#000000" : colorArrowFg} />
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
              <FaArrowRight size={20} color={hoverNext ? "#000000" : colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatOurClientsSaySection() {
  return (
    <section
      id="client-testimonials"
      className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      {/* Neural grid effect in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-70">
        <svg
          className="absolute inset-0 w-full h-full stroke-neutral-200 dark:stroke-neutral-800/40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"
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
        className="absolute top-1/2 left-10 -translate-y-1/2 h-96 w-96 rounded-full opacity-10 dark:opacity-20 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.15)" }}
      />
      <div
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full opacity-5 dark:opacity-10 blur-3xl pointer-events-none"
        style={{ background: "rgba(30, 80, 40, 0.2)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-white/5 dark:text-[#85C441]">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#7A8B95] dark:text-white/60">
            Hear directly from the businesses we've helped scale with our custom software, branding, and marketing solutions.
          </p>
        </div>

        {/* Circular Testimonials Showcase */}
        <CircularTestimonials testimonials={testimonialsData} />
      </div>
    </section>
  );
}
