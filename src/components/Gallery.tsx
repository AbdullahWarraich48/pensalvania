const images = [
  { src: "/images/gallery-1.jpg", alt: "Volunteers moving furniture" },
  { src: "/images/gallery-2.jpg", alt: "Community assembling furniture" },
  { src: "/images/gallery-3.jpg", alt: "Furnished living room" },
];

const Gallery = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Community
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            See the Difference You Can Make
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From volunteer days to delivery moments, our community comes together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-section-dark/0 group-hover:bg-section-dark/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
