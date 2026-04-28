import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type VolunteerImagesContent = {
  heroImageUrl: string;
  image1Url: string;
  image2Url: string;
  image3Url: string;
  image4Url: string;
  image5Url: string;
};

export async function fetchVolunteerImagesContent(): Promise<VolunteerImagesContent> {
  const response = await fetch(`${API_BASE_URL}/volunteerimages`);
  if (!response.ok) {
    throw new Error("Failed to fetch volunteer images");
  }
  const payload = await response.json();
  return payload.data;
}

export function resolveVolunteerImageUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  if (url.startsWith("/uploads/")) return `${API_ORIGIN}${url}`;
  return url;
}
