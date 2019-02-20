import React from 'react';
import Winner from './winner';
import Loser from './loser';
import Unwinnable from './unwinnable';

export default class GameOver extends React.Component{
  render(){
    return(
      <div className="game_over">
        {this.props.gameProgress === 'won' && <Winner /> }
        {this.props.gameProgress === 'lost' && <Loser /> }
        {this.props.gameProgress === "can't win" && <Unwinnable />}
      </div>
    )
  }
}
