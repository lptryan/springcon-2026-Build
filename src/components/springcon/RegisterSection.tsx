import { Check, Ticket, Shield, Users } from "lucide-react";

const tiers = [
  {
    name: "Early Bird",
    price: 499,
    originalPrice: 799,
    badge: "Limited Time",
    badgeColor: "bg-[#2B7FFF]",
    icon: Ticket,
    featured: false,
    features: ["Full conference access", "All meals included"],
  },
  {
    name: "VIP Pass",
    price: 999,
    originalPrice: 1299,
    badge: "Most Popular",
    badgeColor: "gradient-blue-purple",
    icon: Shield,
    featured: true,
    features: [
      "Everything in Early Bird",
      "Front row seating",
      "VIP lounge access",
      "Premium swag bag",
    ],
  },
  {
    name: "Team Pass",
    price: 399,
    originalPrice: null,
    badge: "Best Value",
    badgeColor: "bg-[#00C950]",
    icon: Users,
    featured: false,
    features: ["Per person (5+ attendees)", "Full conference access", "Dedicated team seating"],
  },
];

export default function RegisterSection() {
  return (
    <section id="register" className="relative py-20 md:py-32 px-5 gradient-purple">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-4 italic">
            Secure Your Spot Today
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl mb-6">Early bird pricing ends soon!</p>
          <div className="inline-block px-8 py-3 rounded-full bg-destructive text-foreground font-semibold text-sm md:text-base">
            Save up to $300 - Limited Time Offer
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end mb-12 md:mb-16 max-w-sm md:max-w-none mx-auto">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-visible flex flex-col ${
                  tier.featured
                    ? "bg-foreground md:-mt-6 md:pb-2"
                    : "border border-foreground/20 bg-foreground/5 backdrop-blur-sm"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="flex justify-center -mt-4 relative z-10">
                    <span
                      className={`${tier.badgeColor} text-foreground px-5 py-1.5 rounded-full text-sm font-semibold`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className={`p-8 md:p-10 flex flex-col flex-1 ${tier.featured ? "" : ""}`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        tier.featured ? "gradient-blue-purple" : "bg-foreground/10"
                      }`}
                    >
                      <Icon
                        size={28}
                        className={tier.featured ? "text-foreground" : "text-foreground"}
                      />
                    </div>
                  </div>

                  {/* Name & Price */}
                  <div className="text-center mb-6">
                    <h3
                      className={`text-xl md:text-2xl font-semibold mb-3 ${
                        tier.featured ? "text-background" : "text-foreground"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <div
                      className={`text-4xl md:text-5xl font-bold ${
                        tier.featured ? "text-background" : "text-foreground"
                      }`}
                    >
                      ${tier.price.toLocaleString()}
                    </div>
                    {tier.originalPrice && (
                      <div
                        className={`text-lg line-through mt-1 ${
                          tier.featured ? "text-muted-foreground" : "text-foreground/40"
                        }`}
                      >
                        ${tier.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  {tier.featured && <div className="w-full h-px bg-border/20 mb-6" />}

                  {/* Features */}
                  <div className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <div
                        key={fidx}
                        className={`flex items-start gap-3 ${
                          tier.featured ? "text-muted-foreground" : "text-foreground/90"
                        }`}
                      >
                        <Check
                          size={18}
                          className={`mt-0.5 flex-shrink-0 ${
                            tier.featured ? "text-[#00C950]" : "text-[#00DF72]"
                          }`}
                        />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all hover:opacity-90 active:scale-[0.98] text-sm md:text-base ${
                      tier.featured
                        ? "gradient-blue-purple text-foreground"
                        : "border border-foreground/20 text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel dots - mobile only */}
        <div className="flex justify-center gap-2 mb-10 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/40" />
        </div>

        {/* Footer Notes */}
        <div className="max-w-2xl mx-auto text-center space-y-3 text-foreground/80">
          <p className="text-sm md:text-base">
            All prices are in USD. Early bird pricing ends December 31, 2024.
          </p>
          <p className="text-sm">
            Need an invoice or have questions? Contact us at{" "}
            <a
              href="mailto:registration@conference.com"
              className="underline text-foreground hover:text-foreground/80"
            >
              registration@conference.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
