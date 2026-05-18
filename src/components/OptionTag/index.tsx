import type { OptionTagProps } from "./models";
import { Radio, Wrapper } from "./styles";

const OptionTag = (props: OptionTagProps) => {
  const { label, selected, onClick } = props;

  return (
    <Wrapper $selected={!!selected} onClick={onClick}>
      <Radio $selected={!!selected} />
      <p>{label}</p>
    </Wrapper>
  );
};

export default OptionTag;
