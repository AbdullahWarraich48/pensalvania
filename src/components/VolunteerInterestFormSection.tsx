import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Mail } from "lucide-react";
import { useId, useState } from "react";

const VolunteerInterestFormSection = () => {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();

    if (!normalizedName) {
      toast.error("Please enter your name.");
      return;
    }

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!agree) {
      toast.error("Please confirm you understand this is an interest form.");
      return;
    }

    toast.success("Thanks for volunteering!", {
      description: "We received your interest (demo form).",
      action: { label: "Ok", onClick: () => {} },
    });
  };

  return (
    <section id="volunteer-form" className="py-16 bg-warm-light" aria-label="Volunteer interest form">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Interested in volunteering?
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-bold text-foreground italic">
              Please complete the form below
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">
              Feel free to contact our executive director,{" "}
              <span className="font-semibold text-foreground">Amanda Reilly-Sokoli</span>, at{" "}
              <a
                href="mailto:amanda@pennsylvaniafurnituremission.org"
                className="font-semibold text-primary underline underline-offset-4"
                aria-label="Email Amanda Reilly-Sokoli"
              >
                amanda@pennsylvaniafurnituremission.org
              </a>{" "}
              for more information about opportunities.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/10 bg-background p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    “The most important word we have is we.”
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">- Terry Gendron</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Thank you for considering to volunteer with the Pennsylvania Furniture Mission. Volunteers are an
                important part of our program and give back in a huge way. We appreciate you!
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Volunteer Interest Form</CardTitle>
                <CardDescription>
                  Share your info and what you’d like to help with. (Demo form)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`${id}-name`}>Name</Label>
                      <Input
                        id={`${id}-name`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        required
                        aria-label="Name"
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
                    <Label htmlFor={`${id}-message`}>Message</Label>
                    <Textarea
                      id={`${id}-message`}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you’re interested in helping with…"
                      aria-label="Volunteer message"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`${id}-agree`}
                      checked={agree}
                      onCheckedChange={(next) => setAgree(next === true)}
                      aria-label="Agree this is an interest form"
                    />
                    <Label htmlFor={`${id}-agree`} className="text-sm leading-6 text-muted-foreground">
                      I understand this is an interest form and someone may follow up by email.
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" className="w-full rounded-md">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerInterestFormSection;

