import { useHistory } from "react-router-dom";

import Button from "../../Components/Button";
import HomeContainer from "../../Components/HomeContainer";

const Home = () => {
  const history = useHistory();

  const GoToGame = () => {
    history.push("/game");
  };

  return (
    <HomeContainer>
      <Button onClick={GoToGame} color="#c5ec58">
        Start Game
      </Button>
    </HomeContainer>
  );
};

export default Home;
