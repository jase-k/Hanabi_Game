import React from 'react';

//components
import DiscardCard from './discard_card.js'
import GiveHint from './give_hint.js'
import PlayCard from './play_card.js'

export default class Play extends React.Component {
  constructor(props){
    super(props)
    this.showOptions = this.showOptions.bind(this);
    this.state ={
      give_hint: false,
      discard_card: false,
      play_card: false
    };
  }
  showOptions(e){
    console.log(e.target.id)
    var state = e.target.id
    if(state == 'give_hint'){this.setState({
        give_hint : !this.state.give_hint
    })
  }
    if(state == 'discard_card'){this.setState({
        discard_card : !this.state.discard_card
    })
  }
    if(state == 'play_card'){this.setState({
        play_card : !this.state.play_card
    })
  }
}
  render(){
    console.log("Play's Props:", this.props)
    return(
      <div className="flex">
        {!this.state.give_hint && !this.state.play_card && <button id="discard_card" onClick={(e) => this.showOptions(e)}>Discard Card</button> }
        {this.state.discard_card && <DiscardCard handleEvent={this.props.discard} cards={this.props.players[0].hand} /> }
        {!this.state.discard_card && !this.state.play_card && <button id="give_hint" onClick={(e) => this.showOptions(e)}>Give Hint</button> }
        {this.state.give_hint && <GiveHint giveHint={this.props.giveHint} players={this.props.players} />}
        {!this.state.give_hint && !this.state.discard_card && <button id="play_card" onClick={(e) => this.showOptions(e)}>Play Card</button> }
        {this.state.play_card && <PlayCard cards={this.props.players[0].hand}/>}
      </div>
    )
  }
}
