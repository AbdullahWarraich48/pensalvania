import { useState } from "react";

type ClientTestimonialSectionProps = {
  heading?: string;
  quote?: string;
  videoEmbedUrl?: string;
  videoUrl?: string;
  posterImageSrc?: string;
};

const ClientTestimonialSection = ({
  heading = "Client Testimony",
  quote = "It’s about turning houses into homes!",
  videoEmbedUrl,
  videoUrl,
  posterImageSrc = "/images/hero-bg.jpg",
}: ClientTestimonialSectionProps) => {
  const [posterFailed, setPosterFailed] = useState(false);

  return (
    <section className="py-16 bg-warm-light" aria-label="Client testimony">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-primary/10 bg-background overflow-hidden">
          <div className="grid items-stretch gap-0 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground italic">
                {heading}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {quote}
              </p>
            </div>

            <div className="lg:col-span-8 bg-muted">
              <div className="relative aspect-video w-full">
                {videoEmbedUrl ? (
                  <iframe
                    title="Client testimonial video"
                    src={videoEmbedUrl}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : videoUrl ? (
                  <video controls className="absolute inset-0 h-full w-full object-cover">
                    <source src={videoUrl} />
                  </video>
                ) : (
                  <>
                    {!posterFailed ? (
                      <img
                        src={posterImageSrc}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        onError={() => setPosterFailed(true)}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-primary/5" aria-hidden="true" />
                    )}
                    <div className="absolute inset-0 bg-foreground/15" aria-hidden="true" />
                    <button
                      type="button"
                      tabIndex={0}
                      aria-label="Play testimonial video"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg ring-1 ring-border transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                      onClick={() => {}}
                      onKeyDown={(e) => {
                        if (e.key !== "Enter" && e.key !== " ") return;
                        e.preventDefault();
                      }}
                    >
                      <span className="sr-only">Play</span>
                      <span aria-hidden="true" className="ml-1 block h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-foreground" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;

