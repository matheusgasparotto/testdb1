import Card from "../Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./style";
import InfoPlayer from "../InfoPlayer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ModalEndGame from "../ModalEndGame";

const Board = () => {
  const [characters, setCharacters] = useState([]);
  const [moves, setMoves] = useState(0);
  const [modalEndGame, setModalEndGame] = useState(false);

  useEffect(async () => {
    if (!modalEndGame) {
      let res = await axios.get("https://rickandmortyapi.com/api/character");
      let list = res.data.results;
      list = list.filter((_character, idx) => idx >= 10);
      list = [...list, ...list].sort(() => Math.random() - 0.5);
      list = list.map((character, idx) => {
        return {
          match: false,
          name: character.name,
          image: character.image,
          flip: false,
          id: idx,
        };
      });
      setMoves(0);
      setCharacters(list);
    }
  }, [modalEndGame]);

  const history = useHistory();
  const { name } = useSelector((state) => state.player);

  useEffect(() => {
    !name && history.push("/");
  }, []);

  useEffect(() => {
    const totalCards = 20;
    const matchsCards = characters.filter(
      (character) => character.match === true
    );

    const endGame = matchsCards.length >= totalCards - 2;

    if (endGame) {
      const ranking = JSON.parse(window.localStorage.getItem("Ranking"));
      const isPlayedAgain = ranking.find((player) => player.name === name);

      const newRanking = isPlayedAgain
        ? ranking.map((player) => {
            return player.name === name
              ? { ...player, moves: moves }
              : { ...player };
          })
        : [...ranking, { name: name, moves: moves }];

      window.localStorage.setItem("Ranking", JSON.stringify(newRanking));
      setModalEndGame(true);
    }
  }, [moves]);

  return (
    <>
      {modalEndGame && (
        <ModalEndGame moves={moves} setModalEndGame={setModalEndGame} />
      )}
      <Container>
        {characters.map((character, idx) => (
          <Card
            key={idx}
            moves={moves}
            setMoves={setMoves}
            character={character}
            setCharacters={setCharacters}
            characters={characters}
          />
        ))}
        <InfoPlayer player={name} plays={moves} />
      </Container>
    </>
  );
};

export default Board;
