import React from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


export default function GameBoard({ onSelectSquare, turns }) {

  // Derived state:
  // Gameboard 
  let gameBoard = initialGameBoard;

  // Uses for loop to get values of turns array
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  
  // const [gameBoard, setGameBoard] =  useState(initialGameBoard);

  // Objects and arrays (also objects) are reference values in JS
  // You should therefore not mutate them directly - instead create a (deep) copy first!
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

    return (
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {/* Disables button if it already contains playerSymbol, ie not null */}
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
                ))}
            </ol>
        </li>
        ))}
    </ol>
  );
} 