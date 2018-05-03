import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MovieContainer from './MovieContainer';

class App extends Component {
  constructor () {
    super();

    this.state = {
      isLogged: false
    }
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
