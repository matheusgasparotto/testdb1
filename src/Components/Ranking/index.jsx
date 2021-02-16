import { StyledTable } from "./style";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const Ranking = ({ players }) => {
  const titleOfRanking = ["Posição", "Nome do Jogador", "Movimentos"];
  return (
    <StyledTable>
      <Table>
        <TableHead>
          <TableRow>
            {titleOfRanking.map((title, idx) => (
              <TableCell align="center" key={idx}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, idx) => {
            const { position, name, moves } = player;
            return (
              <TableRow key={idx}>
                <TableCell align="center">{position}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{moves}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTable>
  );
};

export default Ranking;
