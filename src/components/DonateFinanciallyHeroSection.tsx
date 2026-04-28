import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DonateFinanciallyHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-warm-light py-16 md:py-20" aria-label="Donate financially hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.14) 0%, transparent 55%), radial-gradient(circle at 80% 25%, hsl(var(--primary) / 0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Donate Financially
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5 italic">
            Your gift helps furnish safe, dignified homes.
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Financial donations fund pickups, warehouse operations, and the essential furniture that helps
            families rebuild with comfort and stability.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" className="rounded-md px-8">
              <a href="#donation-form" aria-label="Jump to donation form">
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href="/" aria-label="Back to home">
                Back to Home
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateFinanciallyHeroSection;

