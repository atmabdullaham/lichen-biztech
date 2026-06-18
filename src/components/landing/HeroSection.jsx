"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

const floatingShapes = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 8, className: "animate-float-slow" },
  { size: 80, x: "80%", y: "15%", delay: 1, duration: 6, className: "animate-float-medium" },
  { size: 60, x: "70%", y: "65%", delay: 2, duration: 7, className: "animate-float-slow" },
  { size: 100, x: "20%", y: "70%", delay: 0.5, duration: 5, className: "animate-float-fast" },
  { size: 40, x: "50%", y: "30%", delay: 1.5, duration: 9, className: "animate-float-medium" },
  { size: 70, x: "90%", y: "80%", delay: 3, duration: 6, className: "animate-float-slow" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-[0.07] ${shape.className}`}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: "var(--gradient-brand)",
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}

        {/* Large glow orbs */}
        <div
          className="animate-pulse-glow absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(133, 196, 65, 0.08)" }}
        />
        <div
          className="animate-pulse-glow absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(30, 80, 40, 0.12)", animationDelay: "1.5s" }}
        />
      </div>

      {/* Grid overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#85C441]" />
          <span>360° Business Tech Solution</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your Business&apos;s
          <br />
          <span
            className="animate-gradient-shift bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #85C441 0%, #B8E986 30%, #85C441 60%, #4A8E2A 100%)",
              backgroundSize: "200% 200%",
            }}
          >
            Complete Solution
          </span>
        </motion.h1>

        {/* Bengali subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-4 text-lg text-white/40"
          style={{ fontFamily: "var(--font-bengali)" }}
        >
          আপনার ব্যবসার ৩৬০° সমাধান
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          From software development to creative design, marketing strategies to
          business consultancy — we bring everything your business needs under
          one roof.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#85C441]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#85C441]/30 hover:scale-[1.02]"
            style={{ background: "var(--gradient-accent)" }}
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce-gentle" />
        </Link>
      </motion.div>
    </section>
  );
}
