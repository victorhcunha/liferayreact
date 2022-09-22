import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>
    </div>
  );
}

export default App;
