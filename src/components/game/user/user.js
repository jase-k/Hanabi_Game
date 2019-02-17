import React from 'react';
import UserCard from './card.js'

export default class User extends React.Component {
  render(){
//    console.log("user's cards:", this.props.players.filter(player => player.name === this.props.userName)[0].hand.map(card => <UserCard card={card} /> ));
    var hand = this.props.players.filter(player => player.name === this.props.userName);

    return(
  <div id="cardHolder" className="card-holder flex">
      {
      hand[0].hand.filter(card => card !== null).map((card, index) => <UserCard  key={index} index={index+1} card={card} /> )
      }
   </div>
    )
  }
}
