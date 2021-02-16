import { useState, useEffect } from "react";
import Ranking from "../../Components/Ranking";
import { Container } from "./style";

const RankingPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const ranking = JSON.parse(window.localStorage.getItem("Ranking"));
    if (ranking) {
      ranking.sort((player1, player2) => player1.moves - player2.moves);
      const rankingWithPositions = ranking.map((player, idx) => {
        return { ...player, position: idx };
      });
      setPlayers(rankingWithPositions);
    }
  }, []);
  return (
    <Container>
      <Ranking players={players} />;
    </Container>
  );
};

export default RankingPage;
