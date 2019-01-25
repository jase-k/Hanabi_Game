import React from 'react';
import NewGame from './newgame.js'
import FirstStep from './first_step.js'

export default class StartGame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      FirstStepClass: "vertical_flex",
      NewGameClass: "hide"
    }
    this.toggleHide = this.toggleHide.bind(this)
  }
  toggleHide(){
    if(this.state.FirstStepClass == "vertical_flex"){
      this.setState({
        FirstStepClass: "hide",
        NewGameClass: "vertical_flex"
      })
    }
  }
  render(){
    return(
    <div id="game-init" className="game-init">
      <FirstStep hide={this.toggleHide} class={this.state.FirstStepClass} />
      <NewGame class={this.state.NewGameClass}/>
    </div>
    )
  }

}
