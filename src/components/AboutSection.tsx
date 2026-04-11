import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award } from "lucide-react";

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To provide quality furniture to families transitioning out of homelessness, domestic violence, or other challenging circumstances — ensuring every home feels like a home." },
  { icon: Eye, title: "Our Vision", desc: "A community where no family sleeps on the floor or eats without a table. We envision every household equipped with the essentials for a dignified life." },
  { icon: Heart, title: "Our Purpose", desc: "We bridge the gap between those who have furniture to give and those who need it most, creating a circle of generosity that strengthens our entire community." },
  { icon: Award, title: "Our Values", desc: "Compassion, dignity, sustainability, and community. We treat every family with respect and ensure donated furniture gets a second life." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 italic">
              About PA Furniture Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2010, PA Furniture Mission is a non-profit organization dedicated to providing quality furniture to families and individuals transitioning out of homelessness, domestic violence situations, or other challenging circumstances.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as a small neighborhood initiative has grown into one of Pennsylvania's most trusted furniture donation organizations, serving over 50 communities and partnering with shelters, social workers, and local agencies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our dedicated team of 500+ volunteers collects, inspects, and delivers furniture at no cost to recipients. We believe every family deserves a home that feels like home.
            </p>
            <Button variant="hero" className="rounded-md px-8">Learn More About Us</Button>
          </div>

          <div className="relative">
            <img
              src="/images/about.jpg"
              alt="Our furniture warehouse with volunteers organizing donations"
              loading="lazy"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years of Service</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-background rounded-xl p-6 border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
