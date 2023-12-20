import { useState } from "react";
import React from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


// Helper function, outside component
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  // List of turns, can be used for log
  const [gameTurns, setGameTurns] = useState([]);
  // Below: previous method for tracking players, but redundant due to above state
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  // Derived state:
  // Gameboard 
  let gameBoard = initialGameBoard;

  // Uses for loop to get values of turns array
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row]
    const secondSquareSymbol
    const thirdSquareSymbol
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    // Object to store turn info: square/col, player and player symbol
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      // updatedTurns array, copy of prevTurns
      // First item in array is always latest move
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,
      ];
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
          board={gameBoard}
        />
      </div>
      {/* TODO: Update Log */}
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
