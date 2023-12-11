import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="❌"/>
          <Player initialName="Player 2" symbol="⭕"/>
        </ol>
      </div>
    </main>
  );
}

export default App;
