import React from 'react';

export default class FirstStep extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div className={this.props.class}>
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
        <input className='center' type="text" name="JoinNameInput" placeholder="Type Name Here"/>
        <input className='center' type="text" name="GameId" placeholder="Type Game Id Here" />
        <button id="joinGame" className='center'>
          Join Game
        </button>
        </div>
      </div>
    )
  }

}
