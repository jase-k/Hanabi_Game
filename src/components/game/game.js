import React from 'react';

//Components//
import GameOver from './gameover/gameover.js';
import History from './history/history.js';
import PlayedCards from './playedcards/playedcards.js';
import Scoreboard from './scoreboard/scoreboard.js';
import Teammates from './teammates/teammates.js';
import User from './user/user.js';
import StartGame from '../start/startgame';
import Play from './play/play.js';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      score: 0,
      dateCreated: null,
      hintsLeft: 0,
      livesLeft: 0,
      playingDeck: [],
      discardedCards: [],
      playedCards: [],
      players: [{"name": "Jase Kraft", "active": false}],
      userName: "Jase Kraft", //This is Set by the Browser
      startGameClass: "game-init",
      gameClass: false,
      previousPlays: [],
      gameOver: false,
    };
    this.startNewGame = this.startNewGame.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.joinGame = this.joinGame.bind(this);
    this.discardCard = this.discardCard.bind(this);
    this.giveHint = this.giveHint.bind(this);
    this.playCard = this.playCard.bind(this);
    this.getUpdate = this.getUpdate.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.showPlayerOrder = this.showPlayerOrder.bind(this);
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
            console.log(typeof game)
              this.setState({
                  userName: nameInput.value,
                  startGameClass: "hide",
                  gameClass: true,
                  id: xhr.response.tableIds.gameId,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
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
          if(xhr.response.message === "Name Not Found in the Game!"){
            alert(xhr.response.message);
            return;
          }
            var game = xhr.response
              this.setState({
                  userName: name.value,
                  startGameClass: "hide",
                  gameClass: true,
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  discardCard(){
    var cardIndex = document.getElementById('discard_option').value
      console.log("discard Card Index Value", cardIndex)
    const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/game/'
        url += this.state.id
        url += '/'+this.state.userName
        url += '/discard?cardIndex='
        url += cardIndex
            console.log(url)
    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
              this.setState({
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  playCard(){
    var cardIndex = document.getElementById('playcard_option').value
      console.log("PlayCard Index Value", cardIndex)
    const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/game/'
        url += this.state.id
        url += '/'+this.state.userName
        url += '/playcard?cardIndex='
        url += cardIndex
            console.log(url)
    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
              this.setState({
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  giveHint(){
    const playerSelect = document.getElementById('player');
    const hintSelect = document.getElementById('hint_options');

   const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/game/'
        url += this.state.id
        url += '/'+this.state.userName
        url += '/givehint?player='
        url += playerSelect.value
        url += '&hint='
        url += hintSelect.value

            console.log(url)

    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
              this.setState({
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft: xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  getUpdate(){

    const xhr = new XMLHttpRequest();
    var url = 'https://puddle-catcher.glitch.me/game/'
        url += this.state.id
        url += "/"+this.state.userName
    console.log(url)
    xhr.responseType ="json";
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.response)
            var game = xhr.response
              this.setState({
                  startGameClass: "hide",
                  gameClass: true,
                  id: xhr.response.id,
                  score: xhr.response.score,
                  hintsLeft:  xhr.response.hintsLeft,
                  livesLeft: xhr.response.livesLeft,
                  playingDeck: xhr.response.playingDeck.filter(object => object !== null),
                  discardedCards: xhr.response.discardedCards.filter(object => object !== null),
                  playedCards: xhr.response.playedCards.filter(object => object !== null),
                  players: xhr.response.players,
                  previousPlays: xhr.response.messages,
                  gameOver: xhr.response.playedCards.filter(object => object !== null).length > 24 ? true : false
              })
            }
        }
    xhr.open('GET', url)
    xhr.send()
  }
  toggleHide(target){
    console.log("Button Clicked", target)
    target.classList.add("hide")
  }
  showPlayerOrder(){
    alert(`Player Order:
      ${this.state.players.map(player => player.name+'  =>  ')}
    `)
  }
  render(){

  var active = true
  for(var i = 0; i < this.state.players.length; i++){
    if(!this.state.players[i].name){ active = false}
  }
  var index = this.state.players.findIndex(player =>  player.name === this.state.userName)
  if(this.state.players[index]){
    if(!this.state.players[index].active){ active = false}
}
  console.log("Index", index)
  console.log("Active", active)
    return(
      <div className="game-container">
      { this.state.gameClass &&
        <div class="flex">
          <div class="game_id">Game Id = {this.state.id}</div>
          <div class="help" onClick={this.showPlayerOrder}>?</div>
        </div> }
      {!this.state.gameClass && <StartGame joingame={this.joinGame} newgame={this.startNewGame} /> }
      {this.state.gameClass && active && !this.state.gameOver && <Play playCard={this.playCard} giveHint={this.giveHint} hints={this.state.hintsLeft} discard={this.discardCard} players={this.state.players.filter(player => player.name !== this.state.userName)} userName={this.state.userName} /> }
      {this.state.gameOver && <GameOver playByPlay={this.state.messages} /> }
      {this.state.gameClass && <Scoreboard deckLeft={this.state.playingDeck.length} game={this.state} update={this.getUpdate} /> }
      {this.state.gameClass && !this.state.gameOver && <History messages={this.state.previousPlays} handleClick={this.toggleHide}/> }
      {this.state.gameClass && <Teammates players={this.state.players} userName={this.state.userName} /> }
      {this.state.gameClass && <User players={this.state.players} userName={this.state.userName}/> }
      {this.state.gameClass && <PlayedCards playedCards={this.state.playedCards}/> }
      </div>
    )
  }
}
