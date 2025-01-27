import React, { useState } from "react";
import data from "../data";
console.log(data);

const Counter = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    setPeople([]);
  };
  const reloadList = () => {
    setPeople(data);
  };
  const deletePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <section>
      <p>List of my friends</p>

      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <span key={id}>
              <li>{name}</li>
              <button onClick={() => deletePerson(id)}>delete</button>
            </span>
          );
        })}
      </ul>
      <button onClick={clearList}>clear</button>
      <button onClick={reloadList}>reload</button>
    </section>
  );
};

export default Counter;
