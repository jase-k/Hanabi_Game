(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),l=a.n(r),i=(a(16),a(1)),c=a(2),o=a(5),u=a(3),p=a(4),d=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("h1",null,"Unagi"))}}]),t}(s.a.Component)),m=a(6),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={img:"",text:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=new XMLHttpRequest;t.responseType="json",t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&e.setState({img:t.response.url,text:t.response.alt})},t.open("GET","https://puddle-catcher.glitch.me/winner"),t.send()}},{key:"render",value:function(){return s.a.createElement("div",{className:"winner"},s.a.createElement("p",null,this.state.text),s.a.createElement("img",{src:this.state.img,alt:"You are such a winner!"}))}}]),t}(s.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"winner"},s.a.createElement("p",null,"Sorry, You Lose"))}}]),t}(s.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Unwinnable"},s.a.createElement("p",null,"This Game has become Unwinnable. Although you cannot win, you may still continue playing to get a high score."))}}]),t}(s.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"game_over"},"won"===this.props.gameProgress&&s.a.createElement(h,null),"lost"===this.props.gameProgress&&s.a.createElement(y,null),"can't win"===this.props.gameProgress&&s.a.createElement(v,null))}}]),t}(s.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"update_holder"},this.props.messages.map(function(t){return s.a.createElement("div",{className:"update flex"},s.a.createElement("p",{className:"message"},t)," ",s.a.createElement("button",{className:"update_button",onClick:function(t){return e.props.handleClick(t.target.parentNode)}},"Okay"))}))}}]),t}(s.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.playedCards.filter(function(e){return e}),t=Math.max.apply(Math,e.filter(function(e){return"black"===e.color}).map(function(e){return e.number}));t===-1/0&&(t=0);var a=Math.max.apply(Math,e.filter(function(e){return"blue"===e.color}).map(function(e){return e.number}));a===-1/0&&(a=0);var n=Math.max.apply(Math,e.filter(function(e){return"orange"===e.color}).map(function(e){return e.number}));n===-1/0&&(n=0);var r=Math.max.apply(Math,e.filter(function(e){return"red"===e.color}).map(function(e){return e.number}));r===-1/0&&(r=0);var l=Math.max.apply(Math,e.filter(function(e){return"white"===e.color}).map(function(e){return e.number}));return l===-1/0&&(l=0),s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"playPile black"},s.a.createElement("h3",null,"Black"),s.a.createElement("p",null,t)),s.a.createElement("div",{className:"playPile blue"},s.a.createElement("h3",null,"Blue"),s.a.createElement("p",null,a)),s.a.createElement("div",{className:"playPile orange"},s.a.createElement("h3",null,"Orange"),s.a.createElement("p",null,n)),s.a.createElement("div",{className:"playPile red"},s.a.createElement("h3",null,"Red"),s.a.createElement("p",null,r)),s.a.createElement("div",{className:"playPile white"},s.a.createElement("h3",null,"White"),s.a.createElement("p",null,l)))}}]),t}(s.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){setInterval(this.props.update,5e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"scoreboard flex"},s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("h2",null,"Lives Left:"),s.a.createElement("h3",null,this.props.game.livesLeft)),s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("h2",null,"Hints Left:"),s.a.createElement("h3",null,this.props.game.hintsLeft)),s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("h2",null,"Score:"),s.a.createElement("h3",null,this.props.game.score)),s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("h2",null,"Deck Left:"),s.a.createElement("h3",null,this.props.deckLeft)))}}]),t}(s.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"teammatesCard "+this.props.card.color},s.a.createElement("h4",{className:"card_number"},this.props.card.number),s.a.createElement("h3",{className:"card_color"},this.props.card.color))}}]),t}(s.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="";return this.props.player.active&&(t="active"),s.a.createElement("div",{className:"player",onClick:function(){return e.props.handleClick(e.props.index)}},s.a.createElement("div",{className:"name ".concat(t)},s.a.createElement("p",null,this.props.player.name)),s.a.createElement("div",{className:"teamatesHand"},this.props.player.hand.filter(function(e){return null!==e}).map(function(e,t){return s.a.createElement(O,{key:t,card:e})})))}}]),t}(s.a.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"teammates_hint_card"},s.a.createElement("h3",null,"Card ",this.props.index),s.a.createElement("div",{className:""},s.a.createElement("h4",null,"Hints Given"),this.props.card.hints.map(function(e){return s.a.createElement("p",null,e)})))}}]),t}(s.a.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={seehints:!0,playerIndex:1},a.changePlayer=a.changePlayer.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"changePlayer",value:function(e){console.log("Click Event Index:",e),e===this.state.playerIndex?this.setState({seehints:!this.state.seehints}):this.setState({playerIndex:e,seehints:!0})}},{key:"render",value:function(){var e=this,t=this.props.players.filter(function(t){return t.name!==e.props.userName}),a=t[this.state.playerIndex];return s.a.createElement("div",null,s.a.createElement("div",{id:"teamateContainer",className:"flex"},t.map(function(t,a){return s.a.createElement(j,{handleClick:e.changePlayer,key:t.id,index:a,player:t})})),this.state.seehints&&a&&s.a.createElement("p",null,a.name),s.a.createElement("div",{className:"flex"},this.state.seehints&&a&&a.hand.map(function(e,t){if(e)return s.a.createElement(C,{key:t,card:e,index:t+1})})))}}]),t}(s.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card"},s.a.createElement("h3",null,"Card ",this.props.index),s.a.createElement("div",{className:"notes"},s.a.createElement("h4",null,"Hints Given"),this.props.card.hints.map(function(e){return s.a.createElement("p",null,e)})),s.a.createElement("div",{className:"personal notes"},s.a.createElement("h4",null,"Personal Notes"),s.a.createElement("div",{contentEditable:"true",className:"player_notes"})))}}]),t}(s.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.players.filter(function(t){return t.name===e.props.userName});return s.a.createElement("div",{id:"cardHolder",className:"card-holder flex"},t[0].hand.filter(function(e){return null!==e}).map(function(e,t){return s.a.createElement(k,{key:t,index:t+1,card:e})}))}}]),t}(s.a.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"howManyPlayers",className:this.props.class},s.a.createElement("h2",null,"How Many Players?"),s.a.createElement("div",null,s.a.createElement("select",{id:"select"},s.a.createElement("option",{value:""},"Select"),s.a.createElement("option",{value:"2"},"Two"),s.a.createElement("option",{value:"3"},"Three"),s.a.createElement("option",{value:"4"},"Four"),s.a.createElement("option",{value:"5"},"Five")),s.a.createElement("input",{type:"text",id:"nameInput",placeholder:"Type in Your Name HERE"})),s.a.createElement("button",{id:"startGame",onClick:this.props.clickHandler},"Start Game"))}}]),t}(s.a.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("div",{className:"center"},s.a.createElement("button",{id:"newGame",onClick:this.props.hide},"New Game")),s.a.createElement("div",{className:"center"},s.a.createElement("h3",null,"OR Join a Game")),s.a.createElement("div",{className:"vertical_flex"},s.a.createElement("input",{id:"name_input",className:"center",type:"text",name:"JoinNameInput",placeholder:"Type Name Here"}),s.a.createElement("input",{id:"gameId_input",className:"center",type:"text",name:"GameId",placeholder:"Type Game Id Here"}),s.a.createElement("button",{id:"joinGame",className:"center",onClick:this.props.handleJoinGame},"Join Game")))}}]),t}(s.a.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={hide:!0},a.toggleHide=a.toggleHide.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggleHide",value:function(){this.setState({hide:!1})}},{key:"render",value:function(){return s.a.createElement("div",{id:"game-init",className:"game-init"},this.state.hide&&s.a.createElement(L,{hide:this.toggleHide,handleJoinGame:this.props.joingame}),!this.state.hide&&s.a.createElement(_,{class:this.state.NewGameClass,clickHandler:this.props.newgame}))}}]),t}(s.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Pick the Card to Discard"),s.a.createElement("select",{id:"discard_option"},this.props.cards.map(function(e,t){return s.a.createElement("option",{value:t},"Card ",t+1)})),s.a.createElement("button",{id:"discard_card_button",onClick:this.props.handleEvent},"Submit"))}}]),t}(s.a.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"flex"},s.a.createElement("div",null,s.a.createElement("h3",null,"Pick a Hint"),s.a.createElement("select",{id:"hint_options"},s.a.createElement("option",{value:"black"},"Black"),s.a.createElement("option",{value:"blue"},"Blue"),s.a.createElement("option",{value:"orange"},"Orange"),s.a.createElement("option",{value:"red"},"Red"),s.a.createElement("option",{value:"white"},"White"),s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"))),s.a.createElement("div",null,s.a.createElement("h3",null,"Pick a Player"),s.a.createElement("select",{id:"player"},this.props.players.map(function(e){return s.a.createElement("option",{value:e.name},e.name)}))),s.a.createElement("button",{onClick:this.props.giveHint},"Submit"))}}]),t}(s.a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Pick the Card to Play"),s.a.createElement("select",{id:"playcard_option"},this.props.cards.map(function(e,t){return s.a.createElement("option",{value:t},"Card ",t+1)})),s.a.createElement("button",{id:"play_card_button",onClick:this.props.playCard},"Submit"))}}]),t}(s.a.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).showOptions=a.showOptions.bind(Object(m.a)(Object(m.a)(a))),a.state={give_hint:!1,discard_card:!1,play_card:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"showOptions",value:function(e){console.log(e.target.id);var t=e.target.id;"give_hint"===t&&this.setState({give_hint:!this.state.give_hint}),"discard_card"===t&&this.setState({discard_card:!this.state.discard_card}),"play_card"===t&&this.setState({play_card:!this.state.play_card})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"flex"},!this.state.give_hint&&!this.state.play_card&&s.a.createElement("button",{id:"discard_card",onClick:function(t){return e.showOptions(t)}},"Discard Card"),this.state.discard_card&&s.a.createElement(x,{handleEvent:this.props.discard,cards:this.props.players[0].hand}),!this.state.discard_card&&!this.state.play_card&&s.a.createElement("button",{id:"give_hint",onClick:function(t){return e.showOptions(t)}},"Give Hint"),this.state.give_hint&&this.props.hints&&s.a.createElement(H,{giveHint:this.props.giveHint,players:this.props.players}),!this.state.give_hint&&!this.state.discard_card&&s.a.createElement("button",{id:"play_card",onClick:function(t){return e.showOptions(t)}},"Play Card"),this.state.play_card&&s.a.createElement(G,{playCard:this.props.playCard,cards:this.props.players[0].hand}))}}]),t}(s.a.Component),M=a(7),S=a.n(M),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={id:null,score:0,dateCreated:null,hintsLeft:0,livesLeft:0,playingDeck:[],discardedCards:[],playedCards:[],players:[{name:"Jase Kraft",active:!1}],userName:"Jase Kraft",startGameClass:"game-init",gameClass:!1,previousPlays:[],gameOver:!1,gameProgress:"starting"},a.startNewGame=a.startNewGame.bind(Object(m.a)(Object(m.a)(a))),a.setUserName=a.setUserName.bind(Object(m.a)(Object(m.a)(a))),a.joinGame=a.joinGame.bind(Object(m.a)(Object(m.a)(a))),a.discardCard=a.discardCard.bind(Object(m.a)(Object(m.a)(a))),a.giveHint=a.giveHint.bind(Object(m.a)(Object(m.a)(a))),a.playCard=a.playCard.bind(Object(m.a)(Object(m.a)(a))),a.getUpdate=a.getUpdate.bind(Object(m.a)(Object(m.a)(a))),a.toggleHide=a.toggleHide.bind(Object(m.a)(Object(m.a)(a))),a.showPlayerOrder=a.showPlayerOrder.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"setUserName",value:function(e){this.setState({userName:e})}},{key:"startNewGame",value:function(){var e=this,t=document.getElementById("nameInput"),a=document.getElementById("select"),n=new XMLHttpRequest,s="https://puddle-catcher.glitch.me/newgame/";s+=a.value,s+="?name="+t.value,n.responseType="json",n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE){console.log(n.response);var a=n.response;console.log(typeof a),e.setState({userName:t.value,startGameClass:"hide",gameClass:!0,id:n.response.tableIds.gameId,score:n.response.score,hintsLeft:n.response.hintsLeft,livesLeft:n.response.livesLeft,playingDeck:n.response.playingDeck.filter(function(e){return null!==e}),discardedCards:n.response.discardedCards.filter(function(e){return null!==e}),playedCards:n.response.playedCards.filter(function(e){return null!==e}),players:n.response.players,previousPlays:n.response.messages})}},n.open("GET",s),n.send()}},{key:"joinGame",value:function(){var e=this;console.log("Join Game");var t=document.getElementById("gameId_input"),a=document.getElementById("name_input"),n=new XMLHttpRequest,s="https://puddle-catcher.glitch.me/joingame/";s+=t.value,s+="?name="+a.value,console.log(s),n.responseType="json",n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE){if(console.log(n.response),"Name Not Found in the Game!"===n.response.message)return void alert(n.response.message);e.setState({userName:a.value,startGameClass:"hide",gameClass:!0,id:n.response.id,score:n.response.score,hintsLeft:n.response.hintsLeft,livesLeft:n.response.livesLeft,playingDeck:n.response.playingDeck.filter(function(e){return null!==e}),discardedCards:n.response.discardedCards.filter(function(e){return null!==e}),playedCards:n.response.playedCards.filter(function(e){return null!==e}),players:S.a.reorderPlayers(n.response.players,a.value),previousPlays:n.response.messages})}},n.open("GET",s),n.send()}},{key:"discardCard",value:function(){var e=this,t=document.getElementById("discard_option").value;console.log("discard Card Index Value",t);var a=new XMLHttpRequest,n="https://puddle-catcher.glitch.me/game/";n+=this.state.id,n+="/"+this.state.userName,n+="/discard?cardIndex=",n+=t,console.log(n),a.responseType="json",a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(console.log(a.response),e.setState({id:a.response.id,score:a.response.score,hintsLeft:a.response.hintsLeft,livesLeft:a.response.livesLeft,playingDeck:a.response.playingDeck,discardedCards:a.response.discardedCards,playedCards:a.response.playedCards,players:S.a.reorderPlayers(a.response.players,e.state.userName),previousPlays:a.response.messages}))},a.open("GET",n),a.send(),S.a.removePersonalNotes(t)}},{key:"playCard",value:function(){var e=this,t=document.getElementById("playcard_option").value;console.log("PlayCard Index Value",t);var a=new XMLHttpRequest,n="https://puddle-catcher.glitch.me/game/";n+=this.state.id,n+="/"+this.state.userName,n+="/playcard?cardIndex=",n+=t,console.log(n),a.responseType="json",a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(console.log(a.response),e.setState({id:a.response.id,score:a.response.score,hintsLeft:a.response.hintsLeft,livesLeft:a.response.livesLeft,playingDeck:a.response.playingDeck,discardedCards:a.response.discardedCards,playedCards:a.response.playedCards,players:S.a.reorderPlayers(a.response.players,e.state.userName),previousPlays:a.response.messages}))},a.open("GET",n),a.send(),S.a.removePersonalNotes(t)}},{key:"giveHint",value:function(){var e=this,t=document.getElementById("player"),a=document.getElementById("hint_options"),n=new XMLHttpRequest,s="https://puddle-catcher.glitch.me/game/";s+=this.state.id,s+="/"+this.state.userName,s+="/givehint?player=",s+=t.value,s+="&hint=",s+=a.value,console.log(s),n.responseType="json",n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(console.log(n.response),e.setState({id:n.response.id,score:n.response.score,hintsLeft:n.response.hintsLeft,livesLeft:n.response.livesLeft,playingDeck:n.response.playingDeck,discardedCards:n.response.discardedCards,playedCards:n.response.playedCards,players:S.a.reorderPlayers(n.response.players,e.state.userName),previousPlays:n.response.messages}))},n.open("GET",s),n.send()}},{key:"getUpdate",value:function(){var e=this,t=new XMLHttpRequest,a="https://puddle-catcher.glitch.me/game/";a+=this.state.id,a+="/"+this.state.userName,t.responseType="json",t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){console.log("Response:",t.response);var a=t.response;e.setState({startGameClass:"hide",gameClass:!0,id:a.id,score:a.score,hintsLeft:a.hintsLeft,livesLeft:a.livesLeft,playingDeck:a.playingDeck,discardedCards:a.discardedCards,playedCards:a.playedCards,players:S.a.reorderPlayers(a.players,e.state.userName),previousPlays:a.messages,gameProgress:a.gameProgress,gameOver:"lost"===a.gameProgress||"won"===a.gameProgress})}},t.open("GET",a),t.send()}},{key:"toggleHide",value:function(e){console.log("Button Clicked",e),e.classList.add("hide")}},{key:"showPlayerOrder",value:function(){alert("Player Order:\n      ".concat(this.state.players.map(function(e){return e.name+"  =>  "}),"\n    "))}},{key:"render",value:function(){for(var e=this,t=!0,a=0;a<this.state.players.length;a++)this.state.players[a].name||(t=!1);var n=this.state.players.findIndex(function(t){return t.name===e.state.userName});return this.state.players[n]&&(this.state.players[n].active||(t=!1)),console.log("current state",this.state),s.a.createElement("div",{className:"game-container"},this.state.gameClass&&s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"game_id"},"Game Id = ",this.state.id),s.a.createElement("div",{className:"help",onClick:this.showPlayerOrder},"?")),!this.state.gameClass&&s.a.createElement(P,{joingame:this.joinGame,newgame:this.startNewGame}),this.state.gameClass&&t&&!this.state.gameOver&&s.a.createElement(I,{playCard:this.playCard,giveHint:this.giveHint,hints:this.state.hintsLeft,discard:this.discardCard,players:this.state.players.filter(function(t){return t.name!==e.state.userName}),userName:this.state.userName}),s.a.createElement(f,{playByPlay:this.state.messages,gameProgress:this.state.gameProgress}),this.state.gameClass&&s.a.createElement(E,{deckLeft:this.state.playingDeck.length,game:this.state,update:this.getUpdate}),this.state.gameClass&&!this.state.gameOver&&s.a.createElement(g,{messages:this.state.previousPlays,handleClick:this.toggleHide}),this.state.gameClass&&s.a.createElement(N,{players:this.state.players,userName:this.state.userName}),this.state.gameClass&&s.a.createElement(w,{players:this.state.players,userName:this.state.userName}),this.state.gameClass&&s.a.createElement(b,{playedCards:this.state.playedCards}))}}]),t}(s.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null),s.a.createElement(D,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t){var a={reorderPlayers:function(e,t){var a=e.findIndex(function(e){return e.name===t});return e.splice(a).concat(e)},removePersonalNotes:function(e){var t=document.getElementsByClassName("player_notes"),a=t.item(e);console.log("HTML Collection",t),console.log("Element",a),a.innerHTML=""}};e.exports=a}},[[10,2,1]]]);
//# sourceMappingURL=main.7a46a9de.chunk.js.map