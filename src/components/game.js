import React from "react";

import Guess from "./guess";

import "./game.css";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>HOT or COLD</h1>
        <Guess />
      </div>
    );
  }
}
