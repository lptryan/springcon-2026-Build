export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-poppins font-bold italic text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
          Ready to Ascend Your Career?
        </h2>
        <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Join hundreds of top real estate professionals at the most impactful conference of the year
        </p>
        <button
          className="inline-flex items-center gap-3 px-12 py-5 rounded-xl text-foreground font-semibold text-lg bg-[hsl(var(--azure))] hover:opacity-90 transition-opacity shadow-lg"
        >
          Register Free <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
}
