import Dropdown from "../Dropdown";
import OptionTag from "../OptionTag";
import type { QuestionBlockProps } from "./models";
import { OptionsRow, Wrapper } from "./tyles";

const QuestionBlock = (props: QuestionBlockProps) => {
  const { question, selectedValue, onSelect } = props;

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
          placeholder={question.placeholder ?? ""}
          options={question.options}
          value={selectedValue}
          onChange={(value) => onSelect?.(value)}
        />
      )}
    </Wrapper>
  );
};

export default QuestionBlock;
