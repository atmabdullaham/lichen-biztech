"use client";

import { motion } from "framer-motion";

// Flag SVG components
function NigeriaFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="33.3" height="100" fill="#008751" />
        <rect x="33.3" width="33.4" height="100" fill="#ffffff" />
        <rect x="66.7" width="33.3" height="100" fill="#008751" />
      </svg>
    </div>
  );
}

function BrazilFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-medium">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#009c3b" />
        <polygon points="50,12 88,50 50,88 12,50" fill="#ffdf00" />
        <circle cx="50" cy="50" r="20" fill="#002776" />
        <path d="M 32 54 Q 50 42 68 54" stroke="#ffffff" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
}

// Custom crisp USA SVG
function UsaFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-fast">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#ffffff" />
        <rect width="100" height="7.7" fill="#b22234" />
        <rect y="15.4" width="100" height="7.7" fill="#b22234" />
        <rect y="30.8" width="100" height="7.7" fill="#b22234" />
        <rect y="46.2" width="100" height="7.7" fill="#b22234" />
        <rect y="61.6" width="100" height="7.7" fill="#b22234" />
        <rect y="77" width="100" height="7.7" fill="#b22234" />
        <rect y="92.3" width="100" height="7.7" fill="#b22234" />
        <rect width="50" height="53.8" fill="#3c3b6e" />
        <circle cx="10" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="25" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="40" cy="10" r="2.5" fill="#ffffff" />
        <circle cx="17" cy="22" r="2.5" fill="#ffffff" />
        <circle cx="32" cy="22" r="2.5" fill="#ffffff" />
        <circle cx="10" cy="34" r="2.5" fill="#ffffff" />
        <circle cx="25" cy="34" r="2.5" fill="#ffffff" />
        <circle cx="40" cy="34" r="2.5" fill="#ffffff" />
        <circle cx="17" cy="44" r="2.5" fill="#ffffff" />
        <circle cx="32" cy="44" r="2.5" fill="#ffffff" />
      </svg>
    </div>
  );
}

function IndiaFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="33.3" fill="#ff9933" />
        <rect y="33.3" width="100" height="33.4" fill="#ffffff" />
        <rect y="66.7" width="100" height="33.3" fill="#128807" />
        <circle cx="50" cy="50" r="9" stroke="#000080" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="50" r="2" fill="#000080" />
      </svg>
    </div>
  );
}

function ChinaFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-medium">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#de2910" />
        <polygon points="20,10 23,20 32,20 25,26 27,35 20,29 13,35 15,26 8,20 17,20" fill="#ffde00" transform="scale(0.85) translate(4, 4)" />
      </svg>
    </div>
  );
}

function IndonesiaFlag() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-neutral-900 shadow-md bg-white shrink-0 animate-float-fast">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="50" fill="#ff0000" />
        <rect y="50" width="100" height="50" fill="#ffffff" />
      </svg>
    </div>
  );
}

