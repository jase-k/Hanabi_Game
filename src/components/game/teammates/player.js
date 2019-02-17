import React from 'react';
import Card from './hand.js';

export default class Player extends React.Component {
  render(){
    var nameDivClass = ''
    if(this.props.player.active){
      nameDivClass = "active"
    }
    return(
    <div className="player" onClick={() => this.props.handleClick(this.props.index)}>
      <div className={`name ${nameDivClass}`}>
        <p>{this.props.player.name}</p>
      </div>
      <div className="teamatesHand" >
        {
  this.props.player.hand.filter(card => card !== null).map((card, index) => <Card key={index} card={card}  />)
        }
        </div>
      </div>
   )
  }
}
