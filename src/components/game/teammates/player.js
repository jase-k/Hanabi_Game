import React from 'react';
import Card from './hand.js';

export default class Player extends React.Component {
  render(){
    return(
    <div className="container flex">
      <div id="player1" className="teamatesHand">
        <div>
        {this.props.player.name}
        </div>
        {
          this.props.player.hand.filter(card => card !== null).map((card, index) => <Card key={index} card={card} />)
        }
        </div>
      </div>
   )
  }
}
