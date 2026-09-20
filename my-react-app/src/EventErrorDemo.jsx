import React, { useState } from "react";

function EventErrorDemo() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      throw new Error("Error inside event handler!");
    } catch (err) {
      setError(err.message); // Handle error manually
    }
  };

  return (
    <div>
      <h3>Event Handler Error Demo</h3>

      {error && <p style={{ color: "red" }}>Caught manually: {error}</p>}

      <button onClick={handleClick}>Trigger Event Error</button>
    </div>
  );
}

export default EventErrorDemo;
