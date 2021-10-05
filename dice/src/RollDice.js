//parent component
import React, { Component } from "react";
import Dice from "./Dice";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //what do we want to manag?
      //using string instead of number is because the font awesome class name
      dice1: "one",
      dice2: "one",
    };
  }

  rollDice = () => {
    let faces = ["one", "two", "three", "four", "five", "six"];
    let item = faces[Math.floor(Math.random() * faces.length)];
    let item2 = faces[Math.floor(Math.random() * faces.length)];
    this.setState({ dice1: item });
    this.setState({ dice2: item2 });
  };

  render() {
    return (
      <div>
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />
        <button onClick={this.rollDice}>ROLL</button>
      </div>
    );
  }
}
