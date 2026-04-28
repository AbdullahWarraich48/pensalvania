import { BadgeCheck, Truck, Users } from "lucide-react";
import { useMemo, useState } from "react";

type BenefitItem = {
  key: string;
  icon: "check" | "truck" | "users";
  text: string;
};

const BecomePartnerInfoSection = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  const benefits = useMemo<BenefitItem[]>(
    () => [
      {
        key: "choice",
        icon: "check",
        text: "We provide all of our clients with the dignity of choice (where they can self-select their furniture from our showroom)",
      },
      {
        key: "waste",
        icon: "check",
        text: "The organization’s secondary goal is to reduce waste, keeping usable furniture out of our landfills.",
      },
      {
        key: "jobs",
        icon: "check",
        text: "We create jobs with fair wages and industry specific training for individuals who have barriers to employment.",
      },
      {
        key: "not-thrift",
        icon: "check",
        text: "We are different from the thrift store model because we do not sell our furniture.",
      },
      {
        key: "referrals",
        icon: "check",
        text: "All of our clients come from our referral partners who serve Pennsylvania’s most vulernable families and individuals.",
      },
      {
        key: "delivery",
        icon: "truck",
        text: "We offer a full delivery service within the counties of Lancaster, Berks, York, Dauphin, Lebanon, and Cumberland.",
      },
      {
        key: "setup",
        icon: "users",
        text: "This service includes bet set up.",
      },
    ],
    [],
  );

  const renderIcon = (icon: BenefitItem["icon"]) => {
    if (icon === "truck") return <Truck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />;
    if (icon === "users") return <Users className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />;
    return <BadgeCheck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />;
  };

  return (
    <section className="py-16 bg-background" aria-label="Become a partner information">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-primary/10 bg-background p-7 md:p-10 shadow-sm">
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground italic">
                    Who Can Become a Partner Organization
                  </h2>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                    <p>
                      We recognize that furniture is just one piece of the puzzle when it comes to restarting and
                      setting a path toward one’s goals. Our partner organizations make it possible for us to serve the
                      greater region of South Central Pennsylvania.
                    </p>
                    <p>
                      Our partner organizations are a combination of on-profit organizations, faith based institutions,
                      school districts, hospitals, clinics and other civic organizations whose missions are to assist
                      people by empowering them to reach their potential. Partner organizations are elibile to refer
                      the families and individuals they serve for our home furnishing program, which provides an entire
                      household of furniture that our clients are able to hand-select from our showroom.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted aspect-[4/5] lg:aspect-auto lg:h-full">
                  {!failedImages["people"] ? (
                    <img
                      src="/images/about.jpg"
                      alt="Partner impact in community"
                      loading="lazy"
                      onError={() => handleImageError("people")}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-5 lg:order-1">
                <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted aspect-[4/5] lg:aspect-auto lg:h-full">
                  {!failedImages["warehouse"] ? (
                    <img
                      src="/images/hero-bg.jpg"
                      alt="Furniture ready for delivery"
                      loading="lazy"
                      onError={() => handleImageError("warehouse")}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2">
                <div className="rounded-3xl border border-primary/10 bg-background p-7 md:p-10 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground italic">
                    Why Become a Partner With Us?
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit.key} className="flex gap-3">
                        {renderIcon(benefit.icon)}
                        <p className="text-sm leading-7 text-muted-foreground">{benefit.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerInfoSection;

