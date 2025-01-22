import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <p
        className={
          count === 0
            ? "grey "
            : count >= 1 && count <= 100
            ? "green"
            : count < 0
            ? "red"
            : "blue"
        }
      >
        {count}
      </p>
      <div>
        <button disabled={count > 4} onClick={handleIncrease}>
          increment
        </button>
        <button onClick={handleDecrease} disabled={count < 1}>
          decrement
        </button>
        <button onClick={handleDouble}>double</button>
        <button>division by 2</button>
        <button>square</button>
      </div>
    </div>
  );
};

export default Counter;
