import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PickupHeroSection from "@/components/PickupHeroSection";
import PickupGuidelinesSection from "@/components/PickupGuidelinesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useId, useState } from "react";

const Pickup = () => {
  const id = useId();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pickupType, setPickupType] = useState<string>("");
  const [items, setItems] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedName = fullName.trim();
    const normalizedEmail = email.trim();

    if (!normalizedName) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!pickupType) {
      toast.error("Please choose a pickup type.");
      return;
    }

    if (!items.trim()) {
      toast.error("Please describe the items you want to donate.");
      return;
    }

    toast.success("Pickup request submitted!", {
      description: "We’ll review your request and follow up soon. (Demo form)",
      action: { label: "Ok", onClick: () => {} },
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <PickupHeroSection />
        <PickupGuidelinesSection />

        <section id="pickup-form" className="py-16 bg-background" aria-label="Pickup request form">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Before you submit
                </p>
                <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
                  Share your donation details
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
                  Please include item types, quantities, and any helpful notes (stairs, elevator, loading area, etc.).
                  Photos can be added later if we request them.
                </p>

                <div className="mt-8 rounded-2xl border border-primary/10 bg-warm-light p-6">
                  <p className="text-sm leading-7 text-muted-foreground">
                    This is a front-end demo form (no submission backend connected yet). Tell me where you want the
                    requests to go (email, Google Form, Airtable, or an API) and I’ll hook it up.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Request a Pickup</CardTitle>
                    <CardDescription>Provide your contact + donation details.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-name`}>Full name</Label>
                          <Input
                            id={`${id}-name`}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            autoComplete="name"
                            required
                            aria-label="Full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-email`}>Email</Label>
                          <Input
                            id={`${id}-email`}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            aria-label="Email"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-phone`}>Phone (optional)</Label>
                          <Input
                            id={`${id}-phone`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            aria-label="Phone"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Pickup type</Label>
                          <Select value={pickupType} onValueChange={setPickupType}>
                            <SelectTrigger aria-label="Select pickup type">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="donation-pickup">Donation pickup</SelectItem>
                              <SelectItem value="drop-off">Drop-off coordination</SelectItem>
                              <SelectItem value="question">Question about donations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${id}-address`}>Pickup address (optional)</Label>
                        <Input
                          id={`${id}-address`}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          autoComplete="street-address"
                          aria-label="Pickup address"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-city`}>City (optional)</Label>
                          <Input
                            id={`${id}-city`}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            autoComplete="address-level2"
                            aria-label="City"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-items`}>Items to donate</Label>
                          <Input
                            id={`${id}-items`}
                            value={items}
                            onChange={(e) => setItems(e.target.value)}
                            placeholder="e.g., couch, dining table + 4 chairs"
                            required
                            aria-label="Items to donate"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${id}-notes`}>Notes (optional)</Label>
                        <Textarea
                          id={`${id}-notes`}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Stairs, elevator, timing, parking, item condition, etc."
                          aria-label="Pickup notes"
                        />
                      </div>

                      <Button type="submit" variant="hero" className="w-full rounded-md">
                        Submit request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pickup;

