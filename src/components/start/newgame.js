import React from 'react';


export default class NewGame extends React.Component {
  render(){
    return(
      <div id="howManyPlayers" className={this.props.class}>
      <h2>
      How Many Players?
      </h2>
      <div>
          <select id="select">
            <option value="">Select</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </select>
          <input type="text" id="nameInput" placeholder="Type in Your Name HERE"/>
      </div>
      <button id="startGame" onClick={this.props.clickHandler}>
          Start Game
        </button>
    </div>
    )
  }

}
