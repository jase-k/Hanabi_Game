import React from 'react';
import Player from './player.js'

export default class Teammates extends React.Component {
  constructor(props){
    super(props);
    this.state  = {
      players: this.props.game.players
    }
  }

  render(){
    console.log("numberOfPlayers", this.state.numberOfPlayers)
    return(
  <div id="teamateContainer" className="flex">
        {
          this.state.players.map(player => <Player player={player} />)
        }
        
     </div>
    )
  }
}
