export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  TEXT = "text",
}

export interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  intent: ButtonTypes;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
