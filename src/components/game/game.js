import React from 'react';

//Components//

import PlayedCards from './playedcards/playedcards.js'
import Scoreboard from './scoreboard/scoreboard.js'
import Teammates from './teammates/teammates.js'
import User from './user/user.js'

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
        hand:[{color: 'orange', number: '1', hints:["Not Red", "1"]},{color: 'blue', number: '2', hints:["Not Red", "Not 1"]},{color: 'black', number: '3', hints:["Not Red", "Not 1"]},{color: 'red', number: '4', hints:["Red", "Not 1"]},{color: 'white', number: '5', hints:["Not Red", "Not 1"]}]
      },{
        id: '2',
        name: 'Steve',
        active: '0',
        hand: [{color: 'orange', number: '1', hints:[]},{color: 'blue', number: '2', hints:[]},{color: 'black', number: '3', hints:[]},{color: 'red', number: '4', hints:[]},{color: 'white', number: '5', hints:[]}]
      },{
        id: '3',
        name: 'Billy',
        active: '0',
        hand: [{color: 'orange', number: '1', hints:[]},{color: 'blue', number: '2', hints:[]},{color: 'black', number: '3', hints:[]},{color: 'red', number: '4', hints:[]},{color: 'white', number: '5', hints:[]}]
      }],
      userName: "Jase" //This is Set by the Browser
    }
  }
  render(){
    return(
      <div className="game-container">
      The Game Goes Here:
      <Scoreboard game={this.state} />
      <Teammates players={this.state.players} userName={this.state.userName} />
      <User players={this.state.players} userName={this.state.userName}/>
      <PlayedCards />
      </div>
    )
  }
}
