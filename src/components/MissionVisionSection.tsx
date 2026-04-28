import { useMemo, useState } from "react";

type MissionVisionCard = {
  key: "mission" | "vision";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const MissionVisionSection = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const cards = useMemo<MissionVisionCard[]>(
    () => [
      {
        key: "mission",
        title: "Mission",
        description:
          "Our mission is to create an environment where each family transitioning out of homelessness, domestic violence, or other challenging circumstances receives the essential furnishings needed to make a house a home.",
        imageSrc: "/images/cat-sofa.jpg",
        imageAlt: "A furnished living space",
      },
      {
        key: "vision",
        title: "Vision",
        description:
          "We envision a community where no family sleeps on the floor or eats without a table. Every home should be equipped with the essentials for a dignified life.",
        imageSrc: "/images/about.jpg",
        imageAlt: "A dining table and chairs",
      },
    ],
    [],
  );

  const handleImageError = (key: MissionVisionCard["key"]) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      className="py-20 bg-warm-light"
      aria-label="Mission and Vision"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl italic">
            We turn houses into homes.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Supporting families with the essential furnishings they need to build
            comfort, stability, and dignity.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.key}
              className="overflow-hidden rounded-2xl bg-background border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full bg-muted">
                {!failedImages[card.key] ? (
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    loading="lazy"
                    onError={() => handleImageError(card.key)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-primary/5" aria-hidden="true" />
                )}
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;