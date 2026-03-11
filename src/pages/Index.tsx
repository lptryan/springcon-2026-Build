import Navbar from "@/components/springcon/Navbar";
import HeroSection from "@/components/springcon/HeroSection";
import WhyAttendSection from "@/components/springcon/WhyAttendSection";
import ByTheNumbersSection from "@/components/springcon/ByTheNumbersSection";
import ExperienceSection from "@/components/springcon/ExperienceSection";
import ChoosePathSection from "@/components/springcon/ChoosePathSection";
import FeaturedSpeakersSection from "@/components/springcon/FeaturedSpeakersSection";
import FAQSection from "@/components/springcon/FAQSection";
import RegisterSection from "@/components/springcon/RegisterSection";
import SponsorsSection from "@/components/springcon/SponsorsSection";
import CTASection from "@/components/springcon/CTASection";
import Footer from "@/components/springcon/Footer";

export default function Index() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyAttendSection />
      <ByTheNumbersSection />
      <ExperienceSection />
      <ChoosePathSection />
      <FeaturedSpeakersSection />
      <FAQSection />
      <RegisterSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
