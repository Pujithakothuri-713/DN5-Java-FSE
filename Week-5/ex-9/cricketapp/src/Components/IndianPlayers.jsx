import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

function IndianPlayers() {

  const IndianTeam = [
    "Sachin",
    "Sehwag",
    "Dhoni",
    "Virat",
    "Rohit",
    "Raina"
  ];

  // Destructuring
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  const oddPlayers = [first, third, fifth];
  const evenPlayers = [second, fourth, sixth];

  // Two arrays
  const T20Players = ["Surya", "Hardik", "Bumrah"];

  const RanjiPlayers = ["Pujara", "Rahane", "Iyer"];

  // Spread Operator
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>

      <OddPlayers players={oddPlayers} />

      <br />

      <EvenPlayers players={evenPlayers} />

      <br />

      <ListofIndianPlayers players={mergedPlayers} />

    </div>
  );
}

export default IndianPlayers;