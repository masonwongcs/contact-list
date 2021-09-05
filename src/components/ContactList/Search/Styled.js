import styled from "styled-components";
import {
  Dark1,
  Grey1,
  Grey2,
  MaterialCubicBezier,
  PrimaryColor,
  WrapperWidth,
} from "../../../GlobalStyled";

const SEARCH_WIDTH = 2.75;

export const SearchWrapper = styled.div`
  height: ${SEARCH_WIDTH}rem;
  width: ${SEARCH_WIDTH}rem;
  border-radius: 2rem;
  border: 0.2rem solid ${Grey2};
  margin-left: auto;
  transition: all 200ms ${MaterialCubicBezier};
  position: relative;
  background-color: ${Grey2};

  &:focus-within {
    background-color: #fff;
    border-color: ${PrimaryColor};
    width: 33%;
    @media screen and (max-width: ${WrapperWidth * 1.1}px) {
      width: 50%;
    }
    input {
      opacity: 1;
    }
    svg {
      color: ${Grey1};
    }
  }

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    background-color: transparent;
    padding: 0 1rem;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
  }
  svg {
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: ${(SEARCH_WIDTH - 0.5) / 2}rem;
    transform: translateX(50%) translateY(-50%);
    font-size: 1rem;
    color: ${Dark1};
  }
`;
