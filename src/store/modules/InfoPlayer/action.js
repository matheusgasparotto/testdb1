import { addPlayer } from "./types";

export const handleAddPlayer = (playerData) => {
  return {
    type: addPlayer,
    newPlayer: playerData,
  };
};
