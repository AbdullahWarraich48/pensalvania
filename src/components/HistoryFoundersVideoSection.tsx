import { useEffect, useState } from "react";
import {
  fetchHistoryFoundersVideo,
  resolveHistoryFoundersVideoUrl,
} from "@/integrations/api/historyfoundersvideo-api";

const FALLBACK = {
  title: "History & Founders Video",
  description: "Watch the journey of Pennsylvania Furniture Mission and our founders.",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
};

const HistoryFoundersVideoSection = () => {
  const [content, setContent] = useState(FALLBACK);

  useEffect(() => {
    const controller = new AbortController();
    const loadContent = async () => {
      try {
        const payload = await fetchHistoryFoundersVideo(controller.signal);
        if (payload?.data) {
          setContent({
            title: payload.data.title || FALLBACK.title,
            description: payload.data.description || FALLBACK.description,
            videoUrl: resolveHistoryFoundersVideoUrl(payload.data.videoUrl) || FALLBACK.videoUrl,
          });
        }
      } catch (_error) {
        // Keep fallback content when API is unavailable.
      }
    };
    loadContent();
    return () => controller.abort();
  }, []);

  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{content.title}</h2>
          <p className="text-muted-foreground mb-6">{content.description}</p>
          <div className="rounded-2xl overflow-hidden border border-primary/10 bg-black">
            <video controls className="w-full h-auto">
              <source src={content.videoUrl} />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryFoundersVideoSection;
