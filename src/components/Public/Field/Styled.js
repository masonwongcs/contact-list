import styled from "styled-components";
import {
  Dark1,
  MaterialCubicBezier,
  PrimaryColor,
} from "../../../GlobalStyled";

const ERROR_COLOR = "#9a0000";

export const FieldWrapper = styled.div`
  min-height: 3.25rem;
  position: relative;
  border-radius: 0.25rem;
  border: 0.2rem solid #ececec;
  transition: all 200ms ${MaterialCubicBezier};
  margin-bottom: 2rem;
  &:focus-within {
    border-color: ${PrimaryColor};
  }
  &.error {
    border: 0.2rem solid ${ERROR_COLOR} !important;
  }
`;

export const FieldLabel = styled.label`
  position: absolute;
  height: 1rem;
  left: 0.25rem;
  top: -0.75rem;
  padding: 0 0.5rem;
  background-color: #fff;
  color: ${Dark1};
  font-weight: bold;
`;

export const FieldInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  padding: 0 0.75rem;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
`;

export const ErrorMessage = styled.div`
  color: ${ERROR_COLOR};
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  bottom: -1.25rem;
  left: 0.5rem;
`;
