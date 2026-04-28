import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useMemo, useState } from "react";

type PresetAmount = { label: string; value: number };

const DonationFormSection = () => {
  const presetAmounts = useMemo<PresetAmount[]>(
    () => [
      { label: "$25", value: 25 },
      { label: "$50", value: 50 },
      { label: "$100", value: 100 },
      { label: "$250", value: 250 },
    ],
    [],
  );

  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const amountToDonate = (() => {
    const cleaned = customAmount.trim();
    if (!cleaned) return selectedAmount;
    const parsed = Number(cleaned);
    if (!Number.isFinite(parsed) || parsed <= 0) return selectedAmount;
    return Math.round(parsed * 100) / 100;
  })();

  const handlePresetClick = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

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

    toast.success("Thanks for your support!", {
      description: `Donation amount: $${amountToDonate.toFixed(2)} (demo form).`,
      action: {
        label: "Ok",
        onClick: () => {},
      },
    });
  };

  return (
    <section id="donation-form" className="py-16 bg-warm-light" aria-label="Donation form">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground italic">
              Make a donation
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              This is a front-end demo form (no payment processing connected yet). If you’d like, tell me what
              provider you use (PayPal, Stripe, Donorbox) and I’ll integrate it.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => handlePresetClick(preset.value)}
                  onKeyDown={(e) => {
                    if (e.key !== "Enter" && e.key !== " ") return;
                    e.preventDefault();
                    handlePresetClick(preset.value);
                  }}
                  tabIndex={0}
                  aria-label={`Select donation amount ${preset.label}`}
                  className={[
                    "h-11 rounded-md border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
                    customAmount.trim()
                      ? "border-border bg-background text-foreground hover:bg-accent"
                      : selectedAmount === preset.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-accent",
                  ].join(" ")}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <Label htmlFor="customAmount">Custom amount</Label>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-muted-foreground" aria-hidden="true">
                  $
                </span>
                <Input
                  id="customAmount"
                  inputMode="decimal"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  aria-label="Custom donation amount"
                  className="max-w-[220px]"
                />
                <span className="text-sm text-muted-foreground">
                  Selected:{" "}
                  <span className="font-semibold text-foreground">
                    ${amountToDonate.toFixed(2)}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle className="text-xl">Donor details</CardTitle>
              <CardDescription>We’ll use this info for a receipt (demo only).</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    autoComplete="name"
                    aria-label="Full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    aria-label="Email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Note (optional)</Label>
                  <Textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    aria-label="Donation note"
                    placeholder="Add a message (optional)"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full rounded-md">
                  Continue with ${amountToDonate.toFixed(2)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationFormSection;

