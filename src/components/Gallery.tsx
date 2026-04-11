import { Button } from "@/components/ui/button";
import { Users, Truck, HandHeart, CalendarDays } from "lucide-react";

const services = [
  { icon: Truck, title: "Free Pickup & Delivery", desc: "We handle everything — from picking up donated furniture to delivering it directly to families in need." },
  { icon: HandHeart, title: "Furniture Restoration", desc: "Our volunteers clean, repair, and restore donated items to ensure families receive quality pieces." },
  { icon: CalendarDays, title: "Community Events", desc: "Monthly drives, workshops, and neighborhood clean-ups that bring people together for a common cause." },
  { icon: Users, title: "Volunteer Programs", desc: "Flexible opportunities for individuals, groups, and corporate teams to make a hands-on impact." },
];

const Gallery = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Community
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            Community Services & Initiatives
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From volunteer days to delivery moments — our community comes together to make real change happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <img
            src="/images/community-volunteers.jpg"
            alt="Volunteers loading furniture onto a delivery truck"
            loading="lazy"
            className="w-full h-72 object-cover rounded-xl shadow-md"
          />
          <img
            src="/images/community-delivery.jpg"
            alt="Volunteers delivering furniture to a family"
            loading="lazy"
            className="w-full h-72 object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((s, i) => (
            <div key={i} className="bg-warm-light rounded-xl p-6 border border-primary/10 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/images/gallery-1.jpg", alt: "Volunteers moving furniture" },
            { src: "/images/gallery-2.jpg", alt: "Community assembling furniture" },
            { src: "/images/gallery-3.jpg", alt: "Furnished living room" },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-[4/3] shadow-md">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" className="rounded-md px-8">Join as a Volunteer</Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
