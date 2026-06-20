"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafiul Islam",
    company: "GreenTech Solutions Ltd.",
    role: "Managing Director",
    quote:
      "Lichen transformed our online presence completely. Their software team built us a custom ERP that saved us 40% in operational costs. The best tech partner in Chittagong!",
    rating: 5,
  },
  {
    name: "Taslima Begum",
    company: "Flavours Restaurant Chain",
    role: "Marketing Head",
    quote:
      "From our brand identity redesign to ongoing social media management, Lichen handles everything. Our customer engagement has tripled since we started working with them.",
    rating: 5,
  },
  {
    name: "Mohammad Karim",
    company: "Karim Textiles",
    role: "CEO",
    quote:
      "We needed everything — website, product catalogs, packaging design, and marketing. Lichen delivered it all under one roof with incredible quality and on-time delivery.",
    rating: 5,
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

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-brand-surface)" }}
    >
      {/* Decorative blurs */}
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.1)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(30, 80, 40, 0.1)" }}
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
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#7A8B95] dark:text-white/60">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group relative rounded-2xl border border-[#85C441]/10 dark:border-white/5 bg-white/80 dark:bg-white/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#85C441]/5"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-[#85C441]/20 dark:text-[#85C441]/30" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#85C441] text-[#85C441]"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="mb-6 leading-relaxed text-[#4A5568] dark:text-white/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1E5028] dark:text-[#85C441]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#7A8B95] dark:text-white/55">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
