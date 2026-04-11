import { Home, Package, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Home, value: "2,500+", label: "Families Helped", desc: "Providing essential furniture to families transitioning out of shelters." },
  { icon: Package, value: "8,000+", label: "Items Donated", desc: "Quality furniture pieces collected and distributed to those in need." },
  { icon: Users, value: "500+", label: "Volunteers Engaged", desc: "Dedicated community members giving their time and effort." },
  { icon: DollarSign, value: "$1.2M", label: "In Donated Value", desc: "Total estimated value of furniture donated to families." },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 bg-section-dark text-section-dark-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Numbers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic">
            Our Impact in the Community
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/15 rounded-xl flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-section-dark-foreground/90 mb-2">{stat.label}</p>
              <p className="text-xs text-section-dark-foreground/50 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" className="rounded-md px-8">View Full Report</Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
