"use client";

import { motion, useInView } from "framer-motion";
import { Leaf, Target, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Clients Served", value: 150, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Team Members", value: 25, suffix: "+" },
];

const storyPoints = [
  {
    icon: Leaf,
    title: "Symbiotic Growth",
    description:
      "Just like the lichen organism — a partnership between fungi and algae — we grow alongside your business, creating something greater than the sum of its parts.",
  },
  {
    icon: Target,
    title: "Focused Solutions",
    description:
      "Every strategy is tailored to your unique business needs. No cookie-cutter approaches, just data-driven solutions that deliver results.",
  },
  {
    icon: Users,
    title: "Your Extended Team",
    description:
      "We don't just deliver projects — we become part of your journey, providing ongoing support and expertise whenever you need it.",
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

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-brand-surface)" }}
    >
      {/* Decorative bg element */}
      <div
        className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.15)" }}
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
          <span className="mb-4 inline-block rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30]">
            About Us
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] sm:text-4xl lg:text-5xl">
            What is Lichen?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#7A8B95]">
            More than a company — a symbiotic partnership that grows with your
            business. We bring technology, creativity, and strategy together.
          </p>
        </motion.div>

        {/* Story Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 grid gap-8 md:grid-cols-3"
        >
          {storyPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-[#85C441]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#85C441]/5 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#85C441]/10 transition-colors group-hover:bg-[#85C441]/20">
                <point.icon className="h-6 w-6 text-[#4A7A30]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1E5028]">
                {point.title}
              </h3>
              <p className="leading-relaxed text-[#7A8B95]">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative rounded-2xl border border-[#85C441]/10 bg-white/80 p-8 text-center backdrop-blur-sm"
            >
              <div className="mb-2 text-4xl font-extrabold text-[#1E5028] sm:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sm font-medium text-[#7A8B95]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
