Lichen BTS — New Website Project Plan
Overview
A full rebuild of lichenbts.com using Next.js 15, shadcn/ui, Framer Motion, Tailwind CSS v4, and other modern technologies. The site will feature a stunning professional landing page and dedicated category pages, all sharing a consistent green-dominant brand identity extracted from the company brochure.

Lichen is a 360° Business Tech Solution based in Chittagong, Bangladesh, serving businesses with four core service areas.

Color Theme (from Logo — Confirmed ✅)
Extracted directly from the official Lichen BTS logo:

Token Hex Source Usage
--primary #1E5028 Icon gradient dark Primary buttons, nav, headings
--primary-light #85C441 Icon gradient bright Accent, highlights, hover states
--primary-mid #3A6E2A Blend midpoint Section backgrounds, borders
--brand-text #4A7A30 "Lichen" wordmark Logo text, subheadings
--brand-gray #7A8B95 "BIZTECH SOLUTION" Subtitles, captions, muted text
--surface #F2F9EE Derived Light green-tinted backgrounds
--surface-dark #0E2A14 Derived from dark end Dark sections, footer
--on-primary #FFFFFF Logo icon symbol Text on green backgrounds
Gradient System
The logo's gradient (dark→bright green) defines the signature gradient used across the site:

css

--gradient-brand: linear-gradient(135deg, #1E5028 0%, #4A8E2A 50%, #85C441 100%);
--gradient-hero: linear-gradient(135deg, #0E2A14 0%, #1E5028 60%, #3A6E2A 100%);
TIP

The lime-green accent #85C441 will be used for CTAs, hover effects, and highlighted tags — providing the energetic pop seen in the brochure's yellow-green accents.

Tech Stack
Layer Technology
Framework Next.js 15 (App Router)
UI Components shadcn/ui (Radix primitives)
Styling Tailwind CSS v4
Animations Framer Motion
Icons Lucide React + React Icons
Fonts Inter (Latin) + Hind Siliguri (Bengali) via Google Fonts
Type-safety TypeScript
SEO Next.js Metadata API
Forms React Hook Form + Zod
Deployment Vercel (recommended)
Site Structure

lichenbts.com/
├── / ← Landing Page (home)
├── /services/software ← Software & Tech Solutions
├── /services/print ← Design, Print & Advertising
├── /services/marketing ← Marketing Services
├── /services/consultancy ← Strategy & Consultancy
├── /about ← About Lichen
├── /contact ← Contact & Location
└── /blog (optional phase 2)
Pages & Content

1. 🏠 Landing Page (/)
   A premium marketing homepage summarizing all services.

Sections:

Hero — Full-viewport animated hero. Headline: "আপনার ব্যবসার ৩৬০° সমাধান" / "Your Business's 360° Solution". Animated floating geometric shapes, CTA buttons ("Get Started", "Explore Services")
What is Lichen? — Brand story section. Lichen = symbiotic organism metaphor. Short animated counters (e.g., clients served, projects done).
Service Categories — 4 animated cards, each linking to a category page. Hover: reveal more info, subtle parallax.
How We Work — 3-step process (Order → Review → Delivery), matching the brochure's 3-step visual.
Why Lichen? — 3 key differentiators with animated icons.
Testimonials / Partners — Social proof section.
Contact Strip — Minimal quick-contact section.
Footer — Address, phone numbers, social links, quick nav. 2. 💻 Software & Tech Solutions (/services/software)
Services:

Custom Software Development (Web/App)
ERP, CRM, HRM, POS Systems
E-commerce / Marketplace Solutions
SEO & Digital Marketing Integration
Page sections:

Hero with animated tech illustration (circuit/code particles)
Service breakdown with tabbed interface (by type)
Technology stack badges (React, Laravel, Python, etc.)
Case study cards
CTA: "Get a Free Demo" 3. 🖨️ Design, Print & Advertising (/services/print)
Sub-categories (tabbed/accordion):

Tab Items
Digital Printing Banner, Inkjet, Vinyl, X-Banner, Panaflex, Festoon
Offset Printing Letterpad, Visiting Card, Catalog, Calendar, Cash Memo, Poster, Leaflet, Envelope, Magazine
Apparel Printing School Badge, Tie, Shoulder Badge, T-shirt, Polo Shirt, ID Ribbon
Gift & Stationery Crest, Medal, Mug, ID Card, Certificate, Pen, Key Ring, Photo Frame, Souvenir
Packaging Shopping Bag, Product Packaging, Label Printing
Page sections:

Hero with printing/design visual
Interactive tabbed service selector
Product gallery / visual showcase grid
3-step order process (matching brochure)
CTA: "Place an Order" 4. 📣 Marketing Services (/services/marketing)
Services:

Social Media Marketing
Content Creation & Management
Brand Identity & Visual Design
Digital Campaign Management
Page sections:

Hero with vibrant gradient, animated social icons
Service cards with before/after results style
Portfolio / campaign examples
Metrics showcase (reach, engagement stats)
CTA: "Grow Your Brand" 5. 🎯 Strategy & Consultancy (/services/consultancy)
Services:

Brand Consultancy (Data-driven)
Content Plan & Story Development
Workflow Analysis & Automation
Market Research & Marketing Strategy
Page sections:

Hero with professional dark theme overlay
Consultancy process diagram (animated flowchart)
Service breakdown with expandable details
Book a free consultation form
CTA: "Book Free Consultation" 6. ℹ️ About Page (/about)
Company story (Lichen = symbiotic organism philosophy)
Mission & Vision
Team section (if photos available)
Achievements / milestones 7. 📞 Contact Page (/contact)
Google Maps embed (Kapasegola Road, Chokbazar, Chittagong)
Contact form (React Hook Form + Zod)
Phone numbers, WhatsApp, Telegram links
Office hours
Social media links
Shared Design System
Navigation
Sticky transparent navbar → solid on scroll (Framer Motion)
Mobile: slide-out drawer (shadcn Sheet)
Service mega-menu on hover
UI Components (shadcn/ui)
Button, Card, Badge, Tabs, Accordion, Sheet, Dialog
Form, Input, Textarea, Select
Carousel for galleries
Animations (Framer Motion)
Page transitions (fade + slide)
Scroll-triggered reveals (whileInView)
Staggered list animations
Counter animations for stats
Hover micro-interactions
Typography
Headings: Inter (700/800 weight)
Body: Inter (400/500)
Bengali text: Hind Siliguri
Open Questions
IMPORTANT

Please confirm or answer before development begins:

Logo ✅ Received — Forest green gradient + lime accent palette confirmed.
Language — Should the site be bilingual (Bengali + English) or English-only?
Forms — Where should contact form submissions go? (Email address, WhatsApp API, or a backend?)
Blog/Portfolio — Do you want a blog or portfolio section in Phase 1?
Booking System — For consultancy, do you want a calendar/scheduling widget (e.g., Calendly embed)?
Hosting — Are you planning to host on Vercel, or do you have a specific hosting preference?
Analytics — Should we add Google Analytics / Meta Pixel?
Domain — Will the new site replace lichenbts.com directly, or use a staging domain first?
Project Phases
Phase 1 — Foundation & Landing Page
Project setup (Next.js + shadcn + Tailwind + Framer Motion)
Design system & color tokens
Shared layout: Navbar + Footer
Landing page (all sections)
Phase 2 — Category Pages
Software & Tech page
Print & Advertising page (with tabs)
Marketing page
Consultancy page
Phase 3 — Supporting Pages
About page
Contact page with form
Mobile optimization pass
SEO metadata for all pages
Phase 4 — Polish & Launch
Performance optimization
Logo integration (once received)
Final color refinement
Deployment to Vercel / production
Project Directory
C:\Users\user\.gemini\antigravity\scratch\lichenbts-website\
Verification Plan
After Each Phase
Visual review in browser (desktop + mobile)
Lighthouse score check (target: Performance > 90, SEO = 100)
Cross-browser check (Chrome, Firefox, Edge)
Before Launch
All internal links working
Forms submitting correctly
Images optimized (WebP format)
Meta tags and Open Graph data correct
