import React from 'react';
import Player from './player.js'

export default class Teammates extends React.Component {
  render(){
    return(
  <div id="teamateContainer" className="flex">
        {
          this.props.players.filter(player => player.name !== this.props.userName).map(player => <Player key={player.id} player={player} />)
        }

     </div>
    )
  }
}
