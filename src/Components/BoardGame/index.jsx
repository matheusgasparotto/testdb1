import Card from "../Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./style";
import InfoPlayer from "../InfoPlayer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Board = () => {
  const [characters, setCharacters] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matchs, setMatchs] = useState([]);

  useEffect(async () => {
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
    setCharacters(list);
  }, []);

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
    setMatchs(matchsCards);
    const endGame = matchs.length >= totalCards;

    if (endGame) {
      const ranking = JSON.parse(window.localStorage.getItem("Ranking"));
      const newRanking = JSON.stringify([
        ...ranking,
        { name: name, moves: moves },
      ]);
      window.localStorage.setItem("Ranking", newRanking);
    }
  }, [moves]);

  return (
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
  );
};

export default Board;
