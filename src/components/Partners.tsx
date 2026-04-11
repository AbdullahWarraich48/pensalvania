const partners = ["United Way", "Habitat for Humanity", "Red Cross", "Salvation Army", "YMCA", "Community Action"];

const Partners = () => {
  return (
    <section className="py-16 bg-warm-light">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Together We Can
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground italic mb-10">
          Our Community Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="px-6 py-3 border border-primary/20 bg-background rounded-lg text-foreground text-sm font-medium hover:border-primary hover:bg-accent hover:text-primary transition-colors cursor-pointer"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
