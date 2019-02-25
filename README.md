# Welcome to Hanabi! 
To play the game and view instructions please visit: 
https://jase-k.github.io/Hanabi_Game/

## Built With:
-React.js

# Components: 

## game/:

### game:

This component contains the main state of the game and is holds most of the 
logic for the game. It organizes the rest of the game components. Its function
`getUpdate()` calls the api game server to get the latest update of the game. This
function is designed to be called on a regular interval or if using websockets, it
should be called after everytime a player plays his/her turn. 

`playCard(), discardCard(), giveHint()` takes care of all the possible plays during
a player's turn. 

`startNewGame()` adds a new game with default settings to the game server's database.

`joinGame()` adds a player to a current game in the game server's database. 

### gameover:

This component gets passed the current game Progress and displays a message if the
`gameProgress === 'won' || gameProgess === 'lost' || gameProgess === "can't win"`. 

gameover.js displays one of its children components based on the props passed from 
game.js. 

winner.js makes a call to the game server to retrieve a random winning message and gif. 

### history:

This component displays all the play-by-play messages from the game object. 

### play: 

This component displays all the options of play to the active player. It makes api 
calls to the game server based on the user choice. These calls update the game and
return an updated game object for that player. `getUpdate()` should then be called
for all other players to see the updated game. 

After the user chooses a play option and submits, the play options dissappear until
the his/her next turn

### playedcards:

This component displays the played cards.

### scoreboard:

This component holds the current Lives Left, Hints Left, Score, and the number of 
cards left in the deck. 

### teammates:

This component displays the user's teammates cards. If the teammate's `div` is clicked
the `hints` array for their cards are shown below the teammates hand `div`. This 
way the user can see what hints have been given to each teammate. 

### user:

This component displays the current `hints` arrays for the user's cards. It also 
has a section for the user to keep personal notes that will not be shown to the 
other teammates

## start/

### first_step

This component is displayed before a game is started. It helps users navigate to 
start a new game, or join an existing game. 


