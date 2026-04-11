import { Heart, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const ways = [
  {
    image: "/images/donate-furniture.jpg",
    icon: Heart,
    title: "Donate Furniture",
    subtitle: "Share What You Can",
    description: "Your gently used furniture can transform a family's living space. From sofas to dining tables, every piece matters and finds a loving new home.",
  },
  {
    image: "/images/volunteer.jpg",
    icon: Users,
    title: "Volunteer",
    subtitle: "Make It Happen",
    description: "Join our team of dedicated volunteers who pick up, restore, and deliver furniture. Your time and skills directly help families in need.",
  },
  {
    image: "/images/partner.jpg",
    icon: Handshake,
    title: "Partner",
    subtitle: "Expand Our Reach",
    description: "Partner with us as a business or organization. Together we can furnish more homes and build stronger communities across the region.",
  },
];

const WaysToHelp = () => {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            How You Can Help
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Three Ways to Make a Difference
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose how you'd like to contribute — every action creates a positive impact for families in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ways.map((way, i) => (
            <div key={i} className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group border border-primary/10">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={way.image}
                  alt={way.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <way.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{way.title}</h3>
                    <p className="text-xs text-primary font-medium">{way.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{way.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" className="rounded-md px-8">Get Involved</Button>
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
