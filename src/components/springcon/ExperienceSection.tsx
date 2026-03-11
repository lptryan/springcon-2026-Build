import { BookOpen, Lightbulb, Users, Award } from "lucide-react";

const experiences = [
  {
    icon: BookOpen,
    title: "Expert-Led Training",
    description: "Learn from industry veterans with decades of combined experience",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/09bfa513de9db6fde3267b45f385ce4db20efbca?width=780",
    gradient: "from-[#2B7FFF] to-[#4F39F6]",
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description: "Discover cutting-edge solutions and emerging technologies",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0da84379146056db7dc59cf20e052f61688d32d1?width=780",
    gradient: "from-[#FF6900] to-[#FB2C36]",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Build meaningful connections with peers and industry leaders",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4b6cdc66f7d2bccd972858841f806c4a098f4ff7?width=780",
    gradient: "from-[#AD46FF] to-[#F6339A]",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Earn recognized certifications to advance your career",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1b570e287cee2af6cf675bea0275d2b91ad2b809?width=780",
    gradient: "from-[#00C950] to-[#00BC7D]",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-5">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/4c9286562e337d286fd0ec9d7650daad01e7450e?width=3456')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            What You'll Experience
          </h2>
          <p className="font-poppins text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Comprehensive learning and growth opportunities
          </p>
          <div className="w-56 h-px bg-foreground mx-auto mt-8" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-6 items-center`}
              >
                {/* Image */}
                <div className="lg:flex-1 w-full lg:w-auto">
                  <div className={`bg-gradient-to-br ${exp.gradient} rounded-2xl overflow-hidden h-96 shadow-lg`}>
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB] flex items-center justify-center mb-6">
                    <Icon className="text-foreground" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/80 text-xl leading-relaxed mb-8">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
