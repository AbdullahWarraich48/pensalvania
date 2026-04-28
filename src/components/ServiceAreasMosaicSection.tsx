import { useState } from "react";

const ServiceAreasMosaicSection = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section className="py-16 bg-background" aria-label="Service areas and referral notice">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-warm-light p-6 md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 20%, hsl(var(--primary) / 0.12) 0%, transparent 55%), radial-gradient(circle at 85% 30%, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
              }}
            />

            <div className="relative grid gap-6 md:grid-cols-12 md:items-stretch">
              <div className="md:col-span-8">
                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted aspect-[16/10]">
                  {!failedImages["city"] ? (
                    <img
                      src="/images/hero-bg.jpg"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      onError={() => handleImageError("city")}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                  )}
                  <div className="absolute inset-0 bg-foreground/15" aria-hidden="true" />
                </div>
              </div>

              <div className="md:col-span-4 md:self-start">
                <div className="rounded-3xl border border-primary/10 bg-background/90 backdrop-blur p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground italic">Service Areas</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    The Pennsylvania Furniture Mission serves families and individuals experiencing economic hardships
                    across South Central Pennsylvania within the counties of Lancaster, York, Dauphin, Lebanon, Berks,
                    and Cumberland.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    For non-profits organizations, school districts, health programs, and faith-based institutions
                    looking to learn more information about our services and furniture selection process please contact
                    our main offices at:{" "}
                    <span className="font-semibold text-foreground">717-813-2452</span>.
                  </p>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-3xl border border-primary/10 bg-background/90 backdrop-blur p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground italic">
                    Are you or someone in your household in need of home furnishings?
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Please contact one of our non-profit partners to access our services. We are not able to accept
                    walk-in clients or individuals or families without a referral from a partner agency. Thank you for
                    your understanding.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    We appreciate your patience as we work to offer our services to additional agencies and groups.
                    Thank you!
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted aspect-[16/10]">
                  {!failedImages["warehouse"] ? (
                    <img
                      src="/images/about.jpg"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      onError={() => handleImageError("warehouse")}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMosaicSection;

