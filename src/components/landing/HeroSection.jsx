"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

// Deterministic pseudo-random number based on seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate static twinkling stars data outside the render cycle
const STATIC_STARS = Array.from({ length: 45 }).map((_, i) => {
  const r1 = seededRandom(i * 12.34 + 1);
  const r2 = seededRandom(i * 56.78 + 2);
  const r3 = seededRandom(i * 90.12 + 3);
  const r4 = seededRandom(i * 34.56 + 4);
  return {
    id: i,
    top: `${r1 * 90 + 5}%`, // Keep stars slightly away from edges
    left: `${r2 * 90 + 5}%`,
    size: r3 * 2.5 + 1, // Sizes between 1px and 3.5px
    animationClass: `animate-twinkle-${(i % 3) + 1}`,
    delay: `${r4 * 8}s`,
  };
});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const stars = STATIC_STARS;

  const serviceItems = useMemo(
    () => [
      {
        href: "/services/software",
        icon: Code2,
        title: "Software & Tech",
        desc: "Custom software, web & mobile apps, ERP, CRM systems",
      },
      {
        href: "/services/print",
        icon: Palette,
        title: "Design & Print",
        desc: "Digital printing, offset, apparel, packaging design",
      },
      {
        href: "/services/marketing",
        icon: Megaphone,
        title: "Marketing",
        desc: "Social media, content creation, brand identity",
      },
      {
        href: "/services/consultancy",
        icon: TrendingUp,
        title: "Consultancy",
        desc: "Brand consultancy, market research, strategy",
      },
      {
        href: "/services/creative-manager",
        icon: Zap,
        title: "Creative Manager",
        desc: "Monthly expert management for content & automation",
      },
      {
        href: "/services/business-consultancy",
        icon: BarChart3,
        title: "Business Consultancy",
        desc: "Free consultancy for strategic planning",
      },
    ],
    [],
  );

  // Set of premium client logos for the bottom notch marquee
  const marqueeLogos = useMemo(
    () => [
      // Logo 1: Stripe
      <div
        key="logo-1"
        className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          className="w-20 h-7 sm:w-24 sm:h-8 text-[#1E5028]"
          viewBox="0 0 60 20"
          fill="currentColor"
        >
          <path d="M6 10c0-2 .8-3 2.2-3 .6 0 1.2.2 1.2.2l.3-2.4s-.9-.3-2-.3c-3 0-4.7 1.8-4.7 4.9v1.2H1V13h2v5.7h2.5V13h3.2v-2.4H5.5v-.3zm7.8-3.9c0-1 .9-1.8 2.2-1.8 1.5 0 2.3.6 2.3.6l.6-2.2s-1-.8-3.2-.8c-3 0-4.7 1.7-4.7 4.3v1.2H9v2.4h2v5.7h2.5v-5.7h3.2v-2.4h-3.2v-1.4zM24 10c0-2.6-1.5-4-3.7-4-2.3 0-3.8 1.5-3.8 4 0 2.8 1.5 4.1 3.8 4.1 2.2 0 3.7-1.3 3.7-4.1zm-5.7 0c0-1 .6-1.6 1.9-1.6 1.3 0 1.9.6 1.9 1.6 0 1-.6 1.6-1.9 1.6-1.3 0-1.9-.6-1.9-1.6zm13.3-4c-1 0-1.8.5-2.2 1.1V6h-2.4v9.5h2.4v-5.6c0-2 1.1-2.8 2.3-2.8h.4V6h-.5z" />
        </svg>
      </div>,
      // Logo 2: Slack
      <div
        key="logo-2"
        className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300 text-[#1E5028]"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.135 10.136a2.528 2.528 0 0 1 2.522-2.52h2.52a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.523h-2.52a2.528 2.528 0 0 1-2.522-2.523zm-1.262 0a2.528 2.528 0 0 1-2.52 2.523h-5.043a2.528 2.528 0 0 1-2.522-2.523v-5.042a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.781-10.136a2.528 2.528 0 0 1-2.52 2.522h-2.522a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.522h2.522a2.528 2.528 0 0 1 2.52 2.522zm0 1.262a2.528 2.528 0 0 1-2.52-2.52V3.78a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043h-5.043z" />
        </svg>
        <span className="text-[10px] md:text-xs font-black tracking-tight font-sans">
          slack
        </span>
      </div>,
      // Logo 3: Shopify
      <div
        key="logo-3"
        className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300 text-[#1E5028]"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 6h-3.75v-.75a3.75 3.75 0 0 0-7.5 0V6H4.5A1.5 1.5 0 0 0 3 7.5v11.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V7.5A1.5 1.5 0 0 0 19.5 6zM9.75 5.25a2.25 2.25 0 0 1 4.5 0V6h-4.5zM6 18.75V9h12v9.75a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75z" />
        </svg>
        <span className="text-[10px] md:text-xs font-bold tracking-tight font-sans">
          shopify
        </span>
      </div>,
      // Logo 4: Airbnb
      <div
        key="logo-4"
        className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300 text-[#1E5028]"
      >
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C7.5 2 3.5 5.2 2 9.5c0 2.3 1.2 4.4 3.2 5.5l6.8 7 6.8-7c2-1.1 3.2-3.2 3.2-5.5C20.5 5.2 16.5 2 12 2z" />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <span className="text-[10px] md:text-xs font-bold tracking-tight font-sans">
          airbnb
        </span>
      </div>,
      // Logo 5: Focus Coaching
      <div
        key="logo-5"
        className="flex items-center opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/focus-coaching-green.png"
          alt="Focus Coaching"
          width={120}
          height={44}
          className="h-10 sm:h-11 w-auto object-contain brightness-0 opacity-80"
        />
      </div>,
    ],
    [],
  );

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen p-0 flex flex-col justify-center overflow-hidden z-10"
      style={{ backgroundColor: "var(--surface-color)" }}
    >
      {/* 1. Device Bezel Container with rounded border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="bezel-glow relative flex flex-col items-center justify-center flex-grow w-full min-h-screen border-[8px] sm:border-[10px] md:border-[12px] rounded-[1rem] sm:rounded-[1.25rem] md:rounded-[1.5rem] space-gradient overflow-hidden"
        style={{ borderColor: "var(--surface-color)" }}
      >
        {/* Twinkling Starfield */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted &&
            stars.map((star) => (
              <div
                key={star.id}
                className={`absolute rounded-full bg-white opacity-40 ${star.animationClass}`}
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay,
                }}
              />
            ))}
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1E5028]/15 blur-[100px] pointer-events-none animate-pulse-glow" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#85C441]/8 blur-[100px] pointer-events-none animate-pulse-glow"
          style={{ animationDelay: "2.5s" }}
        />

        {/* 2. Responsive Top Wide Navigation Notch Background */}
        <svg
          viewBox="0 0 480 50"
          className="hidden md:block w-[480px] h-[50px] fill-current absolute top-0 left-1/2 -translate-x-1/2 z-20"
          style={{ color: "var(--surface-color)" }}
        >
          <path d="M 0 0 C 35 0, 45 50, 75 50 L 405 50 C 435 50, 445 0, 480 0 Z" />
        </svg>

        {/* this is for lg screen */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 z-30 w-[345px] h-[50px] items-center justify-between px-2"
        >
          {/* Left Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/"
              className="text-[8px] sm:text-[10px] md:text-xs font-bold text-[#1E5028]/85 hover:text-[#85C441] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[8px] sm:text-[10px] md:text-xs font-bold text-[#1E5028]/85 hover:text-[#85C441] transition-colors"
            >
              About
            </Link>
          </div>

          {/* Centered Circular Logo with dark green background */}
          <Link
            href="/"
            className="w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center shadow-lg border-2 border-[#85C441] transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/single_logo.png"
              width={36}
              height={36}
              alt="Lichen Logo"
              className="w-full h-full object-cover"
            />
          </Link>

          {/* Right Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="!gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!text-[8px] sm:!text-[10px] md:!text-xs font-bold text-[#1E5028]/85 hover:text-[#85C441] transition-colors !bg-transparent !p-0 !h-auto focus:!outline-none data-[state=open]:!bg-transparent focus:!bg-transparent hover:!bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="right-[-120px] left-auto top-full mt-2.5 bg-white/95 dark:bg-[#0E2A14]/95 border border-[#85C441]/20 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-[0_0_30px_rgba(133,196,65,0.15)] rounded-xl backdrop-blur-md">
                    <ul className="grid w-[280px] gap-2 p-3 sm:w-[400px] md:w-[600px] md:grid-cols-[1.2fr_2fr] list-none">
                      {/* Left Sidebar Info */}
                      <li
                        className="hidden sm:block sm:row-span-6 rounded-xl p-4"
                        style={{ background: "var(--gradient-hero)" }}
                      >
                        <div className="mb-2 mt-4 text-base font-bold text-white">
                          Lichen Ecosystem
                        </div>
                        <p className="mb-4 text-xs leading-relaxed text-white/60">
                          Explore everything you can build with our
                          comprehensive 360° business solutions.
                        </p>
                        <div className="inline-flex rounded-full bg-[#85C441]/20 px-2.5 py-0.5 text-[10px] font-medium text-[#85C441] w-max">
                          6 Services
                        </div>
                      </li>
                      {/* Service Links */}
                      {serviceItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex select-none gap-3 rounded-lg p-2.5 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                            >
                              <item.icon className="h-5 w-5 shrink-0 text-[#4A7A30] dark:text-[#85C441]" />
                              <div>
                                <div className="mb-0.5 text-sm font-medium leading-none text-foreground dark:text-white">
                                  {item.title}
                                </div>
                                <p className="line-clamp-1 text-xs leading-snug text-muted-foreground dark:text-white/60">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/contact"
              className="text-[8px] sm:text-[10px] md:text-xs font-bold text-[#1E5028]/85 hover:text-[#85C441] transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* 3. Center Content */}
        <div className="relative z-10 max-w-4xl px-6 pt-10 text-center flex flex-col items-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.12] text-center"
          >
            Your Business&apos;s
            <br />
            <span className="animate-gradient-shift bg-clip-text text-transparent bg-gradient-to-r from-[#85C441] via-[#B8E986] to-[#85C441]">
              Complete Solution
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-5 leading-relaxed font-normal"
          >
            From software development to creative design, marketing strategies
            to business consultancy — we bring everything your business needs
            under one roof.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#85C441]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#85C441]/30 hover:scale-[1.02]"
              style={{ background: "var(--gradient-accent)" }}
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* 4. Bottom Notch & Scrolling Client Logos Background */}
        {/* Bottom Notch SVG Path */}
        <svg
          viewBox="0 0 380 50"
          className="w-[240px] h-[32px] sm:w-[300px] sm:h-[40px] md:w-[380px] md:h-[50px] fill-current absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          style={{ color: "var(--surface-color)" }}
        >
          <path d="M 0 50 C 35 50, 45 0, 75 0 L 305 0 C 335 0, 345 50, 380 50 Z" />
        </svg>

        {/* Infinite Scrolling Client Logos inside bottom notch (Clipped to flat shelf area) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-[144px] sm:w-[180px] md:w-[228px] h-[28px] sm:h-[36px] md:h-[45px] overflow-hidden flex items-center"
        >
          <div className="flex items-center gap-10 md:gap-14 animate-[marquee_16s_linear_infinite] w-max whitespace-nowrap">
            {/* First Set */}
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`set1-${idx}`}
                className="shrink-0 flex items-center justify-center"
              >
                {logo}
              </div>
            ))}
            {/* Duplicate Set */}
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`set2-${idx}`}
                className="shrink-0 flex items-center justify-center"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
