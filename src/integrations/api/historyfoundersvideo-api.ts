import { API_BASE_URL, API_ORIGIN } from "@/config/env";

export type HistoryFoundersVideoData = {
  title?: string;
  description?: string;
  videoUrl?: string;
};

export async function fetchHistoryFoundersVideo(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/historyfoundersvideo`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: HistoryFoundersVideoData }>;
}

export function resolveHistoryFoundersVideoUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${API_ORIGIN}${url}`;
  return url;
}
