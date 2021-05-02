interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
  return (
    <div>
      <h1>
        {name && `Player ${name} won the game`}
        {!name && "It's a tie "}
      </h1>
      <button onClick={restart}>Restart</button>
    </div>
  );
};
export default Finished;
