import React, {useEffect, useState} from "react";

import {Styled} from "./TicTacToe.styled";

function TicTacToe(): JSX.Element {
  const INITIAL_PLAYS: string[] = Array(9).fill("");
  const INITIAL_STATE = "XTURN";
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

  const [draft, setDraft] = useState<string[]>(INITIAL_PLAYS);
  const [plays, setPlays] = useState<number>(0);
  const [xPlays, setXPlays] = useState<number[]>([]);
  const [oPlays, setOPlays] = useState<number[]>([]);
  const [state, setState] = useState<"XTURN" | "OTURN" | "XWINS" | "OWINS" | "DRAW" | "RESET">(
    INITIAL_STATE,
  );

  useEffect(() => {
    function reset(): void {
      setDraft(INITIAL_PLAYS);
      setState(INITIAL_STATE);
      setXPlays([]);
      setOPlays([]);
    }

    // const xWins: boolean = WINNER_LINES.some((line) => {
    //   return line.every((index) => xPlays.includes(index));
    // });

    // xWins && setState("XWINS");
    // const oWins: boolean = WINNER_LINES.some((line) => {
    //   return line.every((index) => oPlays.includes(index));
    // });

    // oWins && setState("OWINS");

    switch (state) {
      case "XWINS":
        alert("X wins!");
        setState("RESET");
        break;

      case "OWINS":
        alert("O wins!");
        setState("RESET");
        break;

      case "DRAW":
        alert("Nobody wins!");
        setState("RESET");
        break;

      case "RESET":
        reset();
        break;
    }
  }, [xPlays, oPlays, state]);

  function handleClick(i: number): void {
    if (xPlays.length + oPlays.length < 9 && draft[i] === "") {
      const playsCopy = [...draft];

      if (state === "XTURN") {
        const xPlaysCopy = [...xPlays, i];

        setXPlays([...xPlaysCopy]);
        playsCopy[i] = "X";
        setDraft(playsCopy);

        const xWins: boolean = WINNER_LINES.some((line) => {
          return line.every((index) => xPlays.includes(index));
        });

        xWins ? setState("XWINS") : setState("OTURN");
      } else if (state === "OTURN") {
        const oPlaysCopy = [...oPlays, i];

        setOPlays([...oPlaysCopy]);
        playsCopy[i] = "O";
        setDraft(playsCopy);

        const oWins: boolean = WINNER_LINES.some((line) => {
          return line.every((index) => oPlays.includes(index));
        });

        oWins ? setState("OWINS") : setState("XTURN");
      }
    } else {
      setState("DRAW");
    }
  }
  function handleReset(): void {
    setState("RESET");
  }

  return (
    <Styled>
      <div className="container">
        <h2 className="game-title">Tic-Tac-Toe</h2>
        <p>State: {state}</p>
        <div className="grid3x3">
          {draft.map((play: string, index: number) => (
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
