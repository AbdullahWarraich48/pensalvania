const partners = [
  { name: "United Way", initials: "UW" },
  { name: "Habitat for Humanity", initials: "HH" },
  { name: "Red Cross", initials: "RC" },
  { name: "Salvation Army", initials: "SA" },
  { name: "YMCA", initials: "YM" },
  { name: "Community Action", initials: "CA" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Together We Can
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground italic mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          We partner with leading organizations to maximize our impact and serve more families across the region.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-6 border border-primary/15 bg-warm-light rounded-xl hover:border-primary hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="text-lg font-bold text-primary group-hover:text-primary-foreground transition-colors">{p.initials}</span>
              </div>
              <span className="text-foreground text-xs font-semibold text-center">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
