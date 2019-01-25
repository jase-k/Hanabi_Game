import React from 'react';

export default class PlayedCards extends React.Component {
  render(){
    var array = this.props.playedCards
    console.log(array)
    var black = Math.max.apply(Math, array.filter(object => object.color == 'black').map(function(o){return o.number}))
      if(black == -Infinity){black = 0}
      array = this.props.playedCards
    var blue = Math.max.apply(Math, array.filter(object => object.color == 'blue').map(function(o){return o.number}))
      if(blue == -Infinity){blue = 0}
      array = this.props.playedCards
      console.log(array)
    var orange = Math.max.apply(Math, array.filter(object => object.color == 'orange').map(function(o){return o.number}))
      if(orange == -Infinity){orange = 0}
      array = this.props.playedCards
    var red = Math.max.apply(Math, array.filter(object => object.color == 'red').map(function(o){return o.number}))
      if(red == -Infinity){red = 0}
      array = this.props.playedCards
    var white = Math.max.apply(Math, array.filter(object => object.color == 'white').map(function(o){return o.number}))
        if(white == -Infinity){white = 0}

    return(
      <div className="flex">
        <div className="playPile black">
          <h3>Black</h3>
          <p>{black}</p>
        </div>
        <div className="playPile blue">
          <h3>Blue</h3>
          <p>{blue}</p>
        </div>
        <div className="playPile orange">
          <h3>Orange</h3>
          <p>{orange}</p>
        </div>
        <div className="playPile red">
          <h3>Red</h3>
          <p>{red}</p>
        </div>
        <div className="playPile white">
          <h3>White</h3>
          <p>{white}</p>
        </div>
      </div>
    )
  }
}
