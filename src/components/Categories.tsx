import { Armchair, Bed, UtensilsCrossed, Lamp, BookOpen, Baby } from "lucide-react";

const categories = [
  { icon: Armchair, name: "Living Room", desc: "Sofas, chairs, tables" },
  { icon: Bed, name: "Bedroom", desc: "Beds, dressers, nightstands" },
  { icon: UtensilsCrossed, name: "Dining", desc: "Tables, chairs, hutches" },
  { icon: Lamp, name: "Lighting", desc: "Lamps, fixtures, shades" },
  { icon: BookOpen, name: "Office", desc: "Desks, shelves, chairs" },
  { icon: Baby, name: "Kids", desc: "Cribs, toys, small furniture" },
];

const Categories = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Accept</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Furniture Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <cat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{cat.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 text-center">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
