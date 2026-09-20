import React, { useMemo, useState } from "react";

//The function simulates slow calculation

const computeFactorial = (n) => {
  return n <= 1 ? 1 : n * computeFactorial(n - 1);
};

function ExpensiveComponent() {
  //We store a number in the state do the user can change it
  //Changing this number will trigger the expansive calculation
  const [number, setNumber] = useState(1);
  //with useMemo expansive work unless "number" changes
  //it skips the expansive work unless "number" changes

  const memoizedValue = useMemo(() => {
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h5>Expansive calculaion</h5>

      <p>input number: {number}</p>
      <p>result: {memoizedValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </div>
  );
}
export default ExpensiveComponent;
