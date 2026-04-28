import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchFurnitureCategories,
  resolveFurnitureImageUrl,
  type FurnitureCategory,
} from "@/integrations/api/furniturecategories-api";

const FALLBACK_CATEGORIES = [
  { image: "/images/cat-sofa.jpg", name: "Sofas & Couches" },
  { image: "/images/cat-bed.jpg", name: "Beds & Mattresses" },
  { image: "/images/cat-table.jpg", name: "Dining Tables" },
  { image: "/images/cat-chair.jpg", name: "Chairs & Recliners" },
  { image: "/images/cat-dresser.jpg", name: "Dressers & Storage" },
  { image: "/images/cat-kitchen.jpg", name: "Kitchen Items" },
];

const FurnitureCategories = () => {
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);

  useEffect(() => {
    const controller = new AbortController();

    const applyData = (items: FurnitureCategory[]) => {
      setCategories(
        items.map((item) => ({
          image: resolveFurnitureImageUrl(item.coverImageUrl) || FALLBACK_CATEGORIES[0].image,
          name: item.title,
          slug: item.slug,
        }))
      );
    };

    const loadCategories = async () => {
      try {
        const payload = await fetchFurnitureCategories(controller.signal);
        if (payload?.data?.length) {
          applyData(payload.data);
        }
      } catch (_error) {
        // Keep fallback content when API is unavailable.
      }
    };

    loadCategories();
    return () => controller.abort();
  }, []);

  return (
    <section className="py-20 bg-warm-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Accept
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            Furniture Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We accept gently used furniture in good condition. Here are the categories we collect and distribute.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <Link
              to={`/furniture-categories/${cat.slug || `category-${i + 1}`}`}
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md aspect-square cursor-pointer block"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-background font-bold text-sm md:text-base">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureCategories;
