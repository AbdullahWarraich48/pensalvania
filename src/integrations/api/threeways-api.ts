import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type ThreewaysApiData = {
  sectionTagline?: string;
  sectionHeading?: string;
  sectionDescription?: string;
  card1Title?: string;
  card1Subtitle?: string;
  card1Description?: string;
  card1ImageUrl?: string;
  card2Title?: string;
  card2Subtitle?: string;
  card2Description?: string;
  card2ImageUrl?: string;
  card3Title?: string;
  card3Subtitle?: string;
  card3Description?: string;
  card3ImageUrl?: string;
};

export async function fetchThreewaysContent(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/threeways`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: ThreewaysApiData }>;
}

export function resolveThreewaysImageUrl(imageUrl?: string) {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  if (imageUrl.startsWith("/")) return `${API_ORIGIN}${imageUrl}`;
  return imageUrl;
}
