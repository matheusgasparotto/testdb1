import { Container } from "./style";
import { useHistory } from "react-router-dom";

import Button from "../Button";

const InfoPlayer = ({ player, plays }) => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToRanking = () => {
    history.push("/ranking");
  };

  return (
    <Container>
      <div>
        <h1>Jogador: {player}</h1>
        <h1>Numero de jogadas: {plays}</h1>
        <div className="buttons">
          <Button onClick={goToHome} size="40%" font="2rem" color="#c5ec58">
            Voltar ao inicio
          </Button>
          <Button onClick={goToRanking} size="40%" font="2rem" color="#ed907d">
            Ranking
          </Button>
        </div>
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
