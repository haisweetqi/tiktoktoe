import React from "react";
import "./Cell.css";

const Cell = (props: any) => {
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
