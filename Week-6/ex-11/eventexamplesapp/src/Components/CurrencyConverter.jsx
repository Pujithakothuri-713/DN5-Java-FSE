import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = () => {
    const euro = (Number(amount) / 90).toFixed(2);

    alert(
      `Converting to ${currency}\nAmount = €${euro}`
    );
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>
        Currency Converter!!!
      </h1>

      <label>Amount:</label>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>Currency:</label>

      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CurrencyConverter;