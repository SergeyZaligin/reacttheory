import React, { Component } from 'react';
import './App.css';

import Car from './Car/Car';

class App extends Component {
  render() {
    return (
      <div className="App">   
          <Car name={ 'Ford' } year={ '2018' } />
          <hr/>
          <Car name={ 'Mazda' } year={ '2017' } />
          <hr/>
          <Car name={ 'Gaz' } year={ '2000' } />
      </div>
    );
  }
}

export default App;
