type SuperstarDonorItem = {
  title: string;
  amount: string;
  description: string;
};

const SuperstarDonorSection = () => {
  const items: SuperstarDonorItem[] = [
    {
      title: "OPERATIONS SUPPORT",
      amount: "$250",
      description:
        "Your generous donation makes it possible for us to continue furnishing homes for families in South Central PA, keeping our warehouse lights on, our phones with service, and internet for our hard-working paid and volunteer staff!",
    },
    {
      title: "STAFF SALARY",
      amount: "$500",
      description:
        "We provide jobs for individuals with barriers to employment, offering fair wages for our team members who are doing all the heavy lifting (sleeper sofas included!). Thank you so much for believing in us.",
    },
    {
      title: "WAREHOUSE",
      amount: "$1,000",
      description:
        "A donation of a thousand dollars or more assists us to maintain our warehouse space, showroom, and offices, giving families in need the opportunity to choose their own furniture rather than curb-picking less than sanitary home furnishings.",
    },
  ];

  return (
    <section className="py-20 bg-warm-light" aria-label="Superstar donor guide">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/10 bg-background">
          <div className="px-6 py-12 md:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest">
                Level up your impact
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight italic">
                Be a Superstar Donor!
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Bigger gifts keep our lights on, sustain fair-wage jobs, and maintain the warehouse families rely on.
              </p>
            </div>

            <div className="mt-12 grid gap-0 md:grid-cols-3">
              {items.map((item, idx) => (
                <article
                  key={item.title}
                  className={[
                    "p-7 md:p-8",
                    idx !== 0 ? "md:border-l md:border-border" : "",
                    idx !== items.length - 1 ? "border-b border-border md:border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xs font-semibold tracking-[0.18em] text-foreground/70">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                      {item.amount}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperstarDonorSection;

