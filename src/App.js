import React, { Component } from "react";
import "./App.css";

import Car from "./Car/Car";

class App extends Component {
  /*
  * State есть только у компонетов наследуемых Component(extends Component)
  */
  state = {
    cars: [
      {
        id: 1,
        name: "Ford",
        year: 2018
      },
      {
        id: 2,
        name: "Mazda",
        year: 2017
      },
      {
        id: 3,
        name: "Gaz",
        year: 1990
      }
    ],
    pageTitle: "Cars list",
    showCars: false
  };
  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    });
  };
  handleInput = e => {
    this.setState({
      pageTitle: e.target.value
    });
  };
  showCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
  };
  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars
    });
  };
  handlerDeleteCar(index) {
    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({
      cars
    });
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />
        <button onClick={this.changeTitleHandler.bind(this, "Change")}>
          Change title
        </button>
        <button onClick={this.showCarsHandler}>
          {this.state.showCars ? "Hide cars" : "Show cars"}
        </button>
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  onDelete={this.handlerDeleteCar.bind(this, index)}
                  key={car.id}
                  onChangeName={e => this.onChangeName(e.target.value, index)}
                  name={car.name}
                  year={car.year}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
