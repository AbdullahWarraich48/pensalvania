import { useMemo, useState } from "react";

type BusinessPartner = {
  name: string;
  logoSrc: string;
  href: string;
};

const BusinessPartnersSection = () => {
  const partners = useMemo<BusinessPartner[]>(
    () => [
      {
        name: "United Way of Lancaster County",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/9222d483-fdde-41df-9864-a70cdf0098f7/Screenshot+2025-04-16+152458.png",
        href: "https://www.uwlanc.org/contact/",
      },
      {
        name: "Herkey Houses",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/9145aefe-aa12-45ba-bfb0-bf0099ddb81b/Logo+Black+House+%284%29.png",
        href: "https://www.herkeyhouses.com/",
      },
      {
        name: "Executorium",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/0462034d-74c3-4ac5-8646-401e4a461657/ExecutoriumGraphic2.0.png",
        href: "https://executorium.com/",
      },
      {
        name: "CREAG Foundation",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/7a2b24e6-271b-424a-b0f5-06f4638e45ec/Screenshot+2025-04-16+142859.png",
        href: "https://creagfoundation.org/",
      },
      {
        name: "York County Veterans Outreach",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/6985f400-2564-48ab-80c3-2ba6dd41b1d4/YCVO+Logo+%28cropped%29.jpg",
        href: "https://www.yocoveteransoutreach.org/",
      },
      {
        name: "VFW",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/f3797389-2651-404e-91b6-934972b9e477/Screenshot+2025-04-16+151945.png",
        href: "https://www.vfw.org/",
      },
      {
        name: "Paul Davis",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/7ca8ad29-827a-4bd6-8b2a-a0843e9ee33b/New+PD+Logo.jpg",
        href: "https://central-pennsylvania.pauldavis.com/",
      },
      {
        name: "Thrivent",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/c827d991-6b13-49fe-bf47-071776fd3a16/Screenshot+2025-04-16+142043.png",
        href: "https://www.thrivent.com/",
      },
      {
        name: "Columbia EDC",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/4d6ce9fd-ff37-4f0f-a271-34c89c301bd8/Screenshot+2025-04-16+152310.jpg",
        href: "https://columbiaedc.com/about-cedc/",
      },
      {
        name: "Christ Church United Church of Christ",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/dc389f90-f6e4-444d-8166-e46bad74560a/Screenshot+2025-04-16+145032.png",
        href: "https://www.etownucc.org/",
      },
      {
        name: "LCBC",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/34a1eb04-b128-41d3-870a-4f667646cf86/Screenshot+2025-04-16+144522.png",
        href: "https://www.lcbcchurch.com/locations/manheim/",
      },
    ],
    [],
  );

  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const handleImgError = (name: string) => {
    setFailed((prev) => ({ ...prev, [name]: true }));
  };

  const repeatedPartners = useMemo(() => [...partners, ...partners], [partners]);

  return (
    <section className="py-20 bg-background" aria-label="Business partners">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Business Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground italic mb-4">
            Organizations that power our mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re grateful for the partners who invest in pickups, operations, and community impact.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl marquee rounded-3xl border border-primary/10 bg-warm-light px-4 py-6">
          <div className="marquee-track">
            {repeatedPartners.map((partner, idx) => (
              <a
                key={`${partner.name}-${idx}`}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={0}
                aria-label={`Open business partner website: ${partner.name}`}
                className="group flex h-20 w-[200px] shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-background/70 px-4 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              >
                {!failed[partner.name] ? (
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    loading="lazy"
                    onError={() => handleImgError(partner.name)}
                    className="max-h-12 w-auto max-w-full object-contain grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <span className="text-xs font-semibold text-foreground/80 text-center">
                    {partner.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnersSection;

