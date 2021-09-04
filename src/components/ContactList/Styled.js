import styled from "styled-components";
import {Link} from "react-router-dom";
import {PrimaryColor} from "../../GlobalStyled";

export const ContactListContainer = styled.div`
  padding: 1rem;
`

export const ContactListWrapper = styled.div`
  > div {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  padding-left: 0.5rem;
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
`
