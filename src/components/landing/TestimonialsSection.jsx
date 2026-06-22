"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../re_use_able/SectionHeader";
import SectionWrapper from "../re_use_able/SectionWrapper";

// ----------------------------------------------------
// Data Constants
// ----------------------------------------------------

const testimonialsData = [
  {
    quote:
      "Lichen transformed our online presence completely. Their software team built us a custom ERP that saved us 40% in operational costs. The best tech partner in Chittagong!",
    name: "Rafiul Islam",
    designation: "Managing Director, GreenTech Solutions Ltd.",
    src: "https://ik.imagekit.io/atm/received_3112859895654532_BfrahsZEH.jpeg",
  },
  {
    quote:
      "From our brand identity redesign to ongoing social media management, Lichen handles everything. Our customer engagement has tripled since we started working with them.",
    name: "Taslima Begum",
    designation: "Marketing Head, Flavours Restaurant Chain",
    src: "https://ik.imagekit.io/atm/inbound1826760639771484176_et4kizsrB.jpg",
  },
  {
    quote:
      "We needed everything — website, product catalogs, packaging design, and marketing. Lichen delivered it all under one roof with incredible quality and on-time delivery.",
    name: "Mohammad Karim",
    designation: "CEO, Karim Textiles",
    src: "https://ik.imagekit.io/atm/inbound1826760639771484176_et4kizsrB.jpg",
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
            <Image
              key={testimonial.name}
              src={testimonial.src}
              alt={testimonial.name}
              height={600}
              width={700}
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

export default function TestimonialsSection() {
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
      <SectionWrapper>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
          {/* Section Header */}
          <SectionHeader
            badge={"Testimonials"}
            title={"What Our Clients Say"}
            description={`Hear directly from the businesses we've helped scale with our
              custom software, branding, and marketing solutions`}
          />

          {/* Testimonials Carousel */}
          <CircularTestimonials
            testimonials={testimonialsData}
            isDark={isDark}
          />
        </div>
      </SectionWrapper>
    </>
  );
}
