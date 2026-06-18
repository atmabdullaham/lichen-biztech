"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactStripSection() {
  return (
    <section id="contact-strip" className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-brand)" }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float-slow absolute -top-20 -left-20 h-60 w-60 rounded-full opacity-20 blur-3xl"
          style={{ background: "rgba(255,255,255,0.15)" }}
        />
        <div
          className="animate-float-medium absolute -right-20 -bottom-20 h-60 w-60 rounded-full opacity-20 blur-3xl"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="max-w-lg text-lg text-white/70">
              Let&apos;s discuss how we can help transform your vision into
              reality. Get a free consultation today.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#1E5028] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="tel:+8801XXXXXXXXX"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
