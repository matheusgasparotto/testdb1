import { StyledCard } from "./style";
import ReactCardFlip from "react-card-flip";
import backcard from "../../img/backcard.jpg";
import { useState } from "react";

const Card = ({ character }) => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <StyledCard onClick={() => setFlip(true)}>
        <img src={backcard} name={character.name} />
      </StyledCard>
      <StyledCard>
        <img src={character.image} />
      </StyledCard>
    </ReactCardFlip>
  );
};

export default Card;
