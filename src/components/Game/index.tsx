import React, { useState } from "react";
import "./Game.css";
import Board from "../Board";
import { calculateWinner } from "../../utils/helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: any) => {
    console.log("aaa", index);
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>

      <div className="notify">{winner ? `Winner: ${winner}` : ""}</div>

      <button className="btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Game;
