import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type BusinessPartner = {
  id?: number;
  name?: string;
  logoUrl: string;
  websiteUrl?: string;
  sortOrder?: number;
};

export async function fetchBusinessPartners(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/businesspartners`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: BusinessPartner[] }>;
}

export function resolveBusinessPartnerLogoUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${API_ORIGIN}${url}`;
  return url;
}
