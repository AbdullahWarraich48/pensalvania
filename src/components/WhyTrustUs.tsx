import { Target, Users, MessageCircle, Heart } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Direct Impact",
    desc: "Every donation goes directly to families in need. We ensure 90% of contributions fund furniture distribution.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "With over 500 active volunteers, our community powers everything we do — from pickups to deliveries.",
  },
  {
    icon: MessageCircle,
    title: "Full Support",
    desc: "We provide end-to-end support. From scheduling pickups to delivery and setup, we handle everything.",
  },
  {
    icon: Heart,
    title: "Life-Changing Work",
    desc: "Our work transforms empty houses into homes — giving families comfort, dignity, and stability.",
  },
];

const WhyTrustUs = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Support Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground italic">
            Why People Trust Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-foreground/15 rounded-xl flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-bold text-primary-foreground mb-2">{reason.title}</h3>
              <p className="text-xs text-primary-foreground/70 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
