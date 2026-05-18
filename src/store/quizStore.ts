import { create } from "zustand";
import type { QuizAnswers } from "../pages/Quiz/models";

type QuizStore = {
  answers: Partial<QuizAnswers>;
  setAnswer: (id: keyof QuizAnswers, value: string | number) => void;
  reset: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  setAnswer: (id, value) =>
    set((state) => ({ answers: { ...state.answers, [id]: value } })),
  reset: () => set({ answers: {} }),
}));
