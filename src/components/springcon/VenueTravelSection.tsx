import { Plane, Car, Train, MapPin, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const gettingThere = [
  {
    icon: Plane,
    title: "By Air",
    details: [
      "Orlando International Airport (MCO) — 25 min drive",
      "Complimentary shuttle service available",
    ],
  },
  {
    icon: Car,
    title: "By Car",
    details: [
      "Ample parking available on-site",
      "$20/day valet parking",
    ],
  },
  {
    icon: Train,
    title: "By Rail",
    details: [
      "SunRail Station (10 min drive)",
      "Direct connections to major cities",
    ],
  },
];

export default function VenueTravelSection() {
  return (
    <section id="venue" className="relative py-20 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
              Venue & Travel
            </h2>
            <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to plan your trip
            </p>
          </div>
        </AnimatedSection>

        {/* Venue Card with Map */}
        <AnimatedSection delay={0.1}>
          <div className="glass-dark rounded-3xl overflow-hidden mb-16">
            <div className="flex flex-col lg:flex-row">
              {/* Map embed */}
              <div className="lg:w-1/2 h-72 lg:h-auto min-h-[320px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d-81.3489!3d28.7494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e771b1e2f7e3e1%3A0x1234567890abcdef!2s1400+S+International+Pkwy%2C+Lake+Mary%2C+FL+32746!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue location map"
                />
              </div>

              {/* Venue Info */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-blue-purple flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-poppins font-semibold text-2xl md:text-3xl mb-2">
                      LPT Realty HQ
                    </h3>
                    <p className="text-muted-foreground text-base">
                      1400 S International Pkwy #1020
                    </p>
                    <p className="text-muted-foreground text-base">
                      Lake Mary, FL 32746
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  Located in the heart of Lake Mary, our venue offers modern conference facilities with easy access from major highways and Orlando International Airport.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://maps.google.com/?q=1400+S+International+Pkwy+1020+Lake+Mary+FL+32746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-green-blue text-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={18} />
                    View in Google Maps
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mt-6 flex items-center gap-2">
                  🚕 Taxi & rideshare services are readily available
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Getting There */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h3 className="font-poppins font-medium text-3xl md:text-4xl text-foreground text-center mb-10">
              Getting There
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gettingThere.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-8 hover:bg-foreground/15 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-2xl gradient-blue-purple flex items-center justify-center mb-6">
                      <Icon className="text-foreground" size={28} />
                    </div>
                    <h4 className="text-foreground font-semibold text-xl mb-4">
                      {item.title}
                    </h4>
                    <ul className="space-y-3">
                      {item.details.map((detail, didx) => (
                        <li key={didx} className="text-muted-foreground text-base leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Hotel Accommodations */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h3 className="font-poppins font-medium text-3xl md:text-4xl text-foreground text-center mb-4">
              Hotel Accommodations
            </h3>
            <p className="text-muted-foreground text-center text-lg mb-10 max-w-2xl mx-auto">
              Partner hotels with exclusive rates for SpringCon attendees
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="glass-dark rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8">
                {/* Hotel Info */}
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--spring-green))]/20 text-[hsl(var(--spring-green))] mb-4">
                    Partner Hotel
                  </span>
                  <h4 className="text-foreground font-semibold text-xl md:text-2xl mb-2">
                    Extended Stay America Select Suites
                  </h4>
                  <p className="text-muted-foreground text-base mb-4">
                    Less than 1 mile from venue
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-foreground font-bold text-3xl md:text-4xl">$229</span>
                    <span className="text-muted-foreground text-base">/night</span>
                  </div>
                  <p className="text-[hsl(var(--azure))] font-medium text-sm mb-6">
                    Use code: <span className="font-bold">SPRING2026</span>
                  </p>
                  <button className="px-8 py-3 rounded-xl gradient-green-blue text-foreground font-semibold hover:opacity-90 transition-opacity">
                    Book Hotel Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Newsletter */}
        <AnimatedSection delay={0.4}>
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="font-poppins font-medium text-2xl md:text-3xl text-[hsl(var(--spring-green))] mb-4">
              Stay in the Loop
            </h3>
            <p className="text-muted-foreground text-base mb-8 max-w-lg mx-auto">
              Subscribe to get updates on speakers, sessions, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
