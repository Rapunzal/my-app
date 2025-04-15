import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <button className="btn" onClick={handleIncrement}>
        +
      </button>
      Count: {count}
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default App;
