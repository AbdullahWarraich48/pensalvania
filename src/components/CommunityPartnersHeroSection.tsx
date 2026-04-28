import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const CommunityPartnersHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-warm-light py-16 md:py-20" aria-label="Community partners hero">
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
            Community Partners
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5 italic">
            We serve families through trusted referral partners.
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Are you or someone in your household in need of home furnishings? Please contact one of our non-profit
            partners to access our services. We are not able to accept walk-in clients or individuals or families
            without a referral from a partner agency. Thank you for your understanding.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" className="rounded-md px-8">
              <a href="#partners" aria-label="Jump to partner list">
                View partners <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href="/pickup" aria-label="Request a pickup">
                Request a Pickup
              </a>
            </Button>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-4 py-2 text-sm text-foreground/80">
            <Users className="h-4 w-4 text-primary" aria-hidden="true" />
            Referrals • Dignity of choice • Full home furnishings
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartnersHeroSection;

