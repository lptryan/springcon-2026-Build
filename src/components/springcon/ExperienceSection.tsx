import { GraduationCap, Lightbulb, Users, Trophy } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "Expert-Led Training",
    description: "Learn from industry veterans with decades of combined experience",
    subdesc: "Learn from industry veterans with decades of combined experience",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/09bfa513de9db6fde3267b45f385ce4db20efbca?width=780",
    iconBg: "bg-[#2B7FFF]",
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description: "Discover cutting-edge solutions and emerging technologies",
    subdesc: "Discover cutting-edge solutions and emerging technologies",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0da84379146056db7dc59cf20e052f61688d32d1?width=780",
    iconBg: "bg-[#FF6900]",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Build meaningful connections with peers and industry leaders",
    subdesc: "Discover cutting-edge solutions and emerging technologies",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4b6cdc66f7d2bccd972858841f806c4a098f4ff7?width=780",
    iconBg: "bg-[#F6339A]",
  },
  {
    icon: Trophy,
    title: "Certification Programs",
    description: "Earn recognized certifications to advance your career",
    subdesc: "Earn recognized certifications to advance your career",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1b570e287cee2af6cf675bea0275d2b91ad2b809?width=780",
    iconBg: "bg-[#00C950]",
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
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-poppins font-medium text-3xl md:text-5xl text-foreground mb-4">
            What You'll Experience
          </h2>
          <p className="font-poppins text-base md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Comprehensive learning and growth opportunities
          </p>
          <div className="w-40 md:w-56 h-px bg-foreground mx-auto mt-6 md:mt-8" />
        </div>

        {/* Desktop: 2x2 bento grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Card 1: text-left, image-right */}
          <div className="rounded-2xl overflow-hidden glass-dark flex flex-row">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-xl ${experiences[0].iconBg} flex items-center justify-center mb-4`}>
                <GraduationCap className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{experiences[0].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">{experiences[0].description}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{experiences[0].subdesc}</p>
            </div>
            <div className="w-52 flex-shrink-0">
              <img src={experiences[0].image} alt={experiences[0].title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 2: text-left, image-right */}
          <div className="rounded-2xl overflow-hidden glass-dark flex flex-row">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-xl ${experiences[1].iconBg} flex items-center justify-center mb-4`}>
                <Lightbulb className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{experiences[1].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">{experiences[1].description}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{experiences[1].subdesc}</p>
            </div>
            <div className="w-52 flex-shrink-0">
              <img src={experiences[1].image} alt={experiences[1].title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 3: image-left, text-right */}
          <div className="rounded-2xl overflow-hidden glass-dark flex flex-row">
            <div className="w-52 flex-shrink-0">
              <img src={experiences[2].image} alt={experiences[2].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-xl ${experiences[2].iconBg} flex items-center justify-center mb-4`}>
                <Users className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{experiences[2].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">{experiences[2].description}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{experiences[2].subdesc}</p>
            </div>
          </div>

          {/* Card 4: image-left, text-right */}
          <div className="rounded-2xl overflow-hidden glass-dark flex flex-row">
            <div className="w-52 flex-shrink-0">
              <img src={experiences[3].image} alt={experiences[3].title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className={`w-12 h-12 rounded-xl ${experiences[3].iconBg} flex items-center justify-center mb-4`}>
                <Trophy className="text-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{experiences[3].title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">{experiences[3].description}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{experiences[3].subdesc}</p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards with icon, text, then image below */}
        <div className="md:hidden space-y-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div key={idx} className="rounded-2xl overflow-hidden glass-dark">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${exp.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className="text-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-1">{exp.description}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{exp.subdesc}</p>
                </div>
                <div className="w-full h-48">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
