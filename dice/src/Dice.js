//child component
import React, { Component } from "react";
import "./Dice.css";

export default class Dice extends Component {
  //   diceClass = [
  //     "fas fa-dice-one",
  //     "fas fa-dice-two",
  //     "fas fa-dice-three",
  //     "fas fa-dice-four",
  //     "fas fa-dice-five",
  //     "fas fa-dice-six",
  //   ];

  //   rando1 = this.diceClass[Math.floor(Math.random() * this.diceClass.length)];
  //   rando2 = this.diceClass[Math.floor(Math.random() * this.diceClass.length)];

  render() {
    return (
      <div>
        {/* {this.diceClass.map((i) => (
          <i className={i}></i>
        ))} */}

        <i className={`fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}
