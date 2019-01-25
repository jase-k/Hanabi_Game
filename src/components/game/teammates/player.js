import React from 'react';
import Card from './hand.js';

export default class Player extends React.Component {
  render(){
    console.log("player props", this.props)
    return(
    <div className="container flex">
      <div id="player1" className="teamatesHand">
        <div>
        {this.props.player.name}
        </div>
        {
          this.props.player.hand.map(card => <Card card={card} />)
        }
        </div>
      </div>
   )
  }
}