export default function BusinessGrowthSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300 flex justify-center items-center select-none">
      <div className="w-full max-w-7xl px-6 lg:px-8">
        
        {/* Title directly on section background */}
        <div className="mb-6 flex justify-start items-center max-w-[460px] mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Biasness Growth
          </h3>
        </div>

        {/* Central Graphic Area directly on page background */}
        <div className="h-[300px] w-full max-w-[460px] mx-auto relative flex items-center justify-center">
          
          {/* Ambient orange glow */}
          <div className="absolute w-64 h-64 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Sand Timer Hourglass Outline (SVG) */}
          <svg viewBox="0 0 200 300" className="w-48 h-72 absolute pointer-events-none z-0">
            {/* Hourglass glass walls */}
            <path 
              d="M 50,15 C 65,65 85,90 85,150 C 85,210 65,235 50,285" 
              fill="none" 
              stroke="url(#sand-timer-stroke)" 
              strokeWidth="2.5" 
            />
            <path 
              d="M 150,15 C 135,65 115,90 115,150 C 115,210 135,235 150,285" 
              fill="none" 
              stroke="url(#sand-timer-stroke)" 
              strokeWidth="2.5" 
            />
            
            {/* Falling sand particles using robust SVG <animate> tags */}
            <circle cx="100" cy="15" r="3" fill="#f97316">
              <animate attributeName="cy" from="15" to="280" dur="4.2s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0.9;0" keyTimes="0;0.1;0.5;0.9;1" dur="4.2s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="r" values="3;1.8;1.8;2.2;3" keyTimes="0;0.45;0.55;0.9;1" dur="4.2s" begin="0s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="98" cy="15" r="2" fill="#f59e0b">
              <animate attributeName="cy" from="15" to="280" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0.9;0" keyTimes="0;0.1;0.5;0.9;1" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;1.5;1.5;1.8;2" keyTimes="0;0.45;0.55;0.9;1" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="102" cy="15" r="2.5" fill="#ea580c">
              <animate attributeName="cy" from="15" to="280" dur="3.8s" begin="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0.9;0" keyTimes="0;0.1;0.5;0.9;1" dur="3.8s" begin="1.6s" repeatCount="indefinite" />
              <animate attributeName="r" values="2.5;1.5;1.5;2;2.5" keyTimes="0;0.45;0.55;0.9;1" dur="3.8s" begin="1.6s" repeatCount="indefinite" />
            </circle>
            
            <circle cx="100" cy="15" r="3.5" fill="#f97316">
              <animate attributeName="cy" from="15" to="280" dur="4.0s" begin="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0.9;0" keyTimes="0;0.1;0.5;0.9;1" dur="4.0s" begin="2.4s" repeatCount="indefinite" />
              <animate attributeName="r" values="3.5;2;2;2.8;3.5" keyTimes="0;0.45;0.55;0.9;1" dur="4.0s" begin="2.4s" repeatCount="indefinite" />
            </circle>

            <circle cx="99" cy="15" r="2" fill="#f59e0b">
              <animate attributeName="cy" from="15" to="280" dur="4.3s" begin="3.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0.9;0.9;0" keyTimes="0;0.1;0.5;0.9;1" dur="4.3s" begin="3.2s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;1.5;1.5;1.8;2" keyTimes="0;0.45;0.55;0.9;1" dur="4.3s" begin="3.2s" repeatCount="indefinite" />
            </circle>
            
            <defs>
              <linearGradient id="sand-timer-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.02" />
                <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#ea580c" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>

          {/* Flags and Hexagon Layout */}
          <div className="flex items-center gap-1.5 md:gap-3 relative z-10 w-full justify-center">
            
            {/* Left Side Flags */}
            <div className="flex items-center gap-1.5 md:gap-2.5">
              <NigeriaFlag />
              <BrazilFlag />
              <UsaFlag />
            </div>

            {/* Central Hexagon */}
            <div className="relative flex items-center justify-center shrink-0 mx-1 md:mx-2 drop-shadow-2xl">
              <svg viewBox="0 0 120 120" className="w-24 h-24 filter drop-shadow-md">
                {/* Outer White Hexagon */}
                <polygon 
                  points="60,6 109,34 109,91 60,114 11,91 11,34" 
                  fill="white" 
                  className="fill-white dark:fill-neutral-900"
                  stroke="#f97316" 
                  strokeWidth="3.5" 
                />
                {/* Inner Orange Hexagon */}
                <polygon 
                  points="60,18 97,39 97,81 60,98 23,81 23,39" 
                  fill="url(#orange-grad-bg-5)" 
                />
                {/* Swap Arrows Icon (White) */}
                <g transform="translate(42, 42) scale(0.6)">
                  <path 
                    d="M -5 10 L 35 10 M 23 -2 L 35 10 L 23 22" 
                    stroke="white" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                  />
                  <path 
                    d="M 45 30 L 5 30 M 17 18 L 5 30 L 17 42" 
                    stroke="white" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                  />
                </g>
                <defs>
                  <linearGradient id="orange-grad-bg-5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right Side Flags */}
            <div className="flex items-center gap-1.5 md:gap-2.5">
              <IndiaFlag />
              <ChinaFlag />
              <IndonesiaFlag />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
