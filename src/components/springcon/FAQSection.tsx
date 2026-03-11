import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What is included in the registration fee?" },
  { question: "Can I get a refund if I cannot attend?" },
  { question: "Are there group discounts available?" },
  { question: "Will sessions be recorded?" },
  { question: "Can I attend virtually?" },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins text-lg md:text-xl text-primary max-w-2xl mx-auto">
            Find answers to common questions about the event
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full text-left p-6 rounded-2xl bg-foreground/10 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/15 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-foreground font-medium text-lg md:text-xl">
                  {faq.question}
                </h3>
                {expanded === idx ? (
                  <Minus className="text-foreground/70 flex-shrink-0" size={24} />
                ) : (
                  <Plus className="text-foreground/70 flex-shrink-0" size={24} />
                )}
              </div>
              {expanded === idx && (
                <p className="text-foreground/70 mt-4 text-base leading-relaxed">
                  More information about this topic would appear here.
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
