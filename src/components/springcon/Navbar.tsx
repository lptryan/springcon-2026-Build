import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const sections = [
  { id: "why-attend", label: "Why Attend" },
  { id: "speakers", label: "Speakers" },
  { id: "venue", label: "Venue + Travel" },
  { id: "schedule", label: "Event Schedule" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${activeSection === id ? "text-[hsl(var(--spring-green))]" : "text-foreground hover:text-[hsl(var(--spring-green))]"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8c44e33ca3c588f7ce8beee74b8a8c76f19255de?width=728"
            alt="LPT Realty"
            className="h-14 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>{label}</a>
          ))}
          <button className="px-5 py-2.5 rounded-xl text-foreground text-sm font-medium gradient-blue-purple shadow-md hover:opacity-90 transition-opacity whitespace-nowrap">
            Apply to be a Speaker!
          </button>
          <button className="px-5 py-2.5 rounded-lg text-foreground text-sm font-semibold gradient-green-blue hover:opacity-90 transition-opacity whitespace-nowrap">
            Click to Register
          </button>
        </div>

        <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-foreground/10 px-5 py-6 flex flex-col gap-4">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={`text-base font-medium py-2 ${activeSection === id ? "text-[hsl(var(--spring-green))]" : "text-foreground"}`} onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
          <button className="w-full py-3 rounded-xl text-foreground text-sm font-medium gradient-blue-purple">Apply to be a Speaker!</button>
          <button className="w-full py-3 rounded-lg text-foreground text-sm font-semibold gradient-green-blue">Click to Register</button>
        </div>
      )}
    </nav>
  );
}
