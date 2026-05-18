export type QuestionOption = {
  value: string;
  label: string;
};

export type Question = {
  id: string;
  title: string;
  options: QuestionOption[];
  type: "single-choice" | "select";
};

export type QuizAnswers = {
  people: "1-2" | "3-4" | "4+";
  yearlyDistance: "0-10000" | "10000-20000" | "20000+";
  luggage: "rarely" | "sometimes" | "often";
  priority: "economy" | "comfort" | "balanced";
  gearbox: "manual" | "automatic" | "either";
  fuel: "gasoline" | "diesel" | "either";
  budget: number;
  maxMileage: number;
};
