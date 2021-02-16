import { StyledCard } from "./style";
import ReactCardFlip from "react-card-flip";
import backcard from "../../img/backcard.jpg";
import { useEffect } from "react";

const Card = ({ character, characters, setCharacters, moves, setMoves }) => {
  const { name, image, flip, id, match } = character;

  const compare = (card1, card2) => {
    return card1.name === card2.name;
  };

  const flipCard = (id) => {
    let flipedCards = characters.filter(
      (character) => character.compare === true
    );
    if (flipedCards.length < 2) {
      const newList = characters.map((character) => {
        return {
          ...character,
          flip: JSON.stringify(character.id) === id ? true : character.flip,
          compare:
            JSON.stringify(character.id) === id ? true : character.compare,
        };
      });
      setCharacters(newList);
    }
  };

  useEffect(() => {
    let flipedCards = characters.filter(
      (character) => character.compare === true
    );

    if (flipedCards.length === 2) {
      setMoves(moves + 1);
      const newList = characters.map((character) => {
        let match =
          character.id === flipedCards[0].id ||
          character.id === flipedCards[1].id
            ? compare(flipedCards[0], flipedCards[1])
            : character.flip;

        return {
          ...character,
          flip: match,
          match: match,
          compare: false,
        };
      });

      setTimeout(() => {
        setCharacters(newList);
      }, 700);
    }
  }, [characters]);

  return (
    <>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <StyledCard>
          <img
            src={backcard}
            id={id}
            name={name}
            onClick={(e) => flipCard(e.target.id)}
          />
        </StyledCard>
        <StyledCard>
          <img src={image} />
        </StyledCard>
      </ReactCardFlip>
    </>
  );
};

export default Card;
