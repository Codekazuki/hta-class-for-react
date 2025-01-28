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
  const totalPeople = data.length;
  return (
    <section>
      {people.length ? (
        <p>
          List of my friends <br />
          we have {people.length} friends
        </p>
      ) : (
        <p>
          No friend again
          <br />
          click reload button to fetch friends again
        </p>
      )}

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
      {people.length ? <button onClick={clearList}>clear</button> : null}

      {people.length < totalPeople ? (
        <button onClick={reloadList}>reload</button>
      ) : null}
    </section>
  );
};

export default Counter;
