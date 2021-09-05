import * as ReactDOM from "react-dom";
import { AlertWrapper, AlertBox, AlertText, ButtonWrapper, IconWrapper } from "./Styled";
import { Button, PrimaryButton } from "../Styled";
import { ReactComponent as AlertIcon } from "../../../img/exclamation.svg";

function AlertContainer({ children }) {
  const domElement = document.getElementById("portal");
  return ReactDOM.createPortal(children, domElement);
}

function Alert({ text, onAccept, onCancel }) {
  return (
    <AlertContainer>
      <AlertWrapper onClick={onCancel}>
        <AlertBox>
          <IconWrapper>
            <AlertIcon />
          </IconWrapper>
          <AlertText>{text}</AlertText>
          <ButtonWrapper>
            <Button onClick={onCancel}>Cancel</Button>
            <PrimaryButton onClick={onAccept}>Ok</PrimaryButton>
          </ButtonWrapper>
        </AlertBox>
      </AlertWrapper>
    </AlertContainer>
  );
}

export default Alert;
