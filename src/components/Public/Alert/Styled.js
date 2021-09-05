import styled, { keyframes } from "styled-components";
import {MaterialCubicBezier, MiniWrapperWidth, SecondaryColor} from "../../../GlobalStyled";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AlertWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  animation: ${fadeIn} 200ms ${MaterialCubicBezier} forwards;
  z-index: 30;
`;

export const AlertBox = styled.div`
  width: ${MiniWrapperWidth * 0.8}px;
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  opacity: 0;
  animation: ${popIn} 300ms 100ms ${MaterialCubicBezier} forwards;
`;

export const AlertText = styled.h3`
  color: #666;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > button {
    flex: 1 1 50%;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: 3.25rem;
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: -2rem;
  border-radius: 50%;
  color: #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${popIn} 300ms 200ms ${MaterialCubicBezier} forwards;
`;
