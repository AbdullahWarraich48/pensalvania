import { Button } from "@/components/ui/button";
import { fetchHeroContent, resolveHeroImageUrl } from "@/integrations/api/hero-api";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

type HeroContent = {
  heading: string;
  description: string;
  imageUrl: string;
};

const FALLBACK_HERO: HeroContent = {
  heading: "Restore Comfort & Dignity to Every Home",
  description:
    "Helping families in need with essential furniture through community support, donations, and volunteers.",
  imageUrl: "/images/hero-bg.jpg",
};

const Hero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>(FALLBACK_HERO);

  useEffect(() => {
    const controller = new AbortController();

    const loadHero = async () => {
      try {
        const payload = await fetchHeroContent(controller.signal);
        if (!payload?.data) return;

        setHeroContent({
          heading: payload.data.heading || FALLBACK_HERO.heading,
          description: payload.data.description || FALLBACK_HERO.description,
          imageUrl: resolveHeroImageUrl(payload.data.imageUrl) || FALLBACK_HERO.imageUrl,
        });
      } catch (_error) {
        // Keep fallback content when API is unavailable.
      }
    };

    loadHero();
    const intervalId = window.setInterval(loadHero, 5000);

    const handleFocus = () => {
      loadHero();
    };
    window.addEventListener("focus", handleFocus);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        loadHero();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
      controller.abort();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img src={heroContent.imageUrl} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            PA Furniture Mission
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            {heroContent.heading}
          </h1>

          <p className="text-background/70 text-lg max-w-lg mb-8 leading-relaxed">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild variant="hero" size="lg" className="rounded-md px-8 py-6">
              <a href="/donate" aria-label="Donate financially">
                Donate Now <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-md px-8 py-6 border-background/40 text-background hover:bg-background hover:text-foreground">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-2 text-background/60 text-sm">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Tax-deductible donations accepted year-round</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-foreground/70 backdrop-blur-sm border-t border-background/10 z-10">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between gap-6 text-background/80 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Serving Local Families
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            Free Pickup &amp; Delivery
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
