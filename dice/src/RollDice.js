//parent component
import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

export default class RollDice extends Component {
  //we can do static defaultProps or just define the array in the function
  //   static defaultProps = {
  //     faces: ["one", "two", "three", "four", "five", "six"],
  //   };

  constructor(props) {
    super(props);
    this.state = {
      //what do we want to manag?
      //using string instead of number is because the font awesome class name
      dice1: "one",
      dice2: "one",
    };
    //this.bind is not necessary because I used arrow function rollDice
    // this.tollDice = this.rollDice.bind(this);
  }

  rollDice = () => {
    let faces = ["one", "two", "three", "four", "five", "six"];
    let item = faces[Math.floor(Math.random() * faces.length)];
    let item2 = faces[Math.floor(Math.random() * faces.length)];
    this.setState({ dice1: item, dice2: item2 });
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice face={this.state.dice1} />
          <Dice face={this.state.dice2} />
        </div>
        <button onClick={this.rollDice}>ROLL</button>
      </div>
    );
  }
}
