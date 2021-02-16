import styled from "styled-components";
import background from "../../img/backgroundGame.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;
