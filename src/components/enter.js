import React from "react";

import "./enter.css";

export default class Enter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tries: 0, number: "", attempt: "" };

    this.generateNumber = this.generateNumber.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addValue = this.addValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      attempt: e.target.value
    });
  }

  generateNumber(e) {
    this.setState({ number: Math.floor(Math.random() * 10) });
    e.preventDefault();
  }

  addValue(e) {
    this.setState({ tries: this.state.tries + 1 });
    e.preventDefault();
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.attempt === this.state.number) {
      alert("you win!");
    }
  }

  render() {
    return (
      <div className="enter">
        <form onSubmit={this.handleClick}>
          <input
            value={this.state.attempt}
            onChange={this.updateInputValue}
            type="text"
            name="Enter Number"
            placeholder="ENTER A NUMBER"
          />
          <button className="button button1" onClick={this.generateNumber}>
            generate
          </button>
          <input
            type="submit"
            className="button button1"
            onClick={this.addValue}
          />
          <h2>Tries: {this.state.tries}</h2>
          <h3>Number: {this.state.number}</h3>
        </form>
      </div>
    );
  }
}
