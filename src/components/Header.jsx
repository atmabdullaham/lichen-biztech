"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  Code2,
  Megaphone,
  Menu,
  Palette,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const serviceItems = [
  {
    href: "/services/software",
    icon: Code2,
    titleBn: "সফটওয়্যার ও টেক সলিউশনস",
    title: "Software & Tech",
    desc: "Custom software, web & mobile apps, ERP, CRM systems",
  },
  {
    href: "/services/print",
    icon: Palette,
    titleBn: "ডিজাইন, প্রিন্ট ও এডভার্টাইজিং",
    title: "Design & Print",
    desc: "Digital printing, offset, apparel, packaging design",
  },
  {
    href: "/services/marketing",
    icon: Megaphone,
    titleBn: "মার্কেটিং সার্ভিস",
    title: "Marketing",
    desc: "Social media, content creation, brand identity",
  },
  {
    href: "/services/consultancy",
    icon: TrendingUp,
    titleBn: "স্ট্র্যাটেজি ও কনসালটেন্সি",
    title: "Consultancy",
    desc: "Brand consultancy, market research, strategy",
  },
  {
    href: "/services/creative-manager",
    icon: Zap,
    titleBn: "ক্রিয়েটিভ ম্যানেজার",
    title: "Creative Manager",
    desc: "Monthly expert management for content & automation",
  },
  {
    href: "/services/business-consultancy",
    icon: BarChart3,
    titleBn: "বিজনেস কনসালটেন্সি",
    title: "Business Consultancy",
    desc: "Free consultancy for strategic planning",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10 ${scrolled
            ? "border-b border-border/40 bg-background/90 shadow-sm backdrop-blur-xl text-foreground"
            : "bg-transparent text-white"
          }`}
      >
        {/* 1. LEFT: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={40}
              alt="Lichen BTS"
              priority
              className={`transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>
        </div>

        {/* 2. CENTER: Navigation Links (Desktop) */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[650px] md:grid-cols-[1fr_2fr]">
                    {/* Left Sidebar Info */}
                    <li className="row-span-6 rounded-xl p-5" style={{ background: "var(--gradient-hero)" }}>
                      <div className="mb-3 mt-4 text-lg font-bold text-white">
                        Lichen Ecosystem
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-white/60">
                        Explore everything you can build with our comprehensive
                        360° business solutions.
                      </p>
                      <div className="inline-flex rounded-full bg-[#85C441]/20 px-3 py-1 text-xs font-medium text-[#85C441]">
                        6 Services
                      </div>
                    </li>

                    {/* Service Links */}
                    {serviceItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="flex select-none gap-4 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
                          >
                            <item.icon className="h-6 w-6 shrink-0 text-[#4A7A30] dark:text-[#85C441]" />
                            <div>
                              <div className="mb-0.5 text-sm font-medium leading-none text-foreground">
                                {item.title}
                              </div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 3. RIGHT: Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle transparent={!scrolled} />
          <Button
            asChild
            className="hidden sm:inline-flex"
            style={{
              background: "var(--gradient-accent)",
              border: "none",
              color: "white",
            }}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-current transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm border-l border-border bg-background shadow-2xl"
            >
              <div className="flex h-full flex-col overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <Image
                    src="/logo.png"
                    width={80}
                    height={32}
                    alt="Lichen BTS"
                  />
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-1">
                    <Link
                      href="/"
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>

                    {/* Services Accordion */}
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                      >
                        Services
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-1 border-l border-border pl-4 pt-1">
                              {serviceItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <item.icon className="h-4 w-4 shrink-0 text-[#4A7A30] dark:text-[#85C441]" />
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/about"
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>

                    <Link
                      href="/contact"
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>

                {/* Bottom CTA */}
                <div className="border-t border-border px-6 py-4">
                  <Button
                    asChild
                    className="w-full"
                    style={{
                      background: "var(--gradient-accent)",
                      border: "none",
                      color: "white",
                    }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
