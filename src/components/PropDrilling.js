import React, { useState } from "react";

const PropDrilling = () => {
  const [state, setState] = useState("Hello");
  const handleStateChange = () => {
    setState("Changed when clicked");
  };

  return (
    <div>
      <Child state={state} handleStateChange={handleStateChange} />
    </div>
  );
};
const Child = ({ state, handleStateChange }) => {
  return <Grandchild state={state} handleStateChange={handleStateChange} />;
};

const Grandchild = ({ state, handleStateChange }) => {
  return (
    <div>
      <p>{state}</p>
      <button onClick={handleStateChange}> change word</button>
    </div>
  );
};

export default PropDrilling;
