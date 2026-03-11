import highlightsBg from "@/assets/highlights-bg.jpg";
import { ArrowRight } from "lucide-react";

export default function HighlightsSection() {
  return (
    <section
      className="relative py-20 md:py-32 px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${highlightsBg})` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-foreground mb-3">
          Highlights from FallCon 2025
        </h2>
        <p className="font-poppins text-base md:text-lg text-muted-foreground mb-10">
          Explore 50+ exhibitors showcasing the latest innovations
        </p>

        {/* Video Embed */}
        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl mb-10">
          <iframe
            src="https://www.youtube.com/embed/PYgR4QRUkN0"
            title="Highlights from FallCon 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-spring-green text-background font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Register Now <ArrowRight size={18} />
        </a>

        {/* Dashed divider */}
        <div className="mt-10 border-t border-dashed border-primary/40 max-w-md mx-auto" />
      </div>
    </section>
  );
}
