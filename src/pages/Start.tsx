import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(players: string[]): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["", ""]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };
  return (
    <div>
      <h1>React Tic Tac Toe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player1">Player 1</label>
          <input
            type="text"
            value={players[0]}
            onInput={(e) => handleInput(e, 0)}
          />
        </div>
        <div>
          <label htmlFor="player2">Player 2</label>
          <input
            type="text"
            value={players[1]}
            onInput={(e) => handleInput(e, 1)}
          />
        </div>
        <div>
          <button type="submit" disabled={!canStart}>
            Start
          </button>
        </div>
      </form>
    </div>
  );
};
export default Start;
