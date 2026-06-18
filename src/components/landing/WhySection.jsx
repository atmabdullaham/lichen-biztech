"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe2, Layers3 } from "lucide-react";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhySection() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative orb */}
      <div
        className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.12)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Lichen?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three key reasons businesses in Chittagong and beyond trust us with
            their growth.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#85C441]/5"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(133,196,65,0.05) 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                {/* Highlight badge */}
                <span className="mb-4 inline-block rounded-full bg-[#85C441]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
                  {reason.highlight}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#85C441]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#85C441]/20">
                  <reason.icon className="h-7 w-7 text-[#4A7A30] dark:text-[#85C441]" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
