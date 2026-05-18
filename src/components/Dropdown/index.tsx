import type { DropdownProps } from "./models";
import { Arrow, Select, Wrapper } from "./styles";

const Dropdown = (props: DropdownProps) => {
  const { placeholder, options, value, onChange } = props;

  return (
    <Wrapper>
      <Select value={value ?? ""} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
      <Arrow>▼</Arrow>
    </Wrapper>
  );
};

export default Dropdown;
