import type { QuizAnswers } from "../pages/Quiz/models";
import carsData from "../data/cars.json";

export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  fuel: string;
  transmission: string;
  cc: number;
  co2_wltp: number;
  price_eur: number;
  mileage_km: number;
  marketplace_url: string;
  photo_url: string;
  tags: string[];
};

export type MatchResult = {
  car: Car;
  score: number;
  matchedTags: string[];
  contradictedTags: string[];
};

const ANSWER_TAG_MAP: Partial<Record<string, string[]>> = {
  "people:1-2": ["compact", "solo-couple"],
  "people:3-4": ["mid-size"],
  "people:4+": ["family", "large"],

  "yearlyDistance:0-10000": ["urban"],
  "yearlyDistance:10000-20000": ["mixed"],
  "yearlyDistance:20000+": ["long-distance"],

  "luggage:rarely": ["solo-couple", "compact"],
  "luggage:sometimes": ["mid-size", "large"],
  "luggage:often": ["cargo", "large"],

  "priority:economy": ["economy"],
  "priority:comfort": ["comfort", "premium"],
  "priority:balanced": ["mixed"],
};

const CONTRADICTION_TAG_MAP: Partial<Record<string, string[]>> = {
  "people:1-2": ["family", "large"],
  "people:3-4": ["solo-couple"],
  "people:4+": ["compact", "solo-couple"],

  "yearlyDistance:0-10000": ["long-distance"],
  "yearlyDistance:10000-20000": [],
  "yearlyDistance:20000+": ["urban"],

  "luggage:rarely": ["cargo"],
  "luggage:sometimes": [],
  "luggage:often": [],

  "priority:economy": ["premium"],
  "priority:comfort": ["economy"],
  "priority:balanced": [],
};

export function matchCars(answers: Partial<QuizAnswers>): MatchResult[] {
  const desiredTags: string[] = [];
  const contradictTags: string[] = [];

  for (const [questionId, value] of Object.entries(answers)) {
    if (questionId === "budget" || questionId === "gearbox" || questionId === "fuel") continue;
    const key = `${questionId}:${value}`;
    const desired = ANSWER_TAG_MAP[key];
    const contradict = CONTRADICTION_TAG_MAP[key];
    if (desired) desiredTags.push(...desired);
    if (contradict) contradictTags.push(...contradict);
  }

  let pool = carsData as Car[];

  if (answers.budget && answers.budget > 0) {
    pool = pool.filter((c) => c.price_eur <= answers.budget!);
  }

  if (answers.maxMileage && answers.maxMileage > 0) {
    pool = pool.filter((c) => c.mileage_km <= answers.maxMileage!);
  }

  if (answers.gearbox === "manual") {
    pool = pool.filter((c) => c.tags.includes("manual"));
  } else if (answers.gearbox === "automatic") {
    pool = pool.filter((c) => c.tags.includes("automatic"));
  }

  if (answers.fuel === "gasoline") {
    pool = pool.filter((c) => c.fuel === "gasoline");
  } else if (answers.fuel === "diesel") {
    pool = pool.filter((c) => c.fuel === "diesel");
  }

  const scored = pool.map((car) => {
    const matchedTags = desiredTags.filter((t) => car.tags.includes(t));
    const contradictedTags = contradictTags.filter((t) => car.tags.includes(t));
    const score = matchedTags.length - contradictedTags.length;
    return { car, score, matchedTags, contradictedTags };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
