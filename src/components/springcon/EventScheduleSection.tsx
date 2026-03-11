import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

const days = [
  {
    label: "Day 1",
    date: "April 20, 2026",
    sessions: [
      { time: "8:00 AM", title: "Registration & Check-In", location: "Main Lobby", type: "general", duration: "1 hr" },
      { time: "9:00 AM", title: "Opening Keynote: The Future of Real Estate", location: "Grand Ballroom", type: "keynote", duration: "1.5 hrs" },
      { time: "10:45 AM", title: "Leadership Track: Building Your Brand", location: "Room A", type: "leadership", duration: "1 hr" },
      { time: "10:45 AM", title: "Production Track: Scaling Your Business", location: "Room B", type: "production", duration: "1 hr" },
      { time: "10:45 AM", title: "AI & Tech Track: Tools That Close Deals", location: "Room C", type: "tech", duration: "1 hr" },
      { time: "12:00 PM", title: "Networking Lunch", location: "Terrace", type: "general", duration: "1.5 hrs" },
      { time: "1:30 PM", title: "Panel: Market Trends 2026", location: "Grand Ballroom", type: "keynote", duration: "1 hr" },
      { time: "2:45 PM", title: "Breakout Sessions", location: "Multiple Rooms", type: "general", duration: "1.5 hrs" },
      { time: "5:00 PM", title: "VIP Reception & Happy Hour", location: "Rooftop Lounge", type: "general", duration: "2 hrs" },
    ],
  },
  {
    label: "Day 2",
    date: "April 21, 2026",
    sessions: [
      { time: "8:30 AM", title: "Morning Workshops", location: "Multiple Rooms", type: "general", duration: "1.5 hrs" },
      { time: "10:00 AM", title: "Keynote: AI-Powered Real Estate", location: "Grand Ballroom", type: "keynote", duration: "1 hr" },
      { time: "11:15 AM", title: "Leadership Track: Negotiation Mastery", location: "Room A", type: "leadership", duration: "1 hr" },
      { time: "11:15 AM", title: "Production Track: Lead Generation Systems", location: "Room B", type: "production", duration: "1 hr" },
      { time: "11:15 AM", title: "AI & Tech Track: Automation Workflows", location: "Room C", type: "tech", duration: "1 hr" },
      { time: "12:30 PM", title: "Awards Luncheon", location: "Grand Ballroom", type: "general", duration: "1.5 hrs" },
      { time: "2:00 PM", title: "Closing Keynote & Call to Action", location: "Grand Ballroom", type: "keynote", duration: "1.5 hrs" },
      { time: "3:30 PM", title: "Expo Floor Open / Networking", location: "Exhibit Hall", type: "general", duration: "2 hrs" },
    ],
  },
];

const typeColors: Record<string, string> = {
  keynote: "bg-[hsl(var(--azure))]/20 text-[hsl(var(--azure))]",
  leadership: "bg-[hsl(var(--purple-primary))]/20 text-[hsl(var(--purple-primary))]",
  production: "bg-[hsl(var(--spring-green))]/20 text-[hsl(var(--spring-green))]",
  tech: "bg-pink-500/20 text-pink-400",
  general: "bg-foreground/10 text-foreground/70",
};

const typeLabels: Record<string, string> = {
  keynote: "Keynote",
  leadership: "Leadership",
  production: "Production",
  tech: "AI & Tech",
  general: "General",
};

export default function EventScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="relative py-20 md:py-32 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Event Schedule
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Two days packed with insights, connections, and growth
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-poppins font-semibold text-sm sm:text-base transition-all ${
                activeDay === idx
                  ? "gradient-green-blue text-foreground shadow-lg"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              <span className="block">{day.label}</span>
              <span className="block text-xs opacity-80">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-foreground/15" />

          <div className="space-y-4">
            {days[activeDay].sessions.map((session, idx) => (
              <div key={idx} className="relative flex gap-4 sm:gap-6 pl-10 sm:pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full border-2 border-foreground/30 ${
                  session.type === "keynote" ? "bg-[hsl(var(--azure))]" : "bg-foreground/20"
                }`} />

                {/* Time label (desktop) */}
                <div className="hidden sm:block w-20 flex-shrink-0 pt-5">
                  <span className="text-muted-foreground font-medium text-sm">{session.time}</span>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-5 sm:p-6 hover:bg-foreground/5 transition-colors">
                  {/* Mobile time */}
                  <span className="sm:hidden text-muted-foreground text-xs font-medium mb-2 block">{session.time}</span>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h4 className="text-foreground font-semibold text-base sm:text-lg flex-1 min-w-0">
                      {session.title}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${typeColors[session.type]}`}>
                      {typeLabels[session.type]}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {session.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {session.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
