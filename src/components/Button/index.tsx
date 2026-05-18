import type { ButtonProps } from "./models";
import { StyledButton } from "./styles";

const Button = (props: ButtonProps) => {
  const { label, icon, intent, disabled, onClick, className } = props;

  return (
    <StyledButton
      $type={intent}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {label}
      {icon}
    </StyledButton>
  );
};

export default Button;
