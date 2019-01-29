import React from 'react';

export default class History extends React.Component{
  render(){
    return(
      <div className="update_holder">
      {
        this.props.messages.map(message => <div className="update flex"><p className="message">{message}</p> <button className="update_button" onClick={(event) => this.props.handleClick(event.target.parentNode)}>Okay</button></div>)
      }

        </div>
    )
  }
}
