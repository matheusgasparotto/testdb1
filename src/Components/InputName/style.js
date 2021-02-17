import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 20vw;
  height: 35px;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
  outline: none;
  font-family: "roboto";
  padding: 10px;
  font-size: 1.6rem;
  border: 1px;
  ${(props) =>
    props.border &&
    css`
      border: 1px solid red;
    `};
`;
