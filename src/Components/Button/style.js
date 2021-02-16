import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  color: #fff;
  font-size: 3rem;
  font-family: "roboto";
  width: 25vw;
  height: 10vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  outline: none;
  ${(props) => css`
    background-color: ${props.color};
    width: ${props.size};
  `}
  :hover {
    cursor: pointer;
    transition: 0.4s;
    font-size: 3.2rem;
  }
`;
