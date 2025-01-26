import React, { useState } from "react";
import data from "../data";
import data2 from "../data2";

const Counter = () => {
  const [trial, setTrial] = useState(data);
  const [friend, setFriend] = useState(data2);

  const clearList = () => {
    setTrial([]);
  };
  const removePerson = (id) => {
    setTrial(trial.filter((x) => x.id !== id));
  };
  const reloadList = () => {
    setTrial(data);
  };
  const clearFriend = () => {
    setFriend([]);
  };

  const reloadFriend = () => {
    setFriend(data2);
  };
  const handleDeleteFriend = (name) => {
    setFriend(friend.filter((fre) => fre.name !== name));
  };

  return (
    <section>
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
      <div>
        <h1>My friend and their adresses</h1>
        <ul>
          <li>
            {friend.map((eachFriend) => {
              const { name, address, phoneNumber } = eachFriend;
              return (
                <div className='friend' key={name}>
                  <h1>{name}</h1>
                  <h3>{phoneNumber}</h3>
                  <p> {address}</p>
                  <button onClick={() => handleDeleteFriend(name)}>
                    unfriend
                  </button>
                </div>
              );
            })}
          </li>
        </ul>
        <button
          style={{ backgroundColor: "indigo", color: "white" }}
          onClick={clearFriend}
        >
          Clear Friends
        </button>
        <button onClick={reloadFriend}>Reload Friends</button>
      </div>
    </section>
  );
};

export default Counter;
