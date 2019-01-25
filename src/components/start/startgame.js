import React from 'react';
import NewGame from './newgame.js'
import FirstStep from './first_step.js'

export default class StartGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hide: true,
    }
    this.toggleHide = this.toggleHide.bind(this)
  }
  toggleHide(){
    console.log("toggleHide")
      this.setState({
        hide: false,
    })
  }
  render(){
    console.log("StartGame Props", this.props)
    return(
    <div id="game-init" className="game-init">
      {this.state.hide && <FirstStep hide={this.toggleHide} handleJoinGame={this.props.joingame} /> }
      {!this.state.hide && <NewGame class={this.state.NewGameClass} clickHandler={this.props.newgame}/>}
    </div>
    )
  }

}
