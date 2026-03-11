import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const speakers = [
  {
    name: "Barry Jenkins",
    role: "Founder",
    company: "Legacy Home Team at LPT",
    title: "Head Realtor in Residence",
    companyBadge: "Ylopo",
    time: "Friday, Oct 17 • 1:40 – 2:20 PM",
    sessionTitle: "The 30-Day Conversion Comeback: Turn Old Leads Into New Closings",
    bio: "Innovative leader at the intersection of real estate and technology, driving transformation through AI and digital solutions.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/fd664528c9b287cee03fb8813d75a9d75017044c?width=764",
  },
];

export default function FeaturedSpeakersSection() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  return (
    <section id="speakers" className="relative py-20 md:py-32 px-5">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/1d08411029f6a566b168a4af15894be6c3224f60?width=3456')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Featured Speakers
          </h2>
          <p className="font-poppins text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Learn from the best minds in the industry
          </p>
        </div>

        {/* Speaker Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-2/5 relative bg-gradient-to-br from-[#00FF91]/10 to-[#0092FF]/10">
              <img
                src={speakers[currentSpeaker].image}
                alt={speakers[currentSpeaker].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 bg-[#1A1A1A] p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h3 className="text-gradient-green-blue text-4xl md:text-5xl font-black mb-4 leading-tight">
                  {speakers[currentSpeaker].name}
                </h3>
                <p className="text-foreground text-xl font-semibold mb-2">
                  {speakers[currentSpeaker].role}
                </p>
                <p className="text-foreground/90 text-lg mb-6">
                  {speakers[currentSpeaker].company}
                </p>

                {/* Divider and session info */}
                <div className="border-t border-gray-600 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[hsl(var(--azure))] text-sm font-semibold">📍</span>
                    <p className="text-[hsl(var(--spring-green))] font-semibold text-base">
                      {speakers[currentSpeaker].time}
                    </p>
                  </div>
                  <h4 className="text-foreground/90 font-semibold text-lg mb-6">
                    {speakers[currentSpeaker].sessionTitle}
                  </h4>
                </div>
              </div>

              {/* Bio */}
              <div className="border-t border-gray-600 pt-6 mt-6">
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {speakers[currentSpeaker].bio}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-3">
              {speakers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSpeaker(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentSpeaker
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-foreground"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentSpeaker(Math.max(0, currentSpeaker - 1))}
                className="w-16 h-16 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <ChevronLeft className="text-foreground" size={24} />
              </button>
              <button
                onClick={() => setCurrentSpeaker(Math.min(speakers.length - 1, currentSpeaker + 1))}
                className="w-16 h-16 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <ChevronRight className="text-foreground" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
