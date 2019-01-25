import React from 'react';

export default class FirstStep extends React.Component {
  render(){
    console.log("FirstStep Props:",this.props)
    return(
      <div className="vertical_flex">
       <div className='center'>
          <button id="newGame" onClick={this.props.hide}>
          New Game
        </button>
     </div>
     <div className='center'>
        <h3>
          OR Join a Game
        </h3>
      </div>
      <div className='vertical_flex'>
        <input id="name_input" className='center' type="text" name="JoinNameInput" placeholder="Type Name Here"/>
        <input id="gameId_input" className='center' type="text" name="GameId" placeholder="Type Game Id Here" />
        <button id="joinGame" className='center' onClick={this.props.handleJoinGame}>
          Join Game
        </button>
        </div>
      </div>
    )
  }

}
