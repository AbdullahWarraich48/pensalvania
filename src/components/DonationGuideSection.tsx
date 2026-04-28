type DonationGuideItem = {
  title: string;
  amount: string;
  description: string;
};

const DonationGuideSection = () => {
  const items: DonationGuideItem[] = [
    {
      title: "DELIVERIES & PICKUPS",
      amount: "$25",
      description: "Help cover fuel, truck maintenance, and scheduled deliveries for families.",
    },
    {
      title: "WAREHOUSE SUPPORT",
      amount: "$40",
      description: "Keep operations running with supplies, storage, and volunteer resources.",
    },
    {
      title: "EMERGENCY ESSENTIALS",
      amount: "$100",
      description: "Provide mattresses, bedding, and critical items when donations are limited.",
    },
  ];

  return (
    <section className="py-16 bg-background" aria-label="Donation guide">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Donation impact
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight italic">
              A Guide to Your Donation
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              Choose an amount to see how your gift helps keep pickups, operations, and essentials moving.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-primary/10 bg-background p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xs font-semibold tracking-[0.18em] text-foreground/70">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
                    {item.amount}
                  </span>
                </div>

                <div className="mt-5 h-px w-full bg-border" aria-hidden="true" />

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationGuideSection;

