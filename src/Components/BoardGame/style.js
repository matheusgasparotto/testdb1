import styled from "styled-components";
import background from "../../img/backgroundGame.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    background-image: none;
  }
`;
