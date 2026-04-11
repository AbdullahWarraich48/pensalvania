import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="/images/about.jpg"
              alt="Our furniture warehouse"
              loading="lazy"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 italic">
              About PA Furniture Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2010, PA Furniture Mission is a non-profit organization dedicated to providing quality furniture to families and individuals transitioning out of homelessness, domestic violence situations, or other challenging circumstances.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is simple: ensure every family has a home that feels like home. Through the generosity of our donors and the dedication of our volunteers, we've furnished thousands of homes across the region.
            </p>
            <Button variant="hero" className="rounded-md px-8">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
