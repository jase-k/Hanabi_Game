import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import StartGame from './components/start/startgame.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartGame />
      </div>
    );
  }
}

export default App;
