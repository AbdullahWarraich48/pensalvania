import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ClientTestimonialSection from "@/components/ClientTestimonialSection";
import FoundersFaqSection from "@/components/FoundersFaqSection";
import { fetchHistoryFoundersVideo, resolveHistoryFoundersVideoUrl } from "@/integrations/api/historyfoundersvideo-api";
import { useEffect, useState } from "react";

const HistoryOfPFMSection = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [clientVideo, setClientVideo] = useState({
    heading: "Client Testimony",
    quote: "It’s about turning houses into homes!",
    videoUrl: "",
  });

  const handleImageError = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  useEffect(() => {
    const controller = new AbortController();
    const loadClientVideo = async () => {
      try {
        const payload = await fetchHistoryFoundersVideo(controller.signal);
        if (payload?.data) {
          setClientVideo({
            heading: payload.data.title || "Client Testimony",
            quote: payload.data.description || "It’s about turning houses into homes!",
            videoUrl: resolveHistoryFoundersVideoUrl(payload.data.videoUrl),
          });
        }
      } catch (_error) {
        // Keep fallback client testimony content when API is unavailable.
      }
    };
    loadClientVideo();
    return () => controller.abort();
  }, []);

  return (
    <section className="py-16 bg-background" aria-label="History of the Pennsylvania Furniture Mission">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest text-center">
            Making a difference in people’s lives and giving them a warm and furnished home is our goal as a TEAM!
          </p>

          <h2 className="mt-6 text-center text-2xl md:text-4xl font-bold text-foreground italic">
            History of the Pennsylvania Furniture Mission (PFM)
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
              <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-muted">
                {!failedImages["mosaic"] ? (
                  <img
                    src="/images/about.jpg"
                    alt="Early work and community efforts"
                    loading="lazy"
                    onError={() => handleImageError("mosaic")}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[4/5] w-full bg-primary/5" aria-hidden="true" />
                )}
              </div>
            </div>

            <div className="lg:col-span-7 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2">
              <div className="rounded-3xl border border-primary/10 bg-warm-light p-7 md:p-10">
                <p className="text-sm leading-7 text-muted-foreground">
                  Amanda Reilly and Pashk Sokoli always had a deep commitment to making a meaningful difference in the
                  lives of others. Amanda worked as a community organizer with the Metro Industrial Areas Foundation,
                  and Pashk gained invaluable experience working with the Chicago Furniture Bank. This work solidified
                  their understanding of how furniture poverty affects families and how a community approach can
                  transform lives.
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Driven by passion for making real change happen and a history of great personal challenges, they
                  envisioned a way to bring their knowledge and experience back to Amanda’s home state of Pennsylvania.
                  Together, they founded the Pennsylvania Furniture Mission (PFM), achieving 501(c)(3) status in
                  November 2022 and launching full operations in the summer of 2023.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <Card className="border-primary/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">2024 households</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-2xl font-bold text-foreground">395+</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Fully furnished under Pashk’s direction with staff, volunteers, and board support.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Bed sets in 2024</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-2xl font-bold text-foreground">741+</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Provided to families and individuals experiencing economic hardship and housing instability.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mt-8 text-sm leading-7 text-muted-foreground">
                  The organization continues to focus on furnishing homes, creating employment opportunities for people
                  with barriers, and reducing waste by repurposing quality furniture. The PFM Family is committed to
                  making lasting, tangible change in the lives of those we serve.
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  The PFM’s vision is that no child or adult in South Central PA will sleep on a cold floor, no family
                  will eat dinner off their lap or a card box, and every household will have a couch to enjoy a movie
                  with their loved ones.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <FoundersFaqSection />
          </div>

          <div className="mt-12">
            <ClientTestimonialSection
              heading={clientVideo.heading}
              quote={clientVideo.quote}
              videoUrl={clientVideo.videoUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryOfPFMSection;

