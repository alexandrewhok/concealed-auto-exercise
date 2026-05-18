import type { Question } from "./models";

export const QUESTIONS: Question[] = [
  {
    id: "budget",
    title: "Qual é o teu orçamento máximo antes de impostos?",
    type: "select",
    placeholder: "Preço até",
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
  {
    id: "maxMileage",
    title: "Número máximo de quilómetros",
    type: "select",
    placeholder: "Quilómetros até",
    options: [
      { value: "10000", label: "Até 10 000 km" },
      { value: "20000", label: "Até 20 000 km" },
      { value: "30000", label: "Até 30 000 km" },
      { value: "40000", label: "Até 40 000 km" },
      { value: "50000", label: "Até 50 000 km" },
      { value: "60000", label: "Até 60 000 km" },
      { value: "70000", label: "Até 70 000 km" },
      { value: "80000", label: "Até 80 000 km" },
      { value: "90000", label: "Até 90 000 km" },
      { value: "100000", label: "Até 100 000 km" },
      { value: "999999", label: "100 000+ km" },
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
];
