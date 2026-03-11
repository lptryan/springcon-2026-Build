import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = (id: string) =>
    `text-sm font-medium transition-colors ${activeSection === id ? "text-[hsl(var(--spring-green))]" : "text-foreground hover:text-[hsl(var(--spring-green))]"}`;

  return (
    <>
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

          <button className="lg:hidden text-foreground p-2 relative z-[60]" onClick={() => setMobileOpen(!mobileOpen)}>
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-0 bottom-0 z-[55] bg-background pt-24 px-5 pb-6 flex flex-col gap-1"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {sections.map(({ id, label }, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className={`text-lg font-medium py-3 px-2 rounded-lg transition-colors ${activeSection === id ? "text-[hsl(var(--spring-green))]" : "text-foreground"}`}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
              </motion.a>
            ))}

            <motion.div
              className="flex flex-col gap-3 mt-6 pt-6 border-t border-foreground/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="w-full py-3.5 rounded-xl text-foreground text-sm font-medium gradient-blue-purple">
                Apply to be a Speaker!
              </button>
              <button className="w-full py-3.5 rounded-lg text-foreground text-sm font-semibold gradient-green-blue">
                Click to Register
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
