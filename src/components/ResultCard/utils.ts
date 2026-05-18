import { TAG_PHRASES } from "./constants";

export const formatEUR = (value: number) =>
  new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export function buildMatchSentence(matchedTags: string[]): string {
  const phrases = [...new Set(matchedTags)]
    .map((t) => TAG_PHRASES[t])
    .filter(Boolean);

  if (phrases.length === 0) return "Este carro corresponde aos teus critérios de pesquisa.";
  if (phrases.length === 1) return `Identificámos este carro pela sua ${phrases[0]}.`;

  const last = phrases[phrases.length - 1];
  const rest = phrases.slice(0, -1);
  return `Identificámos este carro pela sua ${rest.join(", ")} e ${last}.`;
}
