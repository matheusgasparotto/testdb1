import { Input } from "./style";

import { useState } from "react";
const InputName = ({
  placeholder,
  playerName,
  setPlayerName,
  setError,
  border,
}) => {
  const handleValue = (e) => {
    setError("");
    setPlayerName({ name: e.target.value });
  };
  return (
    <Input
      value={playerName}
      onChange={handleValue}
      placeholder={placeholder}
      border={border}
    />
  );
};

export default InputName;
