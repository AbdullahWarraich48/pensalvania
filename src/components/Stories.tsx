const stories = [
  {
    image: "/images/story-1.jpg",
    family: "The Johnson Family",
    text: "After losing everything in a fire, PA Furniture Mission helped us furnish our new apartment with beautiful, quality furniture. We finally feel at home again.",
  },
  {
    image: "/images/story-2.jpg",
    family: "Maria's Fresh Start",
    text: "Starting over after a difficult situation was overwhelming. The donated dining table became the heart of our home — where we share meals and make new memories.",
  },
  {
    image: "/images/story-3.jpg",
    family: "The Williams Family",
    text: "The volunteers didn't just deliver furniture — they delivered hope. Our grandchildren now have a cozy space to play and our home feels complete again.",
  },
];

const Stories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Featured Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            Real Stories. Real Change.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every piece of furniture carries a story — of generosity, new beginnings, and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.family}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{story.family}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{story.text}</p>
                <a href="#" className="text-primary text-sm font-semibold hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
