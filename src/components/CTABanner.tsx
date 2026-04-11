import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground italic mb-4">
          Help a Family Today
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Your generous donation of furniture can transform a house into a home. Join our community of donors and volunteers making a real difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-md px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            Donate Now <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="heroOutline" size="lg" className="rounded-md px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
