import Player from "./components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player name="PLAAYER 1" symbol="X"></Player>
          <Player name="PLAAYER 2" symbol="O"></Player>
        </ol>

        {/* Game board */}
      </div>  

      {/* Log */}
    </main>
  )
}

export default App
