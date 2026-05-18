import Button from "../Button";
import { ButtonTypes } from "../Button/models";
import type { ActionFooterProps } from "./models";
import { Footer } from "./styles";

const ActionFooter = (props: ActionFooterProps) => {
  const { cancelLabel = "Cancelar", confirmLabel, onCancel, onConfirm } = props;

  return (
    <Footer>
      <Button
        label={cancelLabel}
        intent={ButtonTypes.DANGER}
        onClick={onCancel}
      />
      <Button
        label={confirmLabel}
        intent={ButtonTypes.PRIMARY}
        onClick={onConfirm}
      />
    </Footer>
  );
};

export default ActionFooter;
