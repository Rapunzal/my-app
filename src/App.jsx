import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      Count: {count}
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default App;
