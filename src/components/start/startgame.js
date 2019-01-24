import React from 'react';
import NewGame from './newgame.js'
import FirstStep from './first_step.js'

export default class StartGame extends React.Component {
  render(){
    return(
    <div id="game-init" className="game-init">
      <FirstStep />
      < NewGame />
        </div>
    )
  }

}
