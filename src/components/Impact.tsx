import { Button } from "@/components/ui/button";
import { Heart, Recycle, Home, TreePine } from "lucide-react";

const stats = [
  { icon: Heart, value: "5,200+", label: "Families Supported" },
  { icon: Recycle, value: "840 tons", label: "Kept from Landfills" },
  { icon: Home, value: "3,100+", label: "Homes Furnished" },
  { icon: TreePine, value: "12,000+", label: "Items Rehomed" },
];

const Impact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-3">Our Impact</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Together, We Make a Difference</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroOutline" size="lg" className="rounded-full px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Start Donating Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
