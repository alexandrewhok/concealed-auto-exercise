import type { Car } from "./matching";

const CURRENT_YEAR = new Date().getFullYear();

const ANTIQUITY_DISCOUNTS: { maxAge: number; discount: number }[] = [
  { maxAge: 1, discount: 0.1 },
  { maxAge: 2, discount: 0.2 },
  { maxAge: 3, discount: 0.28 },
  { maxAge: 4, discount: 0.35 },
  { maxAge: 5, discount: 0.43 },
  { maxAge: 6, discount: 0.52 },
  { maxAge: 7, discount: 0.6 },
  { maxAge: Infinity, discount: 0.65 },
];

function calcISVCilindrada(cc: number): number {
  return cc <= 1250 ? cc * 1.09 - 808.6 : cc * 5.61 - 6194.88;
}

function calcISVCO2(co2: number, fuel: string): number {
  let base: number;

  if (co2 <= 99) base = co2 * 0.44 - 43.02;
  else if (co2 <= 115) base = co2 * 1.1 - 108.38;
  else if (co2 <= 145) base = co2 * 1.38 - 140.67;
  else if (co2 <= 175) base = co2 * 5.27 - 619.17;
  else if (co2 <= 195) base = co2 * 7.84 - 1097.93;
  else base = co2 * 11.42 - 1799.72;

  return fuel === "diesel" ? base + 500 : base;
}

function antiquityDiscount(year: number): number {
  const age = CURRENT_YEAR - year;
  const bracket = ANTIQUITY_DISCOUNTS.find((b) => age <= b.maxAge);
  return bracket?.discount ?? 0.65;
}

export function calcISV(car: Car): number {
  const cc = Math.max(0, calcISVCilindrada(car.cc));
  const co2 = Math.max(0, calcISVCO2(car.co2_wltp, car.fuel));
  const discount = antiquityDiscount(car.year);
  return Math.max(0, (cc + co2) * (1 - discount));
}

export function calcIUC(car: Car): number {
  let iucCC: number;
  if (car.cc <= 1250) iucCC = 31.42;
  else if (car.cc <= 1750) iucCC = 63.01;
  else if (car.cc <= 2500) iucCC = 157.55;
  else iucCC = 539.49;

  let iucCO2: number;
  if (car.co2_wltp <= 120) iucCO2 = 62.4;
  else if (car.co2_wltp <= 140) iucCO2 = 93.01;
  else if (car.co2_wltp <= 160) iucCO2 = 153.82;
  else if (car.co2_wltp <= 200) iucCO2 = 247.68;
  else iucCO2 = 423.06;

  return iucCC + iucCO2;
}

export const TRANSPORT = 1200;

export function calcLegalization(priceEur: number): number {
  return Math.max(800, priceEur * 0.08);
}

export type CostBreakdown = {
  price: number;
  isv: number;
  transport: number;
  legalization: number;
  total: number;
  iucAnnual: number;
};

export function calcBreakdown(car: Car): CostBreakdown {
  const isv = calcISV(car);
  const transport = TRANSPORT;
  const legalization = calcLegalization(car.price_eur);
  const total = car.price_eur + isv + transport + legalization;
  const iucAnnual = calcIUC(car);

  return {
    price: car.price_eur,
    isv,
    transport,
    legalization,
    total,
    iucAnnual,
  };
}
