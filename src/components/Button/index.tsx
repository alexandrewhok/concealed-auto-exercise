import type { ButtonProps } from "./models";
import { StyledButton } from "./styles";

const Button = (props: ButtonProps) => {
  const { label, icon, intent, disabled, onClick } = props;
  return (
    <StyledButton $type={intent} disabled={disabled} onClick={onClick}>
      {label}
      {icon}
    </StyledButton>
  );
};

export default Button;
