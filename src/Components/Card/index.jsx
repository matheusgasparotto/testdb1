import { StyledCard } from "./style";
import ReactCardFlip from "react-card-flip";
import backcard from "../../img/backcard.jpg";
import { useState, useEffect } from "react";

const Card = ({ character, characters, setCharacters }) => {
  const { name, image, flip, id } = character;

  const compare = (card1, card2) => {
    return card1.name === card2.name;
  };

  const flipCard = (id) => {
    const newList = characters.map((character) => {
      return {
        ...character,
        flip: JSON.stringify(character.id) === id ? true : character.flip,
        compare: JSON.stringify(character.id) === id ? true : character.compare,
      };
    });

    setCharacters(newList);
  };

  useEffect(() => {
    let flipedCards = characters.filter(
      (character) => character.compare === true
    );
    if (flipedCards.length === 2) {
      const newList = characters.map((character) => {
        console.log(character.id === flipedCards[0].id);
        return {
          ...character,
          flip:
            character.id === flipedCards[0].id ||
            character.id === flipedCards[1].id
              ? compare(flipedCards[0], flipedCards[1])
              : character.flip,
          compare: false,
        };
      });
      setTimeout(() => {
        setCharacters(newList);
      }, 1000);
    }
  }, [characters]);

  return (
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
  );
};

export default Card;
