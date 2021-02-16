import { Table } from "./style";

const Ranking = ({ players }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Nome do jogador</th>
          <th>Movimentos</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, idx) => {
          const { position, name, moves } = player;
          return (
            <tr key={idx}>
              <td>{position}</td>
              <td>{name}</td>
              <td>{moves}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Ranking;
