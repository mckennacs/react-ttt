import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  // List of turns, can be used for log
  // TODO: use gameTurns in Log.jsx
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    // Object to store turn info: square/col, player and player symbol
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      // Checks which player made last turn, then switches
      // Makes sure prevTurns has more than 0 entries (ie if a turn has been played)
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      };

      // updatedTurns array, copy of prevTurns
      // First item in array is always latest move
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
      ];
      // console.log('Player ' + updatedTurns[0].player, 'Square ' + updatedTurns[0].square.col, updatedTurns[0].square.row);
      return updatedTurns;
    });
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} 
          turns={gameTurns}
        />
      </div>
      {/* TODO: Update Log */}
      <Log gameTurn={updatedTurns} player={activePlayer} />
    </main>
  );
}

export default App;
