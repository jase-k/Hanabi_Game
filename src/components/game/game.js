import React from 'react';

//Components//

import PlayedCards from './playedcards/playedcards.js'
import Scoreboard from './scoreboard/scoreboard.js'
import Teammates from './teammates/teammates.js'
import User from './user/user.js'
import StartGame from '../start/startgame'
import Play from './play/play.js'

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      score: 0,
      dateCreated: null,
      hintsLeft: 9,
      livesLeft: 3,
      playingDeck: [{color: 'orange', number: '1', hints:[]},{color: 'blue', number: '2', hints:[]},{color: 'black', number: '3', hints:[]},{color: 'red', number: '4', hints:[]},{color: 'white', number: '5', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]},{color: 'orange', number: '1', hints:[]}],
      discardedCards: [],
      playedcards: [],
      players: [{
        id: '1',
        name: 'Jase',
        active: '1',
        hand:[{color: 'orange', number: '1', hints:["Not Red", "1"]},{color: 'blue', number: '2', hints:["Not Red", "Not 1"]},{color: 'black', number: '3', hints:["Not Red", "Not 1"]},{color: 'red', number: '4', hints:["Red", "Not 1"]},{color: 'white', number: '5', hints:["Not Red", "Not 4", "Not Blue"]}]
      },{
        id: '2',
        name: 'Jane Doe',
        active: '0',
        hand: [{color: 'orange', number: '1', hints:[]},{color: 'blue', number: '2', hints:[]},{color: 'black', number: '3', hints:[]},{color: 'red', number: '4', hints:[]},{color: 'white', number: '5', hints:[]}]
      },{
        id: '3',
        name: 'Billy',
        active: '0',
        hand: [{color: 'green', number: '1', hints:[]},{color: 'blue', number: '2', hints:[]},{color: 'black', number: '3', hints:[]},{color: 'red', number: '4', hints:[]},{color: 'white', number: '5', hints:[]}]
      }],
      userName: "Jase", //This is Set by the Browser
      startGameClass: "game-init",
      gameClass: false,
    };
    this.startNewGame = this.startNewGame.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }
  setUserName(name){
    this.setState({userName: name})
  }
  startNewGame(){
    const nameInput = document.getElementById('nameInput')
    const selector = document.getElementById('select')


    const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/newgame/'
        url += selector.value
        url += '?name='+nameInput.value
    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
            var game = xhr.response
            console.log("Game Score", game["score"])
            console.log(typeof game)
              this.setState({
                  userName: nameInput.value,
                  startGameClass: "hide",
                  gameClass: true,
                  id: xhr.response.tableIds.gameId,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck,
                  discardedCards: xhr.response.discardedCards,
                  playedcards: xhr.response.playedCards,
                  players: xhr.response.players,

              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  joinGame(){
    console.log("Join Game")
    const gameId = document.getElementById('gameId_input')
    const name = document.getElementById('name_input')


    const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/joingame/'
        url += gameId.value
        url += '?name='+name.value
    console.log(url)
    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
            var game = xhr.response
            console.log("Game Score", game["score"])
            console.log(typeof game)
              this.setState({
                  userName: name.value,
                  startGameClass: "hide",
                  gameClass: true,
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck,
                  discardedCards: xhr.response.discardedCards,
                  playedcards: xhr.response.playedCards,
                  players: xhr.response.players,

              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  render(){
    return(
      <div className="game-container">
        Game Id = {this.state.id}
      {!this.state.gameClass && <StartGame joingame={this.joinGame} newgame={this.startNewGame} /> }
      {this.state.gameClass &&  <Play players={this.state.players} userName={this.state.userName} /> }
      {this.state.gameClass && <Scoreboard game={this.state} /> }
      {this.state.gameClass && <Teammates players={this.state.players} userName={this.state.userName} /> }
      {this.state.gameClass && <User players={this.state.players} userName={this.state.userName}/> }
      {this.state.gameClass && <PlayedCards /> }
      </div>
    )
  }
}
