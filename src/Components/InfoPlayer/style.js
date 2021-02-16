import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c93e129c;
  color: #fff;

  div {
    height: 100%;
    width: 50%;
    font-size: 2rem;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: "roboto";
  }
`;
