import React from 'react';
import Winner from './winner';

export default class GameOver extends React.Component{
  render(){
    return(
      <div className="game_over">
        <Winner />
      </div>
    )
  }
}
