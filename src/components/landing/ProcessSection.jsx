"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.2)" }}
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
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#85C441]">
            Our Process
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
            3-step process that ensures quality results
            every time.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid gap-8 md:grid-cols-3"
        >
          {/* Connecting line (desktop only) */}
          <div className="absolute top-16 right-[16.5%] left-[16.5%] hidden h-px md:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#85C441]/30 to-transparent" />
          </div>

          {steps.map((step) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative text-center"
            >
              {/* Step number ring */}
              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                {/* Outer glow ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-20 blur-md"
                  style={{ background: "var(--gradient-brand)" }}
                />
                {/* Ring */}
                <div className="absolute inset-2 rounded-full border border-[#85C441]/20 bg-white/5 backdrop-blur-sm" />
                {/* Icon container */}
                <div className="relative flex flex-col items-center">
                  <step.icon className="mb-1 h-8 w-8 text-[#85C441]" />
                  <span className="text-xs font-bold text-white/40">
                    STEP {step.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-1 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
