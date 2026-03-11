import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import speakersBg from "@/assets/speakers-bg.png";

const speakers = [
  {
    name: "Barry Jenkins",
    role: "Founder",
    company: "Legacy Home Team at LPT",
    title: "Head Realtor in Residence",
    companyBadge: "Ylopo",
    time: "Monday, Apr 20 • 1:40 – 2:20 PM",
    sessionTitle: "The 30-Day Conversion Comeback: Turn Old Leads Into New Closings",
    bio: "Innovative leader at the intersection of real estate and technology, driving transformation through AI and digital solutions.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/fd664528c9b287cee03fb8813d75a9d75017044c?width=764",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Marketing Officer",
    company: "Nexus Real Estate Group",
    title: "Marketing Strategist",
    companyBadge: "Nexus",
    time: "Saturday, Oct 18 • 10:00 – 10:40 AM",
    sessionTitle: "Building a Brand That Sells: Digital Marketing for Modern Agents",
    bio: "Award-winning marketing executive with 15+ years of experience scaling real estate brands through innovative digital campaigns.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=764&h=900&fit=crop",
  },
  {
    name: "James Rodriguez",
    role: "VP of Technology",
    company: "PropTech Innovations",
    title: "Tech Evangelist",
    companyBadge: "PropTech",
    time: "Saturday, Oct 18 • 2:00 – 2:40 PM",
    sessionTitle: "AI-Powered Real Estate: What Every Agent Needs to Know in 2027",
    bio: "Former Silicon Valley engineer turned PropTech visionary, specializing in AI applications that revolutionize property transactions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=764&h=900&fit=crop",
  },
  {
    name: "Angela Torres",
    role: "Broker & Team Leader",
    company: "Pinnacle Realty Partners",
    title: "Growth Consultant",
    companyBadge: "Pinnacle",
    time: "Sunday, Oct 19 • 11:00 – 11:40 AM",
    sessionTitle: "Scaling Your Team from 5 to 50: Lessons from the Trenches",
    bio: "Built one of the fastest-growing real estate teams in the Southeast, known for her data-driven approach to team building and culture.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=764&h=900&fit=crop",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function FeaturedSpeakersSection() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
    }, 6000);
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
    resetTimer();
  }, [resetTimer]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);
    resetTimer();
  }, [resetTimer]);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > currentSpeaker ? 1 : -1);
    setCurrentSpeaker(idx);
    resetTimer();
  }, [currentSpeaker, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const speaker = speakers[currentSpeaker];

  return (
    <section
      id="speakers"
      className="relative py-20 md:py-32 px-5"
      style={{
        backgroundImage: `url('${speakersBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Featured Speakers
          </h2>
          <p className="font-poppins text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Learn from the best minds in the industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={goPrev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground/10 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="text-foreground" size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/40 flex items-center justify-center hover:bg-foreground/10 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="text-foreground" size={20} />
          </button>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSpeaker}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col lg:flex-row"
              >
                {/* Image Side */}
                <div className="lg:w-2/5 relative bg-gradient-to-br from-[#00FF91]/10 to-[#0092FF]/10">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top min-h-[300px] lg:min-h-[450px]"
                  />
                </div>

                {/* Content Side */}
                <div className="lg:w-3/5 bg-[#1A1A1A] p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-gradient-green-blue text-3xl md:text-4xl font-black mb-3 leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-foreground text-lg font-semibold mb-1">
                      {speaker.role}
                    </p>
                    <p className="text-foreground/80 text-base mb-2">
                      {speaker.company}
                    </p>
                    <p className="text-foreground/60 text-sm mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-foreground/50 text-sm mb-5">
                      {speaker.companyBadge}
                    </p>

                    <div className="border-t border-foreground/20 pt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--spring-green))]" />
                        <p className="text-[hsl(var(--spring-green))] font-semibold text-sm">
                          {speaker.time}
                        </p>
                      </div>
                      <h4 className="text-foreground/90 font-semibold text-base mb-5">
                        {speaker.sessionTitle}
                      </h4>
                    </div>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {speakers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSpeaker
                    ? "w-7 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-foreground/50 hover:bg-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
