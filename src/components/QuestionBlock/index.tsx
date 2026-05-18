import type { Question } from "../../pages/Quiz/models";
import Dropdown from "../Dropdown";
import OptionTag from "../OptionTag";
import { OptionsRow, Wrapper } from "./tyles";

type Props = {
  question: Question;
  selectedValue?: string;
  onSelect?: (value: string) => void;
};

const QuestionBlock = ({ question, selectedValue, onSelect }: Props) => {
  return (
    <Wrapper>
      <h6>{question.title}</h6>

      {question.type === "single-choice" && (
        <OptionsRow>
          {question.options.map((opt) => (
            <OptionTag
              key={opt.value}
              label={opt.label}
              selected={selectedValue === opt.value}
              onClick={() => onSelect?.(opt.value)}
            />
          ))}
        </OptionsRow>
      )}

      {question.type === "select" && (
        <Dropdown
          placeholder="Preço até"
          options={question.options}
          value={selectedValue}
          onChange={(value) => onSelect?.(value)}
        />
      )}
    </Wrapper>
  );
};

export default QuestionBlock;
