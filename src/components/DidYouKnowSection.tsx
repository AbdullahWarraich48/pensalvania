type DidYouKnowStat = {
  id: string;
  parts: Array<{ text: string; isEmphasis?: boolean }>;
};

const DidYouKnowSection = () => {
  const stats: DidYouKnowStat[] = [
    {
      id: "diverted",
      parts: [
        { text: "The Pennsylvania Furniture Mission has diverted " },
        { text: "over 750 tons", isEmphasis: true },
        { text: " of furniture from landfills in one year and a half." },
      ],
    },
    {
      id: "jobs",
      parts: [
        { text: "Your donation makes it possible to " },
        { text: "create jobs", isEmphasis: true },
        {
          text:
            " for local PA individuals seeking a non-degree required position where they can have a purpose and a paycheck!",
        },
      ],
    },
    {
      id: "homelessness",
      parts: [
        { text: "Over 50%", isEmphasis: true },
        { text: " of the households we serve have self-reported previously experiencing homelessness." },
      ],
    },
    {
      id: "bedsets",
      parts: [
        { text: "We provided " },
        { text: "over 700 bed sets in 2024.", isEmphasis: true },
      ],
    },
  ];

  return (
    <section className="py-16 bg-background" aria-label="Did you know statistics">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" aria-hidden="true" />

          <div className="relative px-6 py-14 md:px-12 md:py-16">
            <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tight text-foreground italic">
              Did you know?
            </h2>

            <ul className="mx-auto mt-10 max-w-3xl space-y-5 text-sm md:text-base text-foreground/80">
              {stats.map((stat) => (
                <li key={stat.id} className="flex gap-3 leading-7">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" aria-hidden="true" />
                  <span>
                    {stat.parts.map((part, idx) =>
                      part.isEmphasis ? (
                        <strong key={idx} className="font-semibold text-foreground">
                          {part.text}
                        </strong>
                      ) : (
                        <span key={idx}>{part.text}</span>
                      ),
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-12 text-center text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              THANK YOU!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DidYouKnowSection;

