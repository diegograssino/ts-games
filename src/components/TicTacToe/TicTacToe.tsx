import React, {useState} from "react";

import {Styled} from "./TicTacToe.styled";

function TicTacToe(): JSX.Element {
  const INITIAL_TURN = "X";
  const INITIAL_PLAYS: string[] = Array(9).fill("");

  const [turn, setTurn] = useState<"X" | "O">(INITIAL_TURN);
  const [plays, setPlays] = useState<string[]>(INITIAL_PLAYS);

  function handleClick(i: number): void {
    if (plays[i] === "") {
      const playsCopy = [...plays];

      playsCopy[i] = turn;
      setPlays(playsCopy);
      setTurn(turn === "X" ? "O" : "X");
    }
  }
  function handleReset(): void {
    setPlays(INITIAL_PLAYS);
    setTurn(INITIAL_TURN);
  }

  return (
    <Styled>
      <div className="container">
        <h2 className="game-title">Tic-Tac-Toe</h2>
        <p>Turn: {turn}</p>
        <div className="grid3x3">
          {plays.map((play, index) => (
            <div key="index" className="square" onClick={() => handleClick(index)}>
              {play}
            </div>
          ))}
        </div>
      </div>
      <div className="btn-reset" onClick={handleReset}>
        Reset
      </div>
    </Styled>
  );
}

export default TicTacToe;
