import React from "react";

import Enter from "./enter";

import "./guess.css";

export default class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Make a guess!</h2>
        <div className="enterForm">
          <Enter />
        </div>
      </div>
    );
  }
}
