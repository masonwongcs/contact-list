import styled from "styled-components";
import {
  Dark1,
  Grey1,
  Grey2,
  MaterialCubicBezier,
  PrimaryColor,
} from "../../GlobalStyled";

export const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  background-color: ${Grey1};
  color: ${Dark1};
  border: 0;
  outline: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  transition: all 200ms ${MaterialCubicBezier};
  &:hover {
    background-color: ${Grey2};
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
