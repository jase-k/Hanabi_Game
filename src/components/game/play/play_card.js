import React from 'react';

export default class PlayCard extends React.Component{
  render(){
    return(
      <div>
        <h3>Pick the Card to Play</h3>
        <select>
            <option value="0">Card 1</option>
            <option value="1">Card 2</option>
            <option value="2">Card 3</option>
            <option value="3">Card 4</option>
            <option value="4">Card 5</option>
        </select>
      </div>
    )
  }
}
