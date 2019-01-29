import React from 'react';

export default class Scoreboard extends React.Component {
  componentWillMount(){
    setInterval(this.props.update, 5000);
  }
  render(){
  //  console.log("props:",this.props.game)
    return(
      <div className="scoreboard flex">
        <div className="vertical_flex">
          <h2>Lives Left:</h2>
          <h3>{this.props.game.livesLeft}</h3>
        </div>
        <div className="vertical_flex">
          <h2>Hints Left:</h2>
          <h3>{this.props.game.hintsLeft}</h3>
        </div>
        <div className="vertical_flex">
          <h2>Score:</h2>
          <h3>{this.props.game.score}</h3>
        </div>
        <div className="vertical_flex">
          <h2>Deck Left:</h2>
          <h3>{this.props.deckLeft}</h3>
        </div>
      </div>
    )
  }
}
