function ListofIndianPlayers({ players }) {
  return (
    <div>
      <h3>List of Indian Players Merged</h3>

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofIndianPlayers;