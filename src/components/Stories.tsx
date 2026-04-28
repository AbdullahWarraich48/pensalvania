import { useEffect, useState } from "react";
import {
  fetchRealstoriesContent,
  resolveRealstoriesImageUrl,
  type RealstoriesApiData,
} from "@/integrations/api/realstories-api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FALLBACK_STORIES = [
  {
    image: "/images/story-1.jpg",
    family: "The Johnson Family",
    text: "After losing everything in a fire, PA Furniture Mission helped us furnish our new apartment with beautiful, quality furniture. We finally feel at home again.",
  },
  {
    image: "/images/story-2.jpg",
    family: "Maria's Fresh Start",
    text: "Starting over after a difficult situation was overwhelming. The donated dining table became the heart of our home — where we share meals and make new memories.",
  },
  {
    image: "/images/story-3.jpg",
    family: "The Williams Family",
    text: "The volunteers didn't just deliver furniture — they delivered hope. Our grandchildren now have a cozy space to play and our home feels complete again.",
  },
];

const Stories = () => {
  const [stories, setStories] = useState(FALLBACK_STORIES);

  useEffect(() => {
    const controller = new AbortController();

    const applyData = (data: RealstoriesApiData) => {
      setStories([
        {
          image: resolveRealstoriesImageUrl(data.card1ImageUrl) || FALLBACK_STORIES[0].image,
          family: data.card1Family || FALLBACK_STORIES[0].family,
          text: data.card1Text || FALLBACK_STORIES[0].text,
        },
        {
          image: resolveRealstoriesImageUrl(data.card2ImageUrl) || FALLBACK_STORIES[1].image,
          family: data.card2Family || FALLBACK_STORIES[1].family,
          text: data.card2Text || FALLBACK_STORIES[1].text,
        },
        {
          image: resolveRealstoriesImageUrl(data.card3ImageUrl) || FALLBACK_STORIES[2].image,
          family: data.card3Family || FALLBACK_STORIES[2].family,
          text: data.card3Text || FALLBACK_STORIES[2].text,
        },
      ]);
    };

    const loadRealstories = async () => {
      try {
        const payload = await fetchRealstoriesContent(controller.signal);
        if (payload?.data) applyData(payload.data);
      } catch (_error) {
        // Keep fallback content when API is unavailable.
      }
    };

    loadRealstories();
    return () => controller.abort();
  }, []);

  const getExcerpt = (text: string) =>
    text.length > 110 ? `${text.slice(0, 110).trim()}...` : text;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Featured Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
            Real Stories. Real Change.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every piece of furniture carries a story — of generosity, new beginnings, and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <div key={i} className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary/10 group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.family}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{story.family}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{getExcerpt(story.text)}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="text-primary text-sm font-semibold hover:underline">
                      Read More →
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-2xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle>{story.family}</DialogTitle>
                      <DialogDescription>Full story</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img
                        src={story.image}
                        alt={story.family}
                        className="w-full h-48 sm:h-64 object-cover rounded-md"
                      />
                      <p className="text-sm text-foreground leading-relaxed break-words">
                        {story.text}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
