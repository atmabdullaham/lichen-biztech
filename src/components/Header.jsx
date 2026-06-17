"use client";

import { HardDrive, Lock, TableOfContents, Zap } from "lucide-react"; // Import icons for the dropdown
import Image from "next/image";
import Link from "next/link";

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

const Header = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-xl md:px-10">
      {/* 1. LEFT: Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={40}
            alt="Lichen"
            priority
          />
        </Link>
      </div>

      {/* 2. CENTER: Navigation Links */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Standard Link: Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown Menu: Product (Supabase Style) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[650px] md:grid-cols-[1fr_2fr]">
                  {/* Left Sidebar Info */}
                  <li className="row-span-4 rounded-md bg-slate-50 p-4 dark:bg-slate-900">
                    <div className="mb-2 mt-4 text-lg font-medium text-slate-900 dark:text-slate-100">
                      Lichen Ecosystem
                    </div>
                    <p className="text-sm leading-tight text-slate-500 dark:text-slate-400">
                      Explore everything you can build seamlessly with our
                      modern Next.js architecture.
                    </p>
                  </li>

                  {/* Right Side Links with Icons */}
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/content-design"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <TableOfContents className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            কন্টেন্ট ডিজাইন
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            প্রচারনার যাবতীয় স্ট্যাটিক ও ডায়নামিক কন্টেন্ট
                            ডিজাইন
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/web-development"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <Lock className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            ওয়েব ও এপ ডেভেলপমেন্ট
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            ওয়েবসাইট, মোবাইল এপস, ই-কমার্স, লার্নিংম্যানেজমেন্ট
                            সিস্টেম
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/marketing-advertisement"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <HardDrive className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            মার্কেটিং ও এডভার্টাইজমেন্ট
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            সোস্যাল মিডিয়া মার্কেটিং ও অফলাইন এডভার্টাইজমেন্ট
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/realtime"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <Zap className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            প্রিন্টিং
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            প্রিন্টিং সেবা, ডিজাইন ও প্রযুক্তি
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/realtime"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <Zap className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            ক্রিয়েটিভ ম্যানেজার
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            যাবতীয় কন্টেন্ট, মার্কেটিং ও অটোমেশন ম্যানেজমেন্টের
                            জন্য মাসিক চুক্তিতে এক্সপার্ট ম্যানেজার সার্ভিস।
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services/realtime"
                        className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                      >
                        <Zap className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="mb-1 text-sm font-medium leading-none text-slate-900 dark:text-slate-100">
                            বিজনেস কনসালটেন্সি
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                            প্রয়োজনী স্ট্র্যাটেজি নির্ধারণের জন্য ফ্রি কনসাটেনসি
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Standard Link: About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Standard Link: Contact */}
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

      {/* 3. RIGHT: Actions (Dark Mode + CTA) */}
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button className="hidden sm:inline-flex">Get a Quote</Button>
      </div>
    </nav>
  );
};

export default Header;
