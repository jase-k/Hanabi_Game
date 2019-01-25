import React from 'react';

export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log("Card Props", this.props)
    return(
      <div className="teamatesCard">
        <h3>
          {this.props.card.color}
        </h3>
        <h4>
          {this.props.card.number}
        </h4>
      </div>
    )
  }
}
