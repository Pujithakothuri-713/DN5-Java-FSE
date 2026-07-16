import officeImage from "./assets/office.jpg";

function App() {
  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };
  return (
  <div>

    <h1>Office Space, at Affordable Range</h1>

    <img
      src={officeImage}
      alt="Office Space"
      width="300"
    />

    <h2>Name: {office.name}</h2>

    <h3>Rent: Rs. {office.rent}</h3>

    <h3>Address: {office.address}</h3>

  </div>
);
}

export default App;