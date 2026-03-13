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
        <HighlightsSection />
      </AnimatedSection>
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

      {/* Floating Register button – mobile only */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
        <a
          href="#register"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-foreground font-bold text-base shadow-[0_4px_20px_rgba(0,0,0,0.3)] gradient-green-blue hover:opacity-90 transition-opacity"
        >
          Register Here <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
}
