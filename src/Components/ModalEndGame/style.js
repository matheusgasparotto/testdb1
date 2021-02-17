import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #808080c7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const StyledModal = styled.div`
  width: 40%;
  height: 30%;
  border-radius: 10px;
  z-index: 2;
  background-color: #fff;
  display: flex;
  align-items: center;

  justify-content: center;
  flex-wrap: wrap;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
