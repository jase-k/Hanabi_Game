import React from 'react';

export default class DiscardCard extends React.Component{
  render(){
  //  console.log("DiscardCard Props", this.props)
    return(
      <div>
        <h3>Pick the Card to Discard</h3>
        <select id="discard_option">
            {
              this.props.cards.map((card, index) => <option value={index}>Card {index+1}</option>)
            }
        </select>
        <button id="discard_card_button" onClick={this.props.handleEvent}>Submit</button>
      </div>
    )
  }
}
