export type DropdownOption = {
  value: string;
  label: string;
};

export type DropdownProps = {
  placeholder: string;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
};
