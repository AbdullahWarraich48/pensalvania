import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type FurnitureCategory = {
  id: number;
  slug: string;
  title: string;
  coverImageUrl: string;
};

export type FurnitureCategoryDetail = FurnitureCategory & {
  images: Array<{ id: number; imageUrl: string }>;
  maxImages: number;
};

export async function fetchFurnitureCategories(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/furniturecategories`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: FurnitureCategory[] }>;
}

export async function fetchFurnitureCategoryBySlug(slug: string, signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/furniturecategories/${slug}`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: FurnitureCategoryDetail }>;
}

export function resolveFurnitureImageUrl(imageUrl?: string) {
  if (!imageUrl) return undefined;
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) return imageUrl;
  if (imageUrl.startsWith("/")) return `${API_ORIGIN}${imageUrl}`;
  return imageUrl;
}
