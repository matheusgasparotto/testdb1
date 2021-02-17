import { useState, useEffect } from "react";
import Ranking from "../../Components/Ranking";
import { Container } from "./style";
import Button from "../../Components/Button";
import { useHistory } from "react-router-dom";

const RankingPage = () => {
  const [players, setPlayers] = useState([]);
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const ranking = JSON.parse(window.localStorage.getItem("Ranking"));
    if (ranking) {
      ranking.sort((player1, player2) => player1.moves - player2.moves);
      const rankingWithPositions = ranking.map((player, idx) => {
        return { ...player, position: idx + 1 };
      });
      setPlayers(rankingWithPositions);
    }
  }, []);
  return (
    <Container>
      <Ranking players={players} />
      <div>
        <Button onClick={goToHome} color="#c5ec58">
          Voltar ao inicio
        </Button>
      </div>
    </Container>
  );
};

export default RankingPage;
