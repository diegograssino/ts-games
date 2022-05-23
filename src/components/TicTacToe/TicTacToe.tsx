import React, {useEffect, useState} from "react";

import {Styled} from "./TicTacToe.styled";

function TicTacToe(): JSX.Element {
  const INITIAL_PLAYS: string[] = ["", "", "", "", "", "", "", "", ""];
  const INITIAL_ACTUAL_PLAYER = "X";
  const INITIAL_TURNS = 0;

  const [plays, setPlays] = useState<string[]>(INITIAL_PLAYS);
  const [actualPlayer, setActualPlayer] = useState<"X" | "O">(INITIAL_ACTUAL_PLAYER);
  const [turns, setTurns] = useState<number>(0);

  useEffect(() => {
    const WINNER_LINES: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WINNER_LINES.length; i++) {
      if (
        plays[WINNER_LINES[i][0]] === plays[WINNER_LINES[i][1]] &&
        plays[WINNER_LINES[i][1]] === plays[WINNER_LINES[i][2]] &&
        plays[WINNER_LINES[i][0]] !== ""
      ) {
        alert(plays[WINNER_LINES[i][0]] + " wins!");
        handleReset();
      }
    }

    if (turns === 9) {
      alert("Draw!");
      handleReset();
    }
  }, [turns, plays]);

  function handleClick(i: number): void {
    setTurns(turns + 1);
    if (plays[i] === "") {
      const playsCopy = [...plays];

      playsCopy[i] = actualPlayer;
      setPlays(playsCopy);
    }
    setActualPlayer(actualPlayer === "X" ? "O" : "X");
  }
  function handleReset(): void {
    setPlays(INITIAL_PLAYS);
    setActualPlayer(INITIAL_ACTUAL_PLAYER);
    setTurns(INITIAL_TURNS);
  }

  return (
    <Styled>
      <div className="container">
        <p>Actual Player: {actualPlayer}</p>
        <p>Turns: {turns}</p>
        <div className="grid3x3">
          {plays.map((play, index) => (
            <div key={index} className="square" onClick={() => handleClick(index)}>
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
