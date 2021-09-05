import styled from "styled-components";
import { Grey1, MaterialCubicBezier } from "../../../GlobalStyled";

export const ContactItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  padding: 1rem;
  background-color: #fff;
  transition: all 200ms ${MaterialCubicBezier};

  @media (hover: hover) {
    &:hover {
      transform: translateY(-0.25rem) scale(1.02);
      box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.05);
    }
  }

  .profile-picture {
    width: 3rem;
    border-radius: 50%;
    border: 1px solid #ececec;
    margin-right: 1rem;
  }

  .name-item {
    margin-right: 0.25rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${Grey1};
  }
`;
