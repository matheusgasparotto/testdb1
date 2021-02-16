import { Input } from "./style";

import { useState } from "react";

const InputName = ({ placeholder, playerName, setPlayerName }) => {
  const handleValue = (e) => {
    setPlayerName({ name: e.target.value });
  };
  return (
    <Input
      value={playerName}
      onChange={handleValue}
      placeholder={placeholder}
    />
  );
};

export default InputName;
