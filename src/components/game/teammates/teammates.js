import React from 'react';
import Player from './player.js'

export default class Teammates extends React.Component {
  render(){
    console.log("teammates props", this.props)
    return(
  <div id="teamateContainer" className="flex">
        {
          this.props.players.filter(player => player.name !== this.props.userName).map(player => <Player player={player} />)
        }

     </div>
    )
  }
}
