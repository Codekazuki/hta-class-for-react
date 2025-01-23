import React, { useState } from "react";
import data from "../data";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [trial, setTrial] = useState();
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };
  console.log(data);

  return (
    <section>
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
      {data.map((el, index) => (
        <p key={index}>{el.age}</p>
      ))}
    </section>
  );
};

export default Counter;
