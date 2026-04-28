import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  fetchFurnitureCategoryBySlug,
  resolveFurnitureImageUrl,
  type FurnitureCategoryDetail,
} from "@/integrations/api/furniturecategories-api";

const FurnitureCategoryDetails = () => {
  const { slug = "" } = useParams();
  const [details, setDetails] = useState<FurnitureCategoryDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const loadDetails = async () => {
      setLoading(true);
      try {
        const payload = await fetchFurnitureCategoryBySlug(slug, controller.signal);
        setDetails(payload?.data || null);
      } finally {
        setLoading(false);
      }
    };
    loadDetails();
    return () => controller.abort();
  }, [slug]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 md:pt-28 pb-12 md:pb-20 bg-warm-light">
        <div className="container mx-auto px-4 sm:px-6">
          <Link to="/" className="text-primary text-sm font-semibold hover:underline">
            ← Back to Home
          </Link>

          {loading ? (
            <p className="mt-6 text-sm sm:text-base">Loading category images...</p>
          ) : !details ? (
            <p className="mt-6 text-sm sm:text-base">Category not found.</p>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4 mb-2">
                {details.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 md:mb-8">
                Showing {details.images.length} image(s), max {details.maxImages}.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {details.images.map((img) => (
                  <div
                    key={img.id}
                    className="rounded-xl overflow-hidden border border-primary/10 bg-background"
                  >
                    <img
                      src={resolveFurnitureImageUrl(img.imageUrl)}
                      alt={details.title}
                      className="w-full h-56 sm:h-48 md:h-52 object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FurnitureCategoryDetails;
