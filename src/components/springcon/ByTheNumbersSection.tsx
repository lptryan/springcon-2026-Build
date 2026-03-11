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
        backgroundPosition: 'center',
      }}
    >

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            By The Numbers
          </h2>
          <p className="font-poppins text-lg md:text-xl text-foreground/80 italic max-w-2xl mx-auto">
            See what makes our event extraordinary
          </p>
          <div className="w-56 h-px bg-foreground mx-auto mt-8" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 md:p-10 flex flex-col"
            >
              <div className="text-5xl md:text-6xl font-bold mb-6" style={{ background: 'linear-gradient(90deg, #155DFC 0%, #9810FA 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-4">
                {stat.label}
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
