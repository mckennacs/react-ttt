/* eslint-disable react/react-in-jsx-scope */
export default function GameBoard({ onSelectSquare, board }) {
  return (
      <ol id="game-board">
        {board.map((row, rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  {/* Disables button if it already contains playerSymbol, ie not null */}
                  <button 
                  onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
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