import styled from "styled-components";
import { MaterialCubicBezier, PrimaryColor } from "../../GlobalStyled";

export const AddEditContactWrapper = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 400px;
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 1.75rem;
  margin-bottom: 3rem;
  padding-left: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  > button {
    flex: 1 1 50%;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

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
