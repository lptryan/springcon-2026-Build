import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2ea1826b5f393eed2608aeebd48c50195da33715?width=554"
              alt="LPT Realty"
              className="h-12 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm mb-6">
              The premier event for industry professionals to connect, learn, and innovate.
            </p>
            {/* Contact Info */}
            <div className="space-y-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <div>1234 Ocean Drive</div>
                  <div>Miami Beach, FL 33139</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <div>(555) 123-4567</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <div>info@conference.com</div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0092FF]/60 to-[#9810FA] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon size={16} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-foreground font-poppins font-medium text-xl mb-6">Event</h4>
            <ul className="space-y-3">
              {["Schedule", "Speakers", "Sponsors", "Expo Floor"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Attend Links */}
          <div>
            <h4 className="text-foreground font-poppins font-medium text-xl mb-6">Attend</h4>
            <ul className="space-y-3">
              {["Register", "Pricing", "Venue", "Travel"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-foreground font-poppins font-medium text-xl mb-6">Resources</h4>
            <ul className="space-y-3">
              {["FAQ", "Contact", "Past Events", "Media Kit"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-poppins font-medium text-xl mb-6">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Code of Conduct", "Accessibility"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-foreground/10 py-12 mb-12">
          <div className="text-center mb-8">
            <h4 className="font-poppins font-medium text-xl text-[hsl(var(--spring-green))] mb-2">Stay in the Loop</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to get updates on speakers, sessions, and exclusive offers
            </p>
          </div>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
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

        {/* Bottom Links */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Annual Conference. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
