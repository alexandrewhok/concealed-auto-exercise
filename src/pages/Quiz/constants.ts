import type { Question } from "./models";

export const QUESTIONS: Question[] = [
  {
    id: "people",
    title: "Quantas pessoas costumam viajar contigo regularmente?",
    type: "single-choice",
    options: [
      { value: "1-2", label: "1-2 pessoas" },
      { value: "3-4", label: "3-4 pessoas" },
      { value: "4+", label: "4 ou mais" },
    ],
  },
  {
    id: "yearlyDistance",
    title: "Que distância percorres por ano?",
    type: "single-choice",
    options: [
      { value: "0-10000", label: "Até 10 000 km" },
      { value: "10000-20000", label: "10 000 – 20 000 km" },
      { value: "20000+", label: "Mais de 20 000 km" },
    ],
  },
  {
    id: "luggage",
    title: "Costumas transportar bagagem volumosa ou objectos grandes?",
    type: "single-choice",
    options: [
      { value: "rarely", label: "Raramente" },
      { value: "sometimes", label: "Às vezes" },
      { value: "often", label: "Frequentemente" },
    ],
  },
  {
    id: "priority",
    title: "Qual é a tua prioridade?",
    type: "single-choice",
    options: [
      { value: "economy", label: "Economia de consumo" },
      { value: "comfort", label: "Conforto" },
      { value: "balanced", label: "Equilíbrio" },
    ],
  },
  {
    id: "gearbox",
    title: "Preferes caixa manual ou automática?",
    type: "single-choice",
    options: [
      { value: "manual", label: "Manual" },
      { value: "automatic", label: "Automática" },
      { value: "either", label: "Indiferente" },
    ],
  },
  {
    id: "fuel",
    title: "Que tipo de combustível preferes?",
    type: "single-choice",
    options: [
      { value: "gasoline", label: "Gasolina" },
      { value: "diesel", label: "Diesel" },
      { value: "either", label: "Indiferente" },
    ],
  },
  {
    id: "budget",
    title: "Qual é o teu orçamento máximo antes de impostos?",
    type: "select",
    options: [
      { value: "10000", label: "0 – 10 000 EUR" },
      { value: "12000", label: "12 000 EUR" },
      { value: "14000", label: "14 000 EUR" },
      { value: "16000", label: "16 000 EUR" },
      { value: "18000", label: "18 000 EUR" },
      { value: "20000", label: "20 000 EUR" },
      { value: "25000", label: "25 000 EUR" },
      { value: "999999", label: "+ 30 000 EUR" },
    ],
  },
];
