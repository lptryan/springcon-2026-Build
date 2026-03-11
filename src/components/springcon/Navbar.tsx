import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8c44e33ca3c588f7ce8beee74b8a8c76f19255de?width=728"
            alt="LPT Realty"
            className="h-14 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button className="flex items-center gap-1 px-4 py-2 rounded-xl border border-foreground/30 bg-foreground/10 backdrop-blur-sm text-foreground font-bold text-sm">
            Home <ChevronDown size={16} />
          </button>
          <a href="#speakers" className="text-foreground text-sm font-medium hover:text-[hsl(var(--spring-green))] transition-colors">Speakers</a>
          <a href="#venue" className="text-foreground text-sm font-medium hover:text-[hsl(var(--spring-green))] transition-colors">Venue + Travel</a>
          <a href="#schedule" className="text-foreground text-sm font-medium hover:text-[hsl(var(--spring-green))] transition-colors">Event Schedule</a>
          <button className="px-5 py-2.5 rounded-xl text-foreground text-sm font-medium gradient-blue-purple shadow-md hover:opacity-90 transition-opacity whitespace-nowrap">
            Apply to be a Speaker!
          </button>
          <button className="px-5 py-2.5 rounded-lg text-foreground text-sm font-semibold gradient-green-blue hover:opacity-90 transition-opacity whitespace-nowrap">
            Click to Register
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-foreground/10 px-5 py-6 flex flex-col gap-4">
          <a href="#why-attend" className="text-foreground text-base font-medium py-2" onClick={() => setMobileOpen(false)}>Why Attend</a>
          <a href="#speakers" className="text-foreground text-base font-medium py-2" onClick={() => setMobileOpen(false)}>Speakers</a>
          <a href="#venue" className="text-foreground text-base font-medium py-2" onClick={() => setMobileOpen(false)}>Venue + Travel</a>
          <a href="#schedule" className="text-foreground text-base font-medium py-2" onClick={() => setMobileOpen(false)}>Event Schedule</a>
          <button className="w-full py-3 rounded-xl text-foreground text-sm font-medium gradient-blue-purple">
            Apply to be a Speaker!
          </button>
          <button className="w-full py-3 rounded-lg text-foreground text-sm font-semibold gradient-green-blue">
            Click to Register
          </button>
        </div>
      )}
    </nav>
  );
}
