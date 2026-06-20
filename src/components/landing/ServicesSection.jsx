"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Megaphone,
  TrendingUp,
  Zap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Software & Tech.",
    description: "Custom software, web & mobile apps, ERP, CRM systems.",
    href: "/services/software",
    gridClass: "order-2 lg:col-start-1 lg:row-start-2",
    gradientDir: "225deg", // Top-right corner (pointing to center)
  },
  {
    icon: Palette,
    title: "Design & Print.",
    description: "Digital printing, offset, apparel, packaging design.",
    href: "/services/print",
    gridClass: "order-1 lg:col-start-2 lg:row-start-1",
    gradientDir: "225deg", // Top-right corner (pointing to center)
  },
  {
    icon: Megaphone,
    title: "Marketing.",
    description: "Social media, content creation, brand identity.",
    href: "/services/marketing",
    gridClass: "order-3 lg:col-start-2 lg:row-start-2",
    gradientDir: "225deg", // Top-right corner (pointing to center)
  },
  {
    icon: TrendingUp,
    title: "Consultancy.",
    description: "Brand consultancy, market research, strategy.",
    href: "/services/consultancy",
    gridClass: "order-5 lg:col-start-4 lg:row-start-1",
    gradientDir: "135deg", // Top-left corner (pointing to center)
  },
  {
    icon: Zap,
    title: "Creative Manager.",
    description: "Monthly expert management for content & automation.",
    href: "/services/creative-manager",
    gridClass: "order-6 lg:col-start-4 lg:row-start-2",
    gradientDir: "135deg", // Top-left corner (pointing to center)
  },
  {
    icon: BarChart3,
    title: "Business Consultancy.",
    description: "Free consultancy for strategic planning.",
    href: "/services/business-consultancy",
    gridClass: "order-7 lg:col-start-5 lg:row-start-2",
    gradientDir: "135deg", // Top-left corner (pointing to center)
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = !mounted || currentTheme === "dark";

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background accents */}
      <div
        className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.15)" }}
      />
      <div
        className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.15)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-32 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything Your Business Needs
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Six core service areas working in harmony to deliver a true 360° business solution.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-6 items-stretch"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`${service.gridClass} lg:order-none h-full`}
              >
                <Link
                  href={service.href}
                  style={{
                    border: "5px solid transparent",
                    background: isDark
                      ? `linear-gradient(to bottom, #0B0F0B, #040604) padding-box, linear-gradient(${service.gradientDir}, #C5765D 0%, rgba(197, 118, 93, 0.15) 50%, transparent 100%) border-box`
                      : `linear-gradient(to bottom, #ffffff, #fbfdfa) padding-box, linear-gradient(${service.gradientDir}, #C5765D 0%, rgba(197, 118, 93, 0.15) 50%, transparent 100%) border-box`
                  }}
                  className="relative flex h-full flex-col justify-start rounded-2xl p-3 shadow-[0_8px_30px_rgba(197,118,93,0.01)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Card Header: Icon Box + Title (inline flex) */}
                  <div className="flex items-center gap-3.5">
                    {/* Icon Box */}
                    <div
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C5765D]/10 dark:bg-[#030A04]/90 border border-transparent dark:border-[#C5765D]/25"
                    >
                      <Icon className="h-4.5 w-4.5 text-[#C5765D] dark:text-[#C5765D]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1E5028] dark:text-white leading-snug tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Learn More Icon inline flex */}
                  <div className="mt-auto flex items-end justify-between gap-4 pt-4">
                    <p className="text-sm leading-relaxed text-[#7A8B95] dark:text-white/60 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-inner border border-neutral-200/20">
                      <ArrowUpRight className="h-4 w-4 text-[#C5765D]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Middle Logo Card */}
          <motion.div
            variants={cardVariants}
            style={{
              border: "5px solid transparent",
              background: isDark
                ? `linear-gradient(to bottom, #0B0F0B, #040604) padding-box, linear-gradient(135deg, #C5765D 0%, rgba(197, 118, 93, 0.15) 50%, transparent 100%) border-box`
                : `linear-gradient(to bottom, #ffffff, #fbfdfa) padding-box, linear-gradient(135deg, #C5765D 0%, rgba(197, 118, 93, 0.15) 50%, transparent 100%) border-box`
            }}
            className="order-4 lg:order-none lg:col-start-3 lg:row-start-1 lg:row-span-2 h-[260px] lg:h-auto flex flex-col items-center justify-center lg:justify-start lg:pt-20 p-8 rounded-2xl shadow-[0_8px_30px_rgba(197,118,93,0.01)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden lg:-mt-14"
          >
            {/* Ambient Terracotta Radial Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C5765D]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[#C5765D]/3 opacity-0 blur-2xl pointer-events-none" />

            {/* Centered Logo Box */}
            <div
              style={{
                border: "5px solid transparent",
                background: isDark
                  ? `linear-gradient(to bottom, #030A04, #010401) padding-box, linear-gradient(135deg, #C5765D 0%, rgba(197, 118, 93, 0.20) 50%, transparent 100%) border-box`
                  : `linear-gradient(to bottom, #ffffff, #fcfdfc) padding-box, linear-gradient(135deg, #C5765D 0%, rgba(197, 118, 93, 0.20) 50%, transparent 100%) border-box`
              }}
              className="relative p-5 w-24 h-24 rounded-2xl shadow-md dark:shadow-[0_0_20px_rgba(197,118,93,0.15)] flex items-center justify-center z-10"
            >
              <Image
                src="/single_logo.png"
                width={54}
                height={54}
                alt="Lichen Logo"
                className="brightness-110 object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
