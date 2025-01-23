import React, { useState } from "react";
import data from "../data";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [trial, setTrial] = useState(data);
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
  const clearList = () => {
    setTrial([]);
  };
  const removePerson = (id) => {
    setTrial(trial.filter((x) => x.id !== id));
  };
  const reloadList = () => {
    setTrial(data);
  };
  console.log(trial.length);
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
      {trial.map((el) => (
        <div
          key={el.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "green",
            padding: "1rem",
            margin: "4px",
            fontSize: "1rem",
          }}
        >
          <p>{el.name}</p>
          <button onClick={() => removePerson(el.id)}>remove</button>
        </div>
      ))}

      {trial.length < 1 ? (
        <button onClick={reloadList} style={{ backgroundColor: "green" }}>
          Reload List
        </button>
      ) : (
        <button onClick={clearList} style={{ backgroundColor: "red" }}>
          Clear List
        </button>
      )}
    </section>
  );
};

export default Counter;
