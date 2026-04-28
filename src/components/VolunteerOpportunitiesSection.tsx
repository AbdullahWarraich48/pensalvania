import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Megaphone, Package, PhoneCall, UserRound } from "lucide-react";

const VolunteerOpportunitiesSection = () => {
  const opportunities = [
    "Administrative Assistant",
    "Warehouse Team Member",
    "Social Services Intern",
    "Communications Coordinator",
    "Greeter…",
    "and more!",
  ];

  return (
    <section id="volunteer-opportunities" className="py-16 bg-background" aria-label="Volunteer opportunities">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5 lg:flex lg:flex-col lg:h-full">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest">
                Volunteer With Us
              </p>
              <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
                Come Volunteer With Us!
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
                We offer a unique opportunity for anyone interested in giving back to put their skills, talents, and
                compassion to good use! Whether you like to do furniture repair, answer phone calls, connect people to
                resources, or make Facebook posts, we have a place for you on our team.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-warm-light p-6 lg:mt-auto">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background ring-1 ring-primary/10">
                    <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Available Volunteer Opportunities Include:</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {opportunities.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:h-full">
              <Card className="border-primary/10 overflow-hidden lg:h-full">
                <CardHeader className="bg-warm-light">
                  <CardTitle className="text-xl">Where your skills fit</CardTitle>
                  <p className="text-sm text-muted-foreground leading-7">
                    A few common ways volunteers support PFM day to day.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 lg:h-full">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                          <Package className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="font-semibold text-foreground">Warehouse &amp; sorting</div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Help with staging, organizing, and preparing furniture for delivery.
                      </p>
                    </div>
                    <div className="p-6 md:border-l md:border-border">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                          <PhoneCall className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="font-semibold text-foreground">Phones &amp; admin</div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Answer calls, support scheduling, and help keep communication flowing.
                      </p>
                    </div>

                    <Separator className="md:col-span-2" />

                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                          <Megaphone className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="font-semibold text-foreground">Communications</div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Support outreach and social posts—help the community learn about PFM.
                      </p>
                    </div>
                    <div className="p-6 md:border-l md:border-border">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                          <UserRound className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div className="font-semibold text-foreground">Greeter &amp; support</div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Welcome visitors and help connect people to the right resources.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesSection;

