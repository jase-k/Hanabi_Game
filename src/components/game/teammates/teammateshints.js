import React from 'react';

export default class TeammatesHints extends React.Component{
  render(){

    console.log("Teammates Hints Props:", this.props)

    return(
    <div  className="teammates_hint_card">
      <h3>
        Card {this.props.index}
      </h3>
      <div className="">
        <h4>
          Hints Given
        </h4>
      {
        this.props.card.hints.map(hint => <p>{hint}</p>)
      }
      </div>
    </div>
  )
  }
}
