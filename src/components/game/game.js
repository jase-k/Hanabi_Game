import React from 'react';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null
    }
  }
  render(){
    return(
      <div className="game-container">
      The Game Goes Here:

      </div>
    )
  }
}
