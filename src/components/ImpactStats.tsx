import { Home, Package, Users, DollarSign, TrendingUp, MapPin } from "lucide-react";

const stats = [
  { icon: Home, value: "2,500+", label: "Families Helped", desc: "Providing essential furniture to families transitioning out of shelters." },
  { icon: Package, value: "8,000+", label: "Items Donated", desc: "Quality furniture pieces collected and distributed to those in need." },
  { icon: Users, value: "500+", label: "Volunteers Engaged", desc: "Dedicated community members giving their time and effort." },
  { icon: DollarSign, value: "$1.2M", label: "In Donated Value", desc: "Total estimated value of furniture donated to families." },
  { icon: TrendingUp, value: "95%", label: "Satisfaction Rate", desc: "Families who report improved quality of life after receiving furniture." },
  { icon: MapPin, value: "50+", label: "Communities Served", desc: "Neighborhoods across Pennsylvania receiving our support." },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Numbers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            Our Impact in the Community
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every number represents a real family, a real volunteer, and a real transformation in someone's life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-warm-light border border-primary/10 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground mb-2">{stat.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground italic mb-4">
            Together We've Made a Difference
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Since 2010, our community has transformed thousands of empty houses into warm, welcoming homes.
          </p>
          <a href="#" className="inline-block bg-background text-primary font-semibold px-8 py-3 rounded-md hover:bg-background/90 transition-colors">
            View Full Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
