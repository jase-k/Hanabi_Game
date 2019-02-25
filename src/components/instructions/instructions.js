import React from 'react';

export default class Instructions extends React.Component {
  render(){
    return(
      <div id = "instructions">
        <h3>Instructions</h3>
          <h4>Objective:</h4>
            <p>This is a cooperative team gave where communication is key.
              Intuition is key. And above all else, the ability to think like your teammates is key.
              The objective of this card game is to successfully play 25 of the 50 card deck before
              running out of lives and before the deck runs out. Players must start and finish 5 piles
              (1 black, 1 blue, 1 orange, 1 red, 1 white) of cards by playing the cards in order 1-2-3-4-5.</p>
         <h4>Set-Up:</h4>
           <p>All players will be dealt 4 or 5 cards which will be considered their hand.
           (in a 2-3 player game each player gets 5 cards, in a 4-5 player game each player gets 4 cards)
           Players will not be able to see their own hand, but all of their teammates hand will be visible.
           The deck will have the rest of the 50 cards, the hint counter will start at 8 and the life counter
           will start at 3. </p>
        <h4>Your Turn</h4>
            <p>On your turn three options will show up for you to either
            a.) play a card, b.) discard a card, or c.) give a hint to another player. You play a card when you think
            you have a card that plays. If the card you pick to play is a playable card, your score will increase by one
            and you will be dealt a new card in place of the one you just played. If you discard a card you will gain a hint back.
            If you give a hint, the hint counter will reduce by one and it will end your turn.  </p>
          <h5>A.) Playing a Card</h5>
            <p>To play a card click the ‘play card’ button at the top of your screen.
            Then select the card that you want to play (use the select options at the top of the screen).
            Once you have selected the card you want to play, hit submit.
            </p>
            <p>If the card plays you will see a message showing success and the card will be added to the
            piles at the bottom of the screen. If the card does not play it will be added to the discard
            pile and your team will lose a life.
            </p>
         <h5>B.) Discard a Card</h5>
            <p>To discard a card, click the ‘discard’ button at the top of your screen.
            Then select the card that you want to discard (use the select options at the top of the screen).
            Once you have selected the card you want to discard, hit submit. </p>
            <p>After you discard the game will send a message to all players telling which card you discarded.
            If you discard a card that made the game unwinnable, you will see a message at the top of the
            screen that tells you the game is unwinnable but you may continue for a high score.
            </p>
            <p>
            A game becomes unwinnable if you discard any color 5, if you discard all of one card type (two black 3’s),
            or if you discard too many cards.
            </p>
        <h5>C.) Giving a Hint</h5>
          <p>To give a teammate a hint, click the ‘give hint’ button at the top of your screen.
          Then select the player you want to give a hint and the hint you want to give. Once you have selected the
          hint and player you want hit submit.
          </p>
          <p>
          Hints will be automatically added to your teammates cards. They will see which cards that MATCH the
          hint you gave and they will see which  cards DO NOT MATCH the hint you game. (e.g. Hint: “Red”. The player
          will see “RED” on all of his red cards and “Not Red” on all of his non-red cards)
          </p>
          <p>
          You can always keep track of what your teammates know, by clicking their hand.
          </p>
      <h4>Ending the Game</h4>
        <h5>Winning the Game</h5>
          <p>You Immediately win the game once the score counter hits 25.</p>
        <h5>Losing the Game</h5>
          <p>
          The game ends after a player has to draw a card and the playing deck is 0.
          (e.g. if the deck is at 0 you may still give hints, but the game will end once a player either
           plays a card or discards a card and attempts to draw)
           </p>
          <p>
          You immediately lose if the life counter hits 0.
          </p>
          <p>
          Your final score is the score when the game ends.
          </p>
      </div>
    )
  }
}
