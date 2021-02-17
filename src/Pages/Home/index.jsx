import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAddPlayer } from "../../store/modules/InfoPlayer/action";

import Button from "../../Components/Button";
import HomeContainer from "../../Components/HomeContainer";
import InputName from "../../Components/InputName";
import ErrorMessage from "../../Components/ErrorMessage";

const Home = () => {
  const [playerName, setPlayerName] = useState({ name: "" });
  const [error, setError] = useState("");

  const isAlreadyRegistered = (arr, name) => {
    return arr ? arr.find((character) => character.name === name) : false;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const GoToGame = () => {
    if (playerName.name !== "") {
      const Ranking = JSON.parse(window.localStorage.getItem("Ranking"));
      !Ranking && window.localStorage.setItem("Ranking", "[]");
      if (!isAlreadyRegistered(Ranking, playerName.name)) {
        dispatch(handleAddPlayer({ name: playerName.name }));
        history.push("/game");
      } else {
        setError("Já existe um jogador com este nome");
      }
    } else {
      setError("Campo obrigatório");
    }
  };

  const GoToRanking = () => {
    history.push("/ranking");
  };

  return (
    <HomeContainer>
      <ErrorMessage error={error} />
      <InputName
        placeholder="Digite Seu Nome"
        playerName={playerName.name}
        setPlayerName={setPlayerName}
        setError={setError}
        border={error ? true : false}
      />
      <Button onClick={GoToGame} color="#c5ec58">
        Start Game
      </Button>
      <Button onClick={GoToRanking} color="#ed907d">
        Ranking
      </Button>
    </HomeContainer>
  );
};

export default Home;
