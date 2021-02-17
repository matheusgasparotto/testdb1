import { Container, StyledModal } from "./style";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const ModalEndGame = ({ open, moves, setModalEndGame }) => {
  const history = useHistory();
  const goToRanking = () => {
    history.push("/ranking");
  };

  const handlePlayAgain = () => {
    setModalEndGame(false);
  };

  return (
    <Container>
      <StyledModal open={open}>
        <h1>Parabens, você terminou o desafio em {moves} jogadas</h1>
        <div>
          <Button
            onClick={handlePlayAgain}
            font="1.6rem"
            color="#c5ec58"
            size="40%"
          >
            Jogar novamente
          </Button>
          <Button
            onClick={goToRanking}
            font="1.6rem"
            color="#ed907d"
            size="40%"
          >
            Ver Ranking
          </Button>
        </div>
      </StyledModal>
    </Container>
  );
};

export default ModalEndGame;
