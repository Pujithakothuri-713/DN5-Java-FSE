function ScoreBelow70({ players }) {

  const playersBelow70 = players.filter(
    (player) => player.score <= 70
  );

  return (
    <div>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBelow70;