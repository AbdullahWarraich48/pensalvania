import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleCheck, CircleX, Info, Wallet } from "lucide-react";

type DonationTier = {
  label: string;
  range: string;
  description: string;
};

const PickupGuidelinesSection = () => {
  const tiers: DonationTier[] = [
    { label: "Easy", range: "$75-$150", description: "1 large item + a few small items" },
    { label: "Medium", range: "$150-$250", description: "2-3 large items" },
    { label: "Hard", range: "$250-$350", description: "4-5 large items" },
    { label: "Multi-Room", range: "$400-$600", description: "8 or more large items" },
    { label: "Full Estate", range: "$600-$1,000", description: "estate cleanout services" },
  ];

  const standards = [
    "Upholstered items should not be broken, and lack excessive rips, stains, pet hair, odors, or fading.",
    "Wood items should not have excessive watermarks or discoloration, chipped edges, missing hardware or parts, etc.",
    "Items should be clean and free of odor.",
    "Items MUST be pest free (i.e. no bed bugs).",
    "Small appliances should be clean and in working condition.",
    "Items to be picked up cannot be located on the third floor or higher without an elevator.",
    "Movers have the discretion to decide if your items are useable for our clients.",
  ];

  const accepts = [
    "Mattresses and box springs (twin, full, queen, king)",
    "Bed frames & headboards (excluding wooden materials)",
    "Assembled cribs, changing tables, etc.",
    "Sofas / couches / loveseats / futons",
    "Armchairs, recliners, ottomans, and other seating",
    "Dining sets (tables and chairs together are great!)",
    "Dressers, chests, drawers (wooden, plastic, or metal)",
    "Tables: kitchen tables, end tables, bedside tables, coffee tables, etc.",
    "Household bookshelves",
    "Mirrors, artwork, rugs, and lamps",
    "Household items: dishes, utensils, glassware, pots & pans",
    "Small appliances (e.g. toasters, crockpots, mini fridges, microwaves, coffee makers, TVs, space heaters, window A/C units)",
    "Electronics (e.g. Flatscreen TVs, DVD players, laptops, cameras!)",
    "Small desks and office chairs",
  ];

  const doesNotAccept = [
    "Wooden bed frames- unless they come together with the bed frame and all the associated pieces— Thank you!",
    "Trundle / bunkbeds",
    "Sleeper sofas (depending on size and weight)- please ask",
    "Large/oversized bookshelves",
    "China cabinets / buffets / armoires",
    "Entertainment centers / extra large TV stands",
    "Outdoor furniture",
    "Pianos",
    "Large appliances",
    "Linens / \"soft goods”",
    "Clothes",
    "Exercise / sports equipment",
    "Large office furniture",
    "China sets",
  ];

  return (
    <section className="py-16 bg-background" aria-label="Pickup guidelines and suggested donation">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Request a Pickup
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
              PFM Suggested Donation
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
              Pennsylvania Furniture Mission does not charge for donation pickups, but we do ask for your financial
              support for the pick-up service. Your contribution is essential to keeping our truck on the road and our
              hard-working movers paid!
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
              Thank you for continuing to help us furnish homes for families across South Central Pennsylvania for
              free. Please follow our suggested donation guide below to find what range your contribution falls under.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Suggested donation amount</CardTitle>
                  <CardDescription>
                    PFM Suggested Donation amount is scaled by the following criteria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {tiers.map((tier) => (
                      <div
                        key={tier.label}
                        className="rounded-2xl border border-primary/10 bg-warm-light p-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-foreground">{tier.label}</p>
                          <Badge variant="secondary" className="bg-background text-foreground border border-primary/10">
                            {tier.range}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{tier.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-primary/10 bg-background p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                        <Info className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <p className="text-sm leading-7 text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          significant amount of small items or high level of difficulty
                        </span>{" "}
                        subject to increased suggested donation
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-primary/10 bg-warm-light p-6">
                    <p className="text-sm font-semibold text-foreground">Request a Pickup</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      To request a pick-up service, please fill out the form below. We graciously ask that you give our
                      team 24-72 business hours notice to respond to your donation pick request. We are closed on
                      weekends and major holidays.
                    </p>
                    <Button asChild variant="hero" className="mt-4 rounded-md">
                      <a href="#pickup-form" aria-label="Jump to pickup request form">
                        Fill out the form <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <Card className="border-primary/10 overflow-hidden">
                <div className="relative aspect-[16/10] bg-muted">
                  <img
                    src="/images/hero-bg.jpg"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20" aria-hidden="true" />
                  <div className="absolute inset-0 p-6 flex items-end">
                    <div className="rounded-2xl bg-background/90 backdrop-blur px-5 py-4 border border-primary/10 w-full">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Wallet className="h-4 w-4 text-primary" aria-hidden="true" />
                        Donate Financially
                      </div>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        IInterested in donating financially? Your contribution to Pennsylvania Furniture Mission means
                        more than you know to a family in need. Click below to learn more!
                      </p>
                      <Button asChild variant="hero" className="mt-4 w-full rounded-md">
                        <a href="/donate" aria-label="Go to donate financially page">
                          Support Us Financially
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="standards">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground italic">
                  PFM DONATIONS
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  PFM Donation Standards:
                </p>
                <TabsList className="mt-6">
                  <TabsTrigger value="standards">Standards</TabsTrigger>
                  <TabsTrigger value="accepts">PFM Accepts</TabsTrigger>
                  <TabsTrigger value="no">PFM Does Not Accept</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="standards" className="mt-8">
                <Card className="border-primary/10">
                  <CardContent className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {standards.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CircleCheck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                          <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="accepts" className="mt-8">
                <Card className="border-primary/10">
                  <CardContent className="p-6 md:p-8">
                    <ul className="grid gap-3 md:grid-cols-2">
                      {accepts.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CircleCheck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                          <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="no" className="mt-8">
                <Card className="border-primary/10">
                  <CardContent className="p-6 md:p-8">
                    <ul className="grid gap-3 md:grid-cols-2">
                      {doesNotAccept.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CircleX className="mt-1 h-5 w-5 text-destructive" aria-hidden="true" />
                          <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupGuidelinesSection;

