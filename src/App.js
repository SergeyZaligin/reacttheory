import React, { Component } from "react";
import "./App.css";

import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    // API JavaScript not api ReactJS
    console.log("Constructor");
    /*
    * State есть только у компонетов наследуемых Component(extends Component)
    */
    this.state = {
      cars: [
        {
          id: 1,
          name: "Ford",
          year: 2018
        }
        // {
        //   id: 2,
        //   name: "Mazda",
        //   year: 2017
        // },
        // {
        //   id: 3,
        //   name: "Gaz",
        //   year: 1990
        // }
      ],
      pageTitle: "Cars list",
      showCars: false
    };
  }

  /*
  * Life cicle
  */
  // When initialize component(props) before render
  componentWillMount() {
    console.log("Component Will Mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
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
    console.log("App component render");
    return (
      <div
        className="App"
        style={{
          maxWidth: 960,
          textAlign: "center",
          padding: 10,
          margin: "0 auto",
          border: "1px solid #000"
        }}
      >
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput} />
        <br />
        <br />

        <Counter />

        <br />
        <br />
        <button onClick={this.changeTitleHandler.bind(this, "Change")}>
          Change title
        </button>
        <button onClick={this.showCarsHandler}>
          {this.state.showCars ? "Hide cars" : "Show cars"}
        </button>
        <br />
        <br />
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <ErrorBoundary key={car.id}>
                  <Car
                    onDelete={this.handlerDeleteCar.bind(this, index)}
                    onChangeName={e => this.onChangeName(e.target.value, index)}
                    name={car.name}
                    year={car.year}
                  />
                </ErrorBoundary>
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
