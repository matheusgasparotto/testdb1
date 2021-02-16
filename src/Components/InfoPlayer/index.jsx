import { Container } from "./style";

const InfoPlayer = ({ player, plays }) => {
  return (
    <Container>
      <div>
        <h1>Jogador: {player}</h1>
        <h1>Numero de jogadas: {plays}</h1>
      </div>
      <div>
        <p>
          como jogar: Clique nas cartas para revelar seu conteúdo, 2 por vez. Se
          as cartas forem iguais elas permaceram viradas para cima, caso
          contrario elas voltaram ao estado inicial. O jogo termina quando o
          jogador revelar os 10 pares de cartas. Quem revelar todos os pares com
          menos jogadas estará melhor posicionado no ranking.
        </p>
      </div>
    </Container>
  );
};

export default InfoPlayer;
