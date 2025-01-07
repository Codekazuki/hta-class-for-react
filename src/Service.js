import React, { useState } from "react";

const Service = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  const handleReset = () => {
    setCount((c) => 0);
  };
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minus
        necessitatibus ea consectetur dicta non, rerum quae possimus,
        consequuntur impedit dolorem maxime numquam illo officia facilis. Libero
        quia ullam odit rerum cupiditate molestias ut aliquam harum, neque quo,
        deleniti dicta laborum dolores earum voluptatem!
      </p>
      <section>
        <h1 className={count > 1 ? "green" : "red"}>{count}</h1>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrease</button>
      </section>
    </div>
  );
};

export default Service;
