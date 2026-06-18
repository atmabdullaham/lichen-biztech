import {
  Code2,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Megaphone,
  MessageCircleX,
  Palette,
  Phone,
  Share2,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Software & Tech", href: "/services/software", icon: Code2 },
  { name: "Design & Print", href: "/services/print", icon: Palette },
  { name: "Marketing", href: "/services/marketing", icon: Megaphone },
  { name: "Consultancy", href: "/services/consultancy", icon: TrendingUp },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Our Process", href: "/#process" },
  { name: "Why Lichen", href: "/#why" },
];

/* Custom SVG social icons since lucide doesn't include branded ones */
function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { name: "Facebook", icon: FacebookIcon, href: "https://facebook.com/lichenbts" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/lichenbts" },
  { name: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com/company/lichenbts" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: "#0E2A14" }}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "rgba(133, 196, 65, 0.3)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/logo.png"
                width={110}
                height={44}
                alt="Lichen BTS"
                style={{ height: "auto" }}
                className="brightness-0 invert"
              />
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              Your business&apos;s 360° solution. From software to marketing, we
              bring everything your business needs under one roof.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition-all duration-300 hover:border-[#85C441]/30 hover:bg-[#85C441]/10 hover:text-[#85C441]"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2.5 text-sm text-white/40 transition-colors hover:text-[#85C441]"
                  >
                    <service.icon className="h-4 w-4 shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 transition-colors hover:text-[#85C441]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#85C441]/60" />
                <span>
                  #07 System Imperial Complex (2nd floor)
                  <br />
                  Kapasegola Road, Chawkbazar,
                  <br />
                  Chattogram, Bangladesh
                </span>
              </li>
              <li>
                <a
                  href="tel:+8801879514881"
                  className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-[#85C441]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#85C441]/60" />
                  +8801879514881

                </a>
              </li>
              <li>
                <a
                  href="tel:+8801521223351"
                  className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-[#85C441]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#85C441]/60" />
                  +8801521223351

                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lichenbts.com"
                  className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-[#85C441]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#85C441]/60" />
                  lichenbts@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Lichen BTS. All rights reserved.
            </p>
            {/* <p className="text-xs text-white/30">
              Developed by{" "}
              <a
                href="https://abdelrahman-lichi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85C441]/50 transition-colors hover:text-[#85C441]"
              >
                
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
