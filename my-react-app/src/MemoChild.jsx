import React from "react";

function MemoChild({ onClick }) {
  console.log("MemoChild rendered");

  return (
    <div>
      <button onClick={onClick}>Click Memorized Handlers</button>
    </div>
  );
}
export default React.memo(MemoChild);
