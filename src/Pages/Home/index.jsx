import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleAddPlayer } from "../../store/modules/InfoPlayer/action";

import Button from "../../Components/Button";
import HomeContainer from "../../Components/HomeContainer";
import InputName from "../../Components/InputName";

const Home = () => {
  const [playerName, setPlayerName] = useState({ name: "" });

  const isAlreadyRegistered = (arr, name) => {
    return arr.find((character) => character.name === name);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const GoToGame = () => {
    const Ranking = JSON.parse(window.localStorage.getItem("Ranking"));
    console.log(Ranking[0].name === playerName.name);
    console.log(isAlreadyRegistered(Ranking, playerName.name));
    if (!isAlreadyRegistered(Ranking, playerName.name)) {
      !Ranking && window.localStorage.setItem("Ranking", "[]");
      dispatch(handleAddPlayer({ name: playerName.name }));
      history.push("/game");
    } else {
      console.log("nome ja cadastrado");
    }
  };

  const GoToRanking = () => {
    history.push("/ranking");
  };

  return (
    <HomeContainer>
      <InputName
        placeholder="Digite Seu Nome"
        playerName={playerName.name}
        setPlayerName={setPlayerName}
      />
      <Button onClick={playerName.name !== "" && GoToGame} color="#c5ec58">
        Start Game
      </Button>
      <Button onClick={GoToRanking} color="#ed907d">
        Ranking
      </Button>
    </HomeContainer>
  );
};

export default Home;
