import React from 'react';

export default class GiveHint extends React.Component{
  render(){
    return(
      <div className="flex">
        <div>
          <h3>Pick a Hint</h3>
          <select id="hint_options">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <h3>Pick a Player</h3>
          <select id="player">
          {
            this.props.players.map(player => <option value={player.name}>{player.name}</option>)
          }
        </select>
        </div>
        <button onClick={this.props.giveHint}>Submit</button>
      </div>
    )
  }
}
