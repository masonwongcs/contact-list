import * as ReactDOM from "react-dom";

function AlertContainer({ children }) {
  const domElement = document.getElementById("portal");
  return ReactDOM.createPortal(children, domElement);
}

function Alert({ text }) {
  return <AlertContainer>{text}</AlertContainer>;
}

export default Alert;
