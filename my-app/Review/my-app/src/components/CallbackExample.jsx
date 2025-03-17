import React, { useState } from "react";

function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello!")}>
      Send Data to Parent
    </button>
  );
}

export default function CallbackExample() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div className="content">
      <h2>Callback Example</h2>
      <p>Message: {message}</p>
      <Child sendData={handleDataFromChild} />
    </div>
  );
}
