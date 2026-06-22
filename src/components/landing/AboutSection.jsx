"use client";

import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Leaf, Sparkles, Target, Users } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "../re_use_able/SectionHeader";
import SectionWrapper from "../re_use_able/SectionWrapper";

const storyCards = [
  {
    icon: Users,
    title: "150+ Clients Served",
    subtitle: "Global Trust",
    description:
      "Partnering with businesses globally to build custom digital solutions that scale.",
    statBadge: "150+ Clients Served",
  },
  {
    icon: Leaf,
    title: "Symbiotic Growth",
    subtitle: "Our Philosophy",
    description:
      "Growing alongside your business like a symbiotic natural lichen organism.",
    statBadge: "Symbiotic Partnership",
  },
  {
    icon: Briefcase,
    title: "500+ Projects Completed",
    subtitle: "Proven Delivery",
    description:
      "Successful software, design, and marketing projects completed on-time.",
    statBadge: "500+ Projects",
  },
  {
    icon: Target,
    title: "Tailored Focus",
    subtitle: "Bespoke Strategy",
    description:
      "Rejecting cookie-cutter templates for solutions tailored to your goals.",
    statBadge: "Focused Solutions",
  },
  {
    icon: Award,
    title: "5+ Years Experience",
    subtitle: "Proven Track Record",
    description:
      "Half a decade of industry expertise delivering business success.",
    statBadge: "5+ Years Track Record",
  },
  {
    icon: Sparkles,
    title: "Your Extended Team",
    subtitle: "Continuous Support",
    description:
      "Continuous collaboration and expertise whenever your business needs it.",
    statBadge: "Extended Team Support",
  },
];

