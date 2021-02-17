import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  width: 9vw;
  height: 25vh;
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    width: 13.1vw;
    height: 20vh;
  }
  @media (max-width: 600px) {
    width: 17vw;
    height: 15vh;
  }
`;
