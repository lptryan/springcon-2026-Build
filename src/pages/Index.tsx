import Navbar from "@/components/springcon/Navbar";
import HeroSection from "@/components/springcon/HeroSection";
import WhyAttendSection from "@/components/springcon/WhyAttendSection";
import ByTheNumbersSection from "@/components/springcon/ByTheNumbersSection";
import ExperienceSection from "@/components/springcon/ExperienceSection";
import ChoosePathSection from "@/components/springcon/ChoosePathSection";
import FeaturedSpeakersSection from "@/components/springcon/FeaturedSpeakersSection";
import EventScheduleSection from "@/components/springcon/EventScheduleSection";
import VenueTravelSection from "@/components/springcon/VenueTravelSection";
import FAQSection from "@/components/springcon/FAQSection";
import HighlightsSection from "@/components/springcon/HighlightsSection";
import RegisterSection from "@/components/springcon/RegisterSection";
import SponsorsSection from "@/components/springcon/SponsorsSection";
import CTASection from "@/components/springcon/CTASection";
import Footer from "@/components/springcon/Footer";
import AnimatedSection from "@/components/springcon/AnimatedSection";

export default function Index() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <WhyAttendSection />
      </AnimatedSection>
      <AnimatedSection>
        <ByTheNumbersSection />
      </AnimatedSection>
      <AnimatedSection>
        <ExperienceSection />
      </AnimatedSection>
      <AnimatedSection>
        <ChoosePathSection />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedSpeakersSection />
      </AnimatedSection>
      <AnimatedSection>
        <EventScheduleSection />
      </AnimatedSection>
      <VenueTravelSection />
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection>
        <RegisterSection />
      </AnimatedSection>
      <AnimatedSection>
        <SponsorsSection />
      </AnimatedSection>
      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
