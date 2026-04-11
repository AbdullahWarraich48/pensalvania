import { ClipboardList, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "List Your Items",
    description: "Tell us what furniture you'd like to donate. Snap a photo and fill out a quick form.",
  },
  {
    icon: Truck,
    title: "We Pick It Up",
    description: "Schedule a free pickup at your convenience. Our team handles all the heavy lifting.",
  },
  {
    icon: Smile,
    title: "Make Someone Smile",
    description: "Your furniture goes directly to a family in need. You get a tax-deductible receipt.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center p-8 rounded-2xl bg-background hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
