import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import StartGame from './components/start/startgame.js'
import Game from './components/game/game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartGame />
        <Game />
      </div>
    );
  }
}

export default App;