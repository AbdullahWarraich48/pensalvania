import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type HeroApiResponse = {
  ok: boolean;
  data?: {
    heading?: string;
    description?: string;
    imageUrl?: string;
  };
};

export const HERO_API_ENDPOINT = `${API_BASE_URL}/hero`;

export async function fetchHeroContent(signal?: AbortSignal): Promise<HeroApiResponse | null> {
  const response = await fetch(HERO_API_ENDPOINT, { signal });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export function resolveHeroImageUrl(imageUrl?: string): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  if (imageUrl.startsWith("/")) {
    return `${API_ORIGIN}${imageUrl}`;
  }
  return imageUrl;
}
