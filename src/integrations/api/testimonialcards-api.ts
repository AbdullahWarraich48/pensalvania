import { API_BASE_URL } from "@/config/env";

export type TestimonialcardsApiData = {
  card1Text?: string;
  card1Name?: string;
  card1Role?: string;
  card2Text?: string;
  card2Name?: string;
  card2Role?: string;
  card3Text?: string;
  card3Name?: string;
  card3Role?: string;
};

export async function fetchTestimonialcardsContent(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/testimonialcards`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: TestimonialcardsApiData }>;
}
