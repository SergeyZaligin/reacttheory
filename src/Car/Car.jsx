import React, { Component } from "react";
//import Radium from "radium";
import PropTypes from "prop-types";
import "./Car.css";

class Car extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("Component Will Recive Props", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update", nextProps);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update", nextProps);
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Car delete");
  }

  render() {
    //throw new Error("ddd");
    console.log("Car component render");
    const style = {
      ":hover": {
        color: "red"
      }
    };

    return (
      <div className="car">
        <h3 style={style}>Car: {this.props.name}</h3>
        <strong>Year: {this.props.year}</strong>
        <br />
        <br />
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number
};

export default Car;
