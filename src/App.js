import React, { Component } from 'react';
import './App.css';
import Game from './components/game/game.js'
import Header from './components/header/header.js'
import Instructions from './components/instructions/instructions.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Instructions />
      </div>
    );
  }
}

export default App;
