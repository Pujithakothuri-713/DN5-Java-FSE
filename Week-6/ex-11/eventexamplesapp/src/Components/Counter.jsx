import { useState } from "react";

function Counter() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to increase the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to display Hello message
  const sayHello = () => {
    alert("Hello! Counter has been incremented.");
  };

  // Function that calls multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Function with argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={decrement}>
        Decrement
      </button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Click on me
      </button>
    </div>
  );
}

export default Counter; 