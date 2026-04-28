import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BecomePartnerHeroSection from "@/components/BecomePartnerHeroSection";
import BecomePartnerInfoSection from "@/components/BecomePartnerInfoSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useId, useState } from "react";

const BecomePartner = () => {
  const id = useId();
  const [orgName, setOrgName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedOrg = orgName.trim();
    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedEmail = email.trim();
    const normalizedSubject = subject.trim();
    const normalizedMessage = message.trim();

    if (!normalizedOrg) {
      toast.error("Please enter your organization name.");
      return;
    }

    if (!normalizedFirstName) {
      toast.error("Please enter your first name.");
      return;
    }

    if (!normalizedLastName) {
      toast.error("Please enter your last name.");
      return;
    }

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!normalizedSubject) {
      toast.error("Please enter a subject.");
      return;
    }

    if (!normalizedMessage) {
      toast.error("Please enter a message.");
      return;
    }

    toast.success("Partner inquiry submitted!", {
      description: "We’ll respond to your inquiry as soon as possible. Thank you! (Demo form)",
      action: { label: "Ok", onClick: () => {} },
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-[88px]">
        <BecomePartnerHeroSection />
        <BecomePartnerInfoSection />

        <section className="py-16 bg-background" aria-label="Become a partner details">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-12 lg:items-start">
              <div id="partner-form" className="lg:col-span-7">
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Partner inquiry</CardTitle>
                    <CardDescription>
                      If your organization is interested in becoming a partner organization of the Pennsylvania
                      Furniture Mission, please fill out the form below. We will respond to your inquiry as soon as
                      possible. Thank you!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-firstName`}>First Name</Label>
                          <Input
                            id={`${id}-firstName`}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="given-name"
                            aria-label="First Name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`${id}-lastName`}>Last Name</Label>
                          <Input
                            id={`${id}-lastName`}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            autoComplete="family-name"
                            aria-label="Last Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${id}-org`}>Name of Your Organization</Label>
                        <Input
                          id={`${id}-org`}
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          aria-label="Name of Your Organization"
                          required
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
                          aria-label="Email"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${id}-subject`}>Subject</Label>
                        <Input
                          id={`${id}-subject`}
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          aria-label="Subject"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`${id}-message`}>Message</Label>
                        <Textarea
                          id={`${id}-message`}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          aria-label="Message"
                          placeholder="Tell us about your organization and how you’d like to partner…"
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" className="w-full rounded-md">
                        Submit inquiry
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

export default BecomePartner;

