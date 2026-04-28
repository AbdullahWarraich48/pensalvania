import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

const BecomePartnerHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-warm-light py-16 md:py-20" aria-label="Become a partner hero">
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
            Become a Partner
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5 italic">
            Partner with us to furnish homes across South Central PA.
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Our partner organizations make it possible for us to serve the greater region—connecting families and
            individuals to the dignity of a fully furnished home.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" className="rounded-md px-8">
              <a href="#partner-form" aria-label="Jump to partner inquiry form">
                Start an inquiry <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href="/community-partners" aria-label="View community partners">
                View partners
              </a>
            </Button>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-4 py-2 text-sm text-foreground/80">
            <Handshake className="h-4 w-4 text-primary" aria-hidden="true" />
            Referrals • Choice-based showroom • Full delivery service
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerHeroSection;

