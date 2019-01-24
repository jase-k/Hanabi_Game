import React from 'react';


export default class NewGame extends React.Component {
  render(){
    return(
      <div id="howManyPlayers" className="hide">
      <h2>
      How Many Players?
      </h2>
      <select id="select">
        <option value="">Select</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>
        <input type="text" id="nameInput" placeholder="Type in Your Name HERE"/>
        <button id="startGame">
          Start Game
        </button>
    </div>
    )
  }

}
