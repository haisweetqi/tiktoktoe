import React from "react";
import "./Board.css";
import Cell from "../Cell";

const Board = (props: any) => {
  console.log(props);

  return (
    <div className="game-board">
      {props.cells.map((item: any, index: any) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
