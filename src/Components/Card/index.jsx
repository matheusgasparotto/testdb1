import { StyledCard } from "./style";
import ReactCardFlip from "react-card-flip";
import backcard from "../../img/backcard.jpg";
import { useState } from "react";

const Card = () => {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <StyledCard onClick={() => setFlip(!flip)}>
        <img src={backcard} />
      </StyledCard>
      <StyledCard>
        <img src={backcard} />
      </StyledCard>
    </ReactCardFlip>
  );
};

export default Card;
