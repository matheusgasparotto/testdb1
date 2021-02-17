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
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    width: 60%;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: "roboto";
    margin: 10px;
  }

  @media (max-width: 900px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    div {
      width: 100%;
    }
    .buttons {
      width: 90%;
    }
  }
`;
