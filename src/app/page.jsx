import AboutSection from "@/components/landing/AboutSection";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TeamActivitySection from "@/components/landing/TeamActivitySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhySection from "@/components/landing/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <TeamActivitySection />

      {/* <BusinessGrowthSection /> */}
    </>
  );
}
