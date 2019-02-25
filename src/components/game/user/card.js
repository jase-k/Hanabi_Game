import React from 'react';

export default class UserCard extends React.Component{
  render(){
// console.log("UserCard props:", this.props)
    return(
    <div  className="card">
      <h3>
        Card {this.props.index}
      </h3>
      <div className="notes">
        <h4>
          Hints Given
        </h4>
      {
        this.props.card.hints.map(hint => <p>{hint}</p>)
      }
      </div>
      <div className="personal notes">
        <h4>
          Personal Notes
        </h4>
        <div contentEditable= "true" className = "player_notes">
        </div>
      </div>
    </div>
  )
  }
}
