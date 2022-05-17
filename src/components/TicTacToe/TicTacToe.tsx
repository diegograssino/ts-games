import React, {useState} from "react";

import {Styled} from "./TicTacToe.styled";

function TicTacToe(): JSX.Element {
  const INITIAL_TURN = "X";
  const [turn, setTurn] = useState<"X" | "O">(INITIAL_TURN);

  function handleClick() {
    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <Styled>
      <div className="container">
        <h2 className="game-title">Tic-Tac-Toe</h2>
        <p>Turn: {turn}</p>
        <div className="grid3x3">
          <div className="square" onClick={handleClick}>
            X
          </div>
          <div className="square" onClick={handleClick}>
            O
          </div>
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
          <div className="square" onClick={handleClick} />
        </div>
      </div>
    </Styled>
  );
}

export default TicTacToe;
