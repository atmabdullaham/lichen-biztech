import AboutSection from "@/components/landing/AboutSection";
import ContactStripSection from "@/components/landing/ContactStripSection";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import WhySection from "@/components/landing/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <ContactStripSection />
    </>
  );
}
