"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon, Monitor, Check } from "lucide-react";

const themeOptions = [
  { key: "light",  label: "Light",  icon: Sun },
  { key: "dark",   label: "Dark",   icon: Moon },
  { key: "system", label: "System", icon: Monitor },
];

// SVG ring dimensions
const SIZE = 68;          // outer svg — larger than button
const RADIUS = 30;        // ring radius
const STROKE = 3.5;       // ring stroke width
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ThemeToggleFloating() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted]   = useState(false);
  const [open, setOpen]         = useState(false);
  const [progress, setProgress] = useState(0); // 0-1
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => { setMounted(true); }, []);

  // Track scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";
  const TriggerIcon = isDark ? Moon : theme === "system" ? Monitor : Sun;

  const handleSelect = (key) => {
    setTheme(key);
    setOpen(false);
  };

  // Ring styling
  const ringColor   = isDark ? "#85C441" : "#1E5028";
  const trackColor  = isDark ? "rgba(133,196,65,0.12)" : "rgba(30,80,40,0.1)";
  const dashOffset  = CIRCUMFERENCE * (1 - progress);
  const pct         = Math.round(progress * 100);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* ── Popup Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={`
              flex flex-col overflow-hidden rounded-2xl border shadow-2xl
              ${isDark
                ? "bg-[#0E1F0F]/90 border-[#85C441]/20 shadow-[0_8px_40px_rgba(133,196,65,0.2)]"
                : "bg-white/95 border-[#1E5028]/10 shadow-[0_8px_40px_rgba(0,0,0,0.14)]"
              }
              backdrop-blur-xl
            `}
          >
            {/* Header label */}
            <div className={`px-4 pt-3 pb-1.5 text-[10px] font-semibold uppercase tracking-widest ${isDark ? "text-white/30" : "text-black/30"}`}>
              Appearance
            </div>

            {themeOptions.map(({ key, label, icon: Icon }, idx) => {
              const isActive = theme === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className={`
                    group flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-150 cursor-pointer
                    ${isActive
                      ? isDark
                        ? "text-[#85C441] bg-[#85C441]/10"
                        : "text-[#1E5028] bg-[#1E5028]/8"
                      : isDark
                        ? "text-white/70 hover:text-white hover:bg-white/5"
                        : "text-black/60 hover:text-black hover:bg-black/5"
                    }
                  `}
                >
                  <Icon className={`h-4 w-4 shrink-0 transition-transform duration-150 ${isActive ? "scale-110" : "group-hover:scale-105"}`} />
                  <span className="flex-1 text-left">{label}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <Check className={`h-3.5 w-3.5 ${isDark ? "text-[#85C441]" : "text-[#1E5028]"}`} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}

            {/* Bottom padding */}
            <div className="pb-1.5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Trigger Button + Progress Ring ── */}
      <div className="relative group flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>

        {/* Progress % tooltip — shows on hover */}
        {progress > 0 && (
          <div
            className={`
              absolute right-full mr-3 top-1/2 -translate-y-1/2
              px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              ${isDark ? "bg-[#85C441]/15 text-[#85C441]" : "bg-[#1E5028]/10 text-[#1E5028]"}
            `}
          >
            {pct}%
          </div>
        )}

        {/* SVG Progress Ring — wraps around the button */}
        <svg
          width={SIZE}
          height={SIZE}
          className="absolute inset-0 pointer-events-none"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Track (faint background ring) */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={trackColor}
            strokeWidth={STROKE}
          />
          {/* Progress arc */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={ringColor}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke 0.3s ease" }}
          />
        </svg>

        {/* Button — smaller than SVG so ring shows around it */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`
            relative flex h-12 w-12 items-center justify-center rounded-full border cursor-pointer
            focus:outline-none transition-shadow duration-300 bg-white
            ${isDark
              ? "border-[#85C441]/30 text-[#85C441] shadow-[0_0_20px_rgba(133,196,65,0.35)] hover:shadow-[0_0_30px_rgba(133,196,65,0.5)]"
              : "border-[#1E5028]/10 text-[#1E5028] shadow-[0_8px_28px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgb(0,0,0,0.18)]"
            }
          `}
          aria-label="Toggle Theme"
        >
          {/* Inner glow */}
          <div className={`absolute inset-0 rounded-full opacity-10 ${isDark ? "bg-[#85C441]" : "bg-[#1E5028]"}`} />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative z-10"
            >
              <TriggerIcon className={`h-5 w-5 ${isDark ? "fill-[#85C441] stroke-[#85C441]" : theme === "system" ? "" : "fill-[#1E5028] stroke-[#1E5028]"}`} />
            </motion.div>
          </AnimatePresence>

          {/* Ping dot for dark mode */}
          {isDark && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85C441] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#85C441]" />
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
