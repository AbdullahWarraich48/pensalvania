import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HistoryFoundersHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-warm-light py-16 md:py-20" aria-label="History and founders hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.14) 0%, transparent 55%), radial-gradient(circle at 80% 25%, hsl(var(--primary) / 0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            History &amp; Founders
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight mb-5 italic [text-wrap:balance]">
            Built by neighbors. Powered by dignity.
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-base sm:text-lg">
            Learn how PA Furniture Mission started, who shaped the early days, and how the work grew into
            a community-wide effort to furnish homes with respect and care.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" className="rounded-md px-8">
              <a href="#our-story" aria-label="Jump to our story">
                Our story <ArrowRight className="h-4 w-4" />
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

export default HistoryFoundersHeroSection;

