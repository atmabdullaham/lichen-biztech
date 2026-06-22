"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Code2, Palette, Megaphone, CheckCircle2, Sparkles, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

// Deterministic pseudo-random number based on seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate static twinkling stars data
const STATIC_STARS = Array.from({ length: 30 }).map((_, i) => {
  const r1 = seededRandom(i * 14.82 + 3);
  const r2 = seededRandom(i * 47.91 + 7);
  const r3 = seededRandom(i * 85.33 + 1);
  const r4 = seededRandom(i * 29.47 + 9);
  return {
    id: i,
    top: `${(r1 * 80) + 10}%`,
    left: `${(r2 * 80) + 10}%`,
    size: r3 * 2 + 1, // Sizes between 1px and 3px
    animationClass: `animate-twinkle-${(i % 3) + 1}`,
    delay: `${r4 * 6}s`,
  };
});

const growthGoals = [
  {
    id: "software",
    label: "Tech & Software",
    icon: Code2,
    badge: "Scale Systems",
  },
  {
    id: "design",
    label: "Branding & Print",
    icon: Palette,
    badge: "Elevate Identity",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    badge: "Drive Traffic",
  },
];

// Terminal Emulator Typing Simulation Component
function TerminalOutput({ goal }) {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let lines = [];
    if (goal === "software") {
      lines = [
        "user@lichen:~$ run growth-stack --optimize-tech",
        "Initializing tech suite...",
        "- Built custom ERP algorithms [OK]",
        "- Optimized database latency to 0.4ms [OK]",
        "- Scaling potential: Unlimited API routing.",
      ];
    } else if (goal === "design") {
      lines = [
        "user@lichen:~$ deploy brand-assets --refresh",
        "Analyzing visual footprint...",
        "- Generating custom dynamic catalogs [OK]",
        "- Packaging print line optimized [OK]",
        "- Brand consistency score: 99.8%.",
      ];
    } else {
      lines = [
        "user@lichen:~$ activate campaigns --target-all",
        "Launching marketing scripts...",
        "- Social automations active [OK]",
        "- Multi-channel funnel synced [OK]",
        "- Projecting +300% conversion spike.",
      ];
    }

    let interval;
    const delayTimer = setTimeout(() => {
      setDisplayedLines([]);
      let currentLineIdx = 0;
      let currentCharIdx = 0;
      let tempLines = Array(lines.length).fill("");

      interval = setInterval(() => {
        if (currentLineIdx >= lines.length) {
          clearInterval(interval);
          return;
        }

        const targetLine = lines[currentLineIdx];
        tempLines[currentLineIdx] = targetLine.substring(0, currentCharIdx + 1);
        setDisplayedLines([...tempLines]);

        currentCharIdx++;
        if (currentCharIdx >= targetLine.length) {
          currentLineIdx++;
          currentCharIdx = 0;
        }
      }, 10);
    }, 0);

    return () => {
      clearTimeout(delayTimer);
      if (interval) clearInterval(interval);
    };
  }, [goal]);

  return (
    <div className="font-mono text-[10px] md:text-xs text-white/95 leading-relaxed space-y-1.5 select-none pointer-events-none">
      {displayedLines.map((line, idx) => {
        const isCommand = line.startsWith("user@lichen");
        const isLastLine = idx === displayedLines.length - 1;
        return (
          <div
            key={idx}
            className={isCommand ? "text-[#85C441] font-bold" : "text-white/60"}
          >
            {line}
            {isLastLine && (
              <span className="animate-[pulse_1s_infinite] text-[#85C441] ml-0.5">▋</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ContactStripSection() {
  const [mounted, setMounted] = useState(false);
  const [activeGoal, setActiveGoal] = useState("software");

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const selectedGoal = growthGoals.find((g) => g.id === activeGoal);

  return (
    <section id="contact-strip" className="relative overflow-hidden py-24 sm:py-32">
      {/* Space-Gradient Background */}
      <div className="absolute inset-0 space-gradient" />

      {/* Twinkling Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          STATIC_STARS.map((star) => (
            <div
              key={star.id}
              className={`absolute rounded-full bg-white opacity-30 ${star.animationClass}`}
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

      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-float-slow absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-15 blur-[100px]"
          style={{ background: "rgba(133, 196, 65, 0.25)" }}
        />
        <div
          className="animate-float-medium absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-10 blur-[120px]"
          style={{ background: "rgba(6, 182, 212, 0.2)" }}
        />
      </div>

      {/* Coordinate Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left text-white"
          >
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#85C441]">
              <Cpu className="h-3.5 w-3.5 text-[#85C441] animate-pulse" />
              Interactive Deployment
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight max-w-xl">
              Ready to Deploy Your{" "}
              <span className="animate-gradient-shift bg-clip-text text-transparent bg-gradient-to-r from-[#85C441] via-[#06B6D4] to-[#85C441]">
                Growth?
              </span>
            </h2>
            <p className="max-w-xl text-lg text-white/70 leading-relaxed mb-8">
              Connect with Lichen to run a diagnostic strategy session. Select a target portal below to simulate custom pipeline integrations.
            </p>

            {/* Structured Value Proposition Points */}
            <div className="flex flex-col gap-4 text-left w-full max-w-md">
              {[
                { title: "AI Strategy Diagnostic (30 Mins)", desc: "Direct evaluation of software stacks, design friction, and digital reach." },
                { title: "Tailored Architecture Roadmap", desc: "Complete system blueprint designed locally by Chittagong leads." },
                { title: "Symbiotic Delivery Protocol", desc: "Smooth integration of creative resources with clean code standards." },
              ].map((point, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <div className="p-1 rounded-full bg-[#85C441]/10 border border-[#85C441]/20 mt-0.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#85C441]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">{point.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Dynamic AI Terminal Portal Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div
              style={{
                border: "1px solid rgba(133, 196, 65, 0.25)",
                boxShadow: "0 0 40px -10px rgba(133, 196, 65, 0.15), 0 0 40px -10px rgba(6, 182, 212, 0.15)",
                background: "linear-gradient(to bottom, rgba(14, 42, 20, 0.5), rgba(4, 10, 5, 0.6))",
              }}
              className="w-full max-w-[420px] rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden"
            >
              {/* Inner ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Console Header Bar */}
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3 select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-[#85C441]" />
                  <span className="font-mono text-[9px] text-[#85C441] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#85C441] animate-ping shrink-0" />
                    Copilot: Active
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#85C441]" />
                </div>
              </div>

              {/* Goal Selection Tabs */}
              <div className="flex gap-2 mb-6">
                {growthGoals.map((goal) => {
                  const Icon = goal.icon;
                  const isActive = goal.id === activeGoal;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setActiveGoal(goal.id)}
                      className={`flex-1 flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer ${
                        isActive
                          ? "bg-white/10 text-white shadow-md border border-[#85C441]/25"
                          : "text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                      <span className="text-[10px] font-extrabold tracking-tight uppercase">
                        {goal.id === "software" ? "Tech" : goal.id === "design" ? "Branding" : "Sales"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Simulated Terminal Screen */}
              <div className="min-h-[115px] mb-6 bg-black/40 border border-white/5 rounded-2xl p-4 relative">
                <TerminalOutput goal={activeGoal} />
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#1E5028] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/15"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="grid grid-cols-2 gap-3 mt-1">
                  <a
                    href="tel:+8801XXXXXXXXX"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#85C441]" />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/8801XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#85C441]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
