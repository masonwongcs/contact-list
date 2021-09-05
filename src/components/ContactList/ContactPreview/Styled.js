import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MaterialCubicBezier,
  MiniWrapperWidth,
  PrimaryColor,
} from "../../../GlobalStyled";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 1rem;
  right: 1rem;
  > a {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

export const ContactPreviewWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContactPreviewContainer = styled.div`
  width: ${MiniWrapperWidth}px;
  height: auto;
  padding-top: 7rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  position: relative;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  z-index: 10;
  @media screen and (max-width: ${MiniWrapperWidth}px) {
    width: ${MiniWrapperWidth * 0.85}px;
  }

  .profile-picture {
    height: 10rem;
    position: absolute;
    top: -5rem;
    left: calc(50% - 5rem);
    border-radius: 50%;
    @media screen and (max-width: ${MiniWrapperWidth}px) {
      height: 8rem;
      top: -4rem;
      left: calc(50% - 4rem);
    }
  }

  .name {
    font-size: 1.5rem;
    margin: 0;
  }

  .email {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  .phone {
    color: ${PrimaryColor};
    font-size: 2rem;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: -3rem;
  right: 0;
  width: 40px;
  height: 40px;
  color: #ccc;
  background-color: transparent;
  border: 0;
  outline: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  > svg {
    transform: rotate(45deg);
  }
`

export const Button = styled(Link)`
  cursor: pointer;
  color: #666;
  background-color: #ddd;
  outline: none;
  border: 0;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 10;
  transition: all 200ms ${MaterialCubicBezier};

  @media screen and (max-width: ${MiniWrapperWidth}px) {
    width: 30px;
    height: 30px;
    font-size: 0.75rem;
  }

  &:hover {
    background-color: #ccc;
  }
`;
