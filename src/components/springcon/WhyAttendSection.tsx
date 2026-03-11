import { Briefcase, Zap, Award, Globe } from "lucide-react";
import whyAttendBg from "@/assets/why-attend-bg.jpg";

const reasons = [
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Accelerate your professional development with insights from industry leaders and hands-on workshops",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4b62b8989d3f31d605a5134bb997c6444d21778b?width=560",
  },
  {
    icon: Zap,
    title: "Stay Ahead",
    description: "Discover the latest trends and technologies before they become mainstream",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/91bc07f3c5f5a1f59163202609baa9e8b3a3edb9?width=560",
  },
  {
    icon: Award,
    title: "Exclusive Access",
    description: "Get early access to new products, tools, and exclusive partnership opportunities",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/995f7e16ce7f2431b930d66d463a5ae6294d884a?width=560",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with professionals from over 50 countries and expand your global reach",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8ea37cc69d72ff4e9a89af67ae2dac1d0e4e27ee?width=560",
  },
];

export default function WhyAttendSection() {
  return (
    <section
      id="why-attend"
      className="relative py-20 md:py-32 px-5"
      style={{
        backgroundImage: `url('${whyAttendBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-foreground mb-4">
            Why Attend?
          </h2>
          <p className="font-poppins text-xl text-foreground/90 max-w-2xl mx-auto">
            Transform your business and career in just three days
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden flex flex-row h-full"
              >
                {/* Content - semi-transparent to show background */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center min-w-0 bg-background/90 backdrop-blur-md border border-foreground/[0.08]">
                  <div className="w-12 h-12 rounded-xl gradient-blue-purple flex items-center justify-center mb-4">
                    <Icon className="text-foreground" size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Image */}
                <div className="hidden sm:block w-36 md:w-44 flex-shrink-0">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
