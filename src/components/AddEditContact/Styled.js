import styled from "styled-components";
import {
  MaterialCubicBezier,
  MiniWrapperWidth,
  PrimaryColor, WrapperWidth,
} from "../../GlobalStyled";

export const AddEditContactWrapper = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: auto;
  width: ${MiniWrapperWidth}px;
  border-radius: 0.5rem;
  @media screen and (max-width: ${MiniWrapperWidth}px) {
    width: ${MiniWrapperWidth * 0.8}px;
  }
`;

export const Title = styled.h1`
  color: #999;
  font-size: 1.75rem;
  margin-bottom: 3rem;
  padding-left: 0.5rem;
  @media screen and (max-width: ${WrapperWidth * 1.1}px) {
    font-size: 1.25rem;
  }
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
