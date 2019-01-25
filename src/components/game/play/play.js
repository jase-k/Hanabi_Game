import React from 'react';

//components
//import DiscardCard from './discard_card.js'
//import GiveHint from './give_hint.js'
//import PlayCard from './play_card.js'

export default class Play extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      give_hint: false,
      discard_card: false,
      play_card: false
    };
    this.showOptions = this.showOptions.bind(this)
  }
  showOptions(){
    console.log( "")
    console.log("Button was Clicked!")
  }
  render(){
    return(
      <div className="flex">
        <button id="discard_card" onClick={this.showOptions}>Discard Card</button>
        <button id="give_hint">Give Hint</button>
        <button id="play_card">Play Card</button>
      </div>
    )
  }
}
