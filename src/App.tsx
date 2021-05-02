import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTickTackToe from "./hooks/useTicTacToe";
const App = () => {
  const game = useTickTackToe();
  return (
    <div className="App">
      {game.status === "created" && <Start handleStart={game.handleStart} />}
      {game.status === "finished" && (
        <Finished name={game.winner} restart={game.handleRestart} />
      )}
      {game.status === "started" && (
        <Game board={game.board} handleClick={game.handleClick} />
      )}
    </div>
  );
};
export default App;
