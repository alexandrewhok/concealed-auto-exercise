export type ActionFooterProps = {
  cancelLabel?: string;
  confirmLabel: string;
  confirmDisabled?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};
