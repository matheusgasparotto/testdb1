import styled from "styled-components";
import { TableContainer } from "@material-ui/core";

export const StyledTable = styled(TableContainer)`
  font-family: "roboto";
  width: 30% !important;
  min-height: 50vh;
  max-height: 80vh;
  background-color: #c93e129c;
  border-radius: 10px;
  margin: 30px;
  th {
    font-size: 1.2rem;
    background-color: black;
    color: #fff;
  }

  td {
    font-weight: 700;
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    width: 100% !important;
    margin: 0;
    max-height: none;
    th {
      font-size: 0.8rem;
    }

    td {
      font-size: 0.8rem;
    }
  }
`;
