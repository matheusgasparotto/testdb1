import { addPlayer } from "./types";

const defaultState = { player: { name: "" } };

const Users = (state = defaultState, action) => {
  const { newPlayer, type } = action;
  switch (type) {
    case addPlayer:
      return newPlayer;

    default:
      return state;
  }
};

export default Users;
