/*Create a `Timer` component that uses `useEffect` to update 
the time every second.
Display this component in App.jsx.

*/
import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h5>current Time: {time}</h5>
    </div>
  );
}

export default Timer;
