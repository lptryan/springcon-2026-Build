import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroLogo from "@/assets/lpt-springcon-hero-logo.png";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  function getTimeLeft(target: Date) {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function HeroSection() {
  const { days, hours, minutes, seconds } = useCountdown(new Date("2026-10-16T09:00:00"));

  const timeUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-32 mt-20">
        {/* SpringCon logo */}
        <img
          src={heroLogo}
          alt="LPT Realty SpringCon 2026"
          className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[650px] h-auto mb-8"
        />

        {/* Tagline */}
        <h1 className="font-poppins font-bold text-foreground text-xl md:text-3xl lg:text-4xl tracking-wide mb-4 max-w-3xl">
          Elevate Your Real Estate Career to New Heights
        </h1>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-8 text-foreground/90 font-poppins font-medium text-base md:text-xl">
          <span>October 16-17, 2026</span>
          <span className="hidden sm:block w-px h-5 bg-foreground/40" />
          <span>Orlando World Center Marriott</span>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center gap-3 sm:gap-5 mb-10">
          {timeUnits.map((unit, idx) => (
            <div key={unit.label} className="flex items-center gap-3 sm:gap-5">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center">
                  <span className="font-poppins font-bold text-2xl sm:text-3xl text-foreground">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-foreground/70 text-xs sm:text-sm font-medium mt-2">{unit.label}</span>
              </div>
              {idx < timeUnits.length - 1 && (
                <span className="font-poppins font-bold text-2xl sm:text-3xl text-foreground/50 -mt-5">:</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-foreground font-bold text-lg md:text-xl shadow-[0_4px_15px_rgba(0,146,255,0.4)] hover:opacity-90 transition-opacity gradient-green-blue"
        >
          Register Here <span className="text-2xl">→</span>
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
