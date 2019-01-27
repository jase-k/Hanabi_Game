import React from 'react';
import Player from './player.js'
import TeammatesHints from './teammateshints.js'

export default class Teammates extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      seehints: true,
      playerIndex: 1
    }
    this.changePlayer = this.changePlayer.bind(this)
  }

  changePlayer(index){
    console.log("Click Event Index:", index)
    if(index === this.state.playerIndex){
      this.setState({
        seehints: !this.state.seehints
      })
    }else{
    this.setState({
      playerIndex : index,
      seehints: true
      })
    }
  }
  render(){
    var teammatesArray = this.props.players.filter(player => player.name !== this.props.userName)
    console.log("State of PlayerIndex", this.state.playerIndex);
    return(
      <div>
        <div id="teamateContainer" className="flex">
          {
            teammatesArray.map((player, index) => <Player handleClick={this.changePlayer} key={player.id} index={index} player={player} />)
          }
        </div>

    {  this.state.seehints &&  <p>{teammatesArray[this.state.playerIndex].name }</p> }

        <div className="flex" >
        {
      this.state.seehints && teammatesArray[this.state.playerIndex].hand.map((card, index) => <TeammatesHints  key={index} card={card} index={index+1} />)
        }
      </div>
   </div>
    )
  }
}
