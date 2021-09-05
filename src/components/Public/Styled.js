import styled from "styled-components";
import { MaterialCubicBezier, PrimaryColor } from "../../GlobalStyled";

export const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  background-color: #ccc;
  color: #333;
  border: 0;
  outline: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  transition: all 200ms ${MaterialCubicBezier};
  &:hover {
    background-color: #ddd;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${PrimaryColor};
  color: #fff;
  &:hover {
    background-color: ${PrimaryColor};
    filter: brightness(1.5);
  }
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
