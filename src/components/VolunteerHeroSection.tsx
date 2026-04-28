import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake } from "lucide-react";

const VolunteerHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-warm-light py-16 md:py-20" aria-label="Volunteer hero">
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
            Volunteer
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5 italic">
            Give time. Build homes. Change lives.
          </h1>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Volunteers power every pickup, sorting shift, and delivery. Join us to help families create comfort,
            stability, and dignity—one home at a time.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" className="rounded-md px-8">
              <a href="#volunteer-opportunities" aria-label="Jump to volunteer opportunities">
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href="/donate" aria-label="Donate financially">
                Donate instead
              </a>
            </Button>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background px-4 py-2 text-sm text-foreground/80">
            <HeartHandshake className="h-4 w-4 text-primary" aria-hidden="true" />
            Flexible shifts • Group-friendly • Meaningful impact
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHeroSection;

