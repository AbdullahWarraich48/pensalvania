import { API_BASE_URL } from "@/config/env";

export type ImpactcardsApiData = {
  card1Value?: string;
  card1Label?: string;
  card1Description?: string;
  card2Value?: string;
  card2Label?: string;
  card2Description?: string;
  card3Value?: string;
  card3Label?: string;
  card3Description?: string;
  card4Value?: string;
  card4Label?: string;
  card4Description?: string;
  card5Value?: string;
  card5Label?: string;
  card5Description?: string;
  card6Value?: string;
  card6Label?: string;
  card6Description?: string;
};

export async function fetchImpactcardsContent(signal?: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/impactcards`, { signal });
  if (!response.ok) return null;
  return response.json() as Promise<{ ok: boolean; data?: ImpactcardsApiData }>;
}
