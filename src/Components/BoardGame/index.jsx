import Card from "../Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./style";

const Board = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    let list = res.data.results.sort(() => Math.random() - 0.5);
    list = list.filter((_character, idx) => idx >= 10);
    list = [...list, ...list];
    setCharacters(list);
  }, []);

  return (
    <Container>
      {characters.map((character, idx) => (
        <Card key={idx} character={character} />
      ))}
    </Container>
  );
};

export default Board;
