import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  fetchVolunteerImagesContent,
  resolveVolunteerImageUrl,
  type VolunteerImagesContent,
} from "@/integrations/api/volunteerimages-api";

type CarouselImage = {
  id: string;
  src: string;
  alt: string;
};

const CONTINUOUS_SPEED_PX_PER_FRAME = 0.35;

const fallbackContent: VolunteerImagesContent = {
  heroImageUrl: "/images/hero-bg.jpg",
  image1Url: "/images/hero-bg.jpg",
  image2Url: "/images/about.jpg",
  image3Url: "/images/cat-sofa.jpg",
  image4Url: "/images/hero-bg.jpg",
  image5Url: "/images/about.jpg",
};

const VolunteerMediaCarouselSection = () => {
  const [content, setContent] = useState<VolunteerImagesContent>(fallbackContent);
  const images = useMemo<CarouselImage[]>(
    () => [
      { id: "img-1", src: resolveVolunteerImageUrl(content.image1Url), alt: "Volunteer work in action" },
      { id: "img-2", src: resolveVolunteerImageUrl(content.image2Url), alt: "Community support" },
      { id: "img-3", src: resolveVolunteerImageUrl(content.image3Url), alt: "Furniture ready for a new home" },
      { id: "img-4", src: resolveVolunteerImageUrl(content.image4Url), alt: "Warehouse and sorting" },
      { id: "img-5", src: resolveVolunteerImageUrl(content.image5Url), alt: "Team and partners" },
    ],
    [content],
  );

  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [api, setApi] = useState<CarouselApi | null>(null);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const result = await fetchVolunteerImagesContent();
        if (isMounted) {
          setContent({
            heroImageUrl: result.heroImageUrl || fallbackContent.heroImageUrl,
            image1Url: result.image1Url || fallbackContent.image1Url,
            image2Url: result.image2Url || fallbackContent.image2Url,
            image3Url: result.image3Url || fallbackContent.image3Url,
            image4Url: result.image4Url || fallbackContent.image4Url,
            image5Url: result.image5Url || fallbackContent.image5Url,
          });
        }
      } catch {
        if (isMounted) setContent(fallbackContent);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const stopAutoScroll = () => {
    if (!rafRef.current) return;
    window.cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    if (!api) return;

    const engine = api.internalEngine?.();
    if (!engine) return;

    const tick = () => {
      if (!api) return;
      if (isPausedRef.current || document.visibilityState === "hidden") {
        rafRef.current = window.requestAnimationFrame(tick);
        return;
      }

      // Smooth continuous scrolling (Embla pattern)
      engine.location.add(CONTINUOUS_SPEED_PX_PER_FRAME);
      engine.target.add(CONTINUOUS_SPEED_PX_PER_FRAME);
      engine.scrollTo(engine.location);

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!api) return;
    startAutoScroll();
    return () => stopAutoScroll();
  }, [api]);

  const handleImageError = (id: string) => {
    setFailed((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 bg-background" aria-label="Volunteer media">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted">
            <div className="relative aspect-[21/9] w-full">
              {!failed["hero"] ? (
                <img
                  src={resolveVolunteerImageUrl(content.heroImageUrl)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  onError={() => handleImageError("hero")}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
              )}
              <div className="absolute inset-0 bg-foreground/25" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-center text-lg md:text-2xl font-semibold text-background">
                  “The most important word we have is we.” <span className="font-normal">- Terry Gendron</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-8"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            onFocus={() => {
              isPausedRef.current = true;
            }}
            onBlur={() => {
              isPausedRef.current = false;
            }}
          >
            <Carousel
              setApi={(nextApi) => setApi(nextApi)}
              opts={{ align: "start", loop: true, dragFree: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 flex-nowrap">
                {images.map((image) => (
                  <CarouselItem
                    key={image.id}
                    className="pl-4 basis-auto w-[260px] sm:w-[240px] md:w-[220px] lg:w-[210px]"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-muted aspect-[4/3]">
                      {!failed[image.id] ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          onError={() => handleImageError(image.id)}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerMediaCarouselSection;

