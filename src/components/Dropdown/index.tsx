import type { DropdownProps } from "./models";
import { Arrow, Select, Wrapper } from "./styles";

const Dropdown = ({ placeholder, options, value, onChange }: DropdownProps) => {
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
