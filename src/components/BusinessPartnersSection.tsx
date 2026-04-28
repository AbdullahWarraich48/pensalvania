import { useEffect, useMemo, useState } from "react";
import {
  fetchBusinessPartners,
  resolveBusinessPartnerLogoUrl,
  type BusinessPartner,
} from "@/integrations/api/businesspartners-api";

type BusinessPartnerCard = {
  name: string;
  logoSrc: string;
};

const BusinessPartnersSection = () => {
  const fallbackPartners = useMemo<BusinessPartnerCard[]>(
    () => [
      {
        name: "United Way of Lancaster County",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/9222d483-fdde-41df-9864-a70cdf0098f7/Screenshot+2025-04-16+152458.png",
      },
      {
        name: "Herkey Houses",
        logoSrc:
          "https://images.squarespace-cdn.com/content/v1/62f2c4d07e805c124872b437/9145aefe-aa12-45ba-bfb0-bf0099ddb81b/Logo+Black+House+%284%29.png",
      },
    ],
    []
  );
  const [partners, setPartners] = useState<BusinessPartnerCard[]>(fallbackPartners);
  const shouldAnimate = partners.length > 1;
  const marqueePartners = useMemo(
    () => (shouldAnimate ? [...partners, ...partners] : partners),
    [partners, shouldAnimate]
  );

  useEffect(() => {
    const controller = new AbortController();
    const loadPartners = async () => {
      try {
        const payload = await fetchBusinessPartners(controller.signal);
        if (payload?.data?.length) {
          setPartners(
            payload.data.map((partner: BusinessPartner) => ({
              name: partner.name,
              logoSrc: resolveBusinessPartnerLogoUrl(partner.logoUrl),
            }))
          );
        }
      } catch (_error) {
        // Keep fallback content when API is unavailable.
      }
    };
    loadPartners();
    return () => controller.abort();
  }, []);

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

        <div
          className={`mx-auto mt-12 max-w-6xl rounded-3xl border border-primary/10 bg-warm-light px-4 py-6 ${
            shouldAnimate ? "marquee" : ""
          }`}
        >
          <div
            className={
              shouldAnimate
                ? "marquee-track"
                : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            }
          >
            {marqueePartners.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                aria-label={`Business partner image: ${partner.name}`}
                className={`group flex h-20 items-center justify-center rounded-2xl border border-primary/10 bg-background/70 px-4 transition-colors hover:bg-accent ${
                  shouldAnimate ? "w-[200px] shrink-0" : ""
                }`}
              >
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-full object-contain grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnersSection;

