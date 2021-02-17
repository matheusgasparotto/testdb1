import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  margin: 10px;
  color: #fff;
  font-size: 3rem;
  font-family: "roboto";
  width: 25vw;
  height: 10vh;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  outline: none;
  ${(props) => css`
    background-color: ${props.color};
    width: ${props.size};
    font-size: ${props.font};
  `}
  ${(props) =>
    !props.font &&
    css`
      :hover {
        transition: 0.4s;
        font-size: 3.2rem;
      }
    `}

    @media (max-width: 900px) {
    font-size: 1.7rem;
    :hover {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 600px) {
    width: 80vw;
    :hover {
      font-size: 1.7rem;
    }
  }
`;
