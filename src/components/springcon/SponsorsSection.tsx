const sponsors = [
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/a2f2b6edcfe9a39d967d2d84542f57b1a7b562d2?width=640",
    description: "Providing trusted insurance and financial services to help you protect what matters most.",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/14a27e0363379f20fac135bac2e46e6980b17c12?width=420",
    description: "The leading real estate marketplace helping millions of people find and win their home.",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/86b4ff1deeec1fd8240dad6b724919d9fb1bb235?width=520",
    description: "Providing trusted insurance and financial services to help you protect what matters most.",
  },
  {
    logo: "https://api.builder.io/api/v1/image/assets/TEMP/b2040f4b996ce87e210a052b4a08fd24f81e39ff?width=630",
    description: "Providing trusted insurance and financial services to help you protect what matters most.",
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-20 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Key Sponsors
          </h2>
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our premier partners driving innovation in real estate
          </p>
          <div className="w-20 h-px bg-foreground mx-auto mt-8" />
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full hover:bg-foreground/15 transition-colors"
            >
              <div className="flex items-center justify-center h-24 mb-6">
                <img
                  src={sponsor.logo}
                  alt="Sponsor"
                  className="h-16 w-auto max-w-full object-contain"
                />
              </div>
              <p className="text-foreground/80 text-center text-sm leading-relaxed mb-6">
                {sponsor.description}
              </p>
              <a
                href="#"
                className="text-[hsl(var(--azure))] font-semibold text-center text-sm hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 rounded-xl border-2 border-foreground/50 text-foreground font-bold bg-foreground/20 backdrop-blur-sm hover:bg-foreground/30 transition-colors">
            Show More Sponsors
          </button>
        </div>
      </div>
    </section>
  );
}
