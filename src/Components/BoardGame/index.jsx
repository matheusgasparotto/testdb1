import Card from "../Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./style";
import InfoPlayer from "../InfoPlayer";

const Board = () => {
  const [characters, setCharacters] = useState([]);
  const [plays, setPlays] = useState(0);

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

  return (
    <Container>
      {characters.map((character, idx) => (
        <Card
          key={idx}
          plays={plays}
          setPlays={setPlays}
          character={character}
          setCharacters={setCharacters}
          characters={characters}
        />
      ))}
      <InfoPlayer />
    </Container>
  );
};

export default Board;
