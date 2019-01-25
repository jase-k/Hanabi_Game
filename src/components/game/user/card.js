import React from 'react';

export default class UserCard extends React.Component{
  render(){
    return(
    <div  className="card">
      <h3>
        Card
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
      </div>
    </div>
  )
  }
}
