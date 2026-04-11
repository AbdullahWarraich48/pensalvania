import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-section-dark/90 via-section-dark/70 to-section-dark/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            PA Furniture Mission
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-section-dark-foreground leading-tight mb-6">
            Restore Comfort <em className="italic">&</em><br />
            Dignity to Every<br />
            Home
          </h1>

          <p className="text-section-dark-foreground/70 text-lg max-w-lg mb-8 leading-relaxed">
            Helping families in need with essential furniture through community support, donations, and volunteers.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="hero" size="lg" className="rounded-md px-8 py-6">
              Donate Now <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-md px-8 py-6 border-section-dark-foreground/40 text-section-dark-foreground hover:bg-section-dark-foreground hover:text-section-dark">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-2 text-section-dark-foreground/60 text-sm">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Tax-deductible donations accepted year-round</span>
          </div>
        </div>
      </div>

      {/* Bottom bar with stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-section-dark/80 backdrop-blur-sm border-t border-section-dark-foreground/10 z-10">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between gap-6 text-section-dark-foreground/70 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Serving Local Families
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Free Pickup & Delivery
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Established Since 2010
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Community Volunteers
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
