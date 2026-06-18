"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Software & Tech Solutions",
    titleBn: "সফটওয়্যার ও টেক সলিউশনস",
    description:
      "Custom software, web & mobile apps, ERP, CRM, e-commerce platforms, and SEO integration for your digital transformation.",
    href: "/services/software",
    color: "#1E5028",
    lightBg: "rgba(30, 80, 40, 0.08)",
    items: ["Custom Software", "ERP & CRM", "E-commerce", "Mobile Apps"],
  },
  {
    icon: Palette,
    title: "Design, Print & Advertising",
    titleBn: "ডিজাইন, প্রিন্ট ও এডভার্টাইজিং",
    description:
      "From digital and offset printing to apparel, packaging, gift items — complete design and print solutions for your brand.",
    href: "/services/print",
    color: "#3A6E2A",
    lightBg: "rgba(58, 110, 42, 0.08)",
    items: ["Digital Printing", "Offset Printing", "Apparel", "Packaging"],
  },
  {
    icon: Megaphone,
    title: "Marketing Services",
    titleBn: "মার্কেটিং সার্ভিস",
    description:
      "Social media marketing, content creation, brand identity design, and digital campaigns to grow your audience and revenue.",
    href: "/services/marketing",
    color: "#4A7A30",
    lightBg: "rgba(74, 122, 48, 0.08)",
    items: ["Social Media", "Content Creation", "Brand Design", "Campaigns"],
  },
  {
    icon: TrendingUp,
    title: "Strategy & Consultancy",
    titleBn: "স্ট্র্যাটেজি ও কনসালটেন্সি",
    description:
      "Data-driven brand consultancy, workflow analysis, market research, and strategic planning to guide your business growth.",
    href: "/services/consultancy",
    color: "#85C441",
    lightBg: "rgba(133, 196, 65, 0.08)",
    items: ["Brand Strategy", "Market Research", "Workflow Analysis", "Planning"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full opacity-20 blur-3xl"
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
          <span className="mb-4 inline-block rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything Your Business Needs
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Four core service areas working in harmony to deliver a true 360°
            business solution.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#85C441]/8"
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.lightBg }}
                >
                  <service.icon
                    className="h-7 w-7 transition-colors"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p
                  className="mb-3 text-xs text-muted-foreground"
                  style={{ fontFamily: "var(--font-bengali)" }}
                >
                  {service.titleBn}
                </p>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: service.color }}>
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
