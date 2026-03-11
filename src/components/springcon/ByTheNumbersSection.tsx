import byTheNumbersBg from "@/assets/by-the-numbers-bg.png";

const stats = [
  {
    number: "5,000+",
    label: "Industry Professionals",
    description: "Connect with thousands of professionals from around the world",
  },
  {
    number: "50+",
    label: "Exhibitors",
    description: "Explore the latest products and innovations",
  },
  {
    number: "200+",
    label: "Expert Speakers",
    description: "Learn from the best minds in the industry",
  },
  {
    number: "100+",
    label: "Sessions & Workshops",
    description: "Deep dive into topics that matter to your business",
  },
];

export default function ByTheNumbersSection() {
  return (
    <section
      id="by-numbers"
      className="relative py-20 md:py-32 px-5"
      style={{
        backgroundImage: `url('${byTheNumbersBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            By The Numbers
          </h2>
          <p className="font-poppins text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            See what makes our event <em>extraordinary</em>
          </p>
          <div className="w-40 h-0.5 gradient-blue-purple mx-auto mt-6 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 md:p-9 flex flex-col"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3" style={{ background: 'linear-gradient(90deg, #155DFC 0%, #9810FA 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.number}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
