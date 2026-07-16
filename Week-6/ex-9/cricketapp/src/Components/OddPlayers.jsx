function OddPlayers({ players }) {
  return (
    <div>
      <h3>Odd Team Players</h3>

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default OddPlayers;