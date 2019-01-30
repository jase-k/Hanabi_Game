import React from 'react';

export default class Card extends React.Component {
  render(){
    return(
    <div className={"teammatesCard "+this.props.card.color}>
      <h4 className="card_number">
        {this.props.card.number}
      </h4>
        <h3 className="card_color">
          {this.props.card.color}
        </h3>
      </div>
    )
  }
}
