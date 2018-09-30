import React, { Component } from "react";
import Auxiliary from "../hoc/Auxiliary";
export default class Counter extends Component {
  state = {
    counter: 0
  };

  plusCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };
  minusCounter = () => {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  };
  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.plusCounter}>+</button>
        <button onClick={this.minusCounter}>-</button>
      </Auxiliary>
    );
  }
}
