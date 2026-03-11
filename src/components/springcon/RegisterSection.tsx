import { Check } from "lucide-react";

const tiers = [
  {
    name: "Early Bird",
    price: 499,
    originalPrice: 799,
    badge: "Limited Time",
    badgeColor: "bg-[#2B7FFF]",
    buttonColor: "bg-foreground text-primary",
    features: ["Full conference access", "All meals included"],
    bestFor: null,
  },
  {
    name: "VIP Pass",
    price: 999,
    originalPrice: 1299,
    badge: "Most Popular",
    badgeColor: "gradient-blue-purple",
    buttonColor: "gradient-blue-purple text-foreground",
    features: [
      "Everything in Early Bird",
      "Front row seating",
      "VIP lounge access",
      "Premium swag bag",
    ],
    bestFor: "most-popular",
  },
  {
    name: "Team Pass",
    price: 399,
    originalPrice: null,
    badge: "Best Value",
    badgeColor: "bg-[#2B7FFF]",
    buttonColor: "bg-foreground text-primary",
    features: ["Per person (5+ attendees)", "Full conference access", "Dedicated team seating"],
    bestFor: null,
  },
];

export default function RegisterSection() {
  return (
    <section id="register" className="relative py-20 md:py-32 px-5 gradient-purple">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-6">
            Secure Your Spot Today
          </h2>
          <p className="text-foreground text-xl mb-4">Early bird pricing ends soon!</p>
          <div className="inline-block px-6 py-3 rounded-full bg-destructive text-foreground font-semibold mb-8">
            Save up to $300 - Limited Time Offer
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border ${
                tier.bestFor
                  ? "border-foreground/20 bg-foreground"
                  : "border-foreground/20 bg-foreground/10 backdrop-blur-sm"
              } overflow-hidden flex flex-col h-full`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute -top-4 right-8 ${tier.badgeColor} text-foreground px-6 py-2 rounded-full text-sm font-semibold z-10`}
                >
                  {tier.badge}
                </div>
              )}

              <div className={`p-10 flex flex-col h-full ${tier.bestFor ? "bg-[#1A1A1A]" : ""}`}>
                {/* Content */}
                <div className="flex-1 mb-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      tier.name === "VIP Pass" ? "gradient-blue-purple" : "bg-foreground/20"
                    }`}>
                      <span className="font-bold">💼</span>
                    </div>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${
                    tier.bestFor ? "text-background" : "text-foreground"
                  }`}>
                    {tier.name}
                  </h3>

                  <div className="mb-8">
                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                      tier.bestFor ? "text-background" : "text-foreground"
                    }`}>
                      ${tier.price}
                    </div>
                    {tier.originalPrice && (
                      <div className={`text-xl line-through ${
                        tier.bestFor ? "text-gray-600" : "text-foreground/50"
                      }`}>
                        ${tier.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {tier.features.map((feature, fidx) => (
                      <div
                        key={fidx}
                        className={`flex items-center gap-3 ${
                          tier.bestFor ? "text-gray-700" : "text-foreground"
                        }`}
                      >
                        <Check size={20} className={tier.bestFor ? "text-green-600" : "text-[#00DF72]"} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all hover:opacity-90 active:scale-95 ${tier.buttonColor}`}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="max-w-2xl mx-auto text-center space-y-4 text-foreground">
          <p className="text-lg">
            All prices are in USD. Early bird pricing ends December 31, 2024.
          </p>
          <p className="text-sm text-foreground/80">
            Need an invoice or have questions? Contact us at:{" "}
            <a href="mailto:registration@conference.com" className="underline hover:text-foreground">
              registration@conference.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
