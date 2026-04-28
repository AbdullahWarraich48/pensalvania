import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type RealstoriesApiData = {
  card1Family?: string;
  card1Text?: string;
  card1ImageUrl?: string;
  card2Family?: string;
  card2Text?: string;
  card2ImageUrl?: string;
  card3Family?: string;
  card3Text?: string;
  card3ImageUrl?: string;
};

export async function fetchRealstoriesContent(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/realstories`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: RealstoriesApiData }>;
}

export function resolveRealstoriesImageUrl(imageUrl?: string) {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  if (imageUrl.startsWith("/")) return `${API_ORIGIN}${imageUrl}`;
  return imageUrl;
}
