import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/50 rounded-bl-[120px] -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4 fill-primary text-primary" />
            Give furniture a second life
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
            Donate Your <span className="text-primary">Furniture</span>, Change a Life
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Connect your gently used furniture with families in need. Simple pickup, meaningful impact, zero hassle.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="rounded-full px-8 py-6">
              Donate Now <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-foreground">12K+</p>
              <p className="text-sm text-muted-foreground">Items Donated</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold text-foreground">5K+</p>
              <p className="text-sm text-muted-foreground">Families Helped</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="text-3xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-6" />
            <img
              src="/hero-furniture.jpg"
              alt="Beautifully arranged donated furniture"
              className="relative w-full h-full object-cover rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
