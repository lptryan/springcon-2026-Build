import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import highlightsBg from "@/assets/highlights-bg.jpg";

const faqs = [
  { question: "What is included in the registration fee?", answer: "Your registration includes access to all keynotes, breakout sessions, networking events, meals, and conference materials." },
  { question: "Can I get a refund if I cannot attend?", answer: "Full refunds are available up to 30 days before the event. After that, a 50% refund is available up to 7 days before." },
  { question: "Are there group discounts available?", answer: "Yes! Groups of 5+ receive 15% off, and groups of 10+ receive 25% off registration fees." },
  { question: "Will sessions be recorded?", answer: "Yes, all main stage sessions will be recorded and available to registered attendees for 90 days after the event." },
  { question: "Can I attend virtually?", answer: "A virtual pass is available that includes livestreamed keynotes and select sessions, plus on-demand access afterward." },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${highlightsBg})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-base md:text-lg text-primary max-w-2xl mx-auto">
            Find answers to common questions about the event
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-foreground/[0.06] border border-foreground/[0.08] overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-foreground/[0.04] transition-colors"
              >
                <span className="text-foreground/90 font-medium text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="text-foreground/50 flex-shrink-0">
                  {expanded === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-foreground/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
