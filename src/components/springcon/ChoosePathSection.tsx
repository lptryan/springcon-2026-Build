const paths = [
  {
    title: "Leadership",
    description: "Navigate the evolving landscape of modern leadership. Build influence, drive transformation, and lead with impact.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/de536c30b502ba4fce5b29e7fc319cbedc73af77?width=811",
    gradient: "from-[#2B7FFF] to-[#4F39F6]",
    buttonBg: "#DBEAFE",
    buttonText: "#1C398E",
  },
  {
    title: "Production",
    description: "Master the art of efficient execution. Streamline operations, optimize workflows, and deliver excellence at scale.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/097420bfc5e962a982ac8b12f2b174891fb64286?width=811",
    gradient: "from-[#00BC7D] to-[#009689]",
    buttonBg: "#D0FAE5",
    buttonText: "#004F3B",
  },
  {
    title: "AI & Tech",
    description: "Step into the future of innovation. Harness cutting-edge technology and AI-driven solutions to stay ahead.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/574a0cd5ca21b224b659b7975379289ad9b84dbf?width=811",
    gradient: "from-[#AD46FF] to-[#E60076]",
    buttonBg: "#F3E8FF",
    buttonText: "#59168B",
  },
];

export default function ChoosePathSection() {
  return (
    <section id="paths" className="relative py-20 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex flex-col items-center gap-3 mb-6">
            <h2 className="font-poppins font-bold italic text-5xl md:text-6xl lg:text-7xl text-foreground">
              Choose Your
            </h2>
            <div className="text-gradient-green-azure font-poppins font-bold italic text-5xl md:text-6xl lg:text-7xl">
              Path
            </div>
            <h3 className="font-poppins font-bold italic text-3xl md:text-4xl lg:text-5xl text-foreground">
              This Spring
            </h3>
          </div>
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mt-8">
            This spring, choose from three curated paths—Leadership, Production, or AI & Tech—and step into what's next.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-32 h-12 rounded-full opacity-50 blur-2xl gradient-green-blue" />
          </div>
          <p className="font-poppins italic font-bold text-3xl md:text-4xl text-foreground mt-6">
            New Season. New Level.
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, idx) => (
            <div key={idx} className="bg-foreground rounded-3xl overflow-hidden shadow-2xl flex flex-col">
              {/* Image Container */}
              <div className={`relative h-64 bg-gradient-to-b ${path.gradient} overflow-hidden`}>
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover opacity-70"
                />
                {/* Title Badge */}
                <div className="absolute top-5 left-5 -rotate-1 px-6 py-2 bg-foreground/20 backdrop-blur-sm rounded-lg shadow-md">
                  <h3 className="text-foreground font-black text-3xl md:text-4xl">
                    {path.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col gap-6">
                <p className="text-background text-base font-medium leading-relaxed">
                  {path.description}
                </p>

                <button
                  className="mt-auto px-8 py-4 rounded-full text-base font-bold transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: path.buttonBg, color: path.buttonText }}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
