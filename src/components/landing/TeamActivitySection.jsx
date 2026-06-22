"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const DEFAULT_MEMBERS = [
  {
    id: "1",
    name: "Chadrack",
    role: "director of photography",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFnmLdpZW78yA/profile-displayphoto-scale_200_200/B4DZvM8NB2JMAY-/0/1768669895649?e=2147483647&v=beta&t=5VGAB-2gYupLNaHvJHECollR25THd-3oR5wngGlQiY4",
    social: { twitter: "#", linkedin: "#", behance: "#" },
  },
  {
    id: "2",
    name: "Mak VieSAinte",
    role: "FOUNDER",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vnSxNNVGZV2MXRjlGELl-NgLl5kXdpDR6A&s",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "Osiris Balonga",
    role: "LEAD FRONT-END",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGVqrPPAGHtoQ/profile-displayphoto-scale_200_200/B4DZwhAkjaHwAY-/0/1770080338529?e=2147483647&v=beta&t=q-_6p1VCJ8NN8eHj9zUFwJZds_XpKez9Hy14SAIDp4M",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Jacques",
    role: "PRODUCT OWNER",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE-Z7-S1LSYNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724143166545?e=2147483647&v=beta&t=6IPCwgOzblGt4p2fEdnY74gMbLyRHii5Ite3A39qQsY",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Riche Makso",
    role: "CTO - PRODUCT DESIGNER",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEkTAbZLlSrLg/profile-displayphoto-scale_200_200/B4DZoHdu8BGgAY-/0/1761061833315?e=2147483647&v=beta&t=Rg1dBTvq9X2heyhuhBwG2DsEkG65v0vQ35hF2FSeYns",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "Jemima",
    role: "MAKE-UP ARTISTE",
    image: "https://i.pravatar.cc/400?img=16",
    social: { instagram: "#" },
  },
];

export default function TeamActivitySection({ members = DEFAULT_MEMBERS }) {
  const [hoveredId, setHoveredId] = useState(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-background transition-colors duration-300 select-none">
      {/* Background accents (using theme glow) */}
      <div
        className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.12)" }}
      />
      <div
        className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "rgba(133, 196, 65, 0.12)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#85C441]/20 bg-[#85C441]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A7A30] dark:bg-[#85C441]/5 dark:text-[#85C441]">
            Our Team
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1E5028] dark:text-white sm:text-4xl lg:text-5xl">
            Creative Minds Behind Lichen
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Meet the talented individuals driving innovation and excellence across all our 360° business solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16 select-none w-full max-w-5xl mx-auto py-4 px-4 md:px-6 font-sans justify-center">
          {/* ── Left: photo grid ── */}
          <div className="flex gap-3 md:gap-4 flex-shrink-0 overflow-x-auto pb-4 md:pb-0 justify-center w-full md:w-auto">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              {col1.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 md:gap-4 mt-[48px] sm:mt-[56px] md:mt-[68px]">
              {col2.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 md:gap-4 mt-[22px] sm:mt-[26px] md:mt-[32px]">
              {col3.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* ── Right: member name list ── */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-5 md:gap-6 pt-2 md:pt-4 flex-1 w-full max-w-md md:max-w-none mx-auto md:mx-0">
            {members.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-500 shadow-md border border-transparent",
        className,
        isDimmed ? "opacity-40 scale-95 grayscale" : "opacity-100 scale-100 grayscale-0 border-neutral-200/50 dark:border-white/5 shadow-[#85C441]/5",
        isActive && "border-[#85C441] shadow-lg shadow-[#85C441]/10 scale-[1.03]"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1.05)" : "grayscale(1) brightness(0.8)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300 border-b border-neutral-100 dark:border-white/5 pb-3 md:pb-4",
        isDimmed ? "opacity-40" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300",
            isActive ? "bg-[#85C441] w-6" : "bg-[#85C441]/25 dark:bg-white/10"
          )}
        />
        <span
          className={cn(
            "text-base md:text-lg font-bold leading-none tracking-tight transition-colors duration-300",
            isActive ? "text-[#1E5028] dark:text-[#85C441]" : "text-[#7A8B95] dark:text-neutral-400"
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              "flex items-center gap-2 ml-1 transition-all duration-300",
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none"
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-neutral-400 dark:text-neutral-500 hover:text-[#4A7A30] dark:hover:text-[#85C441] hover:bg-[#85C441]/10 dark:hover:bg-white/5 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={11} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-neutral-400 dark:text-neutral-500 hover:text-[#4A7A30] dark:hover:text-[#85C441] hover:bg-[#85C441]/10 dark:hover:bg-white/5 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-neutral-400 dark:text-neutral-500 hover:text-[#4A7A30] dark:hover:text-[#85C441] hover:bg-[#85C441]/10 dark:hover:bg-white/5 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={11} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-neutral-400 dark:text-neutral-500 hover:text-[#4A7A30] dark:hover:text-[#85C441] hover:bg-[#85C441]/10 dark:hover:bg-white/5 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={11} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-2 pl-[28px] text-[8px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#7A8B95] dark:text-[#7A8B95]/80">
        {member.role}
      </p>
    </div>
  );
}
