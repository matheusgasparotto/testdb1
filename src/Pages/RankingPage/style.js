import styled from "styled-components";
import background from "../../img/background.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;
