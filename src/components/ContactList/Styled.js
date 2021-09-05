import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Dark3,
  PrimaryColor,
  SecondaryColor,
  WrapperWidth,
} from "../../GlobalStyled";

export const ContactListContainer = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const ContactListWrapper = styled.div`
  > div {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const Title = styled.h1`
  color: ${Dark3};
  font-size: 1.25rem;
  padding-left: 0.5rem;

  @media screen and (max-width: ${WrapperWidth * 1.1}px) {
    font-size: 1.25rem;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2.5rem;
  position: sticky;
  top: 0;
  padding: 0.5rem 0;
  background-color: #fff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.05);
  border-top: 0.25rem solid ${SecondaryColor};
  @media screen and (max-width: ${WrapperWidth * 1.1}px) {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }
  > div {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${WrapperWidth * 1.1}px) {
      flex-flow: row wrap;
    }
  }
`;

export const AddBtn = styled(Link)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  background-color: ${PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
`;

export const EmptyPlaceHolder = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
