import React from 'react';

export default class Winner extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      img: "",
      text: ""
    }
  }
  componentWillMount(){
    const xhr = new XMLHttpRequest();
      var url = 'https://puddle-catcher.glitch.me/winner'
      xhr.responseType = 'json';
      xhr.onreadystatechange = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
          this.setState({
            img: xhr.response.url,
            text: xhr.response.alt
          })
        }
      }
      xhr.open("GET", url)
      xhr.send()
  }
  render(){
    return(
      <div className="winner">
        <p>{this.state.text}</p>
        <img src={this.state.img} alt="You are such a winner!"/>
      </div>
    )
  }
}
