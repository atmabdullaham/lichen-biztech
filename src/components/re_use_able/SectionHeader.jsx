"use client";
import { motion } from "framer-motion";

const SectionHeader = ({ badge, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-16 text-center"
    >
      <span className="mb-4 inline-block rounded-full border border-brand-light/20 bg-brand-light/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
        {badge}
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
