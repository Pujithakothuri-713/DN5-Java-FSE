function EvenPlayers({ players }) {
  return (
    <div>
      <h3>Even Team Players</h3>

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default EvenPlayers;