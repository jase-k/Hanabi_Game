import React from 'react';

export default class PlayCard extends React.Component{
  render(){
    return(
      <div>
        <h3>Pick the Card to Play</h3>
          <select id="playcard_option">
              {
                this.props.cards.map((card, index) => <option value={index}>Card {index+1}</option>)
              }
          </select>
          <button id="play_card_button" onClick={this.props.handleEvent}>Submit</button>
        </div>
    )
  }
}
