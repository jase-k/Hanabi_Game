import React from 'react';
import Card from './hand.js';

export default class Player extends React.Component {
  render(){
    return(
    <div className="container flex" onClick={() => this.props.handleClick(this.props.index)}>
      <div className="teamatesHand" >
        <div className="name">
          <p>{this.props.player.name}</p>
        </div>
        {
  this.props.player.hand.filter(card => card !== null).map((card, index) => <Card key={index} card={card} />)
        }
        </div>
      </div>
   )
  }
}
