import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "The entire process was seamless. PA Furniture Mission picked up our old couch and within days, we knew it had found a new home with a family who truly needed it.",
    name: "Sarah L.",
    role: "Furniture Donor",
    rating: 5,
  },
  {
    text: "Volunteering here has been the most rewarding experience. Seeing families react when we deliver their furniture — you can't put a price on that kind of joy.",
    name: "David M.",
    role: "Volunteer",
    rating: 5,
  },
  {
    text: "After my divorce, I had nothing. PA Furniture Mission furnished my entire apartment. My kids finally had beds and a table to do homework. I'm so grateful.",
    name: "Lisa T.",
    role: "Recipient",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            What People Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-md border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="heroOutline" className="rounded-md px-8">Share Your Story</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
