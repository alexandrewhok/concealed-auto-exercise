import type { Question } from "../../pages/Quiz/models";

export type QuestionBlockProps = {
  question: Question;
  selectedValue?: string;
  onSelect?: (value: string) => void;
};