function Counter({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = String(value).match(/^(\d+)(.*)$/);
    const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
    const suffix = numericMatch ? numericMatch[2] : "";

    let start = 0;
    const end = target;
    if (start === end) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();

    let frameId;
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMiliseconds, 1);

      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);

      if (ref.current) {
        ref.current.textContent = `${current}${suffix}`;
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  const numericMatch = String(value).match(/^(\d+)(.*)$/);
  const suffix = numericMatch ? numericMatch[2] : "";
  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0.5); // Start so the middle card is active
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoveredIndexRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Smooth continuous scroll loop
  useEffect(() => {
    let frameId;
    let lastTime = performance.now();
    const update = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      setTimeProgress((prev) => {
        const N = storyCards.length;
        const S = isMobile ? 0.42 : 0.25;
        const totalSpan = N * S;
        let closestIndex = 0;
        let minDist = totalSpan;
        for (let i = 0; i < N; i++) {
          const t = (i * S - prev * totalSpan + totalSpan * 10) % totalSpan;
          const diff = Math.abs(t - 0.5);
          const dist = diff > totalSpan / 2 ? totalSpan - diff : diff;
          if (dist < minDist) {
            minDist = dist;
            closestIndex = i;
          }
        }

        // If the hovered index is the closest one to the middle, don't increment (pause scroll)
        if (hoveredIndexRef.current === closestIndex) {
          return prev;
        }

        // Scroll speed: completes full loop in 25 seconds
        return (prev + delta / 25000) % 1;
      });

      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isMobile]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-brand-surface)" }}
    >
      {/* Decorative bg element */}
      <div
        className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.15)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(139, 92, 246, 0.15)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="About Us"
          title="What is Lichen?"
          description="More than a company — a symbiotic partnership that grows with your business."
        />

        {/* Curved Cards Axis Slider */}
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden select-none">
          {/* Scrolling Cards */}
          {(() => {
            const N = storyCards.length;
            const S = isMobile ? 0.42 : 0.25;
            const totalSpan = N * S;

            let activeIndex = 0;
            let minDist = totalSpan;
            for (let k = 0; k < N; k++) {
              const tk =
                (k * S - timeProgress * totalSpan + totalSpan * 10) % totalSpan;
              const diff = Math.abs(tk - 0.5);
              const dist = diff > totalSpan / 2 ? totalSpan - diff : diff;
              if (dist < minDist) {
                minDist = dist;
                activeIndex = k;
              }
            }

            return storyCards.map((card, i) => {
              const t =
                (i * S - timeProgress * totalSpan + totalSpan * 10) % totalSpan;

              const isVisible = t >= 0 && t <= 1;
              const clampedT = Math.max(0, Math.min(1, t));

              // Parabolic height formula: y = 350 - 800 * clampedT * (1 - clampedT)
              // Percentage from top is y / 400 * 100%
              const topPct =
                ((350 - 800 * clampedT * (1 - clampedT)) / 400) * 100;
              const leftPct = t * 100;

              const Icon = card.icon;
              const isActive = i === activeIndex;

              const baseOpacity = isVisible ? Math.sin(t * Math.PI) : 0;
              const opacity = isActive ? 1.0 : baseOpacity * 0.7;
              const pointerEvents =
                isVisible && t > 0.08 && t < 0.92 ? "auto" : "none";
              const zIndex = isVisible
                ? isActive
                  ? 20
                  : Math.round(baseOpacity * 10)
                : 0;

              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center select-none"
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: "translate(-50%, -50%)",
                    opacity,
                    pointerEvents,
                    zIndex,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Element */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 0.92,
                      borderColor: isActive
                        ? isDark
                          ? "#85C441"
                          : "#4A7A30"
                        : isDark
                          ? "rgba(133, 196, 65, 0.25)"
                          : "rgba(30, 80, 40, 0.1)",
                      boxShadow: isActive
                        ? isDark
                          ? "0 8px 32px rgba(133, 196, 65, 0.25)"
                          : "0 8px 32px rgba(30, 80, 40, 0.15)"
                        : "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
                    }}
                    whileHover={{ scale: 1.08, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`
                      w-36 h-48 md:w-56 md:h-72 rounded-2xl border flex flex-col justify-between p-4 md:p-6 backdrop-blur-md cursor-pointer transition-colors duration-300
                      ${
                        isDark
                          ? "bg-[#0E1F0F]/70 text-white"
                          : "bg-white/80 text-[#1E5028]"
                      }
                    `}
                  >
                    {/* Card Header: Icon + Subtitle */}
                    <div className="flex items-center justify-between">
                      <div className="p-1.5 md:p-2 rounded-lg bg-[#85C441]/10 text-[#4A7A30] dark:text-[#85C441]">
                        <Icon className="h-4.5 w-4.5 md:h-6 md:w-6" />
                      </div>
                      <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-wider opacity-60">
                        {card.subtitle}
                      </span>
                    </div>

                    {/* Card Body: Title + Description */}
                    <div className="my-auto flex flex-col gap-1 md:gap-2">
                      <h4 className="text-xs md:text-lg font-bold tracking-tight leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-[10px] md:text-xs leading-relaxed opacity-75 line-clamp-3 md:line-clamp-none">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer: Brand Decor */}
                    <div className="flex items-center justify-between border-t border-current/10 pt-2 md:pt-3">
                      <span className="text-[8px] md:text-[9px] font-semibold tracking-wider uppercase opacity-50">
                        Lichen Ecosystem
                      </span>
                      <div className="h-1.5 w-1.5 rounded-full bg-[#85C441]" />
                    </div>
                  </motion.div>
                </div>
              );
            });
          })()}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
          {[
            { value: "150+", label: "Clients Served" },
            { value: "500+", label: "Projects Completed" },
            { value: "5+", label: "Years Experience" },
            { value: "25+", label: "Team Members" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className={`
                flex flex-col items-center justify-center py-4 px-3 md:py-5 md:px-4 rounded-2xl border text-center transition-all duration-300 backdrop-blur-md shadow-inner
                ${
                  isDark
                    ? "bg-[#0E1F0F]/70 border-[#85C441]/20 hover:border-[#85C441]/40"
                    : "bg-white/80 border-[#1E5028]/10 hover:border-[#1E5028]/25"
                }
              `}
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#1E5028] dark:text-[#85C441] tracking-tight">
                <Counter value={stat.value} />
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-[#7A8B95] dark:text-white/60 mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
